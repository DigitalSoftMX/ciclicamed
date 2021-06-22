<?php

namespace Database\Factories\Medical\Consult;

use App\Models\Medical\Consult\MedicalConsult;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalConsultFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = MedicalConsult::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $scheduled = Carbon::createFromTimestamp($this->faker->dateTimeThisYear()->getTimeStamp());
        return [
            'patient_id' => $this->faker->numberBetween(1, 5),
            'doctor_id' => $this->faker->numberBetween(1, 15),
            'created_by' => $this->faker->numberBetween(1, 15),
            'medicalconsultcategory_id' => $this->faker->numberBetween(1, 4),
            'medicalconsultstatus_id' => $this->faker->numberBetween(1, 5),
            'consult_reason' => $this->faker->text(200),
            'consult_schedule_start' => $scheduled,
            'consult_schedule_finish' => Carbon::createFromFormat('Y-m-d H:i:s', $scheduled)->addMinutes($this->faker->numberBetween(15, 60)),
            'consult_start_at' => $scheduled,
            'consult_finish_at' => Carbon::createFromFormat('Y-m-d H:i:s', $scheduled)->addMinutes($this->faker->numberBetween(0, 15)),
            'branch_id' => $this->faker->numberBetween(1, 5),
            'medicalspecialty_id' => $this->faker->numberBetween(1, 10),
            'checkup_id' => $this->faker->boolean(50) ? $this->faker->numberBetween(1, 6) : null,
            'updated_by' => $this->faker->numberBetween(1, 5),
            'update_note' => $this->faker->text(100),
        ];
    }
}
