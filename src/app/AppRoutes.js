import Titles from "../components/titles/Titles";
import Poems from "../components/poems/Poems";
import Home from "../components/home/Home"
import About from "../components/about/About"
import {Route, Routes} from "react-router-dom";

const AppRoutes = () => {

    return (
    <Routes>
        <Route path="/titles" element={<Titles />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    )
}

export default AppRoutes;