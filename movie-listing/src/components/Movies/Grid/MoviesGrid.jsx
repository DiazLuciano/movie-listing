import { useEffect, useState } from "react";
import { MovieCard } from "../Movie/Card/MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../../../services/Api/httpClient";
import { Spinner } from "../../Spinner/Spinner";
import { Empty } from "../common/Empty";

export function MoviesGrid({search}) {
    const [isLoading, setisLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        //spinner
        setisLoading(true);

        //url to call
        const searchUrl = search ? 
        `/search/movie?query=${search}&page=${page}` : 
        `/discover/movie?page=${page}`;

        //fetch
        get(searchUrl).then((data) => {
            setMovies(data.results);
            setisLoading(false);
        });
    }, [search, page]);

    if(movies.length === 0){
        return <Empty/>;
    }
 
    return (
        <ul className={styles.movieGrid}>
            {
                movies.map((movie) => {
                    return(
                        <MovieCard key={movie.id} movie={movie} />
                    );
                })
            }
        </ul>
    )
}
