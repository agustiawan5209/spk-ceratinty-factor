<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aturan extends Model
{
    use HasFactory;

    protected $fillable = [
        'penyakit_id',
        'gejala_id',
        'mb',
        'md',
        'cf',
        'keterangan',
    ];

    public function penyakit(){
        return $this->hasOne(Penyakit::class,'id','penyakit_id');
    }
    public function gejala(){
        return $this->hasOne(Gejala::class,'id','gejala_id');
    }
}
