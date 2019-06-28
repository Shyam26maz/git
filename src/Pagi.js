import React ,{Component} from 'react';
import axios from 'axios';



class Pagi extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			data:[],
			user:1,
			loading:false,

		}
		this.getData=this.getData.bind(this);
	}
	getData()
	{
		const {userId}=this.state
		this.setState
		({
			data:[],
			loading:true,
		})
		axios.get(`https://api.github.com/repos/MagAppZine/Core/issues?state=all&per_page=100&access_token=9aac2e187819fd930702679bba90c06577d5b5c0`)
		.then(json=>{
			console.log(">>>>>>>>>>>",json.data)
			this.setState({data:json.data})
		})
	}

	componentDidMount()
	{
		this.getData();
	}
	render()
	{

		return(
          <div>
              <h2> const theData=this.state.data.map((d)=>{
		           <h2 key={d.id}>
		           {d.body}
		            ,{d.milestone}</h2>
		          
                })
		           </h2>
	                                 
			<UserId name="1" onClick={this.btnClick} />
	   </div>

		)}
          }

const UserId = (props) => {
	return(
	      <button onClick={props.onClick} value={props.name}> {props.name}</button>
	      )
}
export default Pagi