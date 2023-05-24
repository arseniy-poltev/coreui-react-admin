import React from 'react'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavItem,
  CContainer,
  CCard,
  CCardBody,
  CSidebarMinimizer
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {
  TheAside,
  TheFooter,
  TheHeader
} from '../../../containers'

const EmailNav = ({children}) => {
  return (
    <div className="c-app">
      <CSidebar
        unfoldable
        fixed={true} 
        colorScheme="light"
      >
        <CSidebarBrand className="d-md-down-none" to="/apps/email">
          <CIcon
            className="c-sidebar-brand-full"
            name="logo-negative"
            height={35}
          />
          <CIcon
            className="c-sidebar-brand-minimized"
            name="sygnet"
            height={35}
          />
        </CSidebarBrand>
        <CSidebarNav>
          <CSidebarNavItem 
            color="success"
            to="./compose"
            icon="cil-pencil"
            name="Compose"
          /> 
          <CSidebarNavItem 
            to="./inbox"
            icon="cil-inbox"
            name="Inbox"
            badge={{ text: 4, color: 'danger' }}
          />      
          <CSidebarNavItem 
            icon="cil-star"
            name="Stared"
          />
          <CSidebarNavItem 
            icon="cil-paper-plane"
            name="Sent"
          />
          <CSidebarNavItem 
            icon="cil-trash"
            name="Trash"
          />
          <CSidebarNavItem 
            icon="cil-bookmark"
            name="Important"
            badge={{ text: 5, color: 'info' }}
          />
          <CSidebarNavItem 
            icon="cil-inbox"
            name="Spam"
            badge={{ text: 25, color: 'warning' }}
          />
          <CSidebarNavItem
            to="/"
            className="mt-auto"
            icon="cil-speedometer"
            name="Dashboard"
            badge={{ text: 'NEW', color: 'info' }}
          />
        </CSidebarNav>
        <CSidebarMinimizer/>
      </CSidebar>
      <TheAside/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <div className="c-main">
            <CContainer fluid>
              <CCard className="c-email-app">
                <CCardBody>
                  {children}
                </CCardBody>
              </CCard>
            </CContainer>
          </div>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default EmailNav
