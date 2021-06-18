<?php

namespace App\Http\Controllers\Medical\Test;

use App\Models\Product\ProductCategory;

class LaboratorioTestController extends MedicalTestController
{
    protected function testCategory()
    {
        return ProductCategory::where('name', 'Laboratorio')->first()->id;
    }
}
