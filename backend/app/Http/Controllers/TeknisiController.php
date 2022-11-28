<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teknisi;

class TeknisiController extends Controller
{
    public function index(){

        return Teknisi::all();
    }

    public function store(Request $request){

        $table1 = Teknisi::create($request->all());
           
    }
}
