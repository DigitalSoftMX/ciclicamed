<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Medical\Prescription\Medicament;
use App\Models\Product\Product;
use App\Models\Product\ProductCategory;
use App\Models\Product\ProductStatus;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getTestOrderProducts()
    {
        $imagenologia = ProductCategory::where('name', 'Imagenología')->first()->id;
        $laboratorio = ProductCategory::where('name', 'Laboratorio')->first()->id;
        $status = ProductStatus::where('name', 'Activo')->first()->id;
        $products = Product::where('productcategory_id', $imagenologia)
                            ->where('productstatus_id', $status)
                            ->orWhere('productcategory_id', $laboratorio)
                            ->where('productstatus_id', $status)
                            ->get();
        $products->load('orderAnnotations:product_id,annotation');
        return response()->json($products);
    }

    public function getMedicaments()
    {
        $status = ProductStatus::where('name', 'Activo')->first()->id;
        $medicaments = Medicament::all();
        return response()->json($medicaments);
    }

    public function getConsulta(Request $request)
    {
        return $this->getPaginateData($request, 'Consulta');
    }

    public function getCirugia(Request $request)
    {
        return $this->getPaginateData($request, 'Cirugía');
    }

    public function getHisteroscopia(Request $request)
    {
        return $this->getPaginateData($request, 'Histeroscopía');
    }

    public function getCiclica(Request $request)
    {
        return $this->getPaginateData($request, 'Cíclica');
    }

    public function getImagenologia(Request $request)
    {
        return $this->getPaginateData($request, 'Imagenología');
    }

    public function getLaboratorio(Request $request)
    {
        return $this->getPaginateData($request, 'Laboratorio');
    }

    public function getFarmacia(Request $request)
    {
        return $this->getPaginateData($request, 'Farmacia');
    }

    private function getPaginateData(Request $request, string $category)
    {
        $status = ProductStatus::where('name', 'Activo')->first()->id;
        $ciclica = ProductCategory::where('name', $category)->first()->id;
        $product = Product::where('productcategory_id', $ciclica)->where('productstatus_id', $status);

        $productCiclica = [];
        if($request->has('query'))
        {
            $query = $request->input('query');
            $productCiclica = $product->where('product_code', 'like', '%'.$query.'%')
                    ->orWhere('lans_code', 'like', '%'.$query.'%')
                    ->orWhere('name', 'like', '%'.$query.'%')
                    ->paginate();
        } else {
            $productCiclica = $product->paginate();
        }
        
        $response = [
            'pagination' => [
                'total' => $productCiclica->total(),
                'per_page' => $productCiclica->perPage(),
                'current_page' => $productCiclica->currentPage(),
                'last_page' => $productCiclica->lastPage(),
                'from' => $productCiclica->firstItem(),
                'to' => $productCiclica->lastItem()
            ],
            'data' => $productCiclica->load('status', 'category')
        ];

        return response()->json($response);
    }
}
