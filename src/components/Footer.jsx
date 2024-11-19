import logo from "../assets/img/header/logo.svg";
const Footer = () => {
  return (
    <footer className="footer py-12 lg:pt-[150px]">
      <div className="footer_container container mx-auto pb-12 lg:pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-x-6 gap-y-10">
          <div className="footer_item flex-1">
            <a href="#">
              <img src={logo} alt="footer_logo" className="mb-[30px]" />
            </a>
            <p className="mb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {/* Location - Email - Phone */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-6">
                <i className="ri-map-pin-fill text-[24px] text-accent"></i>
                <div>123 Arling, Mion, NY</div>
              </div>
              <div className="flex items-center gap-6">
                <i className="ri-mail-fill text-[24px] text-accent"></i>
                <div>nhuthq@zigexn.vn</div>
              </div>
              <div className="flex items-center gap-6">
                <i className="ri-phone-fill text-[24px] text-accent"></i>
                <div>(+487) 384 9452</div>
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-[14px] text-[30px]">
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:text-accent hover:bg-slate-100 cursor-pointer transition-all">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:bg-slate-100 hover:text-accent cursor-pointer transition-all">
                <i className="ri-instagram-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:bg-slate-100 hover:text-accent cursor-pointer transition-all">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tertiary hover:bg-slate-100 hover:text-accent cursor-pointer transition-all">
                <i className="ri-linkedin-fill"></i>
              </div>
            </div>
          </div>
          <div className="footer_item flex-1">
            <h4 className="h4 mb-5">Quick Links</h4>
            <div className="flex flex-row gap-5">
              {/* List 1 */}
              <ul className="flex-1 flex flex-col gap-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Department
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Blogs
                  </a>
                </li>
              </ul>
              {/* List 2 */}
              <ul className="flex-1 flex flex-col gap-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Our Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Policy & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_item flex-1">
            <h4 className="h4 mb-5">Opening Hours</h4>
            {/* List */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-row justify-between items-center border-b pb-[10px]">
                <div>Monday - Thursday</div>
                <div className="text-accent font-medium">8:00AM - 6:00PM</div>
              </div>
              <div className="flex flex-row justify-between items-center border-b pb-[10px]">
                <div>Friday - Saturday</div>
                <div className="text-accent font-medium">10:00AM - 4:00PM</div>
              </div>
              <div className="flex flex-row justify-between items-center border-b pb-[10px]">
                <div>Sunday</div>
                <div className="text-accent font-medium">Emergency Only</div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div>Personal</div>
                <div className="text-accent font-medium">7:00AM - 11:00AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[30px] border-t">
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; 2024 Insolve - All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
