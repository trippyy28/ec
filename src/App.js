import React from 'react';
import HomePage from './pages/homepage/homepage';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
 

/*const HatsPage = () =>(
<div>
<h1> Hats Page </h1>
</div>
	)*/
function App() {
  return (
    <div>
    <Header/>
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path ='/shop' component={ShopPage} />
       <Route exact path ='/signin' component={SignInAndSignUp}/>
     </Switch>
 
    </div>

  );
}

export default App;
