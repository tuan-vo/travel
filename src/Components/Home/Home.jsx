import React, {useEffect,Component} from "react"
import './Home.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FaTripadvisor} from 'react-icons/fa'
import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Main from "../Main/Main"
import { Link } from "react-router-dom"

// const Home = () => {
//     // 

//     useEffect(()=>{
//         Aos.init({duration:2000})
//     },[])
//     return (
//         <>
//         <section className="home">
//             <div className="overlay"></div>
//             <video src={video} muted autoPlay loop type="video/mp4"></video>
//             <div className="homeContent container">
//                 <div className="textDiv">
//                     {/* <span data-aos="fade-up" className="smallText">
//                         Our Packages
//                     </span> */}
//                     <h1 data-aos="fade-up" className="homeTitle">
//                     Tìm kiếm kỳ nghỉ
//                     </h1>
//                 </div>

//                 <div data-aos="fade-up" className="cardDiv grid">
//                     <div className="destinationInput">
//                         <label htmlFor="city">Tìm kiếm điểm đến của bạn:</label>
//                         <div className="input flex">
//                             <input type="text" placeholder="Nhập địa chỉ..." />
//                             <GrLocation classNameicon/>
//                         </div>
//                     </div>
//                     <div className="dateInput">
//                         <label htmlFor="date">Chọn ngày đi:</label>
//                         <div className="input flex">
//                             <input type="date" />
//                         </div>
//                     </div>
//                     <div className="priceInput">
//                         <div className="label_total flex">
//                             <label htmlFor="price">Giá tiền tối đa:</label>
//                             <h3 className="total">50.000.000 đ</h3>
//                         </div>
//                         <div className="input flex">
//                             <input type="range" max="50000000" min="0" />
//                         </div>
//                     </div>
//                     <Link to="du-lich/tim-kiem" className="searchOptions flex">
//                         <HiFilter className="icon"/>
//                         <span>Tìm kiếm</span>
//                     </Link>
//                 </div>

//                 <div data-aos="fade-up" className="homeFooterIcons flex">
//                     <div className="rightIcons">
//                         <FiFacebook className="icon"/>
//                         <FiInstagram className="icon"/>
//                         <FaTripadvisor className="icon"/>
//                     </div>
//                     <div className="leftIcons">
//                         <BsListUl className="icon"/>
//                         <TbApps className="icon"/>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <Main />
//         </>
//     )
// }

// export default Home
export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            location:'',
            date:'',
            price: 5000000

        }
    }
    ischange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        
    }
    btnSreach = () =>{
        var item  ={};
        item.location = this.state.location;
        item.date = this.state.date;
        item.price = this.state.price;
        // console.log(item);
        this.props.getdata(item);
    }
  render() {
    // console.log(this.props.data);
    return (
        <>
        <section className="home">
            <div className="overlay"></div>
            <video src="https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/videos%2FLake.mp4?alt=media&token=b156c240-adb1-4ea8-8023-2b449da1f349" muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    {/* <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span> */}
                    <h1 data-aos="fade-up" className="homeTitle">
                    Tìm kiếm kỳ nghỉ
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Tìm kiếm điểm đến của bạn:</label>
                        <div className="input flex">
                            <input onChange={(event)=>{this.ischange(event)}} name="location" type="text" placeholder="Nhập địa chỉ..." />
                            <GrLocation className='icon'/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Chọn ngày đi:</label>
                        <div className="input flex">
                            <input onChange={(event)=>{this.ischange(event)}} name="date" type="date" min={new Date().toISOString().split('T')[0]}/>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Giá tiền tối đa:</label>
                            <h3 className="total">{new Intl.NumberFormat().format(this.state.price)} đ</h3>
                        </div>
                        <div className="input flex">
                            <input onChange={(event)=>{this.ischange(event)}} type="range" name="price" max="5000000" min="0" defaultValue={5000000} step={100000} />
                        </div>
                    </div>
                    <Link to="du-lich/tim-kiem" onClick={()=>{this.btnSreach()}} className="searchOptions flex">
                        <HiFilter className="icon"/>
                        <span>Tìm kiếm</span>
                    </Link>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <FiInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>
                    <div className="leftIcons">
                        <BsListUl className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
        <Main  data = {this.props.data}/>
        </>
    )
  }
}
