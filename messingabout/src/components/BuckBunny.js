import React, { useState } from 'react';

    export function Bunny() { 
      return (
       <div style={{textAlign: "center"}}> <img src="./buckthebunny.png" alt="buckbunny" style={{width:"50px", paddingTop: "8px"}} /> 
       </div>
    ); 
   };
    export function Style() {
      const [style, showStyle] = useState(false);

      function ShowOnClick(event) {
        showStyle(!style);
      }

      return (
        <div>
        <button onClick={ShowOnClick}>Show/Hide Me</button>
        {style && <p>I'm a bunny</p>}
        </div>
      );
    };
  