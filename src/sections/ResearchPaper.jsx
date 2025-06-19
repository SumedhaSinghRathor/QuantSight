import { useState } from "react";
import data from "../assets/dummy_data.json";

function ResearchPaper() {
  const [showRelated, setShowRelated] = useState(null);
  const [sortDirection, setSortDirection] = useState("none");

  const sortedPapers = [...data.results.research_papers];

  function toggleSort() {
    setSortDirection((prev) =>
      prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
    );
  }

  let sortIcon;
  if (sortDirection === "asc") {
    sortedPapers.sort((a, b) => a.citation_count - b.citation_count);
    sortIcon = <i className="bx bx-sort-up p-1 bg-white text-dark-blue" />;
  } else if (sortDirection === "desc") {
    sortedPapers.sort((a, b) => b.citation_count - a.citation_count);
    sortIcon = <i className="bx bx-sort-down p-1 bg-white text-dark-blue" />;
  } else {
    sortedPapers;
    sortIcon = <i className="bx bx-sort-up p-1" />;
  }

  return (
    <>
      <div
        className="ml-auto border border-white w-fit my-2.5 text-3xl rounded-lg flex justify-end items-center overflow-clip"
        onClick={toggleSort}
      >
        {sortIcon}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedPapers.map((research_paper, index) => (
          <div
            key={index}
            className={`w-fit flex flex-col gap-2 items-start p-6 hover:bg-white/5 rounded transition-colors ${
              showRelated === index ? "bg-white/10 hover:bg-white/10" : ""
            }`}
            onClick={() => setShowRelated(showRelated === index ? null : index)}
          >
            <div className="bg-amber-50 aspect-[17/22] w-45 mx-auto"></div>
            <p className="line-clamp-2 font-bold text-xl">
              {research_paper.title}
            </p>
            <p className="text-md line-clamp-1">
              <b>Author: </b>
              {research_paper.authors.join(", ")}
            </p>
            <p className="text-xs line-clamp-3">{research_paper.abstract}</p>
            <p className="flex justify-between items-center w-full">
              <b>Citations:</b>{" "}
              <span className="py-1 px-2 rounded-xl border border-white">
                {research_paper.citation_count}
              </span>
            </p>
            <p className="flex justify-between items-center w-full">
              <b>Published Date: </b>{" "}
              <span className="py-1 px-2 rounded-xl border border-white">
                {research_paper.published_date}
              </span>
            </p>
            <p className="flex justify-between w-full">
              <span className="font-bold">Journal: </span>
              <span>{research_paper.journal}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResearchPaper;
