import { useState } from "react";
import "../../app/App.css";
import { useListPostsQuery } from "./titlesApi";

const Titles = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isFetching } = useListPostsQuery(page);
  console.log("posts", posts);

  if (isLoading) {
    return <div className="flex-item center">Loading...</div>;
  }

  if (!posts) {
    return <div>No titles :(</div>;
  }

  return (
    <div className="App">
      {posts.map((poem, i) => {
        return (
          <ul
            className="text-xl font-serif hover:font-sans font divide-y divide-gray-400 odd:bg-white even:bg-slate-100"
            font-family="Georgia, Arial"
            key={`inside titles view ${i}`}
          >
            <li>
              <h2 className="">{poem.title} by {poem.author}</h2>
            </li>
          </ul>
        );
      })}
      <label>
        {page}/{3010 / 10}
      </label>
      <button
        className="rounded bg-sky-500 hover:bg-sky-700"
        onClick={() => setPage(page - 1)}
        isLoading={isFetching}
      >
        Previous
      </button>
      <button
        className="rounded bg-sky-500 hover:bg-sky-700"
        onClick={() => setPage(page + 1)}
        isLoading={isFetching}
      >
        Next
      </button>
    </div>
  );
};

export default Titles;
