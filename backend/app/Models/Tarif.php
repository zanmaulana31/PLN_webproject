<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarif extends Model
{
    use HasFactory;

    protected $id="id_tarif";

    protected $table="tarif";

    protected $fillable=["daya", "tarifperkwh"];

    public $timestamps = false;
}
