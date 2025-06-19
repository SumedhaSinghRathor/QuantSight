import data from "../assets/dummy_data.json";

function ClinicalTrials() {
  const statusStyles = {
    Completed: "border-red-500 bg-red-200",
    "Active, not recruiting": "border-yellow-500 bg-yellow-200",
    Recruiting: "border-green-500 bg-green-200",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.results.clinical_trials.map((clinical_trial) => (
        <div className="flex flex-col justify-between h-40 p-2.5 hover:bg-white/10 rounded-lg">
          <a
            href={clinical_trial.source}
            target="_blank"
            className="hover:underline"
          >
            <p className="font-bold text-lg">{clinical_trial.title}</p>
          </a>
          <p>
            <span className="font-bold">Condition:</span>
            {" " + clinical_trial.condition}
          </p>
          <p className="font-bold flex gap-2">
            <span className="px-2 border-2 bg-gray-200 border-gray-500 rounded-full text-dark-blue">
              {clinical_trial.phase}
            </span>
            <span
              className={`px-2 rounded-full border-2 text-dark-blue ${
                statusStyles[clinical_trial.trial_status] ||
                "bg-gray-200 border-gray-500"
              }`}
            >
              {clinical_trial.trial_status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ClinicalTrials;
