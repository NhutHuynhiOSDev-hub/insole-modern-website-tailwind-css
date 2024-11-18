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
