import "./App.css";
import {
  AppointmentSection,
  BlogsSection,
  BrandsSection,
  DepartmentSection,
  FAQSection,
  Header,
  HeroSection,
  NewsLetterSection,
  ServicesSection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
} from "./components";
import Footer from "./components/Footer";

import ScrollReveal from "scrollreveal";
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 600,
});

// Hero Section
sr.reveal(".hero_text", { origin: "top" });
sr.reveal(".hero_image");

// Stats Section
sr.reveal(".stats_item", {
  origin: "top",
  distance: "50px",
  duration: 1500,
  interval: 100,
});

// Services
sr.reveal(".services_section");
sr.reveal(".services_top");
sr.reveal(".services_item", {
  origin: "bottom",
  distance: "50px",
  duration: 1500,
  interval: 100,
  delay: 1000,
});

// Appointment
sr.reveal(".appointment_title");
sr.reveal(".appointment_form");

// Testimonials
sr.reveal(".testimonials_section");
sr.reveal(".testimonials_img", {
  origin: "left",
  distance: "100px",
});
sr.reveal(".testimonials_swiper", {
  origin: "right",
  distance: "100px",
});

// Teams
sr.reveal(".team_title");
sr.reveal(".team_sliders");

// FAQ
sr.reveal(".faq_title");
sr.reveal(".faq_item", {
  interval: 100,
  distance: "100px",
  delay: 500,
});

// Department
sr.reveal(".department_bg");
sr.reveal(".department_info", {
  origin: "right",
  distance: "50px",
});
sr.reveal(".department_categories", {
  origin: "left",
  interval: 100,
  distance: "100px",
});

// Blogs
sr.reveal(".blogs_section");
sr.reveal(".blogs_title");
sr.reveal(".blog_item", {
  interval: 100,
  distance: "100px",
});

// Brands
sr.reveal(".brands_section");
sr.reveal(".brands_section", {
  delay: 600,
  interval: 100,
  distance: "100px",
});

// Newsletter
sr.reveal(".newsletter_section");
sr.reveal(".newsletter_container");

// Footer
sr.reveal(".footer_container");
sr.reveal(".footer_item", {
  delay: 600,
  interval: 100,
  distance: "100px",
});

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AppointmentSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <DepartmentSection />
      <BlogsSection />
      <BrandsSection />
      <NewsLetterSection />
      <Footer />
    </>
  );
}

export default App;
