import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style jsx>
        {`
          .tezx {
            color: white;
          }
        `}
      </style>
      <section
        id="contact"
        className="contact-section "
        style={{ backgroundColor: "black" }}
      >
        <div className="container wave-bg-section-tb-two">
          <div className="section-title">
            <h2 className="text-danger">Hubungi Kami</h2>
            <p className="tezx">Hubungi kami jika anda membutuhkan bantuan</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <a
                  href="https://maps.app.goo.gl/wtoFwUQxyBzHrGcL8"
                  target="_blank"
                >
                  <i className="icofont-location-pin"></i>
                  <h3>Alamat Kantor Kami :</h3>
                  <p className="tezx">
                    Jalan Osamaliki Sidorejo Lor Sidomukti, Sidorejo Lor, Kec.
                    Sidorejo, Kota Salatiga, Jawa Tengah 50711
                  </p>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont-envelope"></i>
                <h3 className="tezx">E-mail : </h3>
                <p className="tezx">marketingdaihatsusalatiga@gmail.com</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <a
                  href="https://api.whatsapp.com/send?phone=6281331208226"
                  target="_blank"
                >
                  <i className="icofont icofont-phone"></i>
                  <h3 className="tezx">Nomor Telepon :</h3>
                  <p className="tezx">6281331208226</p>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone number"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="form-control"
                          value={contact.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="Write your message..."
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 text-center">
                      <button type="submit" className="default-button">
                        Send Message
                        <i className="icofont-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactForm;
