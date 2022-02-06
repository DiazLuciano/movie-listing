import { useEffect, useState } from "react";
import { MovieCard } from "../Movie/Card/MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../../../services/Api/httpClient";
import { Spinner } from "../../Spinner/Spinner";
import { Empty } from "../common/Empty";
import InfiniteScroll from 'react-infinite-scroll-component';

export function MoviesGrid({search}) {
    const [isLoading, setisLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMoreMovies, sethasMoreMovies] = useState(true);

    useEffect(() => {
        //spinner
        setisLoading(true);

        //url to call
        const searchUrl = search ? 
        `/search/movie?query=${search}&page=${page}` : 
        `/discover/movie?page=${page}`;

        //fetch
        get(searchUrl).then((data) => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            sethasMoreMovies(data.page < data.total_pages);
            setisLoading(false);
        });
    }, [search, page]);

    if(!isLoading && movies.length === 0){
        return <Empty/>;
    }
 
    return (
        <InfiniteScroll 
            dataLength={movies.length}
            next={() => setPage((prevPage) => prevPage + 1 )}
            hasMore={hasMoreMovies}
            loader={<Spinner/>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
                }
            >
            <ul className={styles.movieGrid}>
                {
                    movies.map((movie) => {
                        return(
                            <MovieCard key={movie.id} movie={movie} />
                        );
                    })
                }
            </ul>
        </InfiniteScroll>
    )
}
