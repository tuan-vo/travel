import React, { Component } from 'react'
import css from './Hotel.css'
import { Link } from 'react-router-dom'
export default class Hotel extends Component {
    render() {
        console.log(this.props.data);
        return (
            <section className='HTSection'>
                <video src='https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/videos%2Fhotel.mp4?alt=media&token=101dec6c-f116-4885-8d32-1364e200e419' muted autoPlay loop type="video/mp4"></video>
                <div className='container'>
                    <h1 >Khách sạn</h1>
                    <p><b>Đặt phòng khách sạn</b> - Tổng hợp hơn 200,000 khách sạn trong nước và quốc tế đang có khuyến mãi giá tốt, quý khách có thể dễ dàng tìm kiếm phòng khách sạn cần đặt ngay tại website công ty Tour du lịch. Bên cạnh việc có thể đặt mua được phòng khách sạn giá rẻ trực tuyến đơn giản, an toàn, tiết kiệm...quý khách còn có thể tham khảo, so sánh giá phòng khách sạn được cập nhật liên tục tại thời điểm quý khách muốn đặt mua.</p>
                    <hr />
                    <div className="secTitle ">
                        <h3 data-aos="fade-right" className="title sale">
                            Khách sạn khuyến mãi
                        </h3>
                    </div>
                    <div className="secHotel grid">
                        {
                            this.props.data.map(({ key, value }) => {
                                return (
                                    <Link to={'chi-tiet-'+key} className='singleHotel' data-aos="fade-up">
                                        <div className='box'>
                                            <div className="overlay"></div>
                                            <img src={value.img} alt="" className='imgHotel' />
                                            <div className="contentHotel">
                                                <h2 className='titleHotel'>{value.name}</h2>
                                                <p className='priceHotel'>Giá: <b>{ new Intl.NumberFormat().format(value.price)}  đ</b></p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className="secTitle ">
                        <h3 data-aos="fade-right" className="title best">
                            Khách sạn Tiêu biểu
                        </h3>
                    </div>


                </div>
            </section>
        )
    }
}
