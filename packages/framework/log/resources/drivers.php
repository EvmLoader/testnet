<?php

/* this is auto generated file */
return [
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\Channel\\Admin\\DataGrid',
        'type'       => 'data-grid',
        'name'       => 'log.channel',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\LogMessage\\Admin\\DataGrid',
        'type'       => 'data-grid',
        'name'       => 'log.db.msg',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\File\\Admin\\DataGrid',
        'type'       => 'data-grid',
        'name'       => 'log.file',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\File\\Admin\\MsgDataGrid',
        'type'       => 'data-grid',
        'name'       => 'log.file.msg',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerDailyForm',
        'type'       => 'form',
        'name'       => 'daily',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\SiteSettingForm',
        'type'       => 'form',
        'name'       => 'log.admin.site_setting',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerSingleForm',
        'type'       => 'form',
        'name'       => 'single',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerSlackForm',
        'type'       => 'form',
        'name'       => 'slack',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerStackForm',
        'type'       => 'form',
        'name'       => 'stack',
        'version'    => 'v1',
        'resolution' => 'admin',
    ],
    [
        'driver'     => 'MetaFox\\Log\\Support\\SelectLogLevelField',
        'type'       => 'form-field',
        'name'       => 'selectLogLevel',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'      => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerDailyForm',
        'type'        => 'form-logger',
        'name'        => 'daily',
        'version'     => 'v1',
        'resolution'  => 'admin',
        'title'       => 'log::phrase.logger_daily_label',
        'url'         => '/admincp/log/channel/edit/daily/daily',
        'description' => 'log::phrase.logger_daily_desc',
    ],
    [
        'driver'      => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerSingleForm',
        'type'        => 'form-logger',
        'name'        => 'single',
        'version'     => 'v1',
        'resolution'  => 'admin',
        'title'       => 'log::phrase.logger_single_label',
        'url'         => '/admincp/log/channel/edit/single/single',
        'description' => 'log::phrase.logger_single_desc',
    ],
    [
        'driver'      => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerSlackForm',
        'type'        => 'form-logger',
        'name'        => 'slack',
        'version'     => 'v1',
        'resolution'  => 'admin',
        'title'       => 'log::phrase.logger_slack_label',
        'url'         => '/admincp/log/channel/edit/slack/slack',
        'description' => 'log::phrase.logger_slack_desc',
    ],
    [
        'driver'      => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\LoggerStackForm',
        'type'        => 'form-logger',
        'name'        => 'stack',
        'version'     => 'v1',
        'resolution'  => 'admin',
        'title'       => 'log::phrase.logger_stack_label',
        'url'         => '/admincp/log/channel/edit/stack/stack',
        'description' => 'log::phrase.logger_stack_desc',
    ],
    [
        'driver'      => 'MetaFox\\Log\\Http\\Resources\\v1\\Admin\\SiteSettingForm',
        'type'        => 'form-settings',
        'name'        => 'log',
        'version'     => 'v1',
        'resolution'  => 'admin',
        'is_preload'  => 1,
        'title'       => 'core::phrase.settings',
        'url'         => '/admincp/log/setting',
        'description' => 'Log Settings',
    ],
    [
        'driver'  => 'MetaFox\\Log\\Http\\Resources\\v1\\PackageSetting',
        'type'    => 'package-setting',
        'name'    => 'log',
        'version' => 'v1',
    ],
];
