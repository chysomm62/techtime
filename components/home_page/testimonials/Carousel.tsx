import Image from "next/image";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css/pagination";

import styles from "./Testimonials.module.css";

interface completeProps {
  [x: string]: any;
  testimonials: testimonialsProps[];
}

interface testimonialsProps {
  image: string;
  role: string;
  userName: string;
  text: string;
}

const Carousel: FC<completeProps> = ({ testimonials }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={18}
        scrollbar={{ hide: true }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial: any, index: number) => (
          <SwiperSlide style={{ flexShrink: 0 }} className={styles.swipeSlide}>
            <div
              key={`${testimonial.userName} - ${index}`}
              className="px-4 lg:px-6 py-6 md:py-8 bg-white rounded-2xl lg:rounded-3xl flex-shrink-0"
            >
              <p className="text-[8px] md:text-sm text-gray-2 capitalize py-3">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="relative w-4 md:w-12 h-4 md:h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.userName}
                    fill
                  />
                </div>
                <div>
                  <h5 className="text-black font-bold text-xs md:text-base capitalize">
                    {testimonial.userName}
                  </h5>
                  <p className="text-[8px] md:text-base text-gray-2 capitalize">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
