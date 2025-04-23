import "./App.css";
import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/Home";
import About from "./components/About/Aboutme";


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
        
          {/* <Proyects /> */}
          {/* <Contacto /> */}
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
