import React from 'react'
import { Formik } from 'formik'
import { string, object } from 'yup'
import { FormikTextField } from '../inputs'
import { Button, OutlineButton } from '../buttons'
import { formatError } from '../../utils/format'

const defaultValues = {
  name: '',
}

const roomFormSchema = object().shape({
  name: string().required('Cannot be empty!'),
})

const RoomForm = props => {
  const { initialValues, onSubmit, onCancel } = props

  function onSubmitForm(values, callback) {
    const { resetForm, setErrors, setSubmitting } = callback

    onSubmit(values)
      .then(() => {
        resetForm()
      })
      .catch(error => {
        setErrors(formatError(error.response.data.errors))
        setSubmitting(false)
      })
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues ? initialValues : defaultValues}
      validationSchema={roomFormSchema}
      onSubmit={onSubmitForm}
    >
      {({ handleSubmit, isSubmitting, isValid, handleReset }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FormikTextField size="small" name="name" label="Name*" />

            <div className="flex justify-end">
              <div className="mr-2">
                <Button size="small" type="submit" disabled={!isValid} loading={isSubmitting}>
                  Submit
                </Button>
              </div>
              <div className="mr-2">
                <OutlineButton
                  color="secondary"
                  size="small"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {
                    onCancel()
                    handleReset()
                  }}
                >
                  Cancel
                </OutlineButton>
              </div>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default RoomForm
