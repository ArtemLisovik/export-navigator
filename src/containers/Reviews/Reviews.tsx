// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Review } from './Review';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Reviews.scss'
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [slidersPerView, setSlidersPerView] = useState<number>(3)


  const getWindowSize = () => {
    if (window.innerWidth < 700) {
      setSlidersPerView(2)
    } else {
      setSlidersPerView(3)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return () => {
        window.removeEventListener('resize', getWindowSize);
    };
}, [slidersPerView]);


  return (
    <section className="reviews">
      <div className="reviews__container container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={slidersPerView}
          navigation={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
        </Swiper>
      </div>
    </section>

  );
};