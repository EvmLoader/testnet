<?php

/* this is auto generated file */
return [
    [
        'type'        => 'form-settings',
        'name'        => 'mfa',
        'title'       => 'core::phrase.settings',
        'description' => 'mfa::phrase.edit_mfa_setting_desc',
        'driver'      => 'MetaFox\\Mfa\\Http\\Resources\\v1\\Admin\\SiteSettingForm',
        'url'         => '/admincp/mfa/setting',
        'resolution'  => 'admin',
        'version'     => 'v1',
    ],
    [
        'type'    => 'package-setting',
        'name'    => 'mfa',
        'driver'  => 'MetaFox\\Mfa\\Http\\Resources\\v1\\PackageSetting',
        'version' => 'v1',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'user_service',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'user_service',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserAuth\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'user_auth',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserAuth\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'user_auth',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\AuthenticatorServiceForm',
        'type'       => 'form',
        'name'       => 'mfa.user_service.setup_form_authenticator',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\DeactivateServiceForm',
        'type'       => 'form',
        'name'       => 'mfa.user_service.deactivate_authenticator_form',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\DeactivateServiceMobileForm',
        'type'       => 'form',
        'name'       => 'mfa.user_service.deactivate_authenticator_form',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\AuthenticatorServiceMobileForm',
        'type'       => 'form',
        'name'       => 'mfa.user_service.setup_form_authenticator',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\AuthenticatorAuthForm',
        'type'       => 'form',
        'name'       => 'mfa.user_service.auth_form_authenticator',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\AuthenticatorAuthMobileForm',
        'type'       => 'form',
        'name'       => 'mfa.user_service.auth_form_authenticator',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\Service\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'service',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Mfa\\Http\\Resources\\v1\\Service\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'service',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'  => 'MetaFox\\Mfa\\Http\\Resources\\v1\\Service\\ServiceItemCollection',
        'type'    => 'json-collection',
        'name'    => 'mfa.service.item',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Mfa\\Http\\Resources\\v1\\Service\\ServiceItem',
        'type'    => 'json-resource',
        'name'    => 'mfa.service.item',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Mfa\\Http\\Resources\\v1\\UserService\\UserServiceItem',
        'type'    => 'json-resource',
        'name'    => 'mfa.user_service.item',
        'version' => 'v1',
    ],
    [
        'driver'     => 'MetaFox\\Form\\Mobile\\AuthenticatorQrCode',
        'type'       => 'form-field',
        'name'       => 'authenticatorQrCode',
        'resolution' => 'mobile',
    ],
];
