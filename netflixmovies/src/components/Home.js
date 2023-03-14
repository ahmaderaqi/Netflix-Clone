import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import './Home.css'
function Home() {

    const [movieArrr, setMovieArrr] = useState([]);

    const sendReq = async () => {
        const serverURL = `http://localhost:3005/trend`;
        const response = await fetch(serverURL);
        const data = await response.json();
        
        setMovieArrr(data);
        console.log(data)
    }

    useEffect(()=>{
        sendReq();
    }, [])


    return (
        <>
            
            <div className="homeCss">
                <MovieList fetchData={movieArrr}/>
            </div>
            
            
            
        </>
    );
}

export default Home;