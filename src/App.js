import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Find } from './components'

function App() {
  
  return (

    <Router>
      <Route path="/" exact component={Find}/>
    </Router>
  )
}

export default (App)
