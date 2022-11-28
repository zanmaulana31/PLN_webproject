<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pembayaran;

class PembayaranController extends Controller
{
    public function index(){

        return Pembayaran::all();
    }

    public function store(Request $request){

        $table1 = Pembayaran::create($request->all());
           
    }
}
