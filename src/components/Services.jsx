import icService01 from "../assets/icons/services/icon-1.svg";
import icService02 from "../assets/icons/services/icon-2.svg";
import icService03 from "../assets/icons/services/icon-3.svg";
import icService04 from "../assets/icons/services/icon-4.svg";

const Services = () => {
  return (
    <section id="services" className="services_section py-8 lg:pt-12 ">
      {/* bg  */}
      <div
        className="bg-servies bg-cover bg-no-repeat max-w-[1466px] mx-4 lg:mx-auto rounded-[20px]
      lg:pt-[70px] px-6 lg:px-0 relative h-[368px] flex items-center lg:items-start -z-10"
      >
        <div className="container mx-auto">
          <div className="services_top flex flex-col lg:flex-row lg:mb-[60px] items-center">
            <h2 className="h2 text-white flex-1 mb-4 lg:mb-0 text-center lg:text-left">
              Our best services for your solution
            </h2>
            <p className="text-white flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      {/* Grid Container */}
      <div className="container mx-auto mt-8 lg:-mt-[144px]">
        <div className="grid lg:grid-cols-4 gap-5 px-8 lg:px-0">
          {/* Grid Item */}
          <div className="services_item bg-white px-8 py-12 rounded-[10px] shadow-custom2 flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <img src={icService01} alt="icon-service" />
            </div>
            <h3 className="h3 mb-[10px]">General Practitioners</h3>
            <p className="font-light leading-normal  line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          {/* Grid Item */}
          <div className="services_item bg-white px-8 py-12 rounded-[10px] shadow-custom2 flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <img src={icService02} alt="icon-service " />
            </div>
            <h3 className="h3 mb-[10px]">Pregnancy Support</h3>
            <p className="font-light leading-normal line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          {/* Grid Item */}
          <div className="services_item bg-white px-8 py-12 rounded-[10px] shadow-custom2 flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <img src={icService03} alt="icon-service " />
            </div>
            <h3 className="h3 mb-[10px]">Nutritional Support</h3>
            <p className="font-light leading-normal line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          {/* Grid Item */}
          <div className="services_item bg-white px-8 py-12 rounded-[10px] shadow-custom2 flex flex-col items-center text-center">
            <div className="mb-[15px]">
              <img src={icService04} alt="icon-service " />
            </div>
            <h3 className="h3 mb-[10px]">Pharmaceutical Care1</h3>
            <p className="font-light leading-normal line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
