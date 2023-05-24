import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CFade } from '@coreui/react'
import { Compose, Inbox, Message, Template } from './index'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheEmailApp = () => {
  return (
    <Template>
        <Suspense fallback={loading}>
          <Switch>
            <Route 
              exact 
              path="/apps/email/inbox" 
              name="Login Page" 
              render={props => <CFade><Inbox {...props}/></CFade>} 
            />
            <Route 
              exact 
              path="/apps/email/compose" 
              name="Register Page" 
              render={props => <CFade><Compose {...props}/></CFade>} 
            />
            <Route 
              exact 
              path="/apps/email/message" 
              name="Message" 
              render={props => <CFade><Message {...props}/></CFade>} 
            />
            <Redirect from="/apps/email" to="/apps/email/inbox" />
          </Switch>
        </Suspense>
    </Template>
  )
}

export default React.memo(TheEmailApp)