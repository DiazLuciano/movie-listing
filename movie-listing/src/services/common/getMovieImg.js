import placeHolder from '../../utils/img/movie-placeholder.png';

export function getMovieImg(poster_path, size) {
    return poster_path ? `https://image.tmdb.org/t/p/w${size}${poster_path}` : placeHolder;
}
