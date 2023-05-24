import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CSpinner
} from '@coreui/react'

import 'spinkit/spinkit.min.css';

const Spinners = () => {

  return (
    <>
      <CRow>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Border (default)
            </CCardHeader>
            <CCardBody>
              <CSpinner/>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Border (size small)
            </CCardHeader>
            <CCardBody>
              <CSpinner size="sm"/>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Grow
            </CCardHeader>
            <CCardBody>
              <CSpinner grow color="primary"/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <hr/>

      <CCard>
        <CCardHeader>
          Spinners - SpinKit{' '}
          <a href="https://coreui.io/pro/react/" rel="noopener noreferrer" target="_blank">CoreUI Pro Component</a>
          <div className="card-header-actions">
            <a href="https://github.com/tobiasahlin/SpinKit" rel="noopener noreferrer" target="_blank" className="card-header-action">
            <small className="text-muted">docs</small></a>
          </div>
        </CCardHeader>
        <CCardBody>
          <p>
            Simple loading spinners animated with CSS. SpinKit uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.
          </p>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Rotating plane
            </CCardHeader>
            <CCardBody>
              <div className="sk-plane"></div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Double bounce
            </CCardHeader>
            <CCardBody>
              <div className="sk-bounce">
                <div className="sk-bounce-dot"></div>
                <div className="sk-bounce-dot"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Wave
            </CCardHeader>
            <CCardBody>
              <div className="sk-wave">
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
                <div className="sk-wave-rect"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Wandering cubes
            </CCardHeader>
            <CCardBody>
              <div className="sk-wander">
                <div className="sk-wander-cube"></div>
                <div className="sk-wander-cube"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Pulse
            </CCardHeader>
            <CCardBody>
              <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Chasing dots
            </CCardHeader>
            <CCardBody>
              <div className="sk-swing">
                <div className="sk-swing-dot"></div>
                <div className="sk-swing-dot"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Three bounce
            </CCardHeader>
            <CCardBody>
              <div className="sk-flow">
                <div className="sk-flow-dot"></div>
                <div className="sk-flow-dot"></div>
                <div className="sk-flow-dot"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Circle
            </CCardHeader>
            <CCardBody>
              <div className="sk-circle">
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
                <div className="sk-circle-dot"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Cube grid
            </CCardHeader>
            <CCardBody>
              <div className="sk-grid">
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Fading circle
            </CCardHeader>
            <CCardBody>
              <div className="sk-circle-fade">
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
                <div className="sk-circle-fade-dot"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4" md="6">
          <CCard>
            <CCardHeader>
              Folding Cube
            </CCardHeader>
            <CCardBody>
              <div className="sk-fold">
                <div className="sk-fold-cube"></div>
                <div className="sk-fold-cube"></div>
                <div className="sk-fold-cube"></div>
                <div className="sk-fold-cube"></div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Spinners
