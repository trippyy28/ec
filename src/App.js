import React from 'react';
import HomePage from './pages/homepage/homepage';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
 

const HatsPage = () =>(
<div>
<h1> Hats Page </h1>
</div>
	)
function App() {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path ='/shop' component={ShopPage} />
     </Switch>
 
    </div>

  );
}

export default App;
