import "../../app/App.css";
import { fetchPoemAsync, selectPoems } from "./poemsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Poems = () => {
  const dispatch = useDispatch();
  const poem = useSelector(selectPoems);
  const [loading, setLoading] = useState(true);

  const { title, author, linecount, lines } = poem;

  useEffect(() => {
    dispatch(fetchPoemAsync());
    setLoading(false);
  }, [dispatch]);

  console.log("poem", poem);
  console.log("lines", lines);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="text-sm font-serif text-left">
      <p>{title}</p>
      {lines ? (
        <div>
          <p className="text-sm font-serif font-light text-center">{lines[0]}</p>
          <p className="text-sm font-serif font-light text-center">{lines[1]}</p>
          <p className="text-sm font-serif font-light text-center">{lines[2]}</p>
          <p className="text-sm font-serif font-light text-center">{lines[3]}</p>
          <p className="text-sm font-serif font-light text-center">{lines[4]}</p>
          <p className="text-sm font-serif font-light text-center">{lines[5]}</p>
        </div>
      ) : (
        <p></p>
      )}
      <p className="text-sm font-serif text-right">-{author}</p>
    </div>
  );
};

export default Poems;
