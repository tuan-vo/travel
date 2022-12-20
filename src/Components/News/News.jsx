import React, { Component } from 'react'
import css from './News.css'
import { BiCalendar } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default class News extends Component {
  render() {
    console.log(this.props.data);
    return (
      <section className='Nsection' >
        <div className='container' >
          <h1>Tin tức</h1>
          <p className='contentmain'><b>Tin tức Du lịch</b> - Tin tức Du lịch 2022 cung cấp các thông tin Du lịch Việt Nam, Thông tin Du lịch Thế Giới, các Sự kiện Du lịch diễn ra trong ngày. Thông qua các bài viết được cập nhật liên tục, du khách có thể nắm bắt thêm được nhiều thông tin hữu ích về du lịch.</p>
          <hr />
          <div className="grid">
            {
              this.props.data.map(({value,key }) => {
                return(
                  <div className="boxNew">
                  <Link to={'chi-tiet-' + key} className="img">
                    <img src={value.img} alt="" />
                  </Link>
                  <div className="tools">
                    <p><AiOutlineEye />{value.view}</p>
                    <p><BiCalendar />{value.date}</p>
                  </div>
                  <h3><Link to={'chi-tiet-' + key}>{value.title}</Link></h3>
                </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}
