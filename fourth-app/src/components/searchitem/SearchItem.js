function SearchItem({ search, setSearch }) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-field">
                <label htmlFor="filter-box">
                    Item:
                </label>
                <input 
                    id="filter-box" 
                    type="text"
                    role="searchbox"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </form>
    );
}

export default SearchItem;
