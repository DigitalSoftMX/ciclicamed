<?php

namespace Database\Factories\Branch;

use App\Models\Branch\BranchStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class BranchStatusFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = BranchStatus::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $statuses = ['Abierto', 'Cerrado'];
        static $row = 0;
        return [
            'name' => $statuses[$row++]
        ];
    }
}
