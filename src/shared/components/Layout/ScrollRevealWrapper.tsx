import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  delay?: number; // Prop opcional para retrasar la animación
};

const ScrollRevealWrapper: React.FC<Props> = ({ children, delay = 300 }) => {
  const { ref, inView } = useInView({
    // Opciones del Intersection Observer
    triggerOnce: true, // La animación solo se dispara una vez
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out flex justify-center ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${delay}ms`, // Aplica el retraso si se proporciona
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;