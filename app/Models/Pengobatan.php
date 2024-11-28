<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengobatan extends Model
{
    use HasFactory;

    protected $fillable = [
        "penyakit_id",
        "keterangan",
    ];

    public function penyakit(){
        return $this->hasOne(Penyakit::class, 'id', 'penyakit_id');
    }
    public function scopeFilterBySearch($query, $search)
    {
        $query->when($search ?? null, function ($query, $search) {
            $query->whereHas('penyakit', function($query) use ($search){
                $query->where('nama','LIKE','%'.$search.'%');
            });
        });
    }

    public function scopeFilterByOrder($query, $order)
    {
        $query->when($order ?? null, function ($query, $order) {
            $query->orderBy('id', $order);
        });
    }
}
