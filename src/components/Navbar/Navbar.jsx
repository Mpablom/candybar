import logo1 from "../../assets/img/logo1.png";
import "./navbar.css";

export function Navbar() {
    return (
        <div className="barra">
            <br />
            <nav class="navbar sticky-top bg-transparent bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img className="logo" src={logo1} alt="Logo" width="50" height="30" />
                </a>
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="#Bio">Sobre Nosotros</a>
                    <a className="nav-link" href="#galeria">Galería</a>
                    <a className="nav-link" href="#contacto">Contáctenos</a>
                </div>
            </div>
            </nav>
        </div>
    );
}
