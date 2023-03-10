const Home = () => {
  const getPattern = () => {
    let htmlListItems = [];
    for (let i = 0; i <= 5; i++) {
      let randomColStart = Math.floor(Math.random() * (1 - 7) + 1);
      let randomColSpan = Math.floor(Math.random() * (1 - 3) + 1);
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
    console.log("html", htmlListItems);
    return htmlListItems;
  };
  const htmlListItems = getPattern();

  return (
    <ul className="grid grid-cols-6 grid-rows-3 gap-4">
      {htmlListItems}
    </ul>
  );
};

export default Home;

/* <li className="border-2 col-start-5 col-span-1 row-start-1 row-span-1">|_|</li>
            <li className="border-2 col-start-1 col-span-3 row-start-2 row-span-1">|_|</li>
            <li className="border-2 col-start-1 col-span-1 row-start-1 row-span-3">|_|</li>
            <li className="border-2 col-start-3 col-span-4 row-start-2 row-span-2">|_|</li>
            <li className="border-2 col-start-4 col-span-1 row-start-2 row-span-3 self-end">|_|</li>
            <li className="border-2 col-start-2 col-span-3 row-start-1 row-span-1 self-end">|_|</li>
            <li className="border-2 col-start-3 col-span-2 row-start-2 row-span-1 self-end">|_|</li>
            <li className="border-2 col-start-4 col-span-1 row-start-2 row-span-2 self-end">|_|</li>
            <li className="border-2 col-start-5 col-span-1 row-start-3 row-span-1 self-end">|_|</li> */
