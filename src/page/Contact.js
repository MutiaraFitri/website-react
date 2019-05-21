import React, { Component } from 'react'
import '../css/Contact.css';
import kotak from '../img/bg.png';
import flatcontact from '../img/satu.png';

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="background"><div className="kiri kiri-contact wow slideInLeft"></div><div className="kanan"></div></div>
        <div className="isi-contact"><img src={kotak} alt="" style={{width:"900px",position:"absolute",left:"18%",height:"500px",top:"100px",zIndex:"-99"}}/></div>
        <div className="content-isi" style={{width:"900px",margin:"0px auto"}}>
        <div className="Contact center-align">
                <div className="container" style={{borderRadius:"20px",padding:"15px 50px"}}>
                    <div className="row isi">
                      <div className="col m6">
                        <img src={flatcontact} alt="hehe" style={{width:"100%" , marginTop:"100px"}}/>
                      </div>
                        <form className="col s6" action="mailto:mutiarafitri99@mail.ugm.ac.id" method="post" style={{paddingLeft:"70px"}}>
                            <div className="row">
                                <div className="col m12">
                                    <h6 style={{fontWeight:"800",marginBottom:"10px",textAlign:"left",marginTop:"60px"}}>Contact Me</h6>
                                <hr width="50px" style={{float:"left",border:"2px solid black"}}/>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <input placeholder="Full Name" id="first_name" type="text" className="validate masukan" style={{backgroundColor:"#e8ecf1", padding:"0px 20px",borderRadius:"60px",border:"none"}}/>
                                </div>
                                <div>
                                    <input placeholder="Email Address" id="last_name" type="text" className="validate" style={{backgroundColor:"#e8ecf1", padding:"0px 20px",borderRadius:"60px",border:"none"}} />
                                </div>
                                <div>
                                    <textarea id="textarea1" placeholder="Message" className="materialize-textarea" style={{backgroundColor:"#e8ecf1", padding:"20px 20px",borderRadius:"20px",border:"none",width:"100%",boxSizing:"content-box",height:"100px"}}></textarea>
                                </div>
                                <div style={{width:"112%"}}>
                                    <button className="btn waves-effect waves-light btnku" type="submit" name="action" style={{width:"100%",borderRadius:"20px"}}>
                                        <div>SUBMIT
                                        <i className="material-icons" style={{position:"absolute"}}>trending_flat</i>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact
