import { useState } from "react";
import data from "../assets/dummy_data.json";

function Leaders() {
  const [showRelated, setShowRelated] = useState(null);
  const [showDirection, setShowDirection] = useState("none");

  const sortedCitation = [...data.results.leaders];

  function toggleSort() {
    setShowDirection((prev) =>
      prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
    );
  }

  let sortIcon, buttonStyle;
  if (showDirection === "asc") {
    sortedCitation.sort((a, b) => a.citation_count - b.citation_count);
    sortIcon = <i className="bx bx-up-arrow-alt text-xl" />;
    buttonStyle = "bg-white text-dark-blue";
  } else if (showDirection === "desc") {
    sortedCitation.sort((a, b) => b.citation_count - a.citation_count);
    sortIcon = <i className="bx bx-down-arrow-alt text-xl" />;
    buttonStyle = "bg-white text-dark-blue";
  } else {
    sortedCitation;
    sortIcon = <i className="bx bx-up-arrow-alt text-xl" />;
  }

  return (
    <>
      <div
        className={`flex ml-auto w-fit my-2.5 items-center gap-2 border border-white rounded py-1 px-2 cursor-pointer transition-colors ${buttonStyle}`}
        onClick={toggleSort}
      >
        <p>Citation Count</p>
        {sortIcon}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-auto no-scrollbar">
        {sortedCitation.map((leader, index) => (
          <div
            key={index}
            className={`flex items-center shrink-0 gap-8 p-4 hover:bg-white/5 rounded transition-colors ${
              showRelated === index ? "bg-white/10 hover:bg-white/10" : ""
            }`}
            onClick={() => setShowRelated(showRelated === index ? null : index)}
          >
            <div className="size-30 bg-amber-50 rounded-full"></div>
            <div>
              <p className="font-bold text-lg">{leader.name}</p>
              <p>{leader.affiliation}</p>
              <p className="italic text-sm">{leader.subspecialty}</p>
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
    </>
  );
}

export default Leaders;
