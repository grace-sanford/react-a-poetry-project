const About = () => {
  return (
    <div className="mt-0 text-sm font-serif font-light">
      <p>
        Mounted on top of an open source poetry API,{" "}
        <a
          className="font-semibold hover:bg-sky-700"
          href="https://github.com/thundercomb/poetrydb"
        >
          PoetryDB
        </a>
        , React, a poetry project, is a front-end poetry application. Toggle
        Titles to view 5 randomized poetry titles from a collection of over
        3000, or choose Poems to view the first five lines of single randomized
        poem.
      </p>
      <p className="mt-1">
        Driven by the texture of words, React, a poetry project, is built on the
        premise that poems bring people together: to insipire, feel, and create.
        Integrating principles of minimal design, the app encourages visitors to
        slow down, observe.
      </p>
      <p className="mt-1">
        React, a poetry project utilizes TailwindCSS for utility-first styling,
        DaisyUI for easily refactorable components, react-beautiful-dnd for a
        drag and drop, and, of course, React and Redux for maintaining local and
        global state. Happy poet-ing!
      </p>
      <p className="mt-1 text-right">
        Technologies: React, Redux, Git, TailwindCSS, DaisyUI, PoetryDB,
        react-beautiful-dnd
      </p>
      <p className="text-right">
        React, a poetry project is created by{" "}
        <a
          className="font-semibold hover:bg-sky-700"
          href="https://github.com/grace-sanford"
        >
          Grace Sanford
        </a>
      </p>
    </div>
  );
};

export default About;
