<?php

namespace MetaFox\Localize\Http\Requests\v1\Currency\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use MetaFox\Localize\Models\Currency;
use MetaFox\Platform\Rules\AllowInRule;
use MetaFox\Platform\Rules\CaseInsensitiveUnique;

/**
 * Class StoreRequest.
 */
class StoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'code' => [
                'required',
                'string',
                'between:1,3',
                new CaseInsensitiveUnique('core_currencies', 'code'), ],
            'symbol'     => ['required', 'string', 'between:1,15'],
            'name'       => ['required', 'string', 'between:1,255'],
            'format'     => ['sometimes', 'string'],
            'is_active'  => ['sometimes', 'numeric', new AllowInRule([0, 1])],
            'is_default' => ['sometimes', 'numeric', new AllowInRule([0, 1])],
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated();

        $data['ordering'] = Currency::count() + 1;

        if (!Arr::has($data, 'is_default')) {
            Arr::set($data, 'is_default', false);
        }

        if (!Arr::has($data, 'is_active')) {
            Arr::set($data, 'is_active', true);
        }

        if (Arr::get($data, 'is_default')) {
            Arr::set($data, 'is_active', true);
        }

        return $data;
    }
}
