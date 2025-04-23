import "./App.css";

import Loader from "./components/Loader";
import HomePage from "./components/home-page/Home-page";
import { useState, useEffect } from "react";

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
          <HomePage />
         
        </>
      )}
    </div>
  );
}

export default App;
