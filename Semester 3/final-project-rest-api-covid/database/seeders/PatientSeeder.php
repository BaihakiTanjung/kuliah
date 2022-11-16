<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Patient;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            [
                'name' => 'Baihaki',
                'phone' => '085122334432',
                'address' => 'Jl. Kebon Jeruk No. 1',
                'status' => 'Sembuh',
                'in_date_at' => '2021-11-16',
                'out_date_at' => '2021-11-18',
            ],
            [
                'name' => 'Ucup',
                'phone' => '085122334431',
                'address' => 'Jl. Kebon Jeruk No. 2',
                'status' => 'Positif',
                'in_date_at' => '2021-11-16',
                'out_date_at' => '2021-11-18',
            ],
            [
                'name' => 'Agus',
                'phone' => '085122334433',
                'address' => 'Jl. Kebon Jeruk No. 3',
                'status' => 'Meninggal',
                'in_date_at' => '2021-11-16',
                'out_date_at' => '2021-11-18',
            ]
        ];

        Patient::insert($data);
    }
}
