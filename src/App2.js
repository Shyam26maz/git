import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import UserForm from './UserForm';
import Title from './Title';

import axios from 'axios';


class App2 extends Component
{

state={
   repos:null,
   openBug : 0,
   closedBug : 0,
   all:0,
   Topen:0,
   Tclosed:0,
   ttl:0,
   len:0,
}
	getUser=(e)=>
	{
		e.preventDefault();
		const user=e.target.elements.username.value;
		const user2=e.target.elements.username2.value;
		var open = 0;
		var closed = 0;
		 var size=0;
		 var p=100;


		axios.get(`https://api.github.com/repos/MagAppZine/${user}/issues?state=${user2}&page=1&per_page=200&access_token=9aac2e187819fd930702679bba90c06577d5b5c0`)
			.then((res)=>{
				//console.log(res);
				const repos= res.data;
				 size=repos.length;
				console.log("<<<<<<",size);
				
				  //console.log("heloo");
				  
       
			     repos.map((bug)=>
				(bug.state==="open")?open =open +1:closed = closed + 1);
				console.log(res);
				this.setState({repos,openBug:open,closedBug:closed,all:open+closed,len:size});
				 console.log(open,closed,open+closed)
				 console.log(repos.length,this.state.len);
		

			})
			
       }
	
	
   


	render()
	{
		return(
			<div className="App">
			<header className="App-header">
			
			</header>
			<Title />
			<UserForm  getUser={this.getUser} />
			<div class="container">
       

        <ul style={{margin:"20px",display:"block"}}>
        <h3 style={{margin:"40px ",display:"inline"}}>HERE ARE BUGS COUNT</h3>
           <li  style={{margin:"40px ",display:"inline"}}class="list-group-item">OPENBUG <span>{this.state.openBug}</span></li>
           <li  style={{margin:"40px",display:"inline"}}class="list-group-item">CLOSEBUG <span>{this.state.closedBug}</span></li>
          <li  style={{margin:"40px",display:"inline"}} class="list-group-item">TOTALBUG <span class="badge">{this.state.all}</span></li>
  </ul>
</div>
			
		
			
            </div>
			);
	}
}
export default App2;