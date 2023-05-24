import React from 'react'
import {
  CForm,
  CButtonToolbar,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CBadge,
  CButton,
  CButtonGroup,
  CFormGroup,
  CTextarea
 } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Message = () => {

  return (
    <>
      <CButtonToolbar className="p-3">
        <CButtonGroup>
          <CButton color="light"><CIcon name="cil-envelope-closed" /></CButton>
          <CButton color="light"><CIcon name="cil-star" /></CButton>
          <CButton color="light"><CIcon name="cil-bookmark" /></CButton>
        </CButtonGroup>
        <CButtonGroup className={'mr-1'}>
          <CButton color="light"><CIcon name="cil-share" /></CButton>
          <CButton color="light"><CIcon name="cil-share-all" /></CButton>
          <CButton color="light"><CIcon name="cil-share-boxed" /></CButton>
        </CButtonGroup>
        <CButton color="light" className={'mr-1'}><CIcon name="cil-trash" /></CButton>
        <CDropdown>
          <CDropdownToggle caret color="light">
            <CIcon name="cil-tags" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>add label <CBadge color="danger">Home</CBadge></CDropdownItem>
            <CDropdownItem>add label <CBadge color="info">Job</CBadge></CDropdownItem>
            <CDropdownItem>add label <CBadge color="success">Clients</CBadge></CDropdownItem>
            <CDropdownItem>add label <CBadge color="warning">News</CBadge></CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CButtonGroup className="c-float-right">
          <CButton color="light"><CIcon name="cil-chevron-left" /></CButton>
          <CButton color="light"><CIcon name="cil-chevron-right" /></CButton>
        </CButtonGroup>
      </CButtonToolbar>

      <div className="c-messages">

        <div className="c-message p-3">
            <div className="c-message-details">

              <div className="c-message-headers">
                <div className="c-message-headers-from">Lukasz Holeczek</div>
                <div className="c-message-headers-date"><CIcon name="cil-paperclip" /> Today, 3:47 PM</div>
                <div className="c-message-headers-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
              </div>

              <hr />
              <div className="c-message-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
              <hr />

              <div className="c-message-attachment">
                <CBadge className="mr-2">zip</CBadge> <b>bootstrap.zip</b><i>(2,5MB)</i>
                <span className="ml-auto">
                  <CButton size="sm" href="#"><CIcon name="cil-eyedropper" /></CButton>
                  <CButton size="sm" href="#"><CIcon name="cil-share" /></CButton>
                  <CButton size="sm" href="#"><CIcon name="cil-cloud-download" /></CButton>
                </span>
              </div>

              <div className="c-message-attachment">
                <CBadge className="mr-2">zip</CBadge> <b>readme.txt</b><i>(7KB)</i>
                <span className="ml-auto">
                  <CButton size="sm" href="#"><CIcon name="cil-eyedropper" /></CButton>
                  <CButton size="sm" href="#"><CIcon name="cil-share" /></CButton>
                  <CButton size="sm" href="#"><CIcon name="cil-cloud-download" /></CButton>
                </span>
              </div>

              <div className="c-message-attachment">
                <CBadge className="mr-2">zip</CBadge> <b>spreadsheet.xls</b><i>(984KB)</i>
                <span className="ml-auto">
                  <CButton size="sm" href="#"><CIcon name="cil-eyedropper" /></CButton>
                  <CButton size="sm" href="#"><CIcon name="cil-share" /></CButton>
                  <CButton size="sm" href="#"><CIcon name="cil-cloud-download" /></CButton>
                </span>
              </div>

              <CForm className="mt-3">
                <CFormGroup>
                  <CTextarea 
                    rows="12" 
                    placeholder="Click here to reply"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CButton color="success" tabIndex="3" type="submit">Send message</CButton>
                </CFormGroup>
              </CForm>
            </div>
        </div>
      </div>
    </>
  )
}

export default Message
