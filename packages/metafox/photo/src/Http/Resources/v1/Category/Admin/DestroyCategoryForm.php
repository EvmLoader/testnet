<?php

namespace MetaFox\Photo\Http\Resources\v1\Category\Admin;

use MetaFox\Form\Html\AbstractDestroyCategoryForm;
use MetaFox\Photo\Models\Category as Model;
use MetaFox\Photo\Repositories\CategoryRepositoryInterface;

/**
 * Class DestroyCategoryForm.
 * @property Model $resource
 * @ignore
 * @codeCoverageIgnore
 */
class DestroyCategoryForm extends AbstractDestroyCategoryForm
{
    public function boot(CategoryRepositoryInterface $repository, ?int $id = null): void
    {
        $this->repository = $repository;
        $this->resource   = $repository->find($id);
    }

    /**
     * @return string
     */
    protected function getActionUrl(): string
    {
        return '/admincp/photo/category/' . $this->resource->id;
    }

    /**
     * @return string
     */
    protected function getPluralizationItemType(): string
    {
        return __p('photos');
    }
}
