import { useState } from "react";

export default function SearchBar({ setResults }) {
    const [query, setQuery] = useState("");

    const handslSearch = () => {
        fetch(`http://localhost:2222/search?query=${query}`)
            .then(res => res.json())
            .then(data => {
                setResults(data);
            })
            .catch(err => console.error(err));

    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>
        </div>

    );
}