import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-jurassik-orange border-bottom border-jurassik-dark ">
      <div className="container d-flex justify-content-start flex-wrap">
        <Link to="/" className="navbar-brand mb-0"><img src="/logo.webp" className="logo" /></Link>
        <div className="d-flex justify-content-between gap-2 flex-wrap row-gap-2">
        <Link to="/" className="btn btn-dark">Torna alla home</Link>
        <Link to="/products" className="text-white btn btn-dark">Il nostro menù</Link>
        <Link to="/about-us" className="text-white btn btn-dark">Chi siamo</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;