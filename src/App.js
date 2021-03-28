import React from 'react';
import Cuisines from "./Components/Cuisines/Cuisines";
import Categories from "./Components/Categories/Categories";
import {Route, Switch} from 'react-router-dom';
import Recipes from "./Components/RecipesOfCuisines/index";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import RecipesCategory from "./Components/RecipesOfCategory/index";
import Dish from "./Components/Dish/Dish";

import './App.css';
const App=()=>{
  return(
    <>      
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Cuisines/:cuisine" component={Recipes} />
      <Route path="/Categories/:cuisine" component={RecipesCategory} />
      <Route path="/Cuisines" component={Cuisines} />
      <Route path="/Categories" component={Categories} />
      <Route path="/Dish/:dish_name" children={<Dish/>} />
      </Switch>
    </>
  );
}
export default App;