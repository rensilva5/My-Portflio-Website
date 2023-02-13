import React from 'react'
import './testimonials.css'
import avar1 from '../../assets/avatar1.jpg'
import avar2 from '../../assets/avatar2.jpg'
import avar3 from '../../assets/avatar3.jpg'
import avar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avar1,
    name: "Tina Thomson",
    review: "Lorem ipsum dolor consectetur adipisicing."
  },
  {
    avatar: avar2,
    name: "Lisa Martin",
    review: "Tipsum dolor consectetur adipisicing."
  },
  {
    avatar: avar3,
    name: "Lina Pardo",
    review: "Poem lorem ipsum dolor consectetur adipisicing."
  },
  {
    avatar: avar4,
    name: "Mr.Thomas",
    review: "Lorem consectetur adipisicing."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
          data.map(({ avatar, review, name }, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="avatars"/>
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
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

export default Testimonials