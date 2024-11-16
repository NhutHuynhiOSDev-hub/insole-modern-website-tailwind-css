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
    <header className=" py-8 lg:pt-6 lg:pb-14">
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
          <MobileNav />

          <DesktopNav />
        </div>
      </div>
    </header>
  );
};

const MobileNav = () => {
  return (
    <nav
      id="mnav"
      className="bg-white fixed w-[300px] h-screen top-0 -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20"
    >
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
        <SearchBar />
      </div>
    </nav>
  );
};

const SearchBar = () => {
  return (
    <form className=" relative flex-row gap-5 items-center justify-start">
      <label htmlFor="mnav-search-input">
        <i className="ri-search-line text-2xl text-accent"> </i>
      </label>
      <input
        type="text"
        id="mnav-search-input"
        placeholder="Search..."
        className="outline-none border-b-2 focus:border-b-accent placeholder:italic"
      ></input>
    </form>
  );
};

const DesktopNav = () => {
  return (
    <nav className="bg-white absolute -bottom-[86px] w-full left-0 rounded-[10px] shadow-custom1 h-16 hidden lg:flex lg:justify-between lg:items-center lg:px-12">
      <ul className="flex gap-4">
        <li>
          <a
            href="home"
            className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="doctors"
            className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
          >
            Doctors
          </a>
        </li>

        <li>
          <a
            href="departments"
            className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
          >
            Departments
          </a>
        </li>
        <li>
          <a
            href="services"
            className="border-r pr-4text-secondary hover:text-accent transition-all duration-300"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="blog"
            className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
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
      <form>
        <labe htmlFor="search-input">
          <i className="ri-search-line text-2xl text-accent"> </i>
        </labe>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          className="outline-none w-[150px] focus:w-[250px] focus:border-b focus:border-b-accent placeholder:text-base transition-all duration-150"
        ></input>
      </form>
    </nav>
  );
};

export default Header;
