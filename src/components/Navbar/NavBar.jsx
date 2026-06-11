import { Link } from "react-router";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Jurassic Pork
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;