<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'table1/create', 'tarif/tambah', 'pelanggan/tambah', 'teknisi/tambah',
        'admin/tambah', 'denda/tambah', 'penggunaan/tambah'
    ];
}
