import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SectionWrapper } from "../common";

const brandSection = () => {
  const images = [
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_01.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_02.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_03.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_04.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_01.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_02.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_03.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_04.png",
  ];
  return (
    <SectionWrapper id="brands">
      <Swiper
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
          },
          940: {
            slidesPerView: 4,
          },
        }}
        navigation
        centeredSlidesBounds
        className="container mx-auto"
        loop
        autoplay
      >
        {images.map((img) => (
          <SwiperSlide key={img} className="flex justify-center">
            <img alt="client" className="w-20 aspect-auto" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default brandSection;
