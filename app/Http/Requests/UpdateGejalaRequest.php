<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGejalaRequest extends FormRequest
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
            "slug"=> "required|exists:gejalas,id",
            "kode"=> "required|string|max:50|unique:gejalas,kode," . $this->slug . ",id",
            "nama"=> "required|string|max:150|unique:gejalas,nama," . $this->slug . ",id",
        ];
    }
}
