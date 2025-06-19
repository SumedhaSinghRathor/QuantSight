import { useState } from "react";

function Related({ selectRelated }) {
  const [showRelated, setShowRelated] = useState(false);

  return (
    <div
      className={`bg-[#009DB6] text-dark-blue flex flex-col fixed bottom-0 left-0 w-full p-2 gap-2 rounded-t-xl h-72 transition-transform ${
        showRelated ? "" : "translate-y-62"
      } ${selectRelated !== null ? "" : "hidden"}`}
      onClick={() => setShowRelated(!showRelated)}
    >
      <div className="flex items-center font-bold gap-2">
        <i
          className={`bx text-2xl transition-transform ${
            showRelated ? "bxs-down-arrow" : "bxs-up-arrow"
          }`}
        />
        <p>Related</p>
      </div>
      <div className="bg-purple-500 h-full" />
    </div>
  );
}

export default Related;
