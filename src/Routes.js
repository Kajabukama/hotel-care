import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home/Home';
import About from './component/About/About';

const Routes = () => {

   return (
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={ About } />
      </Switch>
   )
}

export default Routes;