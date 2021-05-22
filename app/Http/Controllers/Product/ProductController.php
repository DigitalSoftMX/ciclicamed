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
}
