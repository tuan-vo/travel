import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import css from './DetailNew.css'
export const DetailNew = (props) => {
    let { id } = useParams();
    return (
        <section className='new__section'>
            {
                props.data.map(({ value, key }) => {
                    if(key === id)
                    return(
                        <div className="container">
                        <div>
                            <h1 className='title-dd'>{value.title}</h1>
                            <div className="wrap">
                                <div className="main-dd">
                                    <img src={value.img} alt="" />
                                    <div className="content">
                                        <p>{value.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </section>
    )
}
