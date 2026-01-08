<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadController;

Route::get('/health', fn () => response()->json(['status' => 'ok']));

Route::post('/leads', [LeadController::class, 'store']);


