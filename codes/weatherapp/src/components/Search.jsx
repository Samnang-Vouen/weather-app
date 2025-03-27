function Search({getWeatherDetails}){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const handleSearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${API_KEY}`;
        getWeatherDetails(API_URL); // Fetchs weather details for the search city
    }
    return (
        <div className="Search">
            <form action="#" className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="Search city" className="search-input"/>
            </form>
            
            <button>Search</button>
        </div>
    )
}
export default Search