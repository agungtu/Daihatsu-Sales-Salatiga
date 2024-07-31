import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
// import "./CardStyles.css"; // Pastikan Anda menyesuaikan jalur file ini dengan jalur file CSS Anda

const gambar2 = [
  {
    image: "/images/team/Logo 4.svg",
    title: "Daftar Harga",
    // text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "400",
  },
  {
    image: "/images/team/Logo 5.svg",
    title: "Test Drive",
    // text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "400",
  },
  {
    image: "/images/team/Logo 6.svg",
    title: "Spare Part",
    // text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "400",
  },
];
const howItWorksData = [
  {
    image: "/images/team/Logo 1.svg",
    title: "Tanya Pembelian",
    // text: "https://api.whatsapp.com/send?phone=6285642689355",
    // target: "_blank",

    duration: "800",
    delay: "100",
  },
  {
    image: "/images/team/Logo 2.svg",
    title: "Booking Service",
    // text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "200",
  },
  {
    image: "/images/team/Logo 3.svg",
    title: "Simulasi Kredit",
    // text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    duration: "800",
    delay: "300",
  },
];

const HowItWorks = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap; /* Membungkus elemen ke baris berikutnya jika diperlukan */
          justify-content: space-around; /* Membagi ruang kosong secara merata di antara item */
          gap: 10px; /* Jarak antara elemen card */
        }

        .single-hiw-feature {
          background-color: #fff; /* Warna latar belakang elemen card */
          border-radius: 10px; /* Membuat sudut elemen card melengkung */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan untuk elemen card */
          padding: 20px; /* Memberi ruang dalam pada elemen card */
          text-align: center; /* Membuat teks berada di tengah */
          flex: 1 1 200px; /* Fleksibilitas elemen card: tumbuh, menyusut, dan basis lebar */
          max-width: 250px; /* Lebar maksimum elemen card */
          transition: transform 0.3s; /* Transisi untuk efek hover */
        }

        .single-hiw-feature:hover {
          transform: translateY(-10px); /* Efek hover mengangkat elemen */
        }

        .single-hiw-feature i {
          font-size: 40px; /* Ukuran ikon */
          margin-bottom: 10px; /* Jarak bawah ikon */
          color: #333; /* Warna ikon */
        }

        .single-hiw-feature h4 {
          margin: 10px 0; /* Jarak atas dan bawah judul */
          color: #333; /* Warna judul */
        }

        .single-hiw-feature p {
          color: #666; /* Warna teks deskripsi */
        }
      `}</style>
      <section
        id="how-it-works"
        className="how-it-works wave-two-how-it-works mt-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="wave-bg-section-tb-two"></div>

        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "red" }}>Menu Utama</h2>
            <p style={{ color: "white" }}>
              Silahkan menu bisa di akses dengan cara di klik pada menu
            </p>
          </div>

          <div className="row align-items-center">
            <div className="card-container">
              {howItWorksData.map((value, i) => (
                <div
                  className="single-hiw-feature"
                  data-aos="fade-in"
                  data-aos-duration={value.duration}
                  data-aos-delay={value.delay}
                  key={i}
                >
                  {/* <i className={value.icon}></i> */}
                  <a
                    href="https://api.whatsapp.com/send?phone=6285642689355"
                    target="_blank"
                  >
                    <Image
                      src={value.image}
                      alt="Team Member Image"
                      className="img-thumbnail rounded-4"
                      width={370}
                      height={450}
                    />
                    <h4 style={{ color: "red" }}>{value.title}</h4>
                    {/* <p>{value.text}</p> */}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="card-container">
              {gambar2.map((value, i) => (
                <div
                  className="single-hiw-feature"
                  data-aos="fade-in"
                  data-aos-duration={value.duration}
                  data-aos-delay={value.delay}
                  key={i}
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=6285642689355"
                    target="_blank"
                  >
                    {" "}
                    <Image
                      src={value.image}
                      alt="Team Member Image"
                      className="img-thumbnail rounded-4"
                      width={370}
                      height={450}
                    />
                    <h4 style={{ color: "red" }}>{value.title}</h4>
                  </a>
                  {/* <p>{value.text}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/q5DsVVurRQ8"]}
      />
    </>
  );
};

export default HowItWorks;
