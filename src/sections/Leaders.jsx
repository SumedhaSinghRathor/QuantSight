import { useState } from "react";
import data from "../assets/dummy_data.json";

function Leaders() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <div
        className="heading flex items-center justify-between border border-white p-2"
        onClick={() => setDisplay(!display)}
      >
        <div className="flex items-baseline">
          Leaders &emsp;
          <p className="text-xl font-bold bg-white text-dark-blue  px-4 rounded-full">
            {data.results.leaders.length}
          </p>
        </div>
        <div>
          {display ? (
            <i className="bx bxs-up-arrow"></i>
          ) : (
            <i className="bx bxs-down-arrow"></i>
          )}
        </div>
      </div>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 overflow-auto no-scrollbar ${
          display ? "" : "hidden"
        }`}
      >
        {data.results.leaders.map((leader) => (
          <div className="flex items-center shrink-0 gap-8 p-4 hover:bg-white/10 rounded transition-colors">
            <div className="size-30 bg-amber-50 rounded-full"></div>
            <div>
              <p className="font-bold">{leader.name}</p>
              <p>{leader.affiliation}</p>
              <p>
                Paper Count:{" "}
                <span className="border border-white font-bold px-2 rounded-full">
                  {leader.papers_count}
                </span>{" "}
                &nbsp; | &nbsp; Citation Count:{" "}
                <span className="border border-white font-bold px-2 rounded-full">
                  {leader.citation_count}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaders;
