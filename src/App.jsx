import "./App.css";
import { useState, useEffect } from "react";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/home-page/Home";
import About from "./components/About/Aboutme";
import Footer from "./components/Footer/Footer";
import Proyects from "./components/Proyects/Proyects";



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
         {/*  
          <HomePage /> 
          <Footer/>
          <About /> */}
          <Navbar />
          <Proyects />

         
        </>
      )}
    </div>
  );
}

export default App;
