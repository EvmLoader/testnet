<?php

namespace MetaFox\Photo\Http\Requests\v1\Photo;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use MetaFox\Photo\Support\Browse\Scopes\Photo\SortScope;
use MetaFox\Photo\Support\Browse\Scopes\Photo\ViewScope;
use MetaFox\Platform\MetaFoxConstant;
use MetaFox\Platform\Rules\AllowInRule;
use MetaFox\Platform\Rules\PaginationLimitRule;
use MetaFox\Platform\Support\Browse\Browse;
use MetaFox\Platform\Support\Browse\Scopes\WhenScope;

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
    public function rules()
    {
        return [
            'user_id'     => ['sometimes', 'numeric', 'exists:user_entities,id'],
            'category_id' => ['sometimes', 'numeric', 'nullable', 'exists:photo_categories,id'],
            'album_id'    => ['sometimes', 'numeric', 'exists:photo_albums,id'],
            'group_id'    => ['sometimes', 'numeric'],
            'q'           => ['sometimes', 'nullable', 'string'],
            'tag'         => ['sometimes', 'string'],
            'feed_id'     => ['sometimes', 'numeric'],
            'view'        => ['sometimes', 'string', new AllowInRule(ViewScope::getAllowView())],
            'sort'        => ['sometimes', 'string', new AllowInRule(SortScope::getAllowSort())],
            'sort_type'   => ['sometimes', 'string', new AllowInRule(SortScope::getAllowSortType())],
            'when'        => ['sometimes', 'string', new AllowInRule(WhenScope::getAllowWhen())],
            'page'        => ['sometimes', 'numeric', 'min:1'],
            'limit'       => ['sometimes', 'numeric', new PaginationLimitRule()],
        ];
    }

    public function validated($key = null, $default = null)
    {
        $data = parent::validated();

        if (!isset($data['user_id'])) {
            $data['user_id'] = 0;
        }

        $q = Arr::get($data, 'q');

        if (null === $q) {
            $q = MetaFoxConstant::EMPTY_STRING;
        }

        $q = trim($q);

        if (Str::startsWith($q, '#')) {
            $data['tag'] = Str::substr($q, 1);

            $q = MetaFoxConstant::EMPTY_STRING;
        }

        Arr::set($data, 'q', $q);

        if (isset($data['view']) && $data['view'] == Browse::VIEW_FEATURE) {
            $data['sort'] = Browse::SORT_FEATURE;
        }

        return $data;
    }
}
