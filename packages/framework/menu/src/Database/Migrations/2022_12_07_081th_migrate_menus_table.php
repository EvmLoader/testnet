<?php

use MetaFox\Platform\Support\DbTableHelper;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/*
 * stub: /packages/database/migration.stub
 */

/*
 * @ignore
 * @codeCoverageIgnore
 * @link \$PACKAGE_NAMESPACE$\Models
 */
return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        if (!Schema::hasColumn('core_menus', 'type')) {
            Schema::table('core_menus', function (Blueprint $table) {
                $table->string('type', '32')
                    ->nullable()
                    ->default('context');
                $table->string('title')
                    ->nullable();
                $table->string('description')
                    ->nullable();
            });
        }

        // to do here
    }
};
