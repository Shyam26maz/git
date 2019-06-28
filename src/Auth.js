import React, { Component } from 'react';
//import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';

class Auth extends Component 
{
  constructor(props)
  {
    super(props);
    this.state={
      username:'',
      password:'',
      redirect: false
    }
    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);

  }
  login()
  {
    if (this.state.username && this.state.password) 
    {
      PostData('login',this.state).then((result)=>{
        let responseJSON=result;
        if(responseJSON.userData)
        {
          sessionStorage.setItem('userData',responseJSON);
          this.setState({redirect:true});
        }
        else
        {
          console.log("login error");
        }
      })

    }
  }
  onChange(e)
  {
    this.setState({[e.target.name]:e.target.value});
    //console.log(this.state);
  }
  render()
  {
    if(this.state.redirect)
      {
        return(<Redirect to={'/index'}/>);
      }
    return(
      <div className="row small-up medium-up-3 large-up-4">
      <div className="column">
         <h2>Login Page</h2>
         <label> Username</label>
         <input type="text" name="username" placeholder="username"onChange={this.onChange}/><br/><br/>
         <label>Password</label>
         <input type="password" name="password" placeholder="password"onChange={this.onChange}/>  
         <br/>
         <input type="submit"  onClick={this.login} name="submit" value="login"placeholder="submit"/>      
      </div>
      </div>
    );
  }
}

export default Auth;