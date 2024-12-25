import logo from '../../assets/logo/logo-tienda.png';
import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../NavBar/NavBar.css'

export const NavBar = () => {
  const { category } = useParams();

  return (
    <header>
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark navbar-dark border-bottom border-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <Link to="/">
        <div class="navbar-brand active">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page">Inicio</Link>
          </li>
          <li class="nav-item">
            <Link to="/ItemListContainer" class="nav-link active" aria-current="page">Tienda</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Categorias</a>
            <ul class="dropdown-menu">
              <li><Link to={`/Category/Celulares`} class="dropdown-item">Celulares</Link></li>
              <li><Link to={`/Category/Notebooks`} class="dropdown-item">Notebooks</Link></li>
              <li><Link to={`/Category/Tablets`} class="dropdown-item">Tablets</Link></li>
            </ul>
          </li>
        </ul>
        <CartWidget />
      </div>
    </div>
  </nav>
</header>


  );
};