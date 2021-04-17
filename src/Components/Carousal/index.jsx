import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

function CarouselComponent() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <div>
      <div className="carousel-wrapper">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;
