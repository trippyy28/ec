import React,{Component} from 'react';
import HomePage from './pages/homepage/homepage';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
 

/*const HatsPage = () =>(
<div>
<h1> Hats Page </h1>
</div>
	)*/
class App extends Component {
  constructor(){
    super()
    this.state={
    currentUser:null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path ='/shop' component={ShopPage} />
       <Route exact path ='/signin' component={SignInAndSignUp}/>
     </Switch>
 
    </div>

  );
}
}

export default App;
