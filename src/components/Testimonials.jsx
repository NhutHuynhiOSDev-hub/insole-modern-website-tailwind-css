import testBgImg from "../assets/img/testimonials/img.png";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonials_section bg-testimonials bg-cover bg-right bg-no-repeat lg:min-h-[600px] py-8 lg:pt-12 ">
      <div className="testimonials_container container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="hidden lg:flex">
            <img src={testBgImg} alt="testimonials_img" />
          </div>
          <div className="max-w-[98%] xl:max-w-[710px]">
            <Swiper
              className="h-[400px]"
              loop={true}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              modules={[Pagination]}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center lg:text-left">
                    <p
                      className="realtive font-light text-[22px] text-[#4c5354] leading-[190%] text-center lg:text-left
                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat"
                    >
                      <span className="mx-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      James Rodrigo
                    </div>
                    <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                      Customer
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center lg:text-left">
                    <p
                      className="realtive font-light text-[22px] text-[#4c5354] leading-[190%] text-center lg:text-left
                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat"
                    >
                      <span className="mx-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      James Rodrigo
                    </div>
                    <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                      Customer
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center lg:text-left">
                    <p
                      className="realtive font-light text-[22px] text-[#4c5354] leading-[190%] text-center lg:text-left
                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat"
                    >
                      <span className="mx-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      James Rodrigo
                    </div>
                    <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                      Customer
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center lg:text-left">
                    <p
                      className="realtive font-light text-[22px] text-[#4c5354] leading-[190%] text-center lg:text-left
                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat"
                    >
                      <span className="mx-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      James Rodrigo
                    </div>
                    <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                      Customer
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full flex flex-col justify-center items-start">
                  <div className="max-w-[680px] mx-auto text-center lg:text-left">
                    <p
                      className="realtive font-light text-[22px] text-[#4c5354] leading-[190%] text-center lg:text-left
                  before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                  after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat"
                    >
                      <span className="mx-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </span>
                    </p>
                    <div className="text-[26px] text-[#4c5354] font-semibold">
                      James Rodrigo
                    </div>
                    <div className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                      Customer
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
