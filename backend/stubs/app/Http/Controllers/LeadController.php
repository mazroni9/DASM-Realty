<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class LeadController extends Controller
{
    /**
     * Store a new lead
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $data = $request->validate([
                'name' => ['required', 'string', 'max:191'],
                'email' => ['required', 'email', 'max:191'],
                'phone' => ['nullable', 'string', 'max:191'],
                'type' => ['nullable', 'in:seller,buyer'],
                'message' => ['nullable', 'string', 'max:2000'],
            ]);

            $lead = Lead::create($data);

            Log::info('New lead created', ['lead_id' => $lead->id, 'email' => $lead->email]);

            return response()->json([
                'status' => 'success',
                'message' => 'Lead created successfully',
                'lead' => [
                    'id' => $lead->id,
                    'name' => $lead->name,
                    'email' => $lead->email,
                    'type' => $lead->type,
                ],
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            Log::error('Error creating lead', ['error' => $e->getMessage()]);

            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create lead. Please try again later.',
            ], 500);
        }
    }
}


