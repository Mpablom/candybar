import logo1 from "../../assets/img/logo1.png";
import "./navbar.css";

export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="./"><img className="logo" src={logo1} alt="Logo" width="50" height="50" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#bio">Sobre Nosotros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#galeria">Galeria</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#contacto">Contáctenos</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}
