// import Swiper core and required modules
import { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Review } from './Review';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Reviews.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import { getReviews } from '../store/reviewsThunk';
import { Loader } from 'ui';


export const Reviews = () => {
  const [slidersPerView, setSlidersPerView] = useState<number>(3)

  const dispatch = useDispatch<AppDispatch>()

  const { loading, reviews } = useSelector((state: RootState) => state.reviews)


  const getWindowSize = () => {
    if (window.innerWidth < 700) {
      setSlidersPerView(2)
    } else {
      setSlidersPerView(3)
    }
  }

  useEffect(() => {
    dispatch(getReviews())
  }, [])

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [slidersPerView]);


  const view = reviews?.map((item, index) => {
    return <SwiperSlide><Review
      name={item.name}
      message={item.message}
      avatar={item.avatar}
      key={index} /></SwiperSlide>
  })


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
          {loading ? <Loader /> : view}
          {/* <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide>
          <SwiperSlide><Review /></SwiperSlide> */}
        </Swiper>
      </div>
    </section>

  );
};