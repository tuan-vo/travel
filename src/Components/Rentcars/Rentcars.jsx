import React, { Component } from 'react'
import css from './Rentcars.css'
import { dataRentcars } from '../../firebase'
import { push } from 'firebase/database';

export default class Rentcars extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dateofhire: '',
      payday: '',
      name: '',
      tel: '',
      email: '',
      note: '',
      service: '',
      check: false
    }
  }

  isChange = (event) => {
    var name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });

  }
  handleSubmit = (event) => {

    push(dataRentcars, {
      dateofhire: this.state.dateofhire,
      payday: this.state.payday,
      name: this.state.name,
      tel: this.state.tel,
      email: this.state.email,
      note: this.state.note,
      service: this.state.service,
      check: this.state.check
    });
    alert("Gửi thông tin thuê xe thành công, nhân viên sẽ gọi cho bạn để xác nhận thông tin của bạn!")

    event.preventDefault();

  }
  render() {
    return (
      <section className='RCSection'>
        <video src='https://firebasestorage.googleapis.com/v0/b/travel-2022-686cf.appspot.com/o/videos%2Fcar.mp4?alt=media&token=afe49fc5-4ffe-4a5b-b56c-446b449c29a9' muted autoPlay loop type="video/mp4"></video>
        <div className='container'>
          <h1 >Xe du lịch</h1>
          <p><b>Xe du lịch </b> – Phòng vận chuyển công ty Du Lịch Việt cung cấp và mang đến cho quý khách dịch vụ cho thuê xe  du lịch, thuê xe dịch vụ với giá cực tốt. Chúng tôi cho thuê  xe đời mới, thuê xe hoa, thuê xe Land Cruiser, thuê xe Audi A4, thuê xe Audi A6, cho thuê xe Audi R8, thuê xe A8, thuê xe Q5, thuê xe Q7. Hay dịch vụ thuê xe đám cưới, thuê xe Sienna, thuê xe Sedona, thuê xe Limousine, thuê xe Universe, thuê xe Limousine dcar,  E200,  E250, S400, S450, S500  từ 4 đến 47 chỗ của tất cả các hãng.</p>
          <form action="" onSubmit={(event)=>{this.handleSubmit(event)}}>
            <h1>THUÊ XE TRỰC TUYẾN</h1>
            <div className='box'>
              <div className="wrap-input">
                <label>Nhập ngày thuê: *</label>
                <input onChange={(event) => { this.isChange(event) }} required className='ip' name='dateofhire' type="date" min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="wrap-input">
                <label>Nhập ngày trả: *</label>
                <input onChange={(event) => { this.isChange(event) }} required className='ip' name='payday' type="date" min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="wrap-input">
                <label>Họ tên: *</label>
                <input onChange={(event) => { this.isChange(event) }} required className='ip' name='name' type="text" />
              </div>
              <div className="wrap-input">
                <label>Email: *</label>
                <input onChange={(event) => { this.isChange(event) }} required className='ip' type="email" name="email" id="" />
              </div>

              <div className="wrap-input">
                <label>Số điện thoại: *</label>
                <input onChange={(event) => { this.isChange(event) }} required className='ip' name='tel' type="tel" />
              </div>
              <div className="wrap-input">
                <label>Chọn loại dịch vụ xe: *</label>
                <select onChange={(event) => { this.isChange(event) }} required class="ip" name="service">
                  <option value="">Chọn dịch vụ</option>
                  <option value="Thuê xe du lịch 4 chỗ">Thuê xe du lịch 4 chỗ</option>
                  <option value="Thuê xe du lịch 7 chỗ">Thuê xe du lịch 7 chỗ</option>
                  <option value="Thuê xe du lịch 16 chỗ">Thuê xe du lịch 16 chỗ</option>
                  <option value="Thuê xe du lịch 24 chỗ">Thuê xe du lịch 24 chỗ</option>
                  <option value="Thuê xe du lịch 29 chỗ">Thuê xe du lịch 29 chỗ</option>
                  <option value="Thuê xe du lịch 35 chỗ">Thuê xe du lịch 35 chỗ</option>
                  <option value="Thuê xe du lịch 39 chỗ">Thuê xe du lịch 39 chỗ</option>
                  <option value="Thuê xe du lịch 45 chỗ">Thuê xe du lịch 45 chỗ</option>
                  <option value="Thuê xe Limousine">Thuê xe Limousine</option>
                  <option value="Thuê xe hoa, xe đám cưới">Thuê xe hoa, xe đám cưới</option>
                </select>
              </div>
              <div className="wrap-input">
                <label>Thông tin thêm và yêu cầu khác:</label>
                <textarea className='ip' name="note" rows="3"></textarea>
              </div>
            </div>
            <p className='attention'>Dấu * phải bắt buộc nhập đầy đủ thông tin.</p>
            <input type="submit" className='btn' value="Thuê xe nhanh" />
          </form>
        </div>
      </section>
    )
  }
}
