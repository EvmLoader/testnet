<?php

namespace MetaFox\Advertise\Http\Controllers\Api;

use MetaFox\Platform\Http\Controllers\Api\GatewayController;

/**
 * --------------------------------------------------------------------------
 * Api Gateway
 * --------------------------------------------------------------------------
 * stub: /packages/controllers/api_gateway.stub.
 *
 * This class solve api versioning problem.
 * DO NOT IMPLEMENT ACTION HERE.
 */

/**
 * Class SponsorController.
 * @codeCoverageIgnore
 * @ignore
 */
class SponsorController extends GatewayController
{
    /**
     * @var string[]
     */
    protected $controllers = [
        'v1' => v1\SponsorController::class,
    ];

    // DO NOT IMPLEMENT ACTION HERE.
}

// end
