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
import Department from "./components/Department";

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
      <Department />
    </>
  );
}

export default App;
