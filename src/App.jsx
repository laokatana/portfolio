import "./App.css";
import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/home-page/Home-page";
import About from "./components/about-me/About-me";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <Navbar />
          <HomePage/>
          <About/>
          {/* <Proyects /> */}
          {/* <Contacto /> */}
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
