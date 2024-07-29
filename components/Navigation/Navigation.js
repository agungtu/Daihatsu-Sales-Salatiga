import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("menu-shrink");
      } else {
        elementId.classList.remove("menu-shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const image = [
    {
      image: "/images/Logo Daihatsu.png",
    },
  ];

  const renderMenus = () => {
    return (
      <ul className="navbar-nav ms-auto rounded-5">
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => 100}
            className="nav-link active"
            href="#home"
          >
            New Cars
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#shop"
          >
            Shopping Tool
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#price-list"
          >
            Price List
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#promo"
          >
            Promo
          </AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink
            onClick={toggleNavbar}
            offset={() => -30}
            className="nav-link"
            href="#news"
          >
            News
          </AnchorLink>
        </li>
      </ul>
    );
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div>
      <style jsx>{`
        #navbar {
          background-color: darkred;
        }

        #navbar.menu-shrink {
          background-color: darkred;
        }
      `}</style>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-md navbar-light top-menu"
      >
        <div className="container">
          <a className="navbar-brand" href="/"></a>
          {image &&
            image.map((value, i) => (
              <Image
                key={i}
                src={value.image}
                alt="App Mockup image"
                width={200}
                height={400}
              />
            ))}
          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            {renderMenus()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
