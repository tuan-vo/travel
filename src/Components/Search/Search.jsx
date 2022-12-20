import React, { Component } from 'react';
import { NumericFormat } from 'react-number-format';
import css from './Search.css'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            location: this.props.dtsreach.location,
            date: this.props.dtsreach.date,
            price: this.props.dtsreach.price
        }
    }
    
   
    //Hàm lấy thông tin từ input:range
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]:value })
        // console.log(this.props.dtsreach);
    }
    btnSreach = (event) =>{
        event.preventDefault();
    }
    render() {
        //  const dtsreach = this.props.dtsreach;
        return (
            <section className='SSearch'>
                <div className="container">
                    <h1>Tìm kiếm</h1>
                    <div className="wrap-main">
                        <div className="boxFilterSearch">
                            <h2>Lọc tour:</h2>
                            <form action="">
                                <div className="wrap-input">
                                    <label htmlFor="">
                                        Địa điểm
                                    </label>
                                    <input className='ip' onChange={(event) => this.isChange(event)} defaultValue={this.props.dtsreach.location} type="text" name="location" id="" />
                                </div>
                                <div className="wrap-input">
                                    <label htmlFor="">
                                        Ngày đi
                                    </label>
                                    <input  className='ip' onChange={(event) => this.isChange(event)} defaultValue={this.props.dtsreach.date} type="date" name="date" id="" min={new Date().toISOString().split('T')[0]} />
                                </div>
                                <div className="wrap-input">
                                    <label htmlFor="">
                                        Chọn giá tour tối đa <p>{(this.state.price==null?0:new Intl.NumberFormat().format(this.state.price))} đ</p>
                                    </label>
                                    <input onChange={(event) => this.isChange(event)} name="price" type="range" defaultValue={(this.state.price==null?0:this.props.dtsreach.price)} min="0" step={100000} max="5000000" />
                                </div>
                                <button onClick={(event)=>{this.btnSreach(event)}} className='btn'>
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>
                        <div className="wrap-search">
                            {
                                this.props.data.map(({key,value}) => {
                                    var count = 0;
                                    this.props.dataBT.forEach(item => {
                                        if (item.value.idtour == key) {
                                            count = count + Number(item.value.quantity);
                                            // console.log(count);
                                        }
                                    });
                                    var remain = value.person - count;
                                    return (
                                        <Link to={'/du-lich/chi-tiet-'+key} className="box-item">
                                            <div className="img">
                                                <img src={value.img} alt="" />
                                            </div>
                                            <div className="content">
                                                <h3>{value.title}</h3>
                                                <div className='time'>
                                                    <p>Thời gian:</p>
                                                    <p className='bgdark'>{value.time}</p>
                                                </div>
                                                <p className='seat'><b>Số chỗ còn:</b> {(remain>0?remain:"Hết chỗ")}</p>
                                                <p className="price">{new Intl.NumberFormat().format(value.price)} đ</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
