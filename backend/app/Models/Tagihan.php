<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tagihan extends Model
{
    use HasFactory;

    protected $id="id_tagihan";

    protected $table="tagihan";

    protected $fillable=["id_penggunaan", "id_tarif", "id_denda", "tanggal_tagihan", "jml_daya_terpakai", "status"];

    public $timestamps = false;
}
