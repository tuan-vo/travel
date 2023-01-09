import React, { Component } from 'react'
import { dataPlaneTickets,BookingdataHotel } from '../../firebase'
import { push } from "firebase/database";
export default class ContactForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id:this.props.id,
            name: '',
            tel: '',
            address: '',
            email:'',
            note: '',
            abc: '',
            check: false
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name ,":", value);
        this.setState({ [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id == 'vmb') {
            push(dataPlaneTickets, {
                name: this.state.name,
                tel: this.state.tel,
                address: this.state.address,
                email: this.state.email,
                note: this.state.note,
                abc: this.state.abc,
                check: this.state.check
            });
            alert("Bạn đã gửi thông tin đặt vé máy bay thành công")
        }else{
            push(BookingdataHotel, {
                idHotel:this.state.id,
                name: this.state.name,
                tel: this.state.tel,
                address: this.state.address,
                email: this.state.email,
                note: this.state.note,
                abc: this.state.abc,
                check: this.state.check
                
            });
            alert("Bạn đã gửi thông tin phòng thành công")
        }
    }
     onlyNumberKey(evt) {
              
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
    }
  render() {
    // console.log(this.props.id);
    return (
        <form action="" onSubmit={(event) => { this.handleSubmit(event) }} className="right">
        <div className='box'>
            <div className="wrap-input">
                <label>Họ tên: *</label>
                <input onChange={(event) => {this.isChange(event) }} required className='ip' name='name' type="text" />
            </div>
            <div className="wrap-input">
                <label>Email: *</label>
                <input onChange={(event) => {this.isChange(event) }} required className='ip' name='email' type="email" />
            </div>
            <div className="wrap-input">
                <label>Số điện thoại: *</label>
                <input onChange={(event) => { this.isChange(event) }} required className='ip' name='tel' type="tell" minLength={9} maxLength={10} inputmode="numeric" pattern="[0-9]*"/>
            </div>
            <div className="wrap-input">
                <label>Địa chỉ: </label>
                <input onChange={(event) => { this.isChange(event) }} className='ip' name='address' type="text" />
            </div>
            <div className="wrap-input">
                <label>Yêu cầu:</label>
                <textarea onChange={(event) => { this.isChange(event) }} className='ip' name='note' rows="3"></textarea>
            </div>
            <div className="wrap-input">
                <label>Bạn biến thông tin qua:</label>
                <input onChange={(event) => { this.isChange(event) }} className='ip' name='abc' type="text" />
            </div>
        </div>
        <p className='attention'>Dấu * phải bắt buộc nhập đầy đủ thông tin.</p>
        <input type="submit" className='btn' value="Gửi" />
    </form>
    )
  }
}
