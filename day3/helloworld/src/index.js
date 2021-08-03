import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*
you must return a single root element or React.Fragment or its alias <>
events must be camel cased
inline elments must be closed
class and for keywords are reserved
className instead of class
htmlFor instead of for
inputs will become controlled by state by default 
how ever you can use defaultValue to create uncontrolled input
    <input defaultValue="hi"/>
*/
class ChildComp extends Component{
  state = {
    power : 0
  }
/*   
  constructor(){
    super();
    this.increaseHandler = this.increaseHandler.bind(this);
  } 
*/
  increaseHandler = ()=>{
    this.setState({
      power: this.state.power + 1
    })
  }
  
  render(){
    return <>
            <div>
              <h1 className="box">Child Component</h1>
              <h2>Power is : { this.state.power }</h2>
              {/* <button onClick={ this.increaseHandler.bind(this) }>Increase Power</button> */}
              <button onClick={ this.increaseHandler }>Increase Power</button>
              <button>Decrease Power</button>
            </div>
          </>
  }
}
class MainApp extends Component{
  render(){
    return <div>
            <h1>Main Component</h1>
            <hr/>
            <ChildComp/>
          </div>
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);