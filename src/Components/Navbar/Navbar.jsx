import React,{useEffect, useRef,useState} from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar =() =>{
    const [active, setActive] = useState('navBar')
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    // function to toggle navbar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    // function to remove navbar
    const removeNav = () =>{
        setActive('navBar ')
    }
    //
    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })
    // console.log(height);
    return(
        
        <section className="navBarSection" style={{height:height+'px'}}>
            <header className="header flex"  ref={ref} >
                <div className="logoDiv" >
                    <NavLink to="/" className="logo flex">
                        <h1> <MdOutlineTravelExplore className="icon"/>Tour</h1>
                    </NavLink>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem active">
                            <NavLink to="" className="navLink">DU LỊCH</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/ve-may-bay" className="navLink">VÉ MÁY BAY</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/khach-san" className="navLink">KHÁCH SẠN</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/thue-xe" className="navLink">THUÊ XE</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/tin-tuc" className="navLink">TIN TỨC</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/gioi-thieu" className="navLink">GIỚI THIỆU</NavLink>
                        </li>
                        <button className="btn">
                            <NavLink to="/du-lich/tim-kiem">ĐẶT LỊCH</NavLink>
                        </button>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar