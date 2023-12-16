import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-dark">
        <div className="container-fluid">
          <Link className="text-light fs-3 mx-5" to={"/"}>
            Mcga-Librería
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="text-white" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="text-white" to={"/Books"}>
                  Libros
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="text-white" to={"/About"}>
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <p className="d-flex align-items-end  text-white m-0">
              Universidad Abierta Interamericana
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
