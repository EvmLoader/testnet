<?php

namespace MetaFox\Localize\Policies\Contracts;

use MetaFox\Platform\Contracts\User;

interface CountryChildPolicyInterface
{
    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     *
     * @return bool
     */
    public function viewAny(User $user): bool;

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     *
     * @return bool
     */
    public function view(User $user): bool;

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     *
     * @return bool
     */
    public function create(User $user): bool;

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     *
     * @return bool
     */
    public function update(User $user): bool;

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     *
     * @return bool
     */
    public function delete(User $user): bool;
}
