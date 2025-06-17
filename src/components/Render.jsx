import ClinicalTrials from "../sections/ClinicalTrials";
import Leaders from "../sections/Leaders";
import ResearchPaper from "../sections/ResearchPaper";
import data from "../assets/dummy_data.json";

function Render() {
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
      <ResearchPaper />
      <Leaders />
      <ClinicalTrials />
    </section>
  );
}

export default Render;
