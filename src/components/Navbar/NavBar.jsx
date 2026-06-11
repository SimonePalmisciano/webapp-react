import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex gap-3">
        <Link to="/" className="navbar-brand mb-0">Jurassic Pork</Link>
        <Link to="/products" className="nav-link text-white">Prodotti</Link>
      </div>
    </nav>
  );
}

export default NavBar;