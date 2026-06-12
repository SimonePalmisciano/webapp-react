
import NavBar from "../Navbar/NavBar"

function Header() {
    return (
        <header className="mb-4 bg-jurassik-orange border-bottom border-jurassik-dark ">
            <NavBar/>
            <div className="container py-4 text-jurassik-light ">
                <h1 className="mb-1 h1-5">Jurassic Pork</h1>
                <p className=" mb-0 subtitle">
                    Panini, bites e sapori preistorici
                </p>
            </div>
        </header>
        
    )
}
export default Header