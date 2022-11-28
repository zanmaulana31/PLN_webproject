<?php

namespace App\Http\Controllers;
use App\Models\Tarif;

use Illuminate\Http\Request;

class Tarifcontroller extends Controller
{
    public function index(){

        return Tarif::all();
    }

    public function store(Request $request){

        $table1 = Tarif::create($request->all());
           
    }
}
