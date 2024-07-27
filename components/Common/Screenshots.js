import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const screenshotsData = [
  {
    image: "/images/1daihatsu.jpeg",
  },
  {
    image: "/images/2 daihatsu.jpg",
  },
  {
    image: "/images/3 daihatsu.jpeg",
  },
  {
    image: "/images/dai.jpg",
  },
  {
    image: "/images/daihat.jpg",
  },
];

const Screenshots = () => {
  return (
    <>
      <section id="screenshots" className="app-screenshots-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "red" }}>Produk Terbaru</h2>
            <p>Silahkan lihat gambar produk terbaru di bawah ini</p>
          </div>

          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Pagination]}
            className="screenshot-slider"
          >
            {screenshotsData &&
              screenshotsData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="screenshot-item">
                    <Image
                      src={value.image}
                      alt="Screenshot Image"
                      width={300}
                      height={533}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Screenshots;
