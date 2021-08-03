import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
  state = {
    username : "",
    userage : 0
  }
  render(){
    return <div>
          <h1>Login Form</h1>
        </div> 
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);