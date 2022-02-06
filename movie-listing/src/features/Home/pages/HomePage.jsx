import { MoviesGrid } from "../../../components/Movies/Grid/MoviesGrid";
import { MovieSearch } from "../../../components/Movies/Search/MovieSearch";
import { useDebounce } from "../../../hooks/useDebounce";
import { useQuery } from "../../../hooks/useQuery";

export function HomePage() {
    //capture the input search and debounce it
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 350);

    return (
        <div>
             <MovieSearch />
             <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )
}
