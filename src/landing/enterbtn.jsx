import React, { Component } from 'react';
import "./enterbtn.css";
const Enterbtn = ({goHome2}) => {
  return (
    <div className='enterbox flex jcfs borderx'>
      <div className="box1 borderx rel flex fdc">
        <div className="text1 ffamily1">
          WELCOME TO<br/>
          THE BORED APE<br/>
          YACHT CLUB
        </div>
        <div className="enterbtn borderx" onClick={() => {goHome2("go")}}>
        ENTER
          <span className="enter-decor abs"></span>
        </div>
      </div>
      <div className="text2 borderx">
        ← SCROLL DOWN
      </div>
      <div className="text3 borderx">
      ← SCROLL DOWN
      </div>
    </div>
    );
}
export default Enterbtn;