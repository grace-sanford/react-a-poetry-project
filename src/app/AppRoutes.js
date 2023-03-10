import Titles from "../components/titles/Titles";
import Poems from "../components/poems/Poems";
import {Route, Routes} from "react-router-dom";

const AppRoutes = () => {

    return (
    <Routes>
        <Route path="/titles" element={<Titles />} />
        <Route path="/poems" element={<Poems />} />
      </Routes>
    )
}

export default AppRoutes;