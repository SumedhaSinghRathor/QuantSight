import data from "../assets/dummy_data.json";

function Leaders() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-auto no-scrollbar">
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
  );
}

export default Leaders;
