import { Swiper } from 'swiper/react';
import 'swiper/css';

export const SwiperContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Swiper
        spaceBetween={'10px'}
        breakpoints={{
          340: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
          { children }
      </Swiper>
    </>
  )
}