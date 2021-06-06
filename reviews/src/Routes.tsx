import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import App from "./App";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Routes = () => {
  return (
  <BrowserRouter>
    <Switch>
        <Route path={'/'} exact={true} component={App} />
        <Route path={'/page1'} exact={true} component={Page1} />
        <Route path={'/page2'} exact={true} component={Page2} />
    </Switch>
  </BrowserRouter>
  ) 
};

export default Routes;
