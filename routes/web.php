<?php

use App\Http\Controllers\Admin\AturanController;
use App\Http\Controllers\Admin\GejalaController;
use App\Http\Controllers\Admin\PengobatanController;
use App\Http\Controllers\Admin\PenyakitController;
use App\Http\Controllers\DataUjiController;
use App\Http\Controllers\DiagnosaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebGuestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WebGuestController::class, 'home'])->name('home');
Route::get('/informasi', [WebGuestController::class, 'informasi'])->name('guest.informasi');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::group(['prefix' => 'penyakit', 'as' => 'Penyakit.'], function () {
        Route::controller(PenyakitController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/tambah', 'create')->name('create');
            Route::get('/edit', 'edit')->name('edit');
            Route::get('/show', 'show')->name('show');
            Route::post('/store', 'store')->name('store');
            Route::post('/update', 'update')->name('update');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });
    });
    Route::group(['prefix' => 'gejala', 'as' => 'Gejala.'], function () {
        Route::controller(GejalaController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/tambah', 'create')->name('create');
            Route::get('/edit', 'edit')->name('edit');
            Route::get('/show', 'show')->name('show');
            Route::post('/store', 'store')->name('store');
            Route::put('/update', 'update')->name('update');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });
    });


    Route::group(['prefix' => 'pengobatan', 'as' => 'Pengobatan.'], function () {
        Route::controller(PengobatanController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/tambah', 'create')->name('create');
            Route::get('/edit', 'edit')->name('edit');
            Route::get('/show', 'show')->name('show');
            Route::post('/store', 'store')->name('store');
            Route::put('/update', 'update')->name('update');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });
    });

    // Router Aturan
    Route::group(['prefix' => 'aturan-diagnosa', 'as' => 'Aturan.'], function () {
        Route::controller(AturanController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/tambah', 'create')->name('create');
            Route::get('/edit', 'edit')->name('edit');
            Route::get('/show', 'show')->name('show');
            Route::post('/store', 'store')->name('store');
            Route::put('/update', 'update')->name('update');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });
    });


    // Router Aturan
    Route::group(['prefix' => 'test-diagnosa', 'as' => 'Test.'], function () {
        Route::controller(DataUjiController::class)->group(function () {
            Route::get('/', 'admin')->name('test');
            Route::get('/hasil', 'result')->name('result');
            Route::post('/hasil', 'store')->name('store');
        });
    });

    // Router Aturan
    Route::group(['prefix' => 'cf-diagnosa', 'as' => 'Diagnosa.'], function () {
        Route::controller(DiagnosaController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/show', 'show')->name('show');
            Route::delete('/destroy', 'destroy')->name('destroy');
        });
    });


});

Route::post('diagnosa/store', [DiagnosaController::class, 'store'])->name('Diagnosa.store');

require __DIR__.'/auth.php';
