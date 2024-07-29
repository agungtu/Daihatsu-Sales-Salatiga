import React from "react";

const AppDownload = () => {
  return (
    <>
      <section
        id="app-download"
        className="app-download-section wave-two-download-section"
      >
        <div className="wave-bg-section-tb-two"></div>

        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2 className="text-danger">BANG YOYO</h2>
            <p>
              Perkenalkan saya Yoyo, merupakan salah satu sales Dealer Daihatsu
              Salatiga yang siap membantu anda dalam membeli unit kendaraan
              idaman anda. Saya akan berusaha untuk :
            </p>
            <p className="pt-5" style={{ textAlign: "justify" }}>
              1. Memastikan Unit Kendaraan selalu ready <br></br>2. Memberikan
              informasi detail <br></br> 3. unit kendaraan Memberikan Dp Ringan
              dan Murah
              <br></br>4. Memastikan anda puas dan tidak mengecewakan
            </p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="app-download-content"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <a
                  href="https://www.apple.com/app-store/"
                  className="download-btn"
                  target="_blank"
                >
                  <span>
                    Hubungi
                    <span className="large-text">085647452265332</span>
                  </span>
                </a>
                {/* <a
                  href="https://play.google.com/store/apps"
                  className="download-btn"
                  target="_blank"
                >
                  <i className="icofont-brand-android-robot"></i>
                  <span>
                    available on
                    <span className="large-text">Play Store</span>
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
