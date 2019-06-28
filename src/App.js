import React ,{Component}from 'react';
import './App.css';

class App extends Component
{

  constructor()
  {
    super();
    this.state={
      username:null,
      id:null,
      url:null,
      avatar_url:null,
      name:null,
      description:null,
      git_url:null,
      stargazers_count:null,
      forks_count:null,
      open_issues_count:null,
      size:null

    }
  }
  getUser(username)
  {
    return fetch(`https://api.github.com/repos/react/issues?state=all&per_page=100&access_token= 66a7bd57f35b3925a55cdef97ac7c9252f42698b`)
    .then(response =>response.json())
    .then(response=>{console.log(response, "response recieved >>>>>>>>>>>>>>");return response;})
  }
  async handleSubmit(e)
  {
    e.preventDefault();
    let user=await this.getUser(this.refs.username.value);
     this.setState({username:user.username, id:user.id,url:user.url,avatar_url:user.avatar_url});

  }



  getUserRep(repo)
  {
    return fetch(`https://api.github.com/users/shyam26maz`)
    .then(response=>response.json())
    .then(response=>{console.log(response,"response repo..........");return response;})
  }



  async handleSubmit1(e1)
  {
   e1.preventDefault();
   let repo1= await this.getUserRep(this.refs.repo.value);
        this.setState({ name: repo1.name,
        description: repo1.description,
        git_url: repo1.git_url,
        stargazers_count: repo1.stargazers_count,
        forks_count: repo1.forks_count,
        open_issues_count: repo1.open_issues_count,
        size: repo1.size,

     })
  
  }



  render()
  {
    let user,repo1;
    if(this.state.username)
    {
      user=
      <div>
      <h2>{this.state.username}</h2><br/>
                
       <h2> {this.state.id}</h2><br/>
        <h2>{this.state.url}</h2><br/>
       {this.state.avatar_url}<br/>
         <img src={this.state.avatar_url}/>
        
      </div>
    }


  if(this.state.repo)
      {
      repo1=
        <div>
            {this.state.name}<br/>     
            {this.state.description}<br/>
            {this.state.git_url}<br/>
            {this.state.stargazers_count}<br/>
            {this.state.forks_count}   
       </div>
     }


    return (
           <div className="App">
          
                 <form onSubmit={e=>this.handleSubmit(e)}>
                 <input  ref='username' type='text' placeholder='username'/>
                </form>
                <form onSubmit={e1=>this.handleSubmit1(e1)}>
                 <input  ref='repo' type='text' placeholder='reponame'/>
                </form>
                <p>
                {user}

                </p>
                <p>{repo1}</p>
           </div>
          );
     }   
}
export default App;



milestone_code(e)
  { e.preventDefault();
    const milestone=e.target.elements.sprint11.value;
    const repo=e.target.elements.repo.value;

  axios.get(`https://api.github.com/repos/MagAppZine/Core/milestones?state=all&per_page=100&access_token=9aac2e187819fd930702679bba90c06577d5b5c0`)
    .then((res)=>{
      console.log(res);
      var milestone_Code=res.number;
      console.log(milestone_Code);
    }
      )
  }
