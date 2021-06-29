import React from 'react'
import { useField } from 'formik'
import { Dropdown, FormField, Label } from 'semantic-ui-react'

export default function HRMSDropdownInput({...props}) {
    const [field, meta] = useField(props)
    return (
        <FormField error={meta.touched && !! meta.error}>
           <Dropdown {...field} {...props} selection item onChange />
           {meta.touched && !! meta.error ? (
               <Label pointing basic color="red" content={meta.error}></Label>
           ):null}
       </FormField>
    )
}
