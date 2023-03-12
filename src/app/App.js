import "../app/App.css";
import { useNavigate, Link } from "react-router-dom";
import TitlesAndPoemDnDFeature from "../components/toggle/TitlesAndPoemDnDFeature";
import NavBar from "../components/navbar/NavBar"
import { useState } from "react";
import AppRoutes from "./AppRoutes";

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
      navigate("/poems")
    }
  }
  //#endregion region TitlesAndPoemsDnD Feature State

  return (
    <div className="App grid grid-cols-6 grid-rows-3 gap-4 place-content-stretch">
      <h1 className="mt-14 text-4xl font-serif font-semibold border-2 col-start-2 col-span-4 row-start-1 row-span-1 self-start">
        <Link to="/*">React,</Link>
      </h1>
      <p className="mt-0 text-2xl font-serif font-semibold border-2 col-start-5 col-span-1 row-start-1 row-span-1 self-end">
        a poetry project
      </p>
      <NavBar />
      <div className="row-start-3 row-span-1 col-start-2 col-span-1 self-end">
      <TitlesAndPoemDnDFeature
        box={box}
        setBox={setBox}
        handleOnDragEnd={handleOnDragEnd}
      ></TitlesAndPoemDnDFeature>
      </div>
      <div className="mt-14 col-start-2 col-span-4 row-start-2 row-span-1 border-2">
      <AppRoutes />
      </div>
    </div>
  );
}

export default App;
