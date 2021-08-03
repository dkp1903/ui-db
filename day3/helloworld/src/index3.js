import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
 
class MainApp extends Component{
  state = {
    users : [],
    status : ''
  }
 
  componentDidMount(){
    this.loadDataHandler();
  }
  
  loadDataHandler = ()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      // console.log(res.data);
      this.setState({
        users : res.data
      })
    })
  }
  
  render(){
    return <div>
            <h1>User's List</h1>
            <ol>{
                this.state.users.map((user, idx)=>{
                  return <li key={idx}>{ user.name }</li>
                })
              }</ol>
          </div> 
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);