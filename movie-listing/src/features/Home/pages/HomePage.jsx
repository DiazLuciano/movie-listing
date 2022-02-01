import { MoviesGrid } from "../../../components/Movies/Grid/MoviesGrid";
import { MovieSearch } from "../../../components/Movies/Search/MovieSearch";

export function HomePage() {
    return (
        <div>
             <MovieSearch />
             <MoviesGrid />
        </div>
    )
}
