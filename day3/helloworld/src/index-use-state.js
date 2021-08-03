import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
 
function MainApp(){
//  console.log( useState(10) );
// useState
 let [ power, updatePower ] = useState(0);
  return <div>
          <h1>User's List</h1>
          <h2>Power is : { power }</h2>
          <button onClick={ ()=> updatePower(power+1) }>Update Power</button>
        </div>
}
 
ReactDOM.render(<MainApp/>,
  document.getElementById('root')
);