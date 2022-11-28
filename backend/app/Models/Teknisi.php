<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teknisi extends Model
{
    use HasFactory;

    protected $id="id_teknisi";

    protected $table="teknisi";

    protected $fillable=["username", "password", "nama_admin", "type_user"];

    public $timestamps = false;
}
