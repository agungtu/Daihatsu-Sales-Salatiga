import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { routes } from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const pathname = usePathname();

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
    console.log(pathname, "pathname");
    return (
      <ul className="navbar-nav ms-auto rounded-5">
        {routes.map((value, i) => {
          if (value.child)
            return (
              <li className="nav-item dropdown">
                {!pathname?.startsWith("/#") ? (
                  <Link
                    onClick={toggleNavbar}
                    offset={() => 100}
                    className="nav-link  dropdown-toggle dropdown-overlay"
                    href={`/${value.path}`}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {value.name}
                  </Link>
                ) : (
                  <AnchorLink
                    onClick={toggleNavbar}
                    offset={() => 100}
                    className="nav-link  dropdown-toggle dropdown-overlay"
                    href={`${value.path}`}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {value.name}
                  </AnchorLink>
                )}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {value.child.map((value, i) => (
                    <li key={i}>
                      <Link
                        onClick={toggleNavbar}
                        offset={() => -30}
                        className="dropdown-item"
                        href={`${value.path}`}
                      >
                        {value.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          return (
            <li className="nav-item">
              {!pathname?.startsWith("/#") ? (
                <Link
                  onClick={toggleNavbar}
                  offset={() => 100}
                  className="nav-link"
                  href={`/${value.path}`}
                >
                  {value.name}
                </Link>
              ) : (
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => 100}
                  className="nav-link"
                  href={`${value.path}`}
                >
                  {value.name}
                </AnchorLink>
              )}
            </li>
          );
        })}
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
          {image &&
            image.map((value, i) => (
              <Link className="navbar-brand" href="/">
                <Image
                  key={i}
                  src={value.image}
                  alt="App Mockup image"
                  width={200}
                  height={400}
                />
              </Link>
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
