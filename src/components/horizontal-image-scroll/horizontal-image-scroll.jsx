import React, { useRef, useEffect } from 'react';
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import './horizontal-image-scroll.css';

const HorizontalScrollCarousel = ({ cards }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (e) => {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      };

      container.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        container.removeEventListener('wheel', handleWheel, { passive: false });
      };
    }
  }, []);

  const clamp = (value, clampAt = 20) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
    config: { mass: 1, tension: 100, friction: 30 }
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  const onWheel = (e) => {
    
    if (containerRef.current) {
      e.preventDefault();
      const container = containerRef.current;
      const scrollAmount = e.deltaY;
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      <div ref={containerRef} className="container" {...bind()} onWheel={onWheel}>
        {cards.map((card) => (
          <animated.div
            key={card.path}
            className="card"
            style={{...style, backgroundImage: `url(http://localhost:8000${card.path})`}}
          >
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default HorizontalScrollCarousel;
