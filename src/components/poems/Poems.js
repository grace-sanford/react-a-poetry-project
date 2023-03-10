import "../../app/App.css";
import { fetchPoemAsync, selectPoems } from "./poemsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Poems = () => {
  const dispatch = useDispatch();
  const poem = useSelector(selectPoems);
  const [loading, setLoading] = useState(true);

  const {title, author, linecount, lines } = poem;

  useEffect(() => {
    dispatch(fetchPoemAsync());
    setLoading(false);
  }, [dispatch]);

  console.log("poem", poem);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="text-4xl font-serif font-extrabold">
      <p>{title}</p>
      <p>{linecount}</p>
      <p>-{author}</p>
      {/* <p>{lines}</p> */}
    </div>
  );
};

export default Poems;
