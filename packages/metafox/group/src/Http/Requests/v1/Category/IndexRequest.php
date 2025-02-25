<?php

namespace MetaFox\Group\Http\Requests\v1\Category;

use Illuminate\Foundation\Http\FormRequest;
use MetaFox\Platform\Rules\PaginationLimitRule;
use MetaFox\Platform\Support\Helper\Pagination;

/**
 * Class IndexRequest.
 */
class IndexRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'id'    => ['sometimes', 'numeric', 'exists:group_categories,id'],
            'page'  => ['sometimes', 'numeric', 'min:1'],
            'q'     => ['sometimes', 'nullable', 'string'],
            'level' => ['sometimes', 'nullable', 'numeric'],
            'limit' => ['sometimes', 'numeric', new PaginationLimitRule()],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function validated($key = null, $default = null)
    {
        $data = parent::validated();

        if (!isset($data['limit'])) {
            $data['limit'] = Pagination::DEFAULT_ITEM_PER_PAGE;
        }

        return $data;
    }
}
