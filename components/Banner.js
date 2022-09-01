import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className="h-32 w-full absolute bottom-0 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717OO5QwJnL._SX3000_.jpg"
            alt="banner photo"
          />
        </div>
        <div>
          <img src="https://links.papareact.com/gi1" alt="banner photo" />
        </div>
        <div className="relative">
          <img src="https://links.papareact.com/6ff" alt="banner photo" />
        </div>
        <div className="relative">
          <img src="https://links.papareact.com/7ma" alt="banner photo" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
