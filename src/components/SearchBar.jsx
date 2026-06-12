

export default function SearchBar({setSearchTerms, query, setQuery }) {

    const handleSearch = () => {
        setSearchTerms(query);
    }
    
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