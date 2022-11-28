<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelanggan;

class PelangganController extends Controller
{
    public function index(){

        return Pelanggan::all();
    }

    public function store(Request $request){

        $table1 = Pelanggan::create($request->all());
           
    }
}
