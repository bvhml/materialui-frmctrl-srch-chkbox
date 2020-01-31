import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import CustomFormControl from './components/CustomFormControl'

function App() {
  
  return (

    <Router>
      <Route path="/" exact component={CustomFormControl}/>
    </Router>
  )
}

export default (App)
