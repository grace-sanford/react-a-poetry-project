// import { useEffect } from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import "../../app/App.css";
// import { selectTitles, fetchTitlesAsync } from "./titlesSlice";
import { useListPostsQuery } from "./titlesApi";

const Titles = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isFetching } = useListPostsQuery(page);
  console.log("posts", posts)

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!posts) {
    return <div>No titles :(</div>;
  }

  // const titles = useSelector(selectTitles);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTitlesAsync());
  // }, [dispatch]);

  return (
    <div className="App">
      <h2>Titles</h2>
      {posts.map((poem, i) => {
        return <div key={`inside titles view ${i}`}>
          <h2>{poem.title}</h2> 
          <p>by {poem.author}</p>
          </div>;
      })}
      <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} isLoading={isFetching}>
        Next
      </button>
    </div>
  );
};

export default Titles;
