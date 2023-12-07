import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg vw-100 bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mcga-Liberia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Books"}>Libros</Link>
              </li>
              <li className="nav-item">
                <Link to={"/About"}>Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Login"}>Log in</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Register"}>Registro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
