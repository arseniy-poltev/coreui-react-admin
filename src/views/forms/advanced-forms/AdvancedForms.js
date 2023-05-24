import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CFormText,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CBadge 
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { TextMask, InputAdapter } from 'react-text-mask-hoc'

// React DateRangePicker
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// React select
import states from './states'
import Select from 'react-select'

const AdvancedForms = () => {
  const [value, setValue] = React.useState([
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' }
  ])
  
  const [date, setDate] = React.useState({startDate: null, endDate: null})
  const [focused, setFocused] = React.useState()

  return (
    <CRow>
      <CCol sm={12} md={6} style={{flexBasis: 'auto'}}>
        <CCard>
          <CCardHeader>
            Masked Input
            <small> React Text Mask</small>{' '}
            <CBadge href="https://coreui.io/pro/react/" color="danger" target="_blank" rel="noreferrer noopener">CoreUI Pro Component</CBadge>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel>Date input</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-calendar" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 99/99/9999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Phone input</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-phone" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. (999) 999-9999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Taxpayer Identification Numbers</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-dollar" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 99-9999999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Social Security Number</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 999-99-9999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Eye Script</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. ~9.99 ~9.99 999
              </CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel>Credit Card Number</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText><CIcon name="cil-credit-card" /></CInputGroupText>
                </CInputGroupPrepend>
                <TextMask
                  mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                  Component={InputAdapter}
                  className="form-control"
                />
              </CInputGroup>
              <CFormText color="muted">
                ex. 9999 9999 9999 9999
              </CFormText>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={12} md={6}>
        <CCard>
          <CCardHeader>
            React-Select{' '}
            <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
            <div className="card-header-actions">
              <a href="https://github.com/JedWatson/react-select" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <Select
              name="form-field-name2"
              value={value}
              options={states}
              onChange={setValue}
              isMulti
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            React-Dates{' '}
            <CBadge href="https://coreui.io/pro/react/" color="danger">CoreUI Pro Component</CBadge>
            <div className="card-header-actions">
              <a href="https://github.com/airbnb/react-dates" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <DateRangePicker
              startDate={date.startDate}
              startDateId="startDate"
              endDate={date.endDate}
              endDateId="endDate"
              onDatesChange={value => setDate(value)}
              focusedInput={focused}
              onFocusChange={focusedInput => setFocused(focusedInput)}
              orientation="horizontal"
              openDirection="down"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AdvancedForms
