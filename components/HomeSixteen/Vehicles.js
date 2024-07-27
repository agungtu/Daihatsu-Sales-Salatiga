import React, { useState, useEffect } from "react";
import Link from "next/link";
import vehicles from "../Datas/Vehicles";
import { formatCurrency } from "../../utils/utils";

const Vehicles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([...vehicles]);
  }, []);
  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>Daihatsu Vehicles Model</h2>
            <p>
              Kami menyediakan produk unggulan daihatsu yang terbaik untuk
              keluarga anda.
            </p>
          </div>

          <div className="row justify-content-center ">
            {data.map((item) => (
              <Link
                href={`${item.url}`}
                className="col-md-6 col-lg-4 vehicles"
                key={item.name}
              >
                {/* <div
                className="col-md-6 col-lg-4 vehicles"
                key={item.name}
                onClick={() => {}}
              > */}
                <div className="image-wrapper">
                  <img className="image" src={item.imageUrl}></img>
                  <span className="price">
                    <span className="subs">Starting at</span>
                    {formatCurrency(item.price)}
                  </span>
                </div>
                <span className="title">{item.name}</span>
                {/* </div> */}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vehicles;
