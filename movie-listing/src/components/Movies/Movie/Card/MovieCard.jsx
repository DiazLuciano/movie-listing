import { Link } from "react-router-dom";
import { getMovieImg } from '../../../../services/common/getMovieImg';
import styles from "./MovieCard.module.css";

export function MovieCard({movie}) {
    const movieImg = getMovieImg(movie.poster_path, 300);
    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
                <img width={230}
                    height={345}
                    className={styles.movieImg}
                    src={movieImg}
                    alt={movie.title}
                    title={movie.title}>
                </img>
                <div>
                    {movie.title}
                </div>
            </Link>
        </li>
    );
}
