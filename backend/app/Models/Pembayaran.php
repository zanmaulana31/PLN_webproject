<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembayaran extends Model
{
    use HasFactory;

    protected $id="id_pembayaran";

    protected $table="pembayaran";

    protected $fillable=["id_tagihan", "tanggal_pembayaran", "bulan_bayar", "biaya_admin", "total_bayar", "id_admin"];

    public $timestamps = false;
}
