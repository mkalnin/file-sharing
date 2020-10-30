<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class MimesNot implements Rule
{
    private $mimes;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($mimes)
    {
        $this->mimes = $mimes;
        if(!is_array($this->mimes)) {
          $this->mimes = [$this->mimes];
        }
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return !in_array($value->getClientOriginalExtension(), $this->mimes);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute should not be ' . implode(', ', $this->mimes);
    }
}
