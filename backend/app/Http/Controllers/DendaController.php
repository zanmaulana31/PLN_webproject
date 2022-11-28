<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Denda;

class DendaController extends Controller
{
    public function index(){

        return Denda::all();
    }

    public function store(Request $request){

        $table1 = Denda::create($request->all());
           
    }
}
