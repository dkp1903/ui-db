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
    </div>
  }
}
class MainApp extends Component{
  constructor(){
    super();
    console.log("MainApp's constructor was called");
  }
  static getDerivedStateFromProps(){
    console.log("MainApp's getDerivedStateFromProps was called")
    return true
  }
  componentDidMount(){
    console.log("MainApp's componentDidMount was called")
  }
  render(){
    console.log("MainApp's render was called");
    return <div>
          <h1>Main Component</h1>
          <ChildComp/>
        </div> 
  }
}
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);