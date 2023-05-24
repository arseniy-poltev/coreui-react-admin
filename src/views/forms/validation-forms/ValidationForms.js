import React from 'react'
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCol,
  CForm,
  CInvalidFeedback,
  CInputCheckbox,
  CFormGroup,
  CLabel,
  CInput,
  CRow
} from '@coreui/react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = function (values) {
  return Yup.object().shape({
    firstName: Yup.string()
    .min(2, `First name has to be at least 2 characters`)
    .required('First name is required'),
    lastName: Yup.string()
    .min(1, `Last name has to be at least 1 character`)
    .required('Last name is required'),
    userName: Yup.string()
    .min(5, `Username has to be at least 5 characters`)
    .required('Username is required'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
    password: Yup.string()
    .min(6, `Password has to be at least ${6} characters!`)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([values.password], 'Passwords must match')
    .required('Password confirmation is required'),
    accept: Yup.bool()
    .required('* required')
    .test('accept', 'You have to accept our Terms and Conditions!', value => value === true),
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, { abortEarly: false })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  accept: false
}

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 2000)
}

const findFirstError = (formName, hasError) => {
  const form = document.forms[formName]
  for (let i = 0; i < form.length; i++) {
    if (hasError(form[i].name)) {
      form[i].focus()
      break
    }
  }
}

const validateForm = (errors) => {
  findFirstError('simpleForm', (fieldName) => {
    return Boolean(errors[fieldName])
  })
}

const touchAll = (setTouched, errors) => {
  setTouched({
    firstName: true,
    lastName: true,
    userName: true,
    email: true,
    password: true,
    confirmPassword: true,
    accept: true
  })
  validateForm(errors)
}

const ValidationForms = () =>  {
  return (
    <CCard>
      <CCardHeader>
        Form Validation
        <a href="https://coreui.io/pro/react/" className="badge badge-danger ml-1" target="_blank" rel="noreferrer noopener">CoreUI Pro Component</a>
        <div className="card-header-actions">
          <a className="card-header-action" href="https://github.com/jaredpalmer/formik" target="_blank" rel="noreferrer noopener">
            <small className="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <a href="https://github.com/jaredpalmer/formik" target="_blank" rel="noreferrer noopener">Formik</a> <cite>Build forms in React, without the tears</cite> with <a href="https://github.com/jquense/yup" target="_blank" rel="noreferrer noopener">Yup</a> <cite>Dead simple Object schema
        validation</cite>
        <hr />
        <Formik
          initialValues={initialValues}
          validate={validate(validationSchema)}
          onSubmit={onSubmit}
        >
          {
            ({
              values,
              errors,
              touched,
              status,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
              handleReset,
              setTouched
            }) => (
              <CRow>
                <CCol lg="6">
                  <CForm onSubmit={handleSubmit} noValidate name='simpleForm'>
                    <CFormGroup>
                      <CLabel htmlFor="firstName">First Name</CLabel>
                      <CInput type="text"
                              name="firstName"
                              id="firstName"
                              placeholder="First Name"
                              autoComplete="given-name"
                              valid={!errors.firstName}
                              invalid={touched.firstName && !!errors.firstName}
                              autoFocus={true}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName} />
                      <CInvalidFeedback>{errors.firstName}</CInvalidFeedback>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="lastName">Last Name</CLabel>
                      <CInput type="text"
                              name="lastName"
                              id="lastName"
                              placeholder="Last Name"
                              autoComplete="family-name"
                              valid={!errors.lastName}
                              invalid={touched.lastName && !!errors.lastName}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName} />
                      <CInvalidFeedback>{errors.lastName}</CInvalidFeedback>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="userName">User Name</CLabel>
                      <CInput type="text"
                              name="userName"
                              id="userName"
                              placeholder="User Name"
                              autoComplete="username"
                              valid={!errors.userName}
                              invalid={touched.userName && !!errors.userName}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.userName} />
                      <CInvalidFeedback>{errors.userName}</CInvalidFeedback>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="email">Email</CLabel>
                      <CInput type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                              autoComplete="email"
                              valid={!errors.email}
                              invalid={touched.email && !!errors.email}
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email} />
                      <CInvalidFeedback>{errors.email}</CInvalidFeedback>
                    </CFormGroup>
                    <CRow>
                      <CCol md={6}>
                        <CFormGroup>
                          <CLabel htmlFor="password">Password</CLabel>
                          <CInput type="password"
                                  name="password"
                                  id="password"
                                  placeholder="Password"
                                  autoComplete="new-password"
                                  valid={!errors.password}
                                  invalid={touched.password && !!errors.password}
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password} />
                          {/*<CInvalidFeedback>Required password containing at least: number, uppercase and lowercase letter, 8 characters</CInvalidFeedback>*/}
                          <CInvalidFeedback>{errors.password}</CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md={6}>
                        <CFormGroup>
                          <CLabel htmlFor="confirmPassword">Password</CLabel>
                          <CInput type="password"
                                  name="confirmPassword"
                                  id="confirmPassword"
                                  placeholder="Confirm password"
                                  autoComplete="new-password"
                                  valid={!errors.confirmPassword}
                                  invalid={touched.confirmPassword && !!errors.confirmPassword}
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.confirmPassword} />
                          <CInvalidFeedback>{errors.confirmPassword}</CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CFormGroup variant="custom-checkbox" className="pb-3">
                      <CInputCheckbox
                        custom
                        id="accept"
                        required
                        valid={!errors.accept}
                        invalid={touched.accept && !!errors.accept}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="accept">
                        I accept the terms of use
                      </CLabel>
                      <CInvalidFeedback>{errors.accept}</CInvalidFeedback>
                    </CFormGroup>
                    <CFormGroup>
                      <CButton type="submit" color="primary" className="mr-1" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Submit'}</CButton>
                      <CButton type="button" color="success" className="mr-1" onClick={() => touchAll(setTouched, errors)}  disabled={isValid}>Validate</CButton>
                      <CButton type="reset" color="danger" className="mr-1" onClick={handleReset}>Reset</CButton>
                    </CFormGroup>
                  </CForm>
                </CCol>
                <CCol lg="6">
                  <CCard color={isValid ? 'gradient-info' : 'gradient-secondary'}>
                    <CCardBody>
                      <pre>values: {JSON.stringify(values, null, 2)}</pre>
                      <pre>errors: {JSON.stringify(errors, null, 2)}</pre>
                      <pre>touched: {JSON.stringify(touched, null, 2)}</pre>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            )}
        </Formik>
      </CCardBody>
    </CCard>
  )
}

export default ValidationForms
