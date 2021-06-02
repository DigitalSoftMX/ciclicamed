<?php

namespace Database\Factories\Product;

use App\Models\Product\ProductCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $row = 0;
        $categories = ['Consulta', 'Cirugía', 'Histeroscopía', 'Farmacia', 'Cíclica', 'Imagenología', 'Laboratorio'];
        return [
            'name' => $categories[$row++],
        ];
    }
}
