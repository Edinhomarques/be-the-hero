import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './Pages/Logon/Logon';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import NewIncident from './Pages/NewIncident/NewIncident';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register"  component={Register} />
        <Route path="/profile"  component={Profile} />
        <Route path="/incidents/new"  component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes