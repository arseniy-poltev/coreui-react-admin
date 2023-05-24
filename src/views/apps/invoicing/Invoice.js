/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CButton
} from '@coreui/react'
import { canUseDOM } from '@coreui/react/src/utils/helper'
import CIcon from '@coreui/icons-react'

const Invoice = () => {
  const print = e => {
    e.preventDefault()
    canUseDOM && window.print()
  }

  return (
    <CCard>
      <CCardHeader>
        Invoice <strong>#90-98792</strong>
        <CButton className="mr-1 float-right" href="" tag="a" size="sm" color="secondary" onClick={print} ><CIcon name="cil-print" /> Print</CButton>
        <CButton className="mr-1 float-right" href="" tag="a" size="sm" color="info"><CIcon name="cil-save" /> Save</CButton>
      </CCardHeader>
      <CCardBody>
        <CRow className="mb-4">
          <CCol sm="4">
            <h6 className="mb-3">From:</h6>
            <div><strong>BootstrapMaster.com</strong></div>
            <div>Konopnickiej 42</div>
            <div>43-190 Mikolow, Poland</div>
            <div>Email: lukasz@bootstrapmaster.com</div>
            <div>Phone: +48 123 456 789</div>
          </CCol>
          <CCol sm="4">
            <h6 className="mb-3">To:</h6>
            <div><strong>BootstrapMaster.com</strong></div>
            <div>Konopnickiej 42</div>
            <div>43-190 Mikolow, Poland</div>
            <div>Email: lukasz@bootstrapmaster.com</div>
            <div>Phone: +48 123 456 789</div>
          </CCol>
          <CCol sm="4">
            <h6 className="mb-3">Details:</h6>
            <div>Invoice <strong>#90-98792</strong></div>
            <div>March 30, 2013</div>
            <div>VAT: PL9877281777</div>
            <div>Account Name: BootstrapMaster.com</div>
            <div><strong>SWIFT code: 99 8888 7777 6666 5555</strong></div>
          </CCol>
        </CRow>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="center">#</th>
              <th>Item</th>
              <th>Description</th>
              <th className="center">Quantity</th>
              <th className="right">Unit Cost</th>
              <th className="right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center">1</td>
              <td className="left">Origin License</td>
              <td className="left">Extended License</td>
              <td className="center">1</td>
              <td className="right">$999,00</td>
              <td className="right">$999,00</td>
            </tr>
            <tr>
              <td className="center">2</td>
              <td className="left">Custom Services</td>
              <td className="left">Instalation and Customization (cost per hour)</td>
              <td className="center">20</td>
              <td className="right">$150,00</td>
              <td className="right">$3.000,00</td>
            </tr>
            <tr>
              <td className="center">3</td>
              <td className="left">Hosting</td>
              <td className="left">1 year subcription</td>
              <td className="center">1</td>
              <td className="right">$499,00</td>
              <td className="right">$499,00</td>
            </tr>
            <tr>
              <td className="center">4</td>
              <td className="left">Platinum Support</td>
              <td className="left">1 year subcription 24/7</td>
              <td className="center">1</td>
              <td className="right">$3.999,00</td>
              <td className="right">$3.999,00</td>
            </tr>
          </tbody>
        </table>
        <CRow>
          <CCol lg="4" sm="5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </CCol>
          <CCol lg="4" sm="5" className="ml-auto">
            <table className="table table-clear">
              <tbody>
                <tr>
                  <td className="left"><strong>Subtotal</strong></td>
                  <td className="right">$8.497,00</td>
                </tr>
                <tr>
                  <td className="left"><strong>Discount (20%)</strong></td>
                  <td className="right">$1,699,40</td>
                </tr>
                <tr>
                  <td className="left"><strong>VAT (10%)</strong></td>
                  <td className="right">$679,76</td>
                </tr>
                <tr>
                  <td className="left"><strong>Total</strong></td>
                  <td className="right"><strong>$7.477,36</strong></td>
                </tr>
              </tbody>
            </table>
            <a href="#" className="btn btn-success"><CIcon name="cil-dollar" /> Proceed to Payment</a>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Invoice
