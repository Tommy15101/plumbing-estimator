import React, { useState } from "react";
import useSteps from "../hooks/useSteps"; // Adjust path as necessary

const StepsComponent = () => {
  const [jobType, setJobType] = useState("hot-water-system"); // Example jobType
  const { steps, loading, error } = useSteps(jobType);

  return (
    <div>
      <h1>Steps for {jobType}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <button onClick={() => setJobType("plumbing-repair")}>
        Change Job Type
      </button>
    </div>
  );
};

export default StepsComponent;
