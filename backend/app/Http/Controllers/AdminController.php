<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{
    public function index(){

        return Admin::all();
    }

    public function store(Request $request){

        $table1 = Admin::create($request->all());
           
    }
}
