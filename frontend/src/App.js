import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home'
import CreateRecipe from './components/CreateRecipe';
import SingleRecipe from './components/SingleRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
    <Nav />
        <Switch> 
            <Route path='/' exact component={Home} />
            <Route path='/create' exact component={CreateRecipe} />
            <Route path='/recipe/:id' exact component={SingleRecipe} />
            <Route path='/recipe/update/:id' exact component={UpdateRecipe} />
        </Switch>   
    </BrowserRouter>
  );
}

export default App;
