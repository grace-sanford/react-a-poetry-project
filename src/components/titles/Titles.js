import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../app/App.css';
import { selectTitles, fetchTitlesAsync } from './titlesSlice';

const Titles = () => {
  const titles = useSelector(selectTitles);
  console.log("titles", titles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTitlesAsync());
  }, [dispatch])

  return (
    <div className="App">
      <h2>Titles</h2>
      {titles[0]}
      {titles.map((title, i) => {
        return <div key={`inside titles view ${i}`}>
          {title}
        </div>
      })}
    </div>
  );
}

export default Titles;
