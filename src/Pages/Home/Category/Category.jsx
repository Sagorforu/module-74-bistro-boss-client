import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle 
      subHeading={"From 11.00am to 10pm"}
      heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="uppercase text-3xl ms-20 -mt-20 text-white">Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="uppercase text-3xl ms-20 -mt-20 text-white">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="uppercase text-3xl ms-20 -mt-20 text-white">soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="uppercase text-3xl ms-20 -mt-20 text-white">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="uppercase text-3xl ms-20 -mt-20 text-white">Salad</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
