<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    use HasFactory;

    protected $id="id_pelanggan";

    protected $table="pelanggan";

    protected $fillable=["nomor_kwh", "nama_pelanggan", "alamat", "type_user"];

    public $timestamps = false;
}
