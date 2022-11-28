<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Penggunaan;

class PenggunaanController extends Controller
{
    public function index(){

        return Penggunaan::all();
    }

    public function store(Request $request){

        $table1 = Penggunaan::create($request->all());
           
    }
}
