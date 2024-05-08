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
    <>
      <Header />
      <HeroSection />
      <BrandSection />
      <AboutUsSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <ClientSection />
      <TeamSection />
      Hello
    </>
  );
}

export default App;
