import React, { useState } from 'react';
import './DetailDestination.css'
import { useParams } from 'react-router-dom'
import { push } from 'firebase/database';
import BookingTour from '../BookingTour/BookingTour';



export default function DetailDestination(props) {
    let { id } = useParams();
    // console.log(id);
    const [btnBooking, setbtnBooking] = useState(false);
    var priceTour = 0;
    var remain = 0;
    const BtnBooking = () => {
        if(btnBooking){
            setbtnBooking(!btnBooking);
        }else if(remain <= 0){
            alert("Tour này đã hết chỗ")
        }else{
            setbtnBooking(!btnBooking);
        }
    }


    const openForm = () => {
        if (btnBooking === true) {
            return (
                <BookingTour idTour={id} price={priceTour} remain={remain} />
            )
        }
    }
    const data = props.data;
    return (
        <section className='DDSection'>
            <div className="container">
                {
                    data.map(({ key, value }) => {
                        if (key == id) {
                            var count = 0;
                            props.dataBT.forEach(item => {
                                if (item.value.idtour == id) {
                                    count = count + Number(item.value.quantity);
                                }
                            });
                            
                            remain = value.person - count;
                            priceTour = value.price;
                            return (
                                <div>
                                    <h1 className='title-dd'>{value.title}</h1>
                                    <div className="wrap">
                                        <div className="main-dd">
                                            <img src={value.img} alt="" />
                                            <div className="content">
                                                <p>{value.content}</p>
                                            </div>
                                        </div>
                                        <div className="sidebar">
                                            <div className="boxDetail">
                                                <ul>
                                                    <li><h4>{value.title}</h4></li>
                                                    <li>
                                                        <p className='sidebar-title'>Mã tour:</p>
                                                        <p>{key}</p>
                                                    </li>
                                                    <li>
                                                        <p className='sidebar-title'>Thời gian:</p>
                                                        <p>{value.time}</p>
                                                    </li>
                                                    <li>
                                                        <p className='sidebar-title'>Số lượng người:</p>
                                                        <p>{value.person}</p>
                                                    </li>
                                                    <li>
                                                        <p className='sidebar-title'>Số chỗ còn lại:</p>
                                                        <p>{(remain>0?remain:"hết chỗ")}</p>
                                                    </li>
                                                    <li>
                                                        <p className='sidebar-title'>Ngày đi:</p>
                                                        <p>{value.date}</p>
                                                    </li>
                                                    <li>
                                                        <p className='sidebar-title'>Phương tiện:</p>
                                                        <p>Máy bay</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="boxPrice">
                                                <h2 className="price">{new Intl.NumberFormat().format(value.price)} đ</h2>
                                                <button onClick={() => { BtnBooking() }} className='btn booking'>Đặt Tour</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {
                    openForm()
                }
            </div>
        </section>
    );
}
