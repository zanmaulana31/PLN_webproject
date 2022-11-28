<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class table1 extends Model
{
    use HasFactory;

    protected $id="typeuser";

    protected $table="typeuser";

    protected $fillable=["typeuser", "role"];

    public $timestamps = false;
}
