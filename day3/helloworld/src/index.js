import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*
adding a component : Mount
    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()
 
update a component : Update
    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()
 
remove a component : Remove
    componentWillUnmount()
*/
class ChildComp extends Component{
  state = {}
  constructor(){
    super();
    console.log("ChildComp's constructor was called")
  }
  static getDerivedStateFromProps(){
    console.log("ChildComp's getDerivedStateFromProps was called")
    return true
  }
  componentDidMount(){
    console.log("ChildComp's componentDidMount was called")
  }
  shouldComponentUpdate(){
    console.log("ChildComp's shouldComponentUpdate was called");
    return true
  }
  getSnapshotBeforeUpdate(){
    console.log("ChildComp's getSnapshotBeforeUpdate was called");
    return {}
  }
  componentDidUpdate(){
    console.log("ChildComp's componentDidUpdate was called");
  }
  componentWillUnmount(){
    console.log("ChildComp's componentWillUnmount was called");
  }
  render(){
    console.log("ChildComp render was called")
    return <div>
      <h1>Child Component</h1>
      <h2>Power is : { this.props.pow }</h2>
    </div>
  }
}
class MainApp extends Component{
  state = {
    power : 0,
    show : true
  }
  constructor(){
    super();
    console.log("MainApp's constructor was called");
  }
  static getDerivedStateFromProps(){
    console.log("MainApp's getDerivedStateFromProps was called");
    return true
  }
  componentDidMount(){
    console.log("MainApp's componentDidMount was called");
  }
  render(){
    console.log("MainApp's render was called");
    return <div>
          <h1>Main Component</h1>
          <button onClick={ ()=>{ this.setState({ power : this.state.power + 1 })}}>Increase Power</button>
          <button onClick={ ()=>{ this.setState({ show : !this.state.show})}}>Show / Hide</button>
          {
            this.state.show ? <ChildComp pow={ this.state.power }/> : ''
          }
        </div> 
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);