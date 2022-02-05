import React from 'react';
import Home from './container/Home';
import Navigationitems from './componnent/navigation/navigationitems/navigationitems';
import {Switch,Route} from 'react-router-dom';
function App(){


  return(
    <div>
      
      <Switch>

      <Route path="/" render={()=><Home></Home>}/>
      
      </Switch>
      
    </div>
  )
}
export default App;