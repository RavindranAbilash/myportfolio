import React from "react";
import './Testimonials.css'

import Avatar1 from "../../assets/avatar1.jpg"
import Avatar2 from "../../assets/avatar2.jpg"
import Avatar3 from "../../assets/avatar3.jpg"
import Avatar4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: Avatar1,
        name: "Ravindran Abilash",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        avatar: Avatar2,
        name: "Ravindran Abilash",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        avatar: Avatar3,
        name: "Ravindran Abilash",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        avatar: Avatar4,
        name: "Ravindran Abilash",
        review:"imen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

const Testimonials=()=>{
    return(
        <section id="testimonials">
            <h5>Review from Client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                    data.map(({avatar,name, review},index)=> {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="avatar one"/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </section>
    )
}

export default Testimonials;