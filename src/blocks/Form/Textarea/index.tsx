import type { TextAreaField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextareaInput } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextAreaField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 3, width }) => {
  return (
    <Width width={width}>
      <Label htmlFor={name} className="text-brand-dark-green">
        {label}

        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>

      <TextareaInput
        defaultValue={defaultValue}
        id={name}
        rows={rows}
        {...register(name, { required })}
        className="text-brand-dark-green"
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
