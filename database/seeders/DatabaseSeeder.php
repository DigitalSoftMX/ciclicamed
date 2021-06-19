<?php

namespace Database\Seeders;

use App\Models\Branch\Branch;
use App\Models\Employee\Employee;
use App\Models\Employee\EmployeeCategory;
use App\Models\Employee\EmployeeDayOff;
use App\Models\Employee\EmployeeLicense;
use App\Models\Employee\EmployeeSchedule;
use App\Models\Employee\EmployeeStatus;
use App\Models\Medical\Attachment\MedicalAttachment;
use App\Models\Medical\Attachment\MedicalAttachmentFollowUp;
use App\Models\Medical\Attachment\MedicalAttachmentForm;
use App\Models\Medical\Consult\MedicalConsult;
use App\Models\Medical\Consult\MedicalConsultStatus;
use App\Models\Medical\Consult\MedicalConsultType;
use App\Models\Medical\History\MedicalHistory;
use App\Models\Medical\MedicalSpecialty;
use App\Models\Medical\Prescription\MedicalPrescription;
use App\Models\Medical\Prescription\Medicament;
use App\Models\Medical\Test\MedicalTest;
use App\Models\Medical\Test\MedicalTestOrder;
use App\Models\Medical\Test\MedicalTestOrderAnnotation;
use App\Models\Medical\Test\MedicalTestResult;
use App\Models\Medical\Test\MedicalTestSample;
use App\Models\Medical\Test\MedicalTestSampleStatus;
use App\Models\Medical\Test\MedicalTestStatus;
use App\Models\Patient\InvoiceData;
use App\Models\Patient\Patient;
use App\Models\Patient\Preregistration;
use App\Models\Payment\Payment;
use App\Models\Payment\PaymentDebt;
use App\Models\Payment\PaymentMethod;
use App\Models\Payment\PaymentStatus;
use App\Models\Product\Product;
use App\Models\Product\ProductCategory;
use App\Models\Product\ProductPayment;
use App\Models\Product\ProductStatus;
use App\Models\User\Role;
use App\Models\User\User;
use App\Models\User\UserCategory;
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

        UserStatus::factory(5)->create();
        UserCategory::factory(2)->create();
        User::factory(150)->create();
        Preregistration::factory(25)->create();
        Patient::factory(25)->create();
        InvoiceData::factory(5)->create();
        EmployeeCategory::factory(6)->create();
        EmployeeStatus::factory(2)->create();
        Employee::factory(100)->create();
        MedicalSpecialty::factory(10)->create();
        EmployeeLicense::factory(50)->create();
        Branch::factory(15)->create();
        EmployeeSchedule::factory(100)->create();
        EmployeeDayOff::factory(20)->create();
        MedicalConsultType::factory(5)->create();
        MedicalConsultStatus::factory(6)->create();
        MedicalConsult::factory(50)->create();
        MedicalAttachment::factory(100)->create();
        MedicalAttachmentFollowUp::factory(100)->create();
        MedicalHistory::factory(30)->create();
        Medicament::factory(50)->create();
        MedicalPrescription::factory(50)->create();
        MedicalTestStatus::factory(5)->create();
        MedicalTest::factory(25)->create();
        MedicalTestSample::factory(25)->create();
        MedicalTestResult::factory(25)->create();
        PaymentStatus::factory(4)->create();
        PaymentMethod::factory(3)->create();
        Payment::factory(50)->create();
        PaymentDebt::factory(100)->create();
        ProductStatus::factory(2)->create();
        ProductCategory::factory(7)->create();
        Product::factory(969)->create();
        ProductPayment::factory(100)->create();
        MedicalTestOrderAnnotation::factory(863)->create();
        MedicalTestOrder::factory(100)->create();
    }
}
