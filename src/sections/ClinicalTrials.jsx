import { useState } from "react";
import data from "../assets/dummy_data.json";

function ClinicalTrials() {
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState(false);
  const statusStyles = {
    Completed: "border-red-500 bg-red-200",
    "Active, not recruiting": "border-yellow-500 bg-yellow-200",
    Recruiting: "border-green-500 bg-green-200",
  };

  function toggle() {
    console.log(!setActive);
  }

  return (
    <div>
      <div
        className="heading flex items-center justify-between border border-white p-2"
        onClick={() => setDisplay(!display)}
      >
        <div className="flex items-baseline">
          Clinical Trials &emsp;
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
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
          display ? "" : "hidden"
        }`}
      >
        {data.results.clinical_trials.map((clinical_trial) => (
          <div
            className={`flex flex-col justify-between h-40 p-2.5 hover:bg-white/10 rounded-lg ${
              active ? "bg-white/20" : ""
            }`}
            onClick={toggle}
          >
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
    </div>
  );
}

export default ClinicalTrials;
