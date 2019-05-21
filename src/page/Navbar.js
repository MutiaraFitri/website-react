import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <nav style={{backgroundColor:"transparent",boxShadow:"none",marginLeft:"-80px",paddingTop:"30px"}}>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="../" style={{fontSize:"18px",fontWeight:"bold",color:"#212121",marginLeft:"25px",marginRight:"25px"}} className="linkNavbar">Home</a></li>
                        <li><a href="/profile" id="Profile-click" style={{fontSize:"18px",fontWeight:"bold",color:"#212121",marginLeft:"25px",marginRight:"25px"}} className="linkNavbar">Profile</a></li>
                        <li><a href="/portfolio" style={{fontSize:"18px",fontWeight:"bold",color:"#212121",marginLeft:"25px",marginRight:"25px"}} className="linkNavbar">Portfolio</a></li>
                        <li><a href="/contact" style={{fontSize:"18px",fontWeight:"bold",color:"#212121",marginLeft:"25px",marginRight:"25px"}} className="linkNavbar">Contact</a></li>
                    </ul>
                </div><br/>
            </nav>
        )
    }
}

export default Navbar;