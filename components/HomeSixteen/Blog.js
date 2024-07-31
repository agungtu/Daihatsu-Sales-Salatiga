import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 className="text-uppercase text-danger">Berita Terbaru</h2>
            <p>Ikuti berita terkini update dari daihatsu yang menarik</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-blog-post-two"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <div className="blog-img">
                  <Link href="#">
                    <Image
                      src="/images/berita 1.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="post_date">
                    20 <br /> Sep
                  </div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="#">
                      Daihatsu Gelar Workshop Goes to Campus di UGM
                    </Link>
                  </h6>

                  <p>Sejalan dengan tagline Daihatsu Sahabatku</p>

                  <Link
                    href="https://api.whatsapp.com/send?phone=6281331208226"
                    target="_blank"
                    className="default-button"
                  >
                    Hubungi
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-blog-post-two"
                data-aos="fade-in"
                data-aos-duration="200"
                data-aos-delay="50"
              >
                <div className="blog-img">
                  <Link href="#">
                    <Image
                      src="/images/berita 2.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="post_date">
                    20 <br /> Sep
                  </div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="#">
                      Daihatsu Resmi Meluncurkan Penyegaran New Terios
                    </Link>
                  </h6>

                  <p>Daihatsu resmi meluncurkan penyegaran New Terios</p>

                  <Link
                    href="https://api.whatsapp.com/send?phone=6281331208226"
                    target="_blank"
                    className="default-button"
                  >
                    Hubungi
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-blog-post-two"
                data-aos="fade-in"
                data-aos-duration="200"
                data-aos-delay="50"
              >
                <div className="blog-img">
                  <Link href="#">
                    <Image
                      src="/images/berita 3.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                  <div className="post_date">
                    20 <br /> Sep
                  </div>
                </div>

                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="#">
                      Daihatsu Hadir Ramaikan GAIKINDO Jakarta Auto Week
                    </Link>
                  </h6>

                  <p>Daihatsu turut hadir meramaikan pameran otomotif</p>

                  <Link
                    href="https://api.whatsapp.com/send?phone=6281331208226"
                    target="_blank"
                    className="default-button"
                  >
                    Hubungi
                    <i className="icofont-swoosh-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
