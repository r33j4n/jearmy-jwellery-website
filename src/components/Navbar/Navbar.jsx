import React, { useState } from "react";
import "./Navbar.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate(); // useNavigate for redirection

  const closeNavbar = () => setNavToggler(false);
  const toggleCategories = () => setShowCategories(!showCategories);

  const handleScrollTo = (scrollTo) => {
    closeNavbar();
    // Redirect to the home page and include the scrollTo query
    navigate(`/?scrollTo=${scrollTo}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex flex-sb">
            <RouterLink to="/?scrollTo=home" className="navbar-brand"
                  onClick={() => handleScrollTo("home")}>
              <img src={Logo} alt="Jearmy Jewellery" className="logo" />
            </RouterLink>
            <RouterLink to="/?scrollTo=home" className="navbar-brand"
                  onClick={() => handleScrollTo("home")}>
              <p className="xxx">Jearmy Jewellery</p>
            </RouterLink>
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>

            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <button
                type="button"
                className="navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav">
                {/* All Collections */}
                <li className="nav-item">
                  <RouterLink
                    to="/?scrollTo=allcollection"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => handleScrollTo("allcollection")}
                  >
                    All Collections
                  </RouterLink>
                </li>

                {/* Jewelry dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    onClick={toggleCategories}
                  >
                    Jewelry
                  </button>
                  {showCategories && (
                    <div className="dropdown-content">
                      <ul>
                        <li>
                          <RouterLink
                            to="/jwellery/thaali"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Thaali
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/jwellery/harams"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Harams
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/jwellery/necklace"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Necklaces
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/jwellery/chains"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Chains
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/jwellery/bracelets"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Bracelets
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/jwellery/rings"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Rings
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/jwellery/earings"
                            className="dropdown-link text-white ls-1 text-uppercase fw-2 fs-10"
                            onClick={closeNavbar}
                          >
                            Earrings
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {/* Gallery */}
                <li className="nav-item">
                  <RouterLink
                    to="/?scrollTo=gallery"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => handleScrollTo("gallery")}
                  >
                    Gallery
                  </RouterLink>
                </li>

                {/* About */}
                <li className="nav-item">
                  <RouterLink
                    to="/?scrollTo=about"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => handleScrollTo("about")}
                  >
                    About
                  </RouterLink>
                </li>

                {/* Contact */}
                <li className="nav-item">
                  <RouterLink
                    to="/?scrollTo=contact"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    onClick={() => handleScrollTo("contact")}
                  >
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;