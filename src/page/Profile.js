import React, { Component } from 'react'
import '../css/Profile.css';
import axios from 'axios';
import _ from "lodash";
import * as actions from "../action";
import { connect } from "react-redux";
import kotak from '../img/satu.png';

export class Profile extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://mutiara-fitri.firebaseio.com/infoData.json?auth%3F=AIzaSyDHnREMecIw3rbKxTjQikBk8GBygDjde6g`)
            .then((response) => {
                console.log(response);
                const persons = response.data;
                this.setState({ persons });
                console.log(persons);
            });
    }

    renderToDos() {
        const { data } = this.props;
        const toDos = _.map(data, (value, key) => {
            return <div key={key} className="col m1 btn btn-floating yellow" style={{ width: "40px", height: "40px", marginRight: "5px", marginBottom: "5px" }}>{value.initial}</div>;
        });
           if (!_.isEmpty(toDos)) {
            return toDos.slice(0, 13);
        }
        return (
            <div className="col s12 m12">aku belum punya teman :(</div>
        );
    }

    renderJumlah(){
        const jumlahData = <div>{this.state.persons.jumlah}</div>;;
        if ((jumlahData)!=null) {
            return jumlahData;
        }
        return (
            <div className="col s12 m12">aku belum punya teman :(</div>
        );
    }

    componentWillMount() {
        this.props.fetchToDos();
    }
    render() {
        return (
            <div>
                <div className="background"><div className="kiri kiri-profile wow slideInLeft"></div><div className="kanan"></div></div>
                <br /><br />
                <div className="isi wow fadeIn">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col m6"><img src={kotak} alt="" style={{width:"500px",position:"absolute",left:"9.2%",top:"90px",zIndex:"-99"}}/></div>
                            <div className="col m6" style={{ paddingLeft: "70px" }}>
                                <div className="row" style={{ textAlign: "left", marginBottom: "60px" }}>
                                    <div className="col m12">
                                        <div className="judul grey-text">Nama</div>
                                        <h5 className="value" style={{ fontWeight: "bold", margin: "0px" }}>Mutiara Fitri Tasir</h5>
                                    </div>
                                </div>
                                <div className="row" style={{ textAlign: "left", marginBottom: "60px" }}>
                                    <div className="col m12">
                                        <div className="judul grey-text">Jurusan</div>
                                        <h5 className="value" style={{ fontWeight: "bold", margin: "0px" }}>Ilmu Komputer dan Sistem Informasi</h5>
                                    </div>
                                </div>
                                <div className="row" style={{ textAlign: "left", marginBottom: "60px" }}>
                                    <div className="col m6">
                                        <div className="judul grey-text">Teman Menyapa !</div>
                                        <h5 className="value" style={{ fontWeight: "bold", margin: "0px" }}>{this.renderJumlah()}</h5>
                                    </div>
                                </div>
                                <div className="row" style={{ textAlign: "left", marginBottom: "60px" }}>
                                    <div className="col m12">
                                        <div className="judul grey-text">Hallo, nice to meet you  </div>
                                        <br />
                                        <div className="row">
                                            {this.renderToDos()}
                                        </div>
                                    </div>
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

export default connect(mapStateToProps, actions)(Profile);