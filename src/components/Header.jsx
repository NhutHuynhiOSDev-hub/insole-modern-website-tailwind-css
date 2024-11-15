import logo from "../assets/img/header/logo.svg";

const toggleButton = () => {
  const mobileNav = document.querySelector("#mnav");
  const closeBtnIcon = document.querySelector("#mnav__close_btn_icon");

  const mNavOpenedClass = "left-0";
  const iconCloseClass = "ri-close-line";

  mobileNav.classList.toggle(mNavOpenedClass);
  closeBtnIcon.classList.toggle(iconCloseClass);
};

const Header = () => {
  return (
    <header className="bg-pink-200 py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
        {/* Logo */}
        <div className="flex justify-center lg:justify-normal">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* Nav */}
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-4 lg:gap-y-0">
          {/* Location */}
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-map-pin-2-fill text-2xl text-accent"></i>
            <div className="text-secondary">123 Arling, Mion, NY</div>
          </div>
          {/* Phone */}
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-phone-fill text-2xl text-accent"></i>
            <div className="text-secondary">(+487) 384 9452</div>
          </div>
          {/* Booking */}
          <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
            Book now
          </button>
          <nav
            id="mnav"
            className="bg-white fixed w-[300px] h-screen top-0 -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20"
          >
            {/* nav trigger button */}
            <div>
              <button
                id="mnav__close_btn"
                onClick={toggleButton}
                className="relative bg-primary flex justify-center items-center w-8 h-8 top-8 -right-full rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
              >
                <i
                  id="mnav__close_btn_icon"
                  className="ri-arrow-right-s-line text-2xl text-white"
                ></i>
              </button>
            </div>
            <div className="flex flex-col gap-y-12 px-12 h-full">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
              <ul className="flex flex-col gap-y-5">
                <li>
                  <a
                    href="home"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="doctors"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Doctors
                  </a>
                </li>

                <li>
                  <a
                    href="departments"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Departments
                  </a>
                </li>
                <li>
                  <a
                    href="services"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="blog"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="contact"
                    className="text-secondary hover:text-accent transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
