<?php

/**
 * Routes of the app.
 *
 *   _____
 *  /     \
 * |  o o  |
 * |   >   |
 * |  \_/  |
 *  \_____/
 *
 *
 * @sekoyaTech
 * @author SekoyaDigital
 */


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LeadController;


# route for render react application front-end.
Route::get('/', [HomeController::class, 'index'])->name('index');

# route for storage all leads in database.
Route::post("/lead/store", [LeadController::class, "store"])->name('lead.store');
