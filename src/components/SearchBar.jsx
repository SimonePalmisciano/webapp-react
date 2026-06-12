import { useState } from "react";

export default function SearchBar({ setResults }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        fetch(`http://localhost:2222/search?query=${query}`)
            .then(res => res.json())
            .then(data => {
                setResults(data);
            })
            .catch(err => console.error(err));

    };

    return (
        <div className="search-bar my-2">
            <input
                type="text"
                placeholder="Cerca..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button className="btn bg-jurassik-orange text-white" onClick={handleSearch}>
                Search
            </button>
        </div>

    );
}