import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './features/Home/pages/HomePage';
import { MovieDetails } from './components/Movies/Movie/Details/MovieDetails';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">
          <h1 className='title'>Movies</h1>
        </Link>
        
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route exact path="/movies/:movieId" element={<MovieDetails></MovieDetails>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
