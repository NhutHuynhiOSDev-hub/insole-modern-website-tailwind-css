import blog01 from "../assets/img/blog/img-1.png";
import blog02 from "../assets/img/blog/img-2.png";
import blog03 from "../assets/img/blog/img-3.png";
const Blogs = () => {
  return (
    <section className="blogs_section py-8 lg:pt-12 ">
      <div className="container mx-auto">
        <h2 className="blogs_title h2 mb-[50px] text-center lg:text-left">
          Out Recent Blogs
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-[50px]">
          {/* Blog 1 */}
          <div className="blog_item max-w-[420px] shadow-custom2 rounded-[10px] cursor-pointer overflow-hidden group">
            <div className="relative overflow-hidden">
              {/* Img */}
              <img
                src={blog01}
                alt="blog01"
                className="group-hover:scale-110 transition-all duration-300"
              />
              {/* Badge */}
              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-balance tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">
                10 foods to avoid for your heart health
              </h4>
              <p className="font-light">
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...
                <a href="#" className="italic underline text-[#4c53543]">
                  Read more
                </a>
              </p>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="blog_item max-w-[420px] shadow-custom2 rounded-[10px] cursor-pointer overflow-hidden group">
            <div className="relative overflow-hidden">
              {/* Img */}
              <img
                src={blog02}
                alt="blog01"
                className="group-hover:scale-110 transition-all duration-300"
              />
              {/* Badge */}
              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-balance tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">
                10 foods to avoid for your heart health
              </h4>
              <p className="font-light">
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...
                <a href="#" className="italic underline text-[#4c53543]">
                  Read more
                </a>
              </p>
            </div>
          </div>
          {/* Blog 3 */}
          <div className="blog_item max-w-[420px] shadow-custom2 rounded-[10px] cursor-pointer overflow-hidden group">
            <div className="relative overflow-hidden">
              {/* Img */}
              <img
                src={blog03}
                alt="blog01"
                className="group-hover:scale-110 transition-all duration-300"
              />
              {/* Badge */}
              <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-balance tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medical
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">
                10 foods to avoid for your heart health
              </h4>
              <p className="font-light">
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...
                <a href="#" className="italic underline text-[#4c53543]">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
