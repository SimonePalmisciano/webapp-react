

export default function SearchBar({query, setQuery, setCurrentOffset }) {
    
    return (
        <div className="search-bar my-2">
            <label htmlFor="cerca" className="form-label">Cerca</label>
            <input
                id="cerca"
                type="text"
                placeholder="Cerca..."
                className="form-control"
                value={query}
                onChange={(e) => {
                    setCurrentOffset(0);
                    setQuery(e.target.value);}}
            />
        </div>

    );
}