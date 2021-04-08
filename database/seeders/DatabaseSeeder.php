<?php

namespace Database\Seeders;

use App\Models\Branch\Branch;
use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeLicense;
use App\Models\Employee\EmployeeMedicalSpecialty;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\MedicalSpecialty;
use App\Models\Patient\InvoiceData;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
use App\Models\User\Role;
use App\Models\User\User;
use App\Models\User\UserStatus;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // Role::factory(5)->create();
        UserStatus::factory(5)->create();
        User::factory(5)->create();
        Preregistration::factory(5)->create();
        Patient::factory(5)->create();
        InvoiceData::factory(5)->create();
        EmployeeStatus::factory(5)->create();
        Employee::factory(5)->create();
        MedicalSpecialty::factory(5)->create();
        EmployeeLicense::factory(20)->create();
        Branch::factory(15)->create();
        EmployeeSchedule::factory(20)->create();
    }
}
