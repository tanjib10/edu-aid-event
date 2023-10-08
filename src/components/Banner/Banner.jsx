import { AiOutlineArrowRight } from "react-icons/ai";
import banner1 from "../../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import banner2 from "../../assets/kenny-eliason-zFSo6bnZJTw-unsplash (2).jpg";
import banner3 from "../../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";
import banner4 from "../../assets/annie-spratt-4A1pj4_vClA-unsplash.jpg";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
const Banner = () => {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      fadeEffect={{ clickable: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <Swiper>
        <SwiperSlide>
          <div className="relative h-[95vh] w-full">
            <img className="h-full w-full" src={banner1} alt="" />
            <div className="absolute top-0 backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white">
                Enriching Futures: <br /> Education at Your Fingertips
              </h2>
              <button className="btn inline-flex justify-center items-center bg-fuchsia-500 text-white px-6  py-2 mt-4 rounded-lg hover:bg-fuchsia-700 border-transparent">
                Learn More
                <span className="ml-1">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[95vh] w-full">
            <img className="h-full w-full" src={banner2} alt="" />
            <div className="absolute top-0 backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center text-">
              <h2 className="text-xl border-transparent md:text-2xl lg:text-3xl font-bold text-center text-white">
                Empowering Minds: <br /> Explore, Learn, Grow
              </h2>
              <button className="btn inline-flex border-transparent justify-center items-center bg-fuchsia-500 text-white px-6 py-2 mt-6 rounded-lg hover:bg-fuchsia-700 transition duration-300">
                Learn More
                <span className="ml-1">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[95vh] w-full">
            <img className="h-full w-full" src={banner3} alt="" />
            <div className="absolute top-0 backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center text-">
              <h2 className="text-xl md:text-2xl lg:text-3xl border-transparent font-bold text-center text-white">
                Education Elevated: <br /> Your Path to Success
              </h2>
              <button className="btn inline-flex border-transparent justify-center items-center bg-fuchsia-500 text-white px-6 py-2 mt-6 rounded-lg hover:bg-fuchsia-700 transition duration-300">
                Learn More
                <span className="ml-1">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[95vh] w-full">
            <img className="h-full w-full" src={banner4} alt="" />
            <div className="absolute top-0 backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center text-">
              <h2 className="border-transparent text-xl md:text-2xl lg:text-3xl font-bold text-center text-white">
                Ignite Your Learning: <br /> Your Gateway to Education
              </h2>
              <button className="btn inline-flex justify-center items-center border-transparent bg-fuchsia-500 text-white px-6 py-2 mt-6 rounded-lg hover:bg-fuchsia-700 transition duration-300">
                Learn More
                <span className="ml-1">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Swiper>
  );
};

export default Banner;
