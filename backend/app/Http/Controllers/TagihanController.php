<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tagihan;

class TagihanController extends Controller
{
    public function index(){

        return Tagihan::all();
    }

    public function store(Request $request){

        $table1 = Tagihan::create($request->all());
           
    }
}
