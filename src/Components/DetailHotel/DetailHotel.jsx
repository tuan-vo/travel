import React, { useState } from 'react'
import css from './DetailHotel.css'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { FaHotel } from 'react-icons/fa'
import { IoMdPricetag } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import Rating from "@mui/material/Rating";
export default function DetailHotel(props) {
  let { id } = useParams();
  const [valueS, setValueS] = useState(2);
  const data = props.data;
  return (
    <section className='DHSection'>
      <div className="container">
        {
          data.map(({ key, value }) => {
            if (key == id)
              return (
                <div>
                  <h1>{value.name}</h1>
                  <div className="wrap-main">
                    <div className="img">
                      <img src={value.img} alt="" />
                    </div>
                    <div className="box">
                      <ul>
                        <li>
                          <p className='title'> <AiFillStar /> Đánh giá:</p>
                          <p> <Rating name="read-only" value={value.star} readOnly /></p>
                        </li>
                        <li>
                          <p className='title'> <FaHotel /> Trang thiết bị:</p>
                        </li>
                        <li>
                          <p className='title'> <IoMdPricetag /> Giá từ:</p>
                          <p className='price'>{new Intl.NumberFormat().format(value.price)} đ</p>
                        </li>
                      </ul>
                      <Link to='dat-phong' className='btn'>
                        Liên hệ
                      </Link>
                    </div>
                  </div>
                  <div className="about">
                    {value.content}
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  )
}
