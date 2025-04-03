import MovieCard from "../components/MovieCard";
import { use, useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1,title: "John Wick",release_date: "2020"},
        {id: 2,title: "Terminatore",release_date: "1989"},
        {id: 3,title: "Matrix",release_date: "1986"},
    ];
    const handleSearch=(e)=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery('bandy');
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies....." className="search-input" value={searchQuery} 
                onChange={(e)=>setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) =>  
                (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            
        </div>
    );
}
export default Home;