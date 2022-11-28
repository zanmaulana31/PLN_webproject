<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Denda extends Model
{
    use HasFactory;

    protected $id="id_denda";

    protected $table="denda";

    protected $fillable=["jumlah_denda"];

    public $timestamps = false;
}
