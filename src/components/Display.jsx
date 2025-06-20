import { useState } from "react";
import ClinicalTrials from "../sections/ClinicalTrials";
import Leaders from "../sections/Leaders";
import ResearchPaper from "../sections/ResearchPaper";
import data from "../assets/dummy_data.json";

function Display() {
  const [selected, setSelected] = useState(1);

  function setToggle(id) {
    setSelected(id);
  }

  let selectedComponent;
  switch (selected) {
    case 1:
      selectedComponent = <ResearchPaper />;
      break;
    case 2:
      selectedComponent = <Leaders />;
      break;
    case 3:
      selectedComponent = <ClinicalTrials />;
      break;
    default:
      selectedComponent = <ResearchPaper />;
  }

  return (
    <section className="p-2.5">
      <h1 className="text-2xl font-bold">
        Showing{" "}
        {data.results.clinical_trials.length +
          data.results.leaders.length +
          data.results.leaders.length}{" "}
        results for {`"${data.search_term}"`}
      </h1>
      <br />
      <ul className="grid grid-cols-1 md:grid-cols-3">
        <li
          className={`border border-white flex justify-center items-center font-bold w-full text-center p-1 ${
            selected === 1 ? "bg-white text-dark-blue" : "cursor-pointer"
          }`}
          onClick={() => setToggle(1)}
        >
          <div className="flex items-baseline">
            Research Papers &emsp;
            <p
              className={`w-fit text-xl font-bold px-4 rounded-full ${
                selected === 1
                  ? "bg-dark-blue text-white"
                  : "bg-white text-dark-blue"
              }`}
            >
              {data.results.research_papers.length}
            </p>
          </div>
        </li>
        <li
          className={`border border-white flex justify-center items-center font-bold w-full text-center p-1 ${
            selected === 2 ? "bg-white text-dark-blue" : "cursor-pointer"
          }`}
          onClick={() => setToggle(2)}
        >
          <div className="flex items-baseline">
            Leaders &emsp;
            <p
              className={`w-fit text-xl font-bold px-4 rounded-full ${
                selected === 2
                  ? "bg-dark-blue text-white"
                  : "bg-white text-dark-blue"
              }`}
            >
              {data.results.leaders.length}
            </p>
          </div>
        </li>
        <li
          className={`border border-white flex justify-center items-center font-bold w-full text-center p-1 ${
            selected === 3 ? "bg-white text-dark-blue" : "cursor-pointer"
          }`}
          onClick={() => setToggle(3)}
        >
          <div className="flex items-baseline">
            Clinical Trials &emsp;
            <p
              className={`w-fit text-xl font-bold px-4 rounded-full ${
                selected === 3
                  ? "bg-dark-blue text-white"
                  : "bg-white text-dark-blue"
              }`}
            >
              {data.results.research_papers.length}
            </p>
          </div>
        </li>
      </ul>
      {selectedComponent}
    </section>
  );
}

export default Display;
