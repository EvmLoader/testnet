<?php

namespace MetaFox\Group\Http\Controllers\Api;

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
 * Class ExampleRuleController.
 * @ignore
 * @codeCoverageIgnore
 */
class ExampleRuleController extends GatewayController
{
    /**
     * @var string[]
     */
    protected $controllers = [
        'v1'   => v1\ExampleRuleController::class,
    ];

    // DO NOT IMPLEMENT ACTION HERE.
}
