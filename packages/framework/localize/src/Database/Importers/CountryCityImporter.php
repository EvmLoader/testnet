<?php

namespace MetaFox\Localize\Database\Importers;

use MetaFox\Platform\Contracts\Entity;
use MetaFox\Platform\Support\JsonImporter;
use MetaFox\Localize\Models\CountryCity as Model;

/*
 * stub: packages/database/json-importer.stub
 */

class CountryCityImporter extends JsonImporter
{
    // fill from data to model attributes.
    protected $fillable = [
    'state_code',
    'city_code',
    'fips_code',
    'post_codes',
    'longitude',
    'latitude',
    'capital',
    'population',
    'ordering',
    'geonames_code',
    'name'
];

    public function getModelClass(): string
    {
        return Model::class;
    }

    public function saving($model, array $data, array $relations, string $source):void
    {
        if (!$model instanceof Model) {
            throw new \RuntimeException(sprintf('Failed importing data %s', __CLASS__));
        }

        // handle saving logic
    }

    public function saved($model, array $data, array $relations, string $source):void
    {
        if (!$model instanceof Model) {
            throw new \RuntimeException(sprintf('Failed importing data %s', __CLASS__));
        }

        // handle saved logic
    }
}
