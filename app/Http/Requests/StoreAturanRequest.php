<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAturanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'penyakit_id'=> 'required|exists:penyakits,id',
            'aturan'=> 'required|array',
            'aturan.*.id'=> 'required|exists:gejalas,id',
            'aturan.*.md'=> 'required|decimal:0,1',
            'aturan.*.mb'=> 'required|decimal:0,1',
        ];
    }

    public function messages(): array
    {
        return [
            'penyakit_id.exists'=> 'Data Penyakit Tidak Ada Dalam Database',
            'aturan.required'=> 'Data Gejala Dari Penyakit Kosong!!!',
            'aturan.*.md.required'=> 'Nilai MD (Measure of Disbelief) harus di isi',
            'aturan.*.mb.required'=> 'Nilai MB (Measure of Belief) harus di isi',
            'aturan.*.md.decimal'=> 'Nilai MD (Measure of Disbelief) harus berada diantara 0 sampai 1',
            'aturan.*.mb.decimal'=> 'Nilai MB (Measure of Belief) harus berada diantara 0 sampai 1',
        ];
    }
}
