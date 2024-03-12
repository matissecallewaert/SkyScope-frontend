import React, { useEffect, useState } from "react";
import HorizontalScrollCarousel from "../../components/horizontal-image-scroll/horizontal-image-scroll";

function Detect() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/uploaded_images")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div className="flex items-center justify-center">
      <HorizontalScrollCarousel cards={cards}/>
    </div>
  );
}

export default Detect;
