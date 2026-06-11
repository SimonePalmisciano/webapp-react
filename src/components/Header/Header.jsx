
import NavBar from "../Navbar/NavBar"

function Header() {
    return (
        <header className="bg-light border-bottom mb-4">
            <NavBar/>
            <div className="container py-4">
                <h1 className="mb-1">Jurassic Pork</h1>
                <p className="text-muted mb-0">
                    Panini, bites e sapori preistorici
                </p>
            </div>
        </header>
        
    )
}
export default Header