import React from "react";
import Image from "next/image";

const NewsletterForm = () => {
  return (
    <>
      <style jsx>{`
        .footer-top {
          position: relative;
          width: auto;
          height: 50vh;
          overflow: hidden;
        }

        .full-screen-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .footer-top {
            height: 30vh;
          }
        }

        @media (max-width: 480px) {
          .footer-top {
            height: 10vh;
          }
        }
      `}</style>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-text">
                <div className="full-screen-image">
                  <Image
                    src="/images/team/sss.png"
                    alt="Team Member Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* <div className="subscribe-form">
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    name="EMAIL"
                    required
                  />

                  <button type="submit" className="btn subscribe-btn">
                    <i className="icofont-paper-plane"></i>
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
