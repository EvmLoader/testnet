<?php

/* this is auto generated file */
return [
    [
        'menu'     => 'friend.friend_list.itemActionMenu',
        'name'     => 'add',
        'label'    => 'friend::phrase.add_friends',
        'ordering' => 1,
        'value'    => 'friend_list/addFriend',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.friend.friend_list.update'],
        ],
        'menu'     => 'friend.friend_list.itemActionMenu',
        'name'     => 'edit_list',
        'label'    => 'friend::phrase.edit_friend_list',
        'ordering' => 2,
        'value'    => 'friend_list/editList',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.friend.friend_list.delete'],
        ],
        'style'    => 'danger',
        'menu'     => 'friend.friend_list.itemActionMenu',
        'name'     => 'delete',
        'label'    => 'friend::phrase.delete',
        'ordering' => 3,
        'value'    => 'deleteItem',
    ],
    [
        'showWhen' => [],
        'tab'      => 'landing',
        'params'   => [
            'module_name'   => 'friend',
            'resource_name' => 'friend',
        ],
        'menu'     => 'friend.sidebarMenu',
        'name'     => 'landing',
        'label'    => 'friend::phrase.all_friends',
        'ordering' => 1,
        'value'    => 'viewAll',
        'to'       => '/friend',
    ],
    [
        'tab'      => 'incoming',
        'showWhen' => [],
        'params'   => [
            'module_name'   => 'friend',
            'resource_name' => 'friend_request',
        ],
        'menu'     => 'friend.sidebarMenu',
        'name'     => 'incoming_request',
        'label'    => 'friend::phrase.friend_requests',
        'ordering' => 2,
        'value'    => 'viewAll',
        'to'       => '/friend/requests',
    ],
    [
        'tab'      => 'send_request',
        'showWhen' => [],
        'params'   => [
            'module_name'   => 'friend',
            'resource_name' => 'friend_request',
        ],
        'menu'     => 'friend.sidebarMenu',
        'name'     => 'send_request',
        'label'    => 'friend::phrase.sent_requests',
        'ordering' => 3,
        'value'    => 'viewSentRequests',
        'to'       => '/friend/send-requests',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.friend.friend_list.view'],
        ],
        'params' => [
            'module_name'   => 'friend',
            'resource_name' => 'friend_list',
        ],
        'menu'     => 'friend.sidebarMenu',
        'name'     => 'friend_list',
        'label'    => 'friend::phrase.friend_list',
        'ordering' => 4,
        'value'    => 'viewAll',
    ],
    [
        'tab'      => 'friend',
        'showWhen' => [
            'and',
            ['truthy', 'item.profile_menu_settings.friend_profile_menu'],
            ['truthy', 'item.profile_settings.friend_view_friend'],
        ],
        'menu'     => 'user.user.profileMenu',
        'name'     => 'friend',
        'label'    => 'friend::phrase.friends',
        'ordering' => 3,
        'to'       => '/friend',
    ],
    [
        'showWhen'  => [],
        'menu'      => 'core.bodyMenu',
        'name'      => 'friend',
        'label'     => 'friend::phrase.friends',
        'ordering'  => 3,
        'value'     => '',
        'to'        => '/friend',
        'as'        => 'item',
        'icon'      => 'user1-two',
        'iconColor' => '#2681d5',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_share'],
        ],
        'params' => [
            'module_name'   => 'friend',
            'resource_name' => 'friend',
        ],
        'menu'     => 'feed.itemShareActionsMenu',
        'name'     => 'share_on_friends',
        'label'    => 'activity::phrase.share_on_friends',
        'ordering' => 3,
        'value'    => 'shareOnFriendProfile',
    ],
];
