// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Review } from './Review';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Reviews.scss'

export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews__container container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
    </section>

  );
};