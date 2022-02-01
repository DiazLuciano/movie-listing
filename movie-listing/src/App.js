import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './features/Home/pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">
          <h1 className='title'>Movies</h1>
        </Link>
        <hr />
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
