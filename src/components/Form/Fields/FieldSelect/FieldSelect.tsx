import * as React from 'react'
import uuid from 'uuid/v4'
import { withForm } from '../../Form'
import { Select, SelectProps } from '../../Inputs/Select/Select'
import { Field, FieldProps } from '../Field'

interface FieldSelectProps extends FieldProps, SelectProps {}

const InternalFieldSelect = (props: FieldSelectProps) => {
  const {
    alignLabel,
    alignValidationMessage,
    label,
    labelWidth,
    labelFontWeight,
    validationMessage,
    id = uuid(),
    ...inputSelectProps
  } = props
  return (
    <Field
      id={id}
      {...props}
      alignValidationMessage={
        alignValidationMessage ? alignValidationMessage : 'bottom'
      }
    >
      <Select
        id={id}
        {...inputSelectProps}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

export const FieldSelect = withForm(InternalFieldSelect)