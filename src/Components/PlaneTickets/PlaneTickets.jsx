import React, { Component } from 'react';
import css from './PlaneTickets.css'
import {BsFacebook} from 'react-icons/bs'
import {HiOutlineMailOpen} from 'react-icons/hi'
import { Link } from 'react-router-dom';
class PlaneTickets extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id : 'vmb'
        }
    }
    
    render() {
        
        return (
            <section className='PTSection'>
                <video src='https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/videos%2FPlane.mp4?alt=media&token=c1d492ff-fcff-4cb1-a5b6-c94696b6aef4' muted autoPlay loop type="video/mp4"></video>
                <div className='container'>
                    <h1>Vé máy bay</h1>
                    <p><b>Phòng Vé máy bay công ty Tour du lịch</b> là một trong những đại lý được ủy quyền của nhiều hãng hàng không trong nước và quốc tế.
                        Quý khách có thể đặt vé máy bay giá rẻ trực tuyến <i>đơn giản, an toàn, tiết kiệm</i> ngay tại <i><b>Website Tour du lịch</b></i>.
                        Đồng thời cũng có thể so sánh vé máy bay nội địa, quốc tế trực tiếp từ các hãng hàng không đồng thời thường xuyên cập nhật khuyến mãi, ưu đãi lớn - Dịch vụ tin cậy, hỗ trợ 24/7.Bạn có thể inbox trực tiếp cho chúng tôi qua Fanpage  Vé máy bay giá rẻ,hoặc gửi Mail qua địa chỉ <a href="mailto:phongve@tourdulich.com.vn">phongve@tourdulich.com.vn</a> </p>
                    <div className='flex'>
                        <a className='flex' href="h#"><BsFacebook className="icon"/> facebook.com/vemaybaygiare.tourdulich</a> 
                        <a className='flex' href="#"><HiOutlineMailOpen className="icon"/> phongve@tourdulich.com.vn</a>
                        <Link to={'dat-ve-'+ this.state.id} className="btn">
                            LIÊN HỆ ĐẶT VÉ MÁY BAY
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default PlaneTickets;
