import { useState } from "react";

function Related({ researchPaper, leader }) {
  const [showRelated, setShowRelated] = useState(false);
  if (!researchPaper && !leader) return null;

  return (
    <div
      className={`bg-[#009DB6] text-dark-blue flex flex-col fixed bottom-0 left-0 w-full p-2 gap-2 rounded-t-xl h-60 transition-transform ${
        showRelated ? "" : "translate-y-49"
      }`}
      onClick={() => setShowRelated(!showRelated)}
    >
      <h2 className="text-xl font-bold flex items-center gap-2">
        <i
          className={`bx ${showRelated ? "bxs-down-arrow" : "bxs-up-arrow"}`}
        />
        <span className="underline">Related to:</span>
        <span className="">{researchPaper?.title || leader?.name}</span>
      </h2>

      {researchPaper && (
        <div className="h-full grid grid-cols-5 overflow-x-auto no-scrollbar">
          {researchPaper.similar_papers.map((similar_paper, index) => (
            <div
              key={index}
              className="p-2 flex flex-col justify-between border-y border-dark-blue"
            >
              <h1 className="font-bold text-lg">{similar_paper.title}</h1>
              <h2>
                <span className="font-bold">Written by: </span>
                {similar_paper.authors.join(", ")}
              </h2>
              <div className="flex justify-between text-xs">
                <p className="font-bold">Journal: </p>
                <p>{similar_paper.journal}</p>
              </div>
              <p className="text-xs line-clamp-2">{similar_paper.abstract}</p>
              <div className="flex justify-between items-center text-sm">
                <p className="font-bold">Citations: </p>
                <p className="border border-dark-blue px-2 py-1 rounded-full">
                  {similar_paper.citation_count}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p className="font-bold">Published Date:</p>
                <p className="border border-dark-blue px-2 py-1 rounded-full">
                  {similar_paper.published_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {leader && (
        <div className="h-full flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Related Authors:</h3>
          <div className="flex flex-wrap gap-2">
            {leader.related_authors.map((author, index) => (
              <span
                key={index}
                className="bg-white text-dark-blue px-3 py-1 rounded-full border border-dark-blue text-sm"
              >
                {author}
              </span>
            ))}
          </div>
          <div className="text-lg font-semibold">
            Payments:
            <div className="flex gap-4">
              <p className="text-sm font-normal">
                <span className="font-bold">Amazon: </span>
                {leader.payments.Amazon}
              </p>
              <p className="text-sm font-normal">
                <span className="font-bold">Facebook: </span>
                {leader.payments.Facebook}
              </p>
              <p className="text-sm font-normal">
                <span className="font-bold">Google: </span>
                {leader.payments.Google}
              </p>
              <p className="text-sm font-normal">
                <span className="font-bold">Oracle: </span>
                {leader.payments.Oracle}
              </p>
              <p className="text-sm font-normal">
                <span className="font-bold">Tesla: </span>
                {leader.payments.Tesla}
              </p>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Related Authors:</h3>
          <div className="flex flex-wrap gap-2">
            {leader.published_papers.map((published_paper, index) => (
              <span
                key={index}
                className="bg-white text-dark-blue px-3 py-1 rounded-full border border-dark-blue text-sm"
              >
                {published_paper.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Related;
