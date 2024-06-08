import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/common";
import {
  AboutUsSection,
  BrandSection,
  ClientSection,
  HeroSection,
  ServiceSection,
  TeamSection,
  WhyChooseUsSection,
} from "./components/homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroSection />
      <BrandSection />
      <AboutUsSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <ClientSection />
      <TeamSection />
    </BrowserRouter>
  );
}

export default App;
