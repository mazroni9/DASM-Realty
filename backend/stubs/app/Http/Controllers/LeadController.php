<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class LeadController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:191'],
            'email' => ['required', 'email', 'max:191'],
            'phone' => ['nullable', 'string', 'max:191'],
            'type' => ['nullable', 'in:seller,buyer'],
            'message' => ['nullable', 'string', 'max:2000'],
        ]);

        $lead = Lead::create($data);

        return response()->json([
            'status' => 'ok',
            'lead' => $lead,
        ], 201);
    }
}


