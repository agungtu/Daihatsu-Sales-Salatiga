import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/bang yo.jpeg",
    name: "Yoyo",
    designation: "Daihatsu",
    // shortText:
    //   "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-facebook",
        link: "https://www.facebook.com/",
      },
      {
        icon: "icofont-twitter",
        link: "https://www.twitter.com/",
      },
      {
        icon: "icofont-linkedin",
        link: "https://www.linkedin.com/",
      },
    ],
    duration: "800",
    delay: "100",
  },
];

const Team = () => {
  return (
    <>
      <section id="team" className="team-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 className="text-danger">Hubungi Team Marketing Kami</h2>
            <p>
              Tim marketing kami siap membantu Anda! Kami menawarkan berbagai
              layanan pemasaran yang dapat disesuaikan dengan kebutuhan anda
              serta memperoleh layanan isntan dalam membeli kendaraan anda.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <div className="col-md-4 col-lg-4" key={i}>
                  <div
                    className="single-member"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="member-img">
                      <Image
                        src={value.image}
                        alt="Team Member Image"
                        className="img-thumbnail round"
                        width={370}
                        height={450}
                      />

                      {/* <div className="overlay">
                        <div className="member-info">
                          <p>{value.shortText}</p>

                          <div className="social-links">
                            {value.socialLinks.map((value, i) => (
                              <a href={value.link} target="_blank" key={i}>
                                <i className={value.icon}></i>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=6285642689355"
                      target="_blank"
                    >
                      {" "}
                      <h4 className="member-name">{value.name}</h4>
                      <p className="designation">{value.designation}</p>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
