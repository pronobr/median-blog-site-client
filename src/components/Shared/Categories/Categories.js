import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../Categories/Categories.css'
import { Pagination } from "swiper";
const Categories = () => {
    const category =["Home","UI/UX Design","Web Development","Typography","Freelancing","Lifestyle","About Page","More Layouts"]
    return (
        <div className='categories-wapper'>
            <div className='categori-parant'>
                {
                    category.map(items =>{
                        return <li><span>{items}</span></li>
                    })
                }
            </div>

            <div className="responsive-categories">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
                    category.map(items =>{
                        return <SwiperSlide className="slider-item">{items}</SwiperSlide>
                    })
                }
      </Swiper>
            </div>


        </div>
    );
};

export default Categories;