import brand01 from "../assets/img/brands/brand-1.svg";
import brand02 from "../assets/img/brands/brand-2.svg";
import brand03 from "../assets/img/brands/brand-3.svg";
import brand04 from "../assets/img/brands/brand-4.svg";
import brand05 from "../assets/img/brands/brand-5.svg";
const Brands = () => {
  return (
    <section className="blog_section py-8 lg:pt-12 justify-between items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <div>
            <img src={brand01} alt="logo_img" className="brands_logo" />
          </div>
          <div>
            <img src={brand02} alt="logo_img" className="brands_logo" />
          </div>
          <div>
            <img src={brand03} alt="logo_img" className="brands_logo" />
          </div>
          <div>
            <img src={brand04} alt="logo_img" className="brands_logo" />
          </div>
          <div>
            <img src={brand05} alt="logo_img" className="brands_logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
