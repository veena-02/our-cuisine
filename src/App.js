import React from 'react';
import Cuisines from "./Components/Cuisines/Cuisines";
import Categories from "./Components/Categories/Categories";
import {Route, Switch} from 'react-router-dom';
import Recipes from "./Components/Recipes/Recipes";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import './App.css';
const App=()=>{
  return(
    <>      
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Recipes/:cuisine" component={Recipes} />
      <Route exact path="/Cuisines" component={Cuisines} />
      <Route exact path="/Categories" component={Categories} />
      </Switch>
    </>
  );
}
export default App;