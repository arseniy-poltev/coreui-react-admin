import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { getStyle } from '@coreui/utils'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './Draggable.css'
import defaultLayouts from './_layouts'

const breakPoints = {}
breakPoints.xl = parseInt(getStyle('--breakpoint-xl'), 10)
breakPoints.lg = parseInt(getStyle('--breakpoint-lg'), 10)
breakPoints.md = parseInt(getStyle('--breakpoint-md'), 10)
breakPoints.sm = parseInt(getStyle('--breakpoint-sm'), 10)
breakPoints.xs = parseInt(getStyle('--breakpoint-xs'), 10)

const ResponsiveGridLayout = WidthProvider(Responsive);

const Draggable = () => {
  const [layouts, setLayouts] = useState(
    JSON.parse(localStorage.getItem('CoreUI-React-Draggable-Layouts') || 
    JSON.stringify(defaultLayouts))
  )

  const resetLayout = () => {
    setLayouts(JSON.parse(JSON.stringify(defaultLayouts)))
  }

  const onLayoutChange = (layout, layouts) => {
    localStorage.setItem('CoreUI-React-Draggable-Layouts', JSON.stringify(layouts))
    setLayouts(layouts)
  }

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'

  return (
    <ResponsiveGridLayout 
      className="layout" 
      layouts={layouts}
      onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
      breakpoints={breakPoints}
      cols={{xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
      isResizable={false}
      measureBeforeMount={false}
      draggableHandle={".card-header"}
    >
      <CCard
        key="a"
        accentColor="primary"
      >
        <CCardHeader>
          Static Card
          <div className="card-header-actions">
            <CButton 
              color="link" 
              size="sm" 
              className="card-header-action" 
              onClick={resetLayout}
            >Reset Layout</CButton>
          </div>
        </CCardHeader>
        <CCardBody>
          {loremIpsum}
        </CCardBody>
      </CCard>
      <CCard
        
        key="b"
        accentColor="secondary"
      >
        <CCardHeader>
          <CIcon name="cil-cursor-move"></CIcon>
          Drag & Drop Card&nbsp;
          <CBadge href="https://coreui.io/pro/react/" color="danger" rel="noopener noreferrer" target="_blank">
            CoreUI Pro Component
          </CBadge>
        </CCardHeader>
        <CCardBody>
          {loremIpsum}
        </CCardBody>
      </CCard>
      <CCard key="c" accentColor="success">
        <CCardHeader>
          <CIcon name="cil-cursor-move"></CIcon>
          Drag & Drop Card 
        </CCardHeader>
        <CCardBody>
          {loremIpsum}
        </CCardBody>
      </CCard>
      <CCard key="d" accentColor="info">
        <CCardHeader>
          <CIcon name="cil-cursor-move"></CIcon>
          Drag & Drop Card 
        </CCardHeader>
        <CCardBody>
          {loremIpsum}
        </CCardBody>
      </CCard>
      <CCard key="e" accentColor="warning">
        <CCardHeader>
          <CIcon name="cil-cursor-move"></CIcon>
          Drag & Drop Card 
        </CCardHeader>
        <CCardBody>
          {loremIpsum}
        </CCardBody>
      </CCard>
      <CCard key="f" accentColor="danger">
        <CCardHeader>
          <CIcon name="cil-cursor-move"></CIcon>
          Drag & Drop Card 
        </CCardHeader>
        <CCardBody>
          {loremIpsum}
        </CCardBody>
      </CCard>
    </ResponsiveGridLayout>
  )
}

export default Draggable
