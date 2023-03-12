const Home = () => {
  const getPattern = () => {
    let htmlListItems = [];
    for (let i = 0; i <= 5; i++) {
      let randomColStart = Math.floor(Math.random() * (1 - 7) + 1);
      let randomColSpan = Math.floor(Math.random() * (1 - 1) + 1);
      let randomRowStart = Math.floor(Math.random() * (1 - 3) + 1);
      htmlListItems.push(
        <li
          key={`htmlListElement-${i}`}
          className={`border-2 col-start${randomColStart} col-span${randomColSpan} row-start${randomRowStart} row-span-1`}
        >
          /
        </li>
      );
    }
    return htmlListItems;
  };
  const htmlListItems = getPattern();

  return (
    <ul className="grid grid-cols-6 grid-rows-3 gap-4">{htmlListItems}</ul>
  );
};

export default Home;
