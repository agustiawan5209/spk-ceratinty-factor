<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Penyakit extends Model
{
    use HasFactory;


    protected $fillable = [
        "kode",
        "nama",
    ];
    // public function galeri(){
    //     return $this->hasMany(GaleriPotensi::class, 'potensi_id', 'id');
    // }

    public function scopeFilterBySearch($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->where('kode', 'like', '%' . $search . '%')
                ->orWhere('nama', 'like', '%' . $search . '%');
        });
    }

    public function scopeFilterByOrder($query, $order)
    {
        $query->when($order ?? null, function ($query, $order) {
            $query->orderBy('id', $order);
        });
    }


}
