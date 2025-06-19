import { useState } from "react";
import data from "../assets/dummy_data.json";

function ResearchPaper() {
  const [showRelated, setShowRelated] = useState(null);
  const [sortDirection, setSortDirection] = useState("none");
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: "none",
  });

  function toggleSort(field) {
    setSortConfig((prev) => {
      if (prev.field !== field) {
        return { field, direction: "asc" };
      } else if (prev.direction === "asc") {
        return { field, direction: "desc" };
      } else {
        return { field: null, direction: "none" };
      }
    });
  }

  const sortedPapers = [...data.results.research_papers];

  if (sortConfig.direction !== "none") {
    sortedPapers.sort((a, b) => {
      const valA =
        sortConfig.field === "citation"
          ? a.citation_count
          : new Date(a.published_date);
      const valB =
        sortConfig.field === "citation"
          ? b.citation_count
          : new Date(b.published_date);

      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    });
  }

  let sortIcon, buttonStyle;
  if (sortDirection === "asc") {
    sortedPapers.sort((a, b) => a.citation_count - b.citation_count);
    sortIcon = <i className="bx bx-up-arrow-alt text-xl" />;
    buttonStyle = "bg-white text-dark-blue";
  } else if (sortDirection === "desc") {
    sortedPapers.sort((a, b) => b.citation_count - a.citation_count);
    sortIcon = <i className="bx bx-down-arrow-alt text-xl" />;
    buttonStyle = "bg-white text-dark-blue";
  } else {
    sortedPapers;
    sortIcon = <i className="bx bx-up-arrow-alt text-xl" />;
  }

  return (
    <>
      <div className="flex justify-end gap-4">
        <div
          className={`flex w-fit my-2.5 items-center gap-2 border border-white rounded py-1 px-2 cursor-pointer transition-colors ${
            sortConfig.field === "citation" ? "bg-white text-dark-blue" : ""
          }`}
          onClick={() => toggleSort("citation")}
        >
          <p>Pages</p>
          {sortConfig.field === "citation" && (
            <i
              className={`bx ${
                sortConfig.direction === "asc"
                  ? "bx-up-arrow-alt"
                  : "bx-down-arrow-alt"
              } text-xl`}
            />
          )}
        </div>

        <div
          className={`flex w-fit my-2.5 items-center gap-2 border border-white rounded py-1 px-2 cursor-pointer transition-colors ${
            sortConfig.field === "date" ? "bg-white text-dark-blue" : ""
          }`}
          onClick={() => toggleSort("date")}
        >
          <p>Published On</p>
          {sortConfig.field === "date" && (
            <i
              className={`bx ${
                sortConfig.direction === "asc"
                  ? "bx-up-arrow-alt"
                  : "bx-down-arrow-alt"
              } text-xl`}
            />
          )}
        </div>
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
