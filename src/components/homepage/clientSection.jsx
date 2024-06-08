import { Swiper, SwiperSlide } from "swiper/react";
import { SectionTitle, SectionWrapper } from "../common";
import { DummyIcon } from "../icons";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";

const services = [
  {
    title: "Brand_1",
  },
  {
    title: "Brand_2",
  },
  {
    title: "Brand_3",
  },
  {
    title: "Brand_4",
  },
  {
    title: "Brand_5",
  },
  {
    title: "Brand_6",
  },
];

const ClientSection = () => {
  return (
    <SectionWrapper id="clients">
      <div>
        <SectionTitle title="Our Clients" center />
        <p className="text-center px-32 mt-8 text-lg text-gray-500 max-sm:px-0 max-sm:text-justify">
          Our clients are the cornerstone of our success, and their satisfaction
          is our ultimate goal. We take pride in establishing lasting
          partnerships built on trust, transparency, and mutual respect.
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
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
        {services.map((service) => (
          <SwiperSlide key={service.image}>
            <ServiceCard
              image={service.image}
              title={service.title}
              detail={service.detail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <button className="bg-secondary mt-5 text-white px-4 py-2 rounded ">
          Learn More
        </button>
      </div>
    </SectionWrapper>
  );
};

export default ClientSection;

const ServiceCard = ({ title }) => {
  return (
    <div className=" text-center w-full h-full p-8 flex flex-col items-center bg-white gap-4 border">
      <div className="w-16 text-secondary">
        <DummyIcon />
      </div>
      <p className="font-semibold text-xl text-gray-700 capitalize">{title}</p>
    </div>
  );
};
