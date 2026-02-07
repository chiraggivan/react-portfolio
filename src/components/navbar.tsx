import { NavLink } from "react-router-dom";

function PortfolioNavbar() {
  return (
    <nav
      className="navbar navbar-expand-xl bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid mt-3 mb-3">
        <a className="navbar-brand fs-2" href="#">
          Brand Name
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav fs-5 gap-5 ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-5 ms-5">
              <NavLink
                to="/react-portfolio/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/react-portfolio/backend"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Backend
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/react-portfolio/frontend"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Frontend
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <NavLink
                to="/react-portfolio/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
