<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diagnosa extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'alamat',
        'no_telpon',
        'diagnosa',
        'tgl',
    ];

    protected $casts = [
        'diagnosa'=> 'json',
    ];

    public function scopeFilterBySearch($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->whereHas('penyakit', function ($query) use ($search) {
                $query->where('nama', 'LIKE', '%' . $search . '%');
            })->orWhereHas('gejala', function ($query) use ($search) {
                $query->where('nama', 'LIKE', '%' . $search . '%');
            });
        });
    }


}
