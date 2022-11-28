<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penggunaan extends Model
{
    use HasFactory;

    protected $id="id_penggunaan";

    protected $table="penggunaan";

    protected $fillable=["bulan", "tahun", "meter_awal", "meter_akhir", "id_pelanggan"];

    public $timestamps = false;
}
