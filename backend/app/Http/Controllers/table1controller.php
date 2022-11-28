<?php

namespace App\Http\Controllers;

use App\Models\table1;
use Illuminate\Http\Request;

class table1controller extends Controller
{
    public function index(){

        return table1::all();
    }

    public function store(Request $request){

        $table1 = table1::create($request->all());
           
    }

}
