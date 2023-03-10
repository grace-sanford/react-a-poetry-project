import "../app/App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Titles from "../components/titles/Titles";
import Poem from "../components/poem/Poem";
import TitlesAndPoemDnDFeature from "../components/toggle/TitlesAndPoemDnDFeature";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  //----------------------------------
  //#region TitlesAndPoemsDnD Feature State
  //----------------------------------
  //I lifted this state up from the TitlesAndPoemsDnDFeature and I will pass it down as props.
  const [box, setBox] = useState([
    {
      id: 0,
      label: "Poems",
      bg: "skyblue",
    },
    {
      id: 1,
      label: "Titles",
      bg: "slategray",
    },
  ]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const newBox = Array.from(box);
    const [draggedItem] = newBox.splice(result.source.index, 1);
    newBox.splice(result.destination.index, 0, draggedItem);
    setBox(newBox);
    if ((result.destination.index === 0 && draggedItem.bg === "slategray") || (result.destination.index === 1 && draggedItem.bg === "skyblue")){
      console.log("TITLES")
      navigate("/titles")
    } else {
      navigate("/poem")
    }
  }
  //#endregion region TitlesAndPoemsDnD Feature State

  return (
    <div className="App grid grid-cols-6 gap-4">
      <h1 className="text-4xl font-serif font-semibold border-2 col-start-2 col-span-4">
        React,
      </h1>
      <p className="text-2xl font-serif font-semibold border-2 col-start-5 col-span-1">
        a poetry project
      </p>
      <Link to="/titles" className="col-start-2 col-span-1 border-2 self-start">
        <button className="rounded bg-sky-500 hover:bg-sky-700">Titles</button>
      </Link>
      <Routes>
        <Route path="/titles" element={<Titles />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
      <Link to="/poem" className="col-start-5 col-span-1 border-2 self-end">
        <button className="rounded bg-sky-500 hover:bg-sky-700">Poems</button>
      </Link>
      <TitlesAndPoemDnDFeature
        className="col-start-2 col-span-1 border-2 self-end"
        box={box}
        setBox={setBox}
        handleOnDragEnd={handleOnDragEnd}
      ></TitlesAndPoemDnDFeature>
    </div>
  );
}

export default App;
