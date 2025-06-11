import "./App.css";
import About from "./components/About";
import Applications from "./components/Applications";
import Benefits from "./components/Benefits";
import CaseStudy from "./components/CaseStudy";
import ContactForm from "./components/Contact";
import GenAi from "./components/GenAi";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Nabvar from "./components/Nabvar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Nabvar />
        <Hero />
        <About />
        <Services />
        <Applications />
        <Benefits />
        <GenAi />
        <Industries />
        <CaseStudy />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
