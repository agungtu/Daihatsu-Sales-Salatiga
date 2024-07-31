// pages/cars/[type].js
import { useRouter } from "next/router";
import Footer from "../../components/Common/Footer";
import Banner from "../../components/HomeSixteen/Banner";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import vehicles from "../../components/Datas/Vehicles";
// import Navbar from "../../components/Navbar";

const VehicleType = () => {
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
        }}
      >
        <Navigation />
        <div id="details" style={{ paddingTop: "80px", margin: "auto" }}>
          <img style={{ height: "91vh" }} src={data?.data?.imageUrl}></img>
        </div>
        <div>
          <div>{data?.data?.desc}</div>
          <div>
            <table className="table">
              <thead className="table-dark">
                <tr
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    widtr: "100%",
                  }}
                >
                  <td>{data?.data?.name}</td>
                  <td>manual</td>
                  <td>cvt</td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.pricing?.map((pricing) => (
                  <tr>
                    <td>{pricing?.type}</td>
                    <td>{pricing?.manualPrice}</td>
                    <td>{pricing?.cvtPrice}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={3}>
                    &gt;ADS = + 9.000.000 &gt; ADS + SC = +10.500.000 &gt; SC =
                    + 1.500.000
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Promo Kredit Murah</h4>
            <table className="table">
              <thead className="table-dark">
                <tr
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    width: "100%",
                  }}
                >
                  <td>DP Mulai</td>
                  <td>Cicilan Mulai</td>
                  <td>Bunga Mulai</td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.promo?.map((pricing) => (
                  <tr>
                    <td style={{}}>
                      <span>{pricing?.dp?.value}</span>
                      <span>{pricing?.dp?.desc}</span>
                    </td>
                    <td style={{}}>
                      <span>{pricing?.credit?.value}</span>
                      <span>{pricing?.credit?.desc}</span>
                    </td>
                    <td style={{}}>
                      <span>{pricing?.interest?.value}%</span>
                      <span>{pricing?.interest?.desc}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-3 " style={{ textAlign: "justify" }}>
              {data?.data?.desc2}
            </p>
          </div>
        </div>
        {[1, 2, 3].map((index) => (
          <div id="" style={{ paddingTop: "80px" }}>
            <img
              style={{ height: "91vh" }}
              src={`/images/daihatsu-vehicles/${data?.id}-spek-${index}.jpg`}
            ></img>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default VehicleType;
