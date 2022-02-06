import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../../../services/Api/httpClient";
import { getMovieImg } from "../../../../services/common/getMovieImg";
import { Spinner } from "../../../Spinner/Spinner";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        get(`/movie/${movieId}`).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if(isLoading){
        return <Spinner/>;
    }

    const movieImg = getMovieImg(movie.poster_path, 500);
    return (
        <div className={styles.container}>
            <img
                src={movieImg}
                alt={movie.title}
                title={movie.title}
                className={`${styles.col} ${styles.movieImg}`}>
            </img>
            <div className={`${styles.col} ${styles.overview}`}>
                <p>
                    <strong>Title: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Genre: </strong>
                    {movie.genres.map(g => g.name).join(", ")}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}
