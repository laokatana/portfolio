import './App.css';
import { useState, useEffect } from 'react';
import { useScrollRef } from './components/hooks/Refs';

import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/home-page/Home';
import About from './components/About/Aboutme';
import Proyects from './components/Proyects/Proyects';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  const { refs, scrollToRef } = useScrollRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar scrollToRef={scrollToRef} refs={refs} />
          <HomePage ref={refs.homeRef} />
          <About ref={refs.aboutMeRef} />
          <Proyects ref={refs.proyectsRef} />
          <Footer ref={refs.footerRef} />
        </>
      )}
    </div>
  );
}

export default App;
