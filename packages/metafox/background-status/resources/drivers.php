<?php

/* this is auto generated file */
return [
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\Admin\\DataGrid',
        'type'       => 'data-grid',
        'name'       => 'bgs.collection',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => 'Data Grid Settings',
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Models\\BgsBackground',
        'type'       => 'entity',
        'name'       => 'pstatusbg_background',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Models\\BgsCollection',
        'type'       => 'entity',
        'name'       => 'pstatusbg_collection',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\Admin\\SiteSettingForm',
        'type'       => 'form-settings',
        'name'       => 'background_status',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => 'core::phrase.settings',
        'url'        => '/admincp/backgroundstatus/setting',
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\RecentUsed\\RecentUsedEmbedCollection',
        'type'       => 'json-collection',
        'name'       => 'bgs_recent_used.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\RecentUsed\\RecentUsedItemCollection',
        'type'       => 'json-collection',
        'name'       => 'bgs_recent_used.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\StatusBackground\\StatusBackgroundEmbedCollection',
        'type'       => 'json-collection',
        'name'       => 'bgs_status_background.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\StatusBackground\\StatusBackgroundItemCollection',
        'type'       => 'json-collection',
        'name'       => 'bgs_status_background.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsBackground\\BgsBackgroundEmbedCollection',
        'type'       => 'json-collection',
        'name'       => 'pstatusbg_background.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsBackground\\BgsBackgroundItemCollection',
        'type'       => 'json-collection',
        'name'       => 'pstatusbg_background.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\BgsCollectionEmbedCollection',
        'type'       => 'json-collection',
        'name'       => 'pstatusbg_collection.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\BgsCollectionItemCollection',
        'type'       => 'json-collection',
        'name'       => 'pstatusbg_collection.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\RecentUsed\\RecentUsedDetail',
        'type'       => 'json-resource',
        'name'       => 'bgs_recent_used.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\RecentUsed\\RecentUsedEmbed',
        'type'       => 'json-resource',
        'name'       => 'bgs_recent_used.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\RecentUsed\\RecentUsedItem',
        'type'       => 'json-resource',
        'name'       => 'bgs_recent_used.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\StatusBackground\\StatusBackgroundDetail',
        'type'       => 'json-resource',
        'name'       => 'bgs_status_background.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\StatusBackground\\StatusBackgroundEmbed',
        'type'       => 'json-resource',
        'name'       => 'bgs_status_background.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\StatusBackground\\StatusBackgroundItem',
        'type'       => 'json-resource',
        'name'       => 'bgs_status_background.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsBackground\\BgsBackgroundDetail',
        'type'       => 'json-resource',
        'name'       => 'pstatusbg_background.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsBackground\\BgsBackgroundEmbed',
        'type'       => 'json-resource',
        'name'       => 'pstatusbg_background.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsBackground\\BgsBackgroundItem',
        'type'       => 'json-resource',
        'name'       => 'pstatusbg_background.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\BgsCollectionDetail',
        'type'       => 'json-resource',
        'name'       => 'pstatusbg_collection.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\BgsCollectionEmbed',
        'type'       => 'json-resource',
        'name'       => 'pstatusbg_collection.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\BgsCollectionItem',
        'type'       => 'json-resource',
        'name'       => 'pstatusbg_collection.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\PackageSetting',
        'type'       => 'package-setting',
        'name'       => 'backgroundstatus',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Policies\\BgsCollectionPolicy',
        'type'       => 'policy-resource',
        'name'       => 'MetaFox\\BackgroundStatus\\Models\\BgsCollection',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\BackgroundStatus\\Http\\Resources\\v1\\BgsCollection\\Admin\\StoreCollectionForm',
        'type'       => 'form',
        'name'       => 'bgs.collection.store',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
];
