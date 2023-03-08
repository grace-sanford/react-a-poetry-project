import "../app/App.css";
import { Route, Routes, Link } from "react-router-dom";
import Titles from "../components/titles/Titles"
import Poem from "../components/poem/Poem"

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React Poetry Project</h1>
      <Link></Link>
      <Link to="/titles"><button className="rounded bg-sky-500 hover:bg-sky-700" >Titles</button></Link>
      <Link to="/poem"><button className="rounded bg-sky-500 hover:bg-sky-700">Poem</button></Link>
      <Routes>
        <Route path="/titles" element={<Titles />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
    </div>
  );
}

export default App;
