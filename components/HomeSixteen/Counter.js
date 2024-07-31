import React from "react";

const funFactsData = [
  {
    icon: "icofont-users",
    title: "Hubungi",
    number: "2900",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-simple-smile",
    title: "Happy Clients",
    number: "2099",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-ui-rating",
    title: "Reviews",
    number: "1999",
    duration: "800",
    delay: "300",
  },
  {
    icon: "icofont-cloud-download",
    title: "App Downloads",
    number: "7899",
    duration: "800",
    delay: "400",
  },
];

const Counter = () => {
  return (
    <>
      <style jsx>{`
        .slide-button {
          display: flex;
          justify-content: center; /* Memastikan button berada di tengah secara horizontal */
          gap: 10px; /* Memberi jarak antara button */
          margin-top: 20px; /* Menambahkan jarak atas untuk spasi */
        }

        .download-button,
        .learn-more-button {
          text-decoration: none; /* Menghilangkan garis bawah pada link */
          padding: 10px 20px; /* Memberi ruang dalam pada button */
          border-radius: 5px; /* Membuat sudut button melengkung */
          font-size: 16px; /* Mengatur ukuran font */
          display: flex; /* Untuk membuat konten di dalam button rata tengah */
          align-items: center; /* Untuk membuat konten di dalam button rata tengah secara vertikal */
        }

        .download-button {
          background-color: #4caf50; /* Warna hijau untuk download button */
          color: white; /* Warna teks putih */
        }

        .learn-more-button {
          background-color: #008cba; /* Warna biru untuk learn more button */
          color: white; /* Warna teks putih */
        }

        .button-icon {
          margin-right: 8px; /* Memberi jarak antara ikon dan teks */
        }
      `}</style>
      <div id="counter">
        {/* <div className="wave-bg-section-tb-two"></div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <h2 className="text-danger text-uppercase">Contact & Booking</h2>
            </div>
            <div className="slide-button mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=6285642689355"
                target="_blank"
                className="download-button"
              >
                <i className="icofont icofont-phone"></i>
                6285642689355
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6285642689355"
                target="_blank"
                className="learn-more-button icofont icofont-phone"
              >
                0856542546335{" "}
              </a>
            </div>
            {/* {funFactsData &&
              funFactsData.map((value, i) => (
                <div className="col-sm-6 col-lg-3" key={i}>
                  <div
                    className="counter-box"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <i className={value.icon}></i>
                    <p>{value.title}</p>
                    <h3 className="counter-number">{value.number}</h3>
                  </div>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
