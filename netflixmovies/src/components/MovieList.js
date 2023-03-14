import Movie from "./Movie";

function MovieList(props){
    return(
        <>
        {props.fetchData.map((item)=>{
            return(
                <Movie title={item.title} overview={item.overview} image={item.poster_path} id={item.id}/>
            )

        })}
        
        
        </>
    );
}

export default MovieList;