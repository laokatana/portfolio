/* eslint-disable prettier/prettier */

import { useRef } from 'react';

export const useScrollRef = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const proyectsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    refs: { homeRef, aboutMeRef, proyectsRef, footerRef },
    scrollToRef,
  };
};
