import React,{useEffect,Component} from "react";
import { collection, doc, setDoc } from "firebase/firestore"; 
import {connect} from '../../firebase';
import './Main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'



import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";


class Main extends Component {
    
    render() {
        // console.log(this.props.data);
        const Data = this.props.data;
        return (
            <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                Các điểm đến du lịch
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({key,value}, i)=>{
                        return(
                            <div
                            key={i}
                             data-aos="fade-up"
                            className="singleDestination">
                                <div className="imageDiv">
                                    {/* <img src={img} alt=""/> */}
                                    <img src={value.img} alt=""/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {value.title}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{value.location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="price">
                                            <h5> {new Intl.NumberFormat().format(value.price)} đ</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p></p>
                                    </div>
                                    <Link to={"/du-lich/chi-tiet-" + key} key={key} className="btn flex">
                                        Chi tiết <HiOutlineClipboardCheck className="icon"/>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
        );
    }
}

export default Main;