<?php

/**
 * @author  developer@phpfox.com
 * @license phpfox.com
 */

namespace MetaFox\Page\Http\Resources\v1\Page;

use Illuminate\Support\Facades\Auth;
use MetaFox\Form\AbstractForm;
use MetaFox\Form\Builder;
use MetaFox\Menu\Repositories\MenuItemRepositoryInterface;
use MetaFox\Platform\Support\Browse\Browse;

class SearchInPageMobileForm extends AbstractForm
{
    protected function prepare(): void
    {
        $this->action('/page/search/:id')
            ->acceptPageParams(['q', 'sort', 'when', 'related_comment_friend_only', 'view', 'returnUrl'])
            ->navigationConfirmation()
            ->setValue([
                'when'                        => Browse::VIEW_ALL,
                'view'                        => Browse::VIEW_ALL,
                'sort'                        => Browse::SORT_RECENT,
                'related_comment_friend_only' => 0,
            ]);
    }

    protected function initialize(): void
    {
        $basic = $this->addBasic()->showWhen(['falsy', 'filters']);

        $basic->addFields(
            Builder::button('filters')
                ->forBottomSheetForm('SFFilterButton'),
        );

        $bottomSheet = $this->addSection(['name' => 'bottomSheet']);
        $bottomSheet->addFields(
            Builder::clearSearch()
                ->label(__p('core::phrase.reset'))
                ->showWhen(['truthy', 'filters'])
                ->targets(['when']),
            Builder::choice('sort')
                ->forBottomSheetForm()
                ->autoSubmit()
                ->label(__p('core::phrase.sort_label'))
                ->variant('standard-inlined')
                ->showWhen(['truthy', 'filters'])
                ->options([
                    ['label' => __p('core::phrase.sort.recent'), 'value' => Browse::SORT_RECENT],
                    ['label' => __p('core::phrase.sort.most_viewed'), 'value' => Browse::SORT_MOST_VIEWED],
                    ['label' => __p('core::phrase.sort.most_liked'), 'value' => Browse::SORT_MOST_LIKED],
                    ['label' => __p('core::phrase.sort.most_discussed'), 'value' => Browse::SORT_MOST_DISCUSSED],
                ]),
            Builder::choice('when')
                ->forBottomSheetForm()
                ->autoSubmit()
                ->variant('standard-inlined')
                ->label(__p('core::phrase.when_label'))
                ->options($this->getWhenOptions())
                ->showWhen(['truthy', 'filters'])
        );

        if (app_active('metafox/friend') && Auth::id()) {
            $bottomSheet->addFields(
                Builder::switch('related_comment_friend_only')
                    ->forBottomSheetForm()
                    ->variant('standard-inlined')
                    ->label(__p('search::phrase.show_results_from_friend'))
                    ->showWhen(['truthy', 'filters'])
                    ->marginNone()
            );
        }
        $bottomSheet->addField(
            Builder::submit()
                ->showWhen(['truthy', 'filters'])
                ->label(__p('core::phrase.show_results'))
        );
    }

    /**
     * @return array<int, mixed>
     */
    protected function getWhenOptions(): array
    {
        return [
            ['label' => __p('core::phrase.when.all'), 'value' => Browse::WHEN_ALL],
            ['label' => __p('core::phrase.when.this_month'), 'value' => Browse::WHEN_THIS_MONTH],
            ['label' => __p('core::phrase.when.this_week'), 'value' => Browse::WHEN_THIS_WEEK],
            ['label' => __p('core::phrase.when.today'), 'value' => Browse::WHEN_TODAY],
        ];
    }

    /**
     * @return array<int, mixed>
     */
    protected function getDataSources(): array
    {
        $collection = resolve(MenuItemRepositoryInterface::class)->getMenuItemByMenuName(
            'group.searchWebCategoryMenu',
            'web',
            true
        );

        return $collection->map(function ($item) {
            return [
                'id'            => $item->name,
                'resource_name' => 'search_type',
                'name'          => __p($item->label),
            ];
        })->toArray();
    }
}
