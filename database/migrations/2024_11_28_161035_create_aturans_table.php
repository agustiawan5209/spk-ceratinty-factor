<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('aturans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('penyakit_id')->constrained('penyakits')->cascadeOnDelete();
            $table->foreignId('gejala_id')->constrained('gejalas')->cascadeOnDelete();
            $table->decimal('mb')->comment('Nilai Hipotesa Kepercayaan Pakar');
            $table->decimal('md')->comment('Nilai Hipotesa Tidak Kepercayaan Pakar');
            $table->decimal('cf')->comment('Nilai Hasil CF');
            $table->string('keterangan')->comment('Penjelasan Jika Ada')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aturans');
    }
};
