<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Helpers\BaseResponse;
use Illuminate\Support\Facades\Validator;

class PatientController extends Controller
{
    public function index()
    {
        // get all patients
        $patients = Patient::all();

        // data not found
        if (count($patients) == 0) {
            return BaseResponse::error('Data not found', 404);
        }

        // return response
        return BaseResponse::success($patients);
    }

    public function store(Request $request)
    {
        // validation
        $validateRequest = Validator::make($request->all(), [
            'name' => 'required|string',
            'phone' => 'required',
            'address' => 'required',
            'status' => 'required|in:Sembuh,Positif,Meninggal',
            'in_date_at' => 'required|date',
            'out_date_at' => 'required|date',
        ]);

        // validation if fails
        if ($validateRequest->fails()) {
            return BaseResponse::error($validateRequest->errors(), 400);
        }

        // create new patient
        $patient = Patient::create($request->all());

        // return response
        return BaseResponse::success($patient, 'Patient created successfully', 201);
    }

    public function show($id)
    {
        // get patient by id
        $patient = Patient::find($id);

        // data not found
        if (!$patient) {
            return BaseResponse::error('Data not found', 404);
        }

        // return response
        return BaseResponse::success($patient);
    }

    public function update(Request $request, $id)
    {

        // validation
        $validateRequest = Validator::make($request->all(), [
            'name' => 'required|string',
            'phone' => 'required',
            'address' => 'required',
            'status' => 'required|in:Sembuh,Positif,Meninggal',
            'in_date_at' => 'required|date',
            'out_date_at' => 'required|date',
        ]);

        // validation if fails
        if ($validateRequest->fails()) {
            return BaseResponse::error($validateRequest->errors(), 400);
        }

        // get patient by id
        $patient = Patient::find($id);

        // data not found
        if (!$patient) {
            return BaseResponse::error('Data not found', 404);
        }

        // update patient
        $patient->update($request->all());

        // return response
        return BaseResponse::success($patient, 'Patient updated successfully', 200);
    }

    public function destroy($id)
    {
        // get patient by id
        $patient = Patient::find($id);

        // data not found
        if (!$patient) {
            return BaseResponse::error('Data not found', 404);
        }

        // delete patient
        $patient->delete();

        // return response
        return BaseResponse::success(null, 'Patient deleted successfully', 200);
    }

    public function getPatientByName($name)
    {
        // get patient by name (like)
        $patient = Patient::where('name', 'like', '%' . $name . '%')->get();

        // data not found
        if (count($patient) == 0) {
            return BaseResponse::error('Data not found', 404);
        }

        // return response
        return BaseResponse::success($patient);
    }

    public function getPatientByStatus($status)
    {
        // get patient by status lower case
        $patient = Patient::where('status', strtolower($status))->get();

        // data not found
        if (count($patient) == 0) {
            return BaseResponse::error('Data not found', 404);
        }

        // return response
        return BaseResponse::success($patient);
    }
}
