import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Common/Footer";

const Promo = [
  {
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
    image: "/images/daihatsu-vehicles/promobaru.jpeg",
    image1: "/images/daihatsu-vehicles/1.png",
    image2: "/images/daihatsu-vehicles/2.png",
    image3: "/images/daihatsu-vehicles/3.png",

    name: "Promo",
    desc: "Berikut adalah Promo mobil Daihatsu.",
  },
  //   {
  //     feedbackText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
  //     image: "/images/client/2.png",
  //     name: "Dave",
  //     designation: "React Developer",
  //   },
  //   {
  //     feedbackText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
  //     image: "/images/client/3.png",
  //     name: "Brian",
  //     designation: "Angular Developer",
  //   },
  //   {
  //     feedbackText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros.",
  //     image: "/images/client/4.png",
  //     name: "Miles",
  //     designation: "Vue.js Developer",
  //   },
];

const promo = () => {
  return (
    <>
      <Navigation />
      <section
        id="testimonial"
        className="testimonial-section wave-two-testimonial"
      >
        <div
          className="wave-bg-section-tb-two"
          style={{ backgroundColor: "black" }}
        ></div>
      </section>
      <div className="container">
        {Promo &&
          Promo.map((value, i) => (
            <div className="testimonial-content">
              <div className="text-center">
                <h2>{value.name}</h2>
                <p>{value.desc}</p>
                <Image src={value.image} width={800} height={100} />
                <Image src={value.image1} width={800} height={100} />
                <Image src={value.image2} width={800} height={100} />
                <Image src={value.image3} width={800} height={100} />
              </div>
            </div>
          ))}
        <div className="text-center p-4">
          <a
            className="btn btn-danger icofont icofont-phone"
            href="https://api.whatsapp.com/send?phone=6281331208226"
            target="_blank"
          >
            Hubungi Yoyo
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default promo;
