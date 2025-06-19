import data from "../assets/dummy_data.json";

function ResearchPaper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.results.research_papers.map((research_paper) => (
        <div className="w-fit flex flex-col gap-2 items-start p-6 hover:bg-white/10 rounded transition-colors">
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
          <p className="line-clamp-1">
            <b>Journal: </b> <span>{research_paper.journal}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResearchPaper;
