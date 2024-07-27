import React, { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";

const bannerData = [
  {
    text: "Temukan pengalaman berbelanja mobil yang luar biasa di Dealer Daihatsu. Kami menyediakan berbagai pilihan kendaraan Daihatsu terbaru dengan layanan pelanggan terbaik dan penawaran menarik. Nikmati test drive gratis, layanan perawatan berkualitas, dan pembiayaan yang fleksibel. Dealer Daihatsu, partner terpercaya Anda dalam mewujudkan impian memiliki mobil idaman.",
    image: "/images/1daihatsu.jpeg",
    image2: "/images/2 daihatsu.jpg",
    image3: "/images/3 daihatsu.jpeg",
    image4: "/images/dai.jpg",
  },
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(bannerData[0].image);

  useEffect(() => {
    const images = [
      bannerData[0].image,
      bannerData[0].image2,
      bannerData[0].image3,
      bannerData[0].image4,
    ];
    let currentIndex = 0;

    const imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <>
      <style jsx>{`
        .homepage-slides-wrapper {
          position: relative;
          height: 100vh; /* Full viewport height */
          overflow: hidden;
        }

        .image-area {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .image-slider {
          object-fit: cover;
        }

        .single-slider-item {
          position: relative;
          z-index: 2; /* Ensure text is on top of the image */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%; /* Full height */
          text-align: center;
          padding: 20px; /* Add some padding for smaller screens */
        }

        .slide-item-table {
          display: table;
          width: 100%;
          height: 100%;
        }

        .slide-item-tablecell {
          display: table-cell;
          vertical-align: middle;
        }

        .slider-text {
          position: relative;
          z-index: 3; /* Ensure text is on top of the image */
          color: white;
          max-width: 80%;
          margin: auto;
        }

        @media (max-width: 768px) {
          .homepage-slides-wrapper {
            height: 60vh; /* Adjust height for mobile screens */
          }

          .slider-text h1 {
            font-size: 1.5rem; /* Adjust font size for smaller screens */
          }

          .slider-text p {
            font-size: 1rem; /* Adjust font size for smaller screens */
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .homepage-slides-wrapper {
            height: 80vh; /* Adjust height for tablet screens */
          }

          .slider-text h1 {
            font-size: 2rem; /* Adjust font size for tablet screens */
          }

          .slider-text p {
            font-size: 1.2rem; /* Adjust font size for tablet screens */
          }
        }

        @media (min-width: 1025px) {
          .homepage-slides-wrapper {
            height: 100vh; /* Full viewport height for laptops and desktops */
          }

          .slider-text h1 {
            font-size: 3rem; /* Adjust font size for larger screens */
          }

          .slider-text p {
            font-size: 1.5rem; /* Adjust font size for larger screens */
          }
        }
      `}</style>

      {bannerData &&
        bannerData.map((value, i) => (
          <div id="home" className="homepage-slides-wrapper" key={i}>
            <div className="image-area">
              <Image
                src={currentImage}
                alt="Daihatsu"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="image-slider"
              />
            </div>

            <div className="single-slider-item wave-bg-two">
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-md-8">
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="slider-text text-center bg-gradient">
                              <h1
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                                style={{ color: "red" }}
                              >
                                {value.heading}
                              </h1>
                              {/* <p
                                className={
                                  isVisible
                                    ? "animated fadeInUp slow opacityOne"
                                    : ""
                                }
                                style={{ textAlign: "justify", color: "white" }}
                              >
                                {value.text}
                              </p> */}
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Banner;
