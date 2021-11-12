import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Email App
const TheEmailApp = React.lazy(() => import('./views/apps/email/TheEmailApp'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const ForgetPassword = React.lazy(() => import('./views/pages/forget-password/ForgetPassword'));
const ChangePassword = React.lazy(() => import('./views/pages/change-password/ChangePassword'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const OTP = React.lazy(() => import('./views/pages/otp/OTP'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/forgot" name="Forget Page" render={props => <ForgetPassword {...props}/>} />
              <Route exact path="/change" name="Forget Page" render={props => <ChangePassword {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/apps/email" name="Email App" render={props => <TheEmailApp {...props}/>} />
              <Route path="/otp" name="OTP" render={props => <OTP {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
