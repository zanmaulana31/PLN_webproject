<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $id="id_admin";

    protected $table="admin";

    protected $fillable=["username", "password", "nama_admin", "type_user"];

    public $timestamps = false;
}
