import { Link } from "react-router-dom";

const HeaderFront = () => {
  return (
    <header className="header" id="header">
      <section className="wrapper container">
        <Link href="/" className="brand">
          CBDCITYALT
        </Link>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <span className="overlay"></span>
        <nav className="navbar" id="navbar">
          <div className="res_logo">
            <Link to="/" className="brand">
              CBDCITYALT
            </Link>
            <i className="fa-solid fa-xmark fa-2x"></i>
          </div>

          <ul className="menu" id="menu">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                Home
              </Link>
            </li>
            <li className="menu-item menu-dropdown">
              <span className="menu-link" data-toggle="submenu">
                Feature<i className="bx bx-chevron-down"></i>
              </span>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Feature Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Feature Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Feature Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Feature Link
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-dropdown">
              <span className="menu-link" data-toggle="submenu">
                Discover<i className="bx bx-chevron-down"></i>
              </span>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Discover Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Discover Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Discover Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Discover Link
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-dropdown">
              <span className="menu-link" data-toggle="submenu">
                Resource<i className="bx bx-chevron-down"></i>
              </span>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Resource Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Resource Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Resource Link
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="#" className="submenu-link">
                    Resource Link
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="#" className="menu-link">
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default HeaderFront;
