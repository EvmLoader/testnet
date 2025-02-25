<?php

/**
 * @author  developer@phpfox.com
 * @license phpfox.com
 */

namespace MetaFox\Saved\Http\Resources\v1\Saved;

use MetaFox\Platform\Facades\Settings;
use MetaFox\Platform\Resource\ActionItem;
use MetaFox\Platform\Resource\WebSetting as Setting;
use MetaFox\Saved\Support\Browse\Scopes\Saved\OpenStatusScope;

/**
 *--------------------------------------------------------------------------
 * Saved Web Resource Setting
 *--------------------------------------------------------------------------
 * stub: /packages/resources/resource_setting.stub
 * Add this class name to resources config gateway.
 */

/**
 * Class WebSetting.
 */
class WebSetting extends Setting
{
    protected function initialize(): void
    {
        $this->add('homePage')
            ->pageUrl('saved');

        $this->add('viewAll')
            ->pageUrl('saved/all')
            ->apiUrl('saveditems')
            ->apiRules([
                'q'    => ['truthy', 'q'],
                'open' => ['includes', 'open', OpenStatusScope::getAllowStatuses()], 'sort' => [
                    'includes', 'sort', ['recent', 'latest', 'most_viewed', 'most_liked', 'most_discussed'],
                ], 'when' => ['includes', 'when', ['this_month', 'this_week', 'today']],
                'collection_id' => ['truthy', 'collection_id'], 'type' => ['truthy', 'type'],
            ]);

        $this->add('deleteItem')
            ->apiUrl('saveditems/:id')
            ->confirm([
                'title'   => __p('core::phrase.confirm'),
                'message' => __p('saved::phrase.delete_confirm'),
            ]);

        $this->add('moveItem')
            ->apiUrl('saveditems/collection')
            ->asPut();

        $this->add('saveItem')
            ->apiUrl('saveditems/save')
            ->asPost();

        $this->add('undoSaveItem')
            ->asDelete()
            ->apiUrl('saveditems/unsave')
            ->apiParams([
                'item_type' => ':item_type',
                'item_id'   => ':item_id',
                'like_type' => ':like_type_id',
                'in_feed'   => ':in_feed',
            ]);

        $this->add('saveItemDetail')
            ->apiUrl('saveditems/save')
            ->asPost();

        $this->addUndoSavedItemDetailAction();

        $this->add('unsaveItem')
            ->apiUrl('saveditems/unsave')
            ->asDelete();

        $this->add('markAsOpened')
            ->apiUrl('saveditems/read/:id')
            ->apiParams([
                'status'        => 1,
                'collection_id' => ':collection_id',
            ])
            ->asPatch();

        $this->add('markAsUnOpened')
            ->apiUrl('saveditems/read/:id')
            ->apiParams([
                'status'        => 0,
                'collection_id' => ':collection_id',
            ])
            ->asPatch();

        $this->add('searchItem')
            ->pageUrl('saved/search')
            ->placeholder(__p('saved::phrase.search_saved_items'));

        $this->add('removeCollectionItem')
            ->apiUrl('saveditems/collection/:list_id/save/:saved_id')
            ->asDelete();
    }

    protected function addUndoSavedItemDetailAction(): ActionItem
    {
        $undoSavedDetailAction = $this->add('undoSaveItemDetail')
            ->asDelete()
            ->apiUrl('saveditems/unsave')
            ->apiParams([
                'item_type' => ':item_type',
                'item_id'   => ':item_id',
                'like_type' => ':like_type_id',
                'in_feed'   => ':in_feed',
            ]);

        if (Settings::get('saved.enable_unsaved_confirmation')) {
            $undoSavedDetailAction->confirm(
                [
                    'title'   => __p('core::phrase.confirm'),
                    'message' => __p('saved::phrase.delete_confirm'),
                ]
            );
        }

        return $undoSavedDetailAction;
    }
}
