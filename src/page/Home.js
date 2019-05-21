import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../action";
export class Home extends Component {
    state = {
        addFormValue: ""
      };
    
      handleInputChange = event => {
        this.setState({ addFormValue: event.target.value });
      };
    
      handleFormSubmit = event => {
        const { addFormValue } = this.state;
        const { addToDo } = this.props;
        event.preventDefault();
        addToDo({
            title: addFormValue, 
            initial :this.state.addFormValue[0]
        });
        this.setState({ addFormValue: "" });
      };
      render() {
        const { addFormValue } = this.state;
    return (
      <div>
        <div className="container-fluid">
            <div className="row" style={{padding:"0px 50px"}}>
                <div className="col s12 m5 hide-on-med-and-down">
                    <div className="kotak">
                        <div className="photo-home">
                        </div>
                        <div className="col m7 tool-photo valign-wrapper">
                            <div className="row text-number-home">
                                <div className="col m2" id="satu" style={{paddingLeft:"20px",paddingTop:"15px",fontSize:"20px",fontWeight:"bold"}}>01</div>
                                <div className="col m8" style={{paddingTop:"20px"}}>
                                    <div className="progress grey darken-3">
                                        <div className="determinate" style={{width:"50%",backgroundColor:"#f9b301",transition:"left 0.6s ease"}} id="progress"></div>
                                    </div>
                                </div>
                                <div className="col m2" id="dua" style={{paddingRight:"20px",paddingTop:"15px",fontSize:"20px",fontWeight:"bold",color:"#f9b3015e"}}>02</div>
                            </div>
                        </div>
                        <div className="col m5 tool-photos" style={{cursor:"pointer",padding:"0px"}}>
                            <div className="col m6 geser-gambar valign-wrapper" id="geser-kiri">
                                <i className="material-icons" style={{transform:"rotate(180deg)",margin:"0px auto"}}>play_arrow</i>
                            </div>
                            <div className="col m6 geser-gambar valign-wrapper" id="geser-kanan">
                                <i className="material-icons" style={{margin:"0px auto"}}>play_arrow</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7" style={{paddingTop:"40px"}}>
                    <div className="kotak" style={{backgroundColor:"transparent",textAlign:"left",height:"50vh"}}>
                        <h1 style={{fontWeight:"bold"}}>Mutiara Fitri Tasir</h1>
                        <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h5 style={{fontWeight:"bold"}}>Read More <i className="material-icons">play_arrow</i></h5>
                        <br/><p style={{fontWeight:"bold"}}>Hai! kenalan yuk! Siapa namamu ?</p>
                        <div className="kotak-form col m6" style={{padding:"0px"}}>
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="col m12" style={{padding:"0px"}}>
                                    <div className="col m8" style={{padding:"0px"}}>
                                        <input type="text" name="name" id="name" placeholder="enter your name" value={addFormValue} onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="col m4" style={{padding:"0px"}}>
                                        <input type="submit" value="Kirim" className="btn black-text" style={{fontWeight:"bold"}}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ data }) => {
    return {
      data
    };
  };
  
  export default connect(mapStateToProps, actions)(Home);