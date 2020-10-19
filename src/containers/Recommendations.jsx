import React from 'react'
import './Recommendations.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classItem from '../classItems'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SlideItem from '../components/SlideItem';

const Recommendations = ({h2title}) => {

    const newClasses = Object
        .keys(classItem)
            .map(key => (
                <SwiperSlide>
                    <SlideItem 
                img={classItem[key].img}
                teacher={classItem[key].teacher}
                title={classItem[key].title}
                price={classItem[key].price}
                /></SwiperSlide>
            ))

    return (
       <>
        <div className="recommandation mt-4 mb-4">
         <div className="container-fluid">
            <h4 className="mb-3">{h2title}</h4>
        <Swiper
          spaceBetween={10}
          breakpoints = {{
              640 : {
                  width : 640,
                  slidesPerView : 1
              }
          }}
         pagination
         navigation
          slidesPerView={1}
          scrollbar={{draggable : true}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {newClasses}
        </Swiper>
            </div>
        </div>
        </>
    )
}

export default Recommendations