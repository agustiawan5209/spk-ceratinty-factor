<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAturanRequest extends FormRequest
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
            'slug'=> 'required|exists:aturans,id',
            'penyakit_id'=> 'required|exists:penyakits,id',
            'gejala_id'=> 'required|exists:gejalas,id',
            'mb'=> 'required|decimal:0,1',
            'md'=> 'required|decimal:0,1',
            'keterangan'=> 'required|string|max:150',
        ];
    }
}
