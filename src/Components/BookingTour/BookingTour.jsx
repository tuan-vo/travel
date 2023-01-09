import React, { Component } from 'react'
import css from './BookingTour.css'
import {dataBookingTour} from'../../firebase'
import { push } from 'firebase/database';
export default class BookingTour extends Component {
    constructor(props, context) {
        super(props, context);
        this.state ={
            idtour: this.props.idTour,
            name:'',
            tel:'',
            address:'',
            email:'',
            quantity:1,
            note:'',
            check: false,
            price:this.props.price,
            remain:this.props.remain,
            sumPrice: this.props.price
        }
    }
    
    isChange = (event) =>{
        var name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value,
        });
        
    }
    handleSubmit = (event) =>{
        
        if( this.state.remain == 0){
            alert("Đã hết chổ")
        }else if(this.state.quantity > this.state.remain ){
            alert("Số chỗ đặt vượt quá số lượng còn!")
        }else{
            push(dataBookingTour, {
                idtour:this.state.idtour,
                name: this.state.name,
                tel: this.state.tel,
                address: this.state.address,
                email: this.state.email,
                quantity: this.state.quantity,
                note:this.state.note,
                sumPrice:this.state.sumPrice,
                check: this.state.check
              });
              alert("Gửi thông tin đặt chổ thành công, nhân viên sẽ gọi cho bạn để xác nhận thông tin của bạn!")
        }
        
        event.preventDefault();
        
    }
    clickUpdateQuantity = () =>{
        this.setState({
            sumPrice: this.state.price * this.state.quantity
        })  
    }
    // componentDidMount(){
    //     this.setState({
    //         sumPrice: this.state.price * this.state.quantity
    //     })
    // }
    render() {
        
        console.log(this.state.remain);
        return (
            <div className="form-booking-tour">
                <h1>THÔNG TIN LIÊN HỆ</h1>
                <form action="" onSubmit={(event) => { this.handleSubmit(event) }}>
                    <div className='box'>
                        <div className="wrap-input">
                            <label>Họ tên: *</label>
                            <input onChange={(event) => { this.isChange(event) }} className='ip' required name='name' type="text" />
                        </div>
                        <div className="wrap-input">
                            <label>Email: *</label>
                            <input onChange={(event) => { this.isChange(event) }} className='ip' required name='email' type="email" />
                        </div>
                        <div className="wrap-input">
                            <label>Số điện thoại: *</label>
                            <input onChange={(event) => { this.isChange(event) }} className='ip' required name='tel' type="tel" minLength={9} maxLength={10} inputmode="numeric" pattern="[0-9]*"/>
                        </div>
                        <div className="wrap-input">
                            <label>Địa chỉ:</label>
                            <input onChange={(event) => { this.isChange(event) }} className='ip' name='address' type="text" />
                        </div>
                        <div className="wrap-input">
                            <label>Số người: *</label>
                            <input onChange={(event) => { this.isChange(event) }}  onClick = {()=>{this.clickUpdateQuantity()}}  className='ip' defaultValue={1} required name='quantity' type="number" min={0} max={this.props.remain} />
                        </div>
                        <div className="wrap-input">
                            <label>Ghi chú:</label>
                            <textarea onChange={(event) => { this.isChange(event) }} className='ip' name='note' rows="3"></textarea>
                        </div>
                    </div>
                    <p className='attention'>Dấu * phải bắt buộc nhập đầy đủ thông tin.</p>
                    <h3>Tổng giá tiền: {new Intl.NumberFormat().format(this.state.sumPrice)} đ</h3>
                    <input type="submit" className='btn' value="Hoàn Thành" />
                </form>
            </div>
        )
    }
}
