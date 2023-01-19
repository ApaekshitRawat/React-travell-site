import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navebar";
import Services from "./components/Services";
import Tours from "./components/Tours";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Tours />
        <Footer />
      </>
    </div>
  );
}

export default App;
