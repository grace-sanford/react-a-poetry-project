import "../app/App.css";
import { Route, Routes, Link } from "react-router-dom";
import Titles from "../components/titles/Titles";
import Poem from "../components/poem/Poem";

function App() {
  return (
    <div className="App grid grid-cols-6 gap-4">
        <h1 className="text-4xl font-serif font-semibold border-2 col-start-2 col-span-4">React,</h1>
        <p className="text-2xl font-serif font-semibold border-2 col-start-5 col-span-1">
          a poetry project
        </p>
      <Link to="/titles">
        <button className="border-2 rounded bg-sky-500 hover:bg-sky-700">
          Titles
        </button>
      </Link>
      <Link to="/poem">
        <button className="border-2 rounded bg-sky-500 hover:bg-sky-700">
          Poem
        </button>
      </Link>
      <Routes>
        <Route path="/titles" element={<Titles />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
    </div>
  );
}

export default App;
