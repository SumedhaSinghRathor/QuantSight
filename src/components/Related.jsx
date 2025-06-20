import { useState } from "react";

function Related({ researchPaper, leader }) {
  const [showRelated, setShowRelated] = useState(false);
  if (!researchPaper && !leader) return null;

  return (
    <div
      className={`bg-[#009DB6] text-dark-blue flex flex-col fixed bottom-0 left-0 w-full p-3 gap-3 rounded-t-xl h-[60vh] sm:h-60 transition-transform ${
        showRelated ? "" : "translate-y-[80%]"
      }`}
      onClick={() => setShowRelated(!showRelated)}
    >
      <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
        <i
          className={`bx ${showRelated ? "bxs-down-arrow" : "bxs-up-arrow"}`}
        />
        <span className="underline">Related to:</span>
        <span>{researchPaper?.title || leader?.name}</span>
      </h2>

      {researchPaper && (
        <div className="h-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 overflow-x-auto no-scrollbar">
          {researchPaper.similar_papers.map((paper, idx) => (
            <div
              key={idx}
              className="min-w-[250px] sm:min-w-0 p-2 flex flex-col justify-between border-y border-dark-blue"
            >
              <h1 className="font-bold text-base sm:text-lg">{paper.title}</h1>
              <h2>
                <span className="font-bold">Written by: </span>
                {paper.authors.join(", ")}
              </h2>
              <div className="flex justify-between text-xs">
                <p className="font-bold">Journal:</p>
                <p>{paper.journal}</p>
              </div>
              <p className="text-xs line-clamp-2">{paper.abstract}</p>
              <div className="flex justify-between items-center text-sm">
                <p className="font-bold">Citations:</p>
                <p className="border px-2 py-1 rounded-full border-dark-blue">
                  {paper.citation_count}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="font-bold">Published Date:</p>
                <p className="border px-2 py-1 rounded-full border-dark-blue">
                  {paper.published_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {leader && (
        <div className="h-full flex flex-col gap-3">
          <h3 className="text-base sm:text-lg font-semibold">
            Related Authors:
          </h3>
          <div className="flex flex-wrap gap-2">
            {leader.related_authors.map((author, idx) => (
              <span
                key={idx}
                className="bg-white text-dark-blue px-3 py-1 rounded-full border border-dark-blue text-sm"
              >
                {author}
              </span>
            ))}
          </div>

          <div className="text-base sm:text-lg font-semibold">
            Payments:
            <div className="flex flex-wrap gap-4 mt-1">
              {["Amazon", "Facebook", "Google", "Oracle", "Tesla"].map(
                (company) => (
                  <p key={company} className="text-sm font-normal">
                    <span className="font-bold">{company}: </span>
                    {leader.payments[company]}
                  </p>
                )
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <h3 className="text-base sm:text-lg font-semibold">
              Published Papers:
            </h3>
            <div className="flex flex-wrap gap-2">
              {leader.published_papers.map((paper, idx) => (
                <span
                  key={idx}
                  className="bg-white text-dark-blue px-3 py-1 rounded-full border border-dark-blue text-sm"
                >
                  {paper.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Related;
