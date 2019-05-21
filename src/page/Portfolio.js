import React, { Component } from 'react';
import '../css/Portfolio.css';
import logo from '../img/profileKanan.png';
import logo2 from '../img/profileKiri.png';

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="background"><div className="kiri kiri-contact"></div><div className="kanan"></div></div>
        <div className="row">
          <div className="col s12 m5 center-align" style={{marginTop:"50px"}}>
            <h1 style={{fontWeight:"700",margin:"0px"}}>CURRICULLUM</h1>
            <p style={{color:"white",fontSize:"35px",margin:"0px"}}>VITAE</p>
            <p style={{fontSize:"15px",margin:"0px",marginTop:"30px",marginBottom:"30px",textAlign:"justify",width:"77%",margin:"0px auto",fontWeight:"700"}}>I'm a cool girl and I like to study computer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="https://drive.google.com/file/d/1CGVY8o6vNr2CglXFIQSH_FSxbIAmh4_k/view?usp=sharing" className="btn button-profile">Download</a>
            <img src={logo2} alt="" style={{width:"40%",height:"27%",position:"absolute",bottom:"-0px",left:"-25px"}}/>
          </div>
          <div className="col s12 m7 kanan-portfolio">
            <img src={logo} alt="" style={{width:"76%",marginTop:"30px"}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
