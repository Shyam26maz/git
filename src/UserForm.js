import React from 'react';
import Button from 'react-bootstrap/Button';
import A from './A.css';
const UserForm=(props)=>
{
	return(
<div class="title">

		<form onSubmit={props.getUser} class="form-group" class="btn-group-horizantle" class="p-3 border bg-light">
	
	      <label for="sell"><h3 style={{margin:"120px ",display:"inline"}}>ENTER REPOSITORY NAME</h3></label>
		  <input style={{display:"inline"}} id="sell" type="text" name="username"/>

               <label for="sel1"> ISSUE TYPE</label>
            <select class="form-group" id="sel1" name="username2"style={{margin:"20px",display:"inline"}}>
              <option>all</option>
              <option>close</option>
              <option>open</option>
              
           </select>
 
		  <button style={{margin:"20px",display:"inline"}} class="btn btn-primary">submit</button>
		  </form>

		 
    </div>
		);
}
export default UserForm;