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
  const { refs, scrollToRef } = useScrollRef();

  return (
    <Loader>
      <div className="App" style={{ overflowX: 'hidden' }}>
        <Navbar scrollToRef={scrollToRef} refs={refs} />
        <HomePage ref={refs.homeRef} />
        <About ref={refs.aboutMeRef} />
        <Proyects ref={refs.proyectsRef} />
        <Footer ref={refs.footerRef} />
      </div>
    </Loader>
  );
}

export default App;
