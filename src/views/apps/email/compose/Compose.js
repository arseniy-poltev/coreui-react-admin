import React from 'react'
import {
  CButtonToolbar,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CBadge,
  CButton,
  CButtonGroup,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CRow,
  CCol,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Compose = () => {
  return (
    <>
      <p className="text-center">New Message</p>

      <CForm>
        <CRow form className="mb-3">
          <CLabel sm="1" className="col-1" htmlFor="to">To:</CLabel>
          <CCol sm="11">
            <CInput className="form-control" id="to" type="email" placeholder="Type email" />
          </CCol>
        </CRow>
        <CRow form className="mb-3">
          <CLabel sm="1" className="col-1" htmlFor="cc">CC:</CLabel>
          <CCol sm="11">
            <CInput className="form-control" id="cc" type="email" placeholder="Type email" />
          </CCol>
        </CRow>
        <CRow form className="mb-3">
          <CLabel sm="1" className="col-1" htmlFor="bcc">BCC:</CLabel>
          <CCol sm="11">
            <CInput className="form-control" id="bcc" type="email" placeholder="Type email" />
          </CCol>
        </CRow>
      </CForm>

      <CRow>
        <CCol className="ml-auto" sm="11">
          <CButtonToolbar>
            <CButtonGroup>
              <CButton color="light"><CIcon name="cil-bold" /></CButton>
              <CButton color="light"><CIcon name="cil-italic" /></CButton>
              <CButton color="light"><CIcon name="cil-underline" /></CButton>
            </CButtonGroup>{' '}
            <CButtonGroup>
              <CButton color="light"><CIcon name="cil-align-left" /></CButton>
              <CButton color="light"><CIcon name="cil-align-right" /></CButton>
              <CButton color="light"><CIcon name="cil-align-center" /></CButton>
              <CButton color="light"><CIcon name="cil-justify-center" /></CButton>
            </CButtonGroup>
            <CButtonGroup>
              <CButton color="light"><CIcon name="cil-indent-increase" /></CButton>
              <CButton color="light"><CIcon name="cil-indent-decrease" /></CButton>
            </CButtonGroup>
            <CButtonGroup>
              <CButton color="light"><CIcon name="cil-list" /></CButton>
              <CButton color="light"><CIcon name="cil-list-numbered" /></CButton>
            </CButtonGroup>
            <CButton color="light"><CIcon name="cil-trash" /></CButton>
            <CButton color="light"><CIcon name="cil-paperclip" /></CButton>
            <CDropdown>
              <CDropdownToggle caret color="light">
                <CIcon name="cil-tags" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">add label<CBadge color="danger"> Home</CBadge></CDropdownItem>
                <CDropdownItem href="#">add label<CBadge color="info"> Job</CBadge></CDropdownItem>
                <CDropdownItem href="#">add label<CBadge color="success"> Clients</CBadge></CDropdownItem>
                <CDropdownItem href="#">add label<CBadge color="warning"> News</CBadge></CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CButtonToolbar>
          <CFormGroup className="mt-4">
            <CTextarea rows="12" placeholder="Message content"/>
          </CFormGroup>
          <CFormGroup>
            <CButton color="success" type="submit">Send</CButton>{' '}
            <CButton color="light" type="submit">Draft</CButton>{' '}
            <CButton color="danger" type="submit">Discard</CButton>
          </CFormGroup>
        </CCol>
      </CRow>
    </>
  )
}

export default Compose
