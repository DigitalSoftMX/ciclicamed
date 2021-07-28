<?php

namespace App\Http\Controllers\Medical\Test;

use App\Http\Controllers\Controller;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Product\ProductCategory;
use Illuminate\Http\Request;

class MedicalTestController extends Controller
{

    protected function testCategory()
    {
        return ProductCategory::first()->id;
    }

    private function testData($name, $name2)
    {
        return MedicalTest::whereHas('status', function($query) use($name, $name2) {
            $query->where('name', $name)
            ->orWhere('name', $name2);
        });
    }

    public function getCreatedTests(Request $request)
    {
        return $this->pagination($this->testData('Estudio creado', null), $request);
    }

    public function getSampleTests(Request $request)
    {
        return $this->pagination($this->testData('Muestras recogidas', 'Estudio creado'), $request);
    }

    public function getCompletedTest(Request $request)
    {
        return $this->pagination($this->testData('Resultados creados', null), $request);
    }

    private function pagination($testData, $request)
    {
        $test = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $test = $testData
            ->where(function ($item) use ($query){
                $item->whereHas('products', function($items) use($query) {
                    $items->where('productcategory_id', $this->testCategory());
                })
                ->where('test_code', 'like', '%'.$query.'%')
                ->orWhereHas('products', function($items) use($query) {
                    $filter = $items->where('productcategory_id', $this->testCategory());
                    $filter->where(function($item) use($query){
                        $item->where('name', 'like', '%'.$query.'%')
                        ->orWhere('product_code', 'like', '%'.$query.'%')
                        ->orWhere('supplier_code', 'like', '%'.$query.'%');
                    });
                });
            })
            ->paginate();
        } else {
            $test = $testData->whereHas('products', function($items){
                $items->where('productcategory_id', $this->testCategory());
            })->paginate();
        }

        $response = [
            'pagination' => [
                'total' => $test->total(),
                'per_page' => $test->perPage(),
                'current_page' => $test->currentPage(),
                'last_page' => $test->lastPage(),
                'from' => $test->firstItem(),
                'to' => $test->lastItem()
            ],
            'data' => $test->load('order.product:id,name,product_code,supplier_code', 'order.product.orderAnnotations', 'patient', 'patient.user:email', 'consultScheduled:id,consult_reason')
        ];

        return response()->json($response);
    }
}
