import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";
import styles from "./MovieSearch.module.css";

export function MovieSearch() {
    //get params
    const query = useQuery();
    const toSearch = query.get("search");
    //push to url params
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search movie"
                    value={toSearch}
                    onChange= {(e) => {
                        const value = e.target.value;
                        history(`/?search=${value}`);
                    }}
                    >
                </input>
                <FaSearch size={20} color="black" className={styles.searchIcon}/>
            </div>
        </form>
    )
}
