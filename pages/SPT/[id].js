// pages/cars/[type].js
import { useRouter } from "next/router";
import Footer from "../../components/Common/Footer";
import Banner from "../../components/HomeSixteen/Banner";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import vehicles from "../../components/Datas/Vehicles";
// import Navbar from "../../components/Navbar";

const Shpt = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(vehicles.find((vehicle) => vehicle.id === id));
    setData(vehicles.find((vehicle) => vehicle.id === id));
  }, [id]);
  return (
    <>
      {/* <Banner /> */}
      <div
        className="container"
        style={{
          position: "relative",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Navigation />
      </div>
      <Footer />
    </>
  );
};

export default Shpt;
