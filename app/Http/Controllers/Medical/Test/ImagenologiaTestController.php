<?php

namespace App\Http\Controllers\Medical\Test;

use App\Models\Product\ProductCategory;

class ImagenologiaTestController extends MedicalTestController
{
    protected function testCategory()
    {
        return ProductCategory::where('name', 'Imagenología')->first()->id;
    }
}
