<?php

namespace MetaFox\Notification\Http\Controllers\Api;

use MetaFox\Platform\Http\Controllers\Api\GatewayController;

/**
 * --------------------------------------------------------------------------
 * Api Gateway
 * --------------------------------------------------------------------------
 * stub: /packages/controllers/api_gateway.stub.
 *
 * This class solves api versioning problem.
 * DO NOT IMPLEMENT ACTION HERE.
 */

/**
 * Class NotificationController.
 * @ignore
 * @codeCoverageIgnore
 */
class NotificationController extends GatewayController
{
    /**
     * @var string[]
     */
    protected $controllers = [
        'v1'   => v1\NotificationController::class,
    ];

    // DO NOT IMPLEMENT ACTION HERE.
}
