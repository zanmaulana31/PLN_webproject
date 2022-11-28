<?php
use App\Http\Controllers\TagihanController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\PenggunaanController;
use App\Http\Controllers\DendaController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\TeknisiController;
use App\Http\Controllers\table1controller;
use App\Http\Controllers\Tarifcontroller;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
//tipe user form
Route::get('/table1', [table1controller::class, 'index']);
Route::post('/table1/tambah', [table1controller::class, 'store']);

//tarif form
Route::get('/tarif', [Tarifcontroller::class, 'index']);
Route::post('/tarif/tambah', [Tarifcontroller::class, 'store']);

//pelanggan table
Route::get('/pelanggan', [PelangganController::class, 'index']);
Route::post('/pelanggan/tambah', [PelangganController::class, 'store']);

//penggunaan form
Route::get('/penggunaan', [PenggunaanController::class, 'index']);
Route::post('/penggunaan/tambah', [PenggunaanController::class, 'store']);

//Pembayaran form
Route::get('/pembayaran', [PembayaranController::class, 'index']);
Route::post('/pembayaran/tambah', [PembayaranController::class, 'store']);

//Tagihan form
Route::get('/tagihan', [TagihanController::class, 'index']);
Route::post('/tagihan/tambah', [TagihanController::class, 'store']);

//teknisi form
Route::get('/teknisi', [TeknisiController::class, 'index']);
Route::post('/teknisi/tambah', [TeknisiController::class, 'store']);

//admin form
Route::get('/admin', [AdminController::class, 'index']);
Route::post('/admin/tambah', [AdminController::class, 'store']);

//Denda form
Route::get('/denda', [DendaController::class, 'index']);
Route::post('/denda/tambah', [DendaController::class, 'store']);
