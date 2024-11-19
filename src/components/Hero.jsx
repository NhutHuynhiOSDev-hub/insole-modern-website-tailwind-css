import heroImage from "../assets/img/hero/img.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero_section py-8 lg:pt-12 lg:pb-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex lg:flex-row items-center justify-between h-full">
          <div className="hero_text lg:w-[48%] text-center lg:text-left w-full">
            <div className="bg-white flex items-center gap-2 py-2.5 px-5 w-max mx-auto lg:mx-0 mb-6 rounded-full ">
              <i className="ri-heart-pulse-line text-accent text-2xl"></i>
              <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                live your life
              </div>
            </div>
            <h1 className="h1 mb-6">We care about your health</h1>
            <p className="mb-10  mx-auto md:max-w-md line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="btn btn-lg btn-accent mx-auto lg:mx-0">
              Contact us
            </button>
          </div>
          <div className="hero_image hidden lg:flex lg:max-w[814px]">
            <img src={heroImage} alt="welcome-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
