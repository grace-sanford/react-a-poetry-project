import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="btn-group col-start-5 col-span-1 row-start-3 row-span-1 self-end text-right">
      <Link to="home">
        <button className="rounded bg-sky-500 hover:bg-sky-700">Home</button>
      </Link>
      <Link to="/titles">
        <button className="rounded bg-sky-500 hover:bg-sky-700">Titles</button>
      </Link>
      <Link to="/poems">
        <button className="rounded bg-sky-500 hover:bg-sky-700">Poems</button>
      </Link>
      <Link to="/about">
        <button className="rounded bg-sky-500 hover:bg-sky-700">About</button>
      </Link>
    </div>
  );
};

export default NavBar;
