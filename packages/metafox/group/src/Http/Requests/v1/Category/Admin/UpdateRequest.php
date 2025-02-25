<?php

namespace MetaFox\Group\Http\Requests\v1\Category\Admin;

use Illuminate\Foundation\Http\FormRequest;
use MetaFox\Platform\Rules\AllowInRule;

/**
 * Class UpdateRequest.
 */
class UpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name'      => ['sometimes', 'string', 'between:3,255'],
            'parent_id' => ['sometimes', 'nullable', 'numeric', 'exists:group_categories,id'],
            'is_active' => ['sometimes', 'numeric', new AllowInRule([0, 1])],
            'ordering'  => ['sometimes', 'numeric'],
        ];
    }
}
