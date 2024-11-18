import teamImg01 from "../assets/img/team/doctor-1.png";
import teamImg02 from "../assets/img/team/doctor-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Team = () => {
  return (
    <section className="team_section py-8 lg:pt-12 ">
      <div className="team_container container mx-auto">
        <h2 className="team_title h2 mb-8 text-center lg:text-left">
          Our Team
        </h2>
        <div className="team_sliders w-full min-h-[400px]">
          <Swiper
            loop={false}
            slidesPerView={1}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="h-full w-full mx-auto pb-24">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <div>
                    <img src={teamImg01} alt="team-img" />
                  </div>
                  <div className="container flex-1 flex-col items-start text-center lg:text-start">
                    <h4 className="h4 mb-[10px]">Dr. Leslie Taylor</h4>
                    <div className="font-medium uppercase text-[#9ab4b7] tracking-[2.24px] mb-[20px]">
                      Pediatrician
                    </div>
                    <p className="font-light mb-[20px] line-clamp-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industryLorem Ipsum is simply dummy text of
                      the printing and typesetting industryLorem Ipsum is simply
                      dummy text of the printing and typesetting industryLorem
                      Ipsum is simply dummy text of the printing and typesetting
                      industryLorem Ipsum is simply dummy text of the printing
                      and typesetting industryLorem Ipsum is simply dummy text
                      of the printing and typesetting industryLorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industryLorem Ipsum is simply dummy text of the printing
                      and typesetting industryLorem Ipsum is simply dummy text
                      of the printing and typesetting industryLorem Ipsum is
                      simply dummy text of the printing and typesetting industry
                    </p>
                    <div className="flex items-center justify-center lg:justify-start text-[30px] text-accent-tertiary gap-5">
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-pinterest-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full w-full mx-auto">
                <div className="bg-red-200 flex flex-col lg:flex-row items-center gap-5">
                  <div>
                    <img src={teamImg02} alt="team-img" />
                  </div>
                  <div className="bg-yellow-200 container flex-1 flex-col items-start text-center lg:text-start">
                    <h4 className="h4 mb-[10px]">Dr. Zachary Brown</h4>
                    <div className="font-medium uppercase text-[#9ab4b7] tracking-[2.24px] mb-[20px]">
                      Cardiologist
                    </div>
                    <p className="font-light mb-[20px] line-clamp-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry Lorem Ipsum is
                      simply dummy text of the printing and typesetting industry
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                    <div className="flex items-center justify-center lg:justify-start text-[30px] text-accent-tertiary gap-5">
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a
                        href="#"
                        className="cursor-pointer hover:text-accent transition-all"
                      >
                        <i className="ri-pinterest-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
