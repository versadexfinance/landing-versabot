import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "usehooks-ts";
import media from "@/styled/media";

const NFTCarousel = ({ nfts }) => {
  // Settings for the slider
  const isGtThanMobile = useMediaQuery(media.tablet);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    gap: "20px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "90%" }}>
      <Slider {...settings}>
        {nfts.map((nft, index) => (
          <div key={index} style={{ padding: "10px", margin: "0 10px" }}>
            <img
              src={nft.image}
              alt={nft.name}
              style={{
                width: isGtThanMobile ? "95%" : "80%",
                height: "auto",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NFTCarousel;
