import "./App.css";
import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/home-page/Home";
import About from "./components/About/Aboutme";
import Footer from "./components/Footer";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <Navbar />
          <HomePage/>
          <About />
           <Footer /> 
        
          {/* <Proyects /> */}
          {/* <Contacto /> */}
        </>
      )}
    </div>
  );
}

export default App;
