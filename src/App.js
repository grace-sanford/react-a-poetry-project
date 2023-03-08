import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Poems from "./components/poems/Poems"
import Poem from "./components/poem/Poem"

function App() {
  return (
    <div className="App">
      <h1>React-Poetry-Project-Prototype</h1>
      <Link></Link>
      <Link to="/poems"><button>Poems</button></Link>
      <Link to="/poem">Poem</Link>
      <Routes>
        <Route path="/poems" element={<Poems />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
    </div>
  );
}

export default App;
