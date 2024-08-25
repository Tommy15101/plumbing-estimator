const jobTypes = {
  Water: {
    materials: ["Pipe", "Valve", "Faucet"],
    equipment: ["Pipe Wrench", "Pipe Cutter"],
    reminders: ["Check water pressure", "Verify pipe sizes"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Safety Compliance: Ensure all safety protocols are followed.",
      "Warranty: Provide a 12-month warranty on all installations.",
    ],
  },
  Gas: {
    materials: ["Gas Pipe", "Regulator", "Connector"],
    equipment: ["Gas Detector", "Wrench"],
    reminders: ["Ensure proper ventilation", "Check for leaks"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Permits: Obtain all necessary permits before starting work.",
      "Insurance: Ensure proper insurance coverage for the project.",
    ],
  },
  Sewer: {
    materials: ["Sewer Pipe", "Cleanout Plug", "Manhole Cover"],
    equipment: ["Sewer Snake", "Camera"],
    reminders: ["Inspect for blockages", "Ensure proper slope"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Access: Ensure clear access to sewer lines for maintenance.",
      "Compliance: Follow local sewer regulations and codes.",
    ],
  },
  "Stormwater / Drainage": {
    materials: ["Drainage Pipe", "Gutter", "Catch Basin"],
    equipment: ["Shovel", "Level"],
    reminders: ["Check for proper grading", "Inspect drains for debris"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Drainage: Ensure proper drainage to prevent flooding.",
      "Inspection: Schedule an inspection upon completion.",
    ],
  },
  "Roofing / Guttering": {
    materials: ["Roof Shingles", "Gutter", "Downspout"],
    equipment: ["Ladder", "Nail Gun"],
    reminders: [
      "Inspect roof for damage",
      "Ensure gutters are securely attached",
    ],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Material Warranty: Ensure all roofing materials have a warranty.",
      "Safety: Follow all safety guidelines for working at heights.",
    ],
  },
  "Trade Waste": {
    materials: ["Trade Waste Pipe", "Grease Trap", "Screen"],
    equipment: ["Pump", "Pipe Cutter"],
    reminders: ["Check for contamination", "Ensure proper disposal methods"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Disposal: Follow regulations for trade waste disposal.",
      "Maintenance: Schedule regular maintenance checks.",
    ],
  },
  "Wastewater Treatment Plants": {
    materials: ["Treatment Tank", "Pump", "Filter"],
    equipment: ["pH Meter", "Flow Meter"],
    reminders: ["Monitor effluent quality", "Ensure regular maintenance"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Compliance: Adhere to environmental regulations.",
      "Operational Training: Provide training for plant operators.",
    ],
  },
  "Sewer Construction": {
    materials: ["Sewer Pipe", "Manhole", "Access Chamber"],
    equipment: ["Excavator", "Pipe Laying Equipment"],
    reminders: ["Ensure proper pipe alignment", "Check for leaks"],
    subcontractors: ["Electricians", "Carpenters", "Rope Access Techs"],
    clauses: [
      "Excavation Safety: Follow safety guidelines for excavation.",
      "Pipe Testing: Perform pressure testing on installed pipes.",
    ],
  },
};

export default jobTypes;
