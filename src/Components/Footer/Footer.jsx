import React,{useEffect} from "react";
import './Footer.css'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import  {AiOutlineTwitter} from 'react-icons/ai'
import  {AiFillYoutube} from 'react-icons/ai'
import  {AiFillInstagram} from 'react-icons/ai'
import  {FaTripadvisor} from 'react-icons/fa'
import  {FiChevronRight} from 'react-icons/fi'
// import video from '../../../public/Assets/video/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src='https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/videos%2Fvideo.mp4?alt=media&token=228ca630-d7c4-4311-a468-60f0e17f7e1b' loop autoPlay muted type="video/mp4"></video>
                {/* <video src={video} loop autoPlay muted type="video/mp4"></video> */}
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>LIÊN LẠC</small>
                        <h2>Với chúng tôi</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Nhập địa chỉ gmail" />
                        <button data-aos="fade-up" className="btn flex">
                         <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />  Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagaph">
                            
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>

                    </div>

                    <div className="footerLinks grid">
                        {/* Gr one */}
                        {/* <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li> 

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div> */}
                        {/* Gr two */}
                        {/* <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li> 

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div> */}
                        {/* Gr three */}
                        {/* <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Vietnam
                            </li> 

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Japan
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Korea
                            </li>
                        </div> */}
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE</small>
                        <small>COPYRIGHTS TUANVO - 2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer