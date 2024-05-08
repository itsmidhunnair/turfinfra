import { Header } from "./components/common";
import {
  AboutUsSection,
  ClientSection,
  HeroSection,
} from "./components/homepage";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ClientSection />
      <AboutUsSection />
      Hello
    </>
  );
}

export default App;
