import newsletter from "../assets/img/newsletter/pattern.svg";
const NewsLetter = () => {
  return (
    <section
      id="contact"
      className="newsletter_section flex items-center bg-accent relative md:h-[444px] py-8 lg:pt-12 overflow-hidden"
    >
      <div className="absolute left-0 bottom-0">
        <img src={newsletter} alt="newsletter_img" />
      </div>
      <div className=" newsletter_container container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-center lg:text-left gap-2">
            <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
              Out Newsletter
            </div>
            <h1 className="h1 mb-4 text-white">
              Subscribe to get more updates
            </h1>
          </div>
          <form className="">
            <div className="relative flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Your email address"
                className="w-full h-[66px] rounded-full bg-transparent border-2 border-white outline-none px-6 placeholder-white text-white focus:text-white"
              />
              <button className="btn btn-lg btn-white">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default NewsLetter;
