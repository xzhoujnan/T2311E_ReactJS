import {  Image,Carousel } from "react-bootstrap";
import React, {  useState } from "react";
function Slider(props){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image src="logo512.png"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="logo512.png"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="logo512.png"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
    )
}
export default Slider;
