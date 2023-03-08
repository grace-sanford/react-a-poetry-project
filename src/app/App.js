import "../app/App.css";
import styles from "../index.css"
import { Route, Routes, Link } from "react-router-dom";
import Titles from "../components/titles/Titles"
import Poem from "../components/poem/Poem"

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React-Poetry-Project</h1>
      <Link></Link>
      <Link to="/titles"><button>Titles</button></Link>
      <Link to="/poem">Poem</Link>
      <Routes>
        <Route path="/titles" element={<Titles />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
    </div>
  );
}

export default App;
