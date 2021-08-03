import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
 
function ChildComp(){
  //  console.log( useState(10) );
// useState
 let [ power, updatePower ] = useState(0);
 
 /*   useEffect(function(){
     // component is mounted
     return function(){
       // when the component is unmounted
     }
   },[// properties to check for update ]) */
 
   useEffect( ()=> console.log("Component Created") ,[]);
   useEffect( ()=> console.log("Power Updated ", power) ,[power]);
   useEffect( ()=> ()=> console.log("Component unmounted"),[]);
 
   return <div>
           <h1>User's List</h1>
           <h2>Power is : { power }</h2>
           <button onClick={ ()=> updatePower(power+1) }>Update Power</button>
         </div>
}
 
function MainApp(){
  let [show, toggleShowHide ] = useState(true)
  return<div>
        <h1>Hooks : Component is shown : { show.toString() }</h1>
        <button onClick={ ()=> toggleShowHide(show = !show)}> Show / Hide </button>
        { show ? <ChildComp/> : '' }
      </div>
}
 
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);