import "./App.css";
import {
  AppointmentSection,
  FAQSection,
  Header,
  HeroSection,
  ServicesSection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
} from "./components";

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
    </>
  );
}

export default App;
