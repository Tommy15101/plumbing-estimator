const jobTypes = {
  "Hot Water System": {
    "Electric Storage": {
      materials: [
        "Quickie Kit",
        "ECV",
        "PTR",
        "Tempering Valve",
        "Lagging",
        "Slab / Pizza Base",
      ],
      equipment: ["Trailer", "Trolley Jack"],
      reminders: ["Order Materils", "Deliveries"],
      subcontractors: ["Electrical", "Carpentry"],
      clauses: ["Insert AS3500 Clauses", "Insert Reminders / Regulations"],
    },
    "Gas Storage": {
      materials: [
        "Quickie Kit",
        "ECV",
        "PTR",
        "Tempering Valve",
        "Lagging",
        "Slab / Pizza Base",
      ],
      equipment: ["Trailer", "Trolley Jack"],
      reminders: ["Gas Regulator Chcek", "System Compliance"],
      subcontractors: ["Electrical", "Carpentry"],
      clauses: ["Insert AS3500 Clauses", "Insert Reminders / Regulations"],
    },
    "Instatnaneous / Continuous Flow": {
      materials: ["Tempering Valve", "Lagging"],
      equipment: ["Trailer"],
      reminders: [
        "Exclusion Zones",
        "Gas Regulator Check",
        "System Compliance",
        "System Size",
      ],
      subcontractors: ["Electrical", "Carpentry"],
      clauses: ["Insert AS3500 Clauses", "Insert Reminders / Regulations"],
    },
  },

  Water: {
    "Rough In / In Wall": {
      materials: [
        "Copper Pipe",
        "PEX Pipe",
        "Elbows",
        "Tees",
        "Saddle Clips",
        "Brazing Rods",
        "Pipe Insulation",
        "Wall Plate Elbows",
      ],
      equipment: [
        "Pipe Bender",
        "Pipe Cutter",
        "Soldering Kit",
        "Press Tool",
        "Stud Finder",
      ],
      reminders: [
        "Check for wall studs and avoid damaging structural elements",
        "Pressure test the system",
        "Ensure pipe insulation for energy efficiency",
      ],
      subcontractors: [
        "Carpentry (for wall access)",
        "Tiling (if affecting wall tiles)",
      ],
      clauses: [
        "Ensure compliance with AS3500.1 for water services",
        "Adhere to local council regulations for plumbing rough-ins",
      ],
    },
    "Tap Replacement": {
      materials: ["New Tap Set", "Plumbers Tape", "Tap Washers", "O-Rings"],
      equipment: ["Spanner Set", "Basin Wrench", "Adjustable Pliers"],
      reminders: [
        "Turn off the water supply",
        "Check for any leaks after installation",
      ],
      subcontractors: [],
      clauses: [
        "Ensure tapware complies with WELS rating",
        "Check compliance with AS/NZS 6400",
      ],
    },
    "Fixture Replacement": {
      materials: [
        "New Fixture",
        "Plumbers Tape",
        "Sealant",
        "Flexible Connectors",
      ],
      equipment: ["Spanner Set", "Silicone Gun", "Pipe Cutter"],
      reminders: [
        "Turn off the water supply",
        "Check the integrity of seals",
        "Ensure proper alignment",
      ],
      subcontractors: ["Tiling (if needed)"],
      clauses: ["Ensure compliance with AS3500.1 and local plumbing codes"],
    },
    "Water Service Replacement": {
      materials: [
        "Copper Pipe",
        "PEX Pipe",
        "Brass Fittings",
        "Isolation Valves",
        "Backflow Prevention Device",
      ],
      equipment: [
        "Trenching Equipment",
        "Pipe Cutter",
        "Press Tool",
        "Pipe Wrench",
      ],
      reminders: [
        "Notify local council if required",
        "Pressure test the new service",
        "Update the property's water service diagram",
      ],
      subcontractors: ["Excavation"],
      clauses: [
        "Adhere to AS3500.1 for water supply installation",
        "Ensure compliance with backflow prevention regulations",
      ],
    },
    "Water Filter / Water Pump": {
      materials: [
        "Water Filter Unit",
        "Pump Unit",
        "Flexible Connectors",
        "Isolation Valve",
        "Pressure Relief Valve",
      ],
      equipment: [
        "Pipe Cutter",
        "Spanner Set",
        "Teflon Tape",
        "Multimeter (for electrical pump installations)",
      ],
      reminders: [
        "Ensure correct filter placement",
        "Test pump operation",
        "Flush the system after installation",
      ],
      subcontractors: ["Electrical (for pump connection)"],
      clauses: [
        "Ensure installation complies with AS3500.1 and AS3000 (for electrical work)",
      ],
    },
  },

  Gas: {
    "Gas Regulator Install/Replacement": {
      materials: [
        "Gas Regulator",
        "Copper Tubing",
        "Flare Nuts",
        "Isolation Valve",
      ],
      equipment: ["Pipe Wrench", "Leak Detection Fluid", "Pressure Gauge"],
      reminders: [
        "Turn off gas supply",
        "Pressure test the system after installation",
        "Check for leaks",
      ],
      subcontractors: [],
      clauses: [
        "Ensure compliance with AS5601 for gas installations",
        "Adhere to local gas safety regulations",
      ],
    },
    "Oven/CookTop Install/Replacement": {
      materials: [
        "Flexible Gas Hose",
        "Isolation Valve",
        "Brass Fittings",
        "Gas Tape",
      ],
      equipment: [
        "Spanner Set",
        "Leak Detection Fluid",
        "Multimeter (for electrical components)",
      ],
      reminders: [
        "Turn off gas supply",
        "Test for leaks",
        "Check appliance connections and settings",
      ],
      subcontractors: ["Electrical (for dual-fuel or electric ovens)"],
      clauses: [
        "Ensure compliance with AS5601 and AS3000 (if electrical)",
        "Check manufacturer’s installation guidelines",
      ],
    },
    "Gas Service Replacement": {
      materials: [
        "Copper Tubing",
        "PE Gas Pipe",
        "Isolation Valves",
        "Compression Fittings",
      ],
      equipment: [
        "Trenching Equipment",
        "Pipe Cutter",
        "Pipe Bender",
        "Leak Detection Fluid",
      ],
      reminders: [
        "Notify local gas authority if required",
        "Pressure test the new service",
        "Check for leaks",
      ],
      subcontractors: ["Excavation"],
      clauses: [
        "Adhere to AS5601 for gas installations",
        "Ensure compliance with local gas safety regulations",
      ],
    },
    "Gas Hot Water System": {
      materials: [
        "Gas Hot Water Unit",
        "Isolation Valve",
        "Copper Tubing",
        "Flue Kit (if required)",
      ],
      equipment: [
        "Pipe Cutter",
        "Pipe Wrench",
        "Leak Detection Fluid",
        "Pressure Gauge",
      ],
      reminders: [
        "Turn off gas supply",
        "Check flue requirements",
        "Test system for leaks and performance",
      ],
      subcontractors: ["Electrical (if system includes electric ignition)"],
      clauses: [
        "Ensure compliance with AS3500.4 and AS5601",
        "Adhere to manufacturer’s installation guidelines",
      ],
    },
  },

  Sewer: {
    "Dig Up / Repair / Re-run": {
      materials: [
        "PVC Pipe",
        "PVC Fittings",
        "Inspection Openings",
        "Backflow Prevention Device",
      ],
      equipment: ["Excavator", "Shovel", "Pipe Cutter", "Laser Level"],
      reminders: [
        "Check local council requirements",
        "Mark out services before digging",
        "Ensure correct fall for sewer lines",
      ],
      subcontractors: ["Excavation"],
      clauses: [
        "Ensure compliance with AS3500.2 for sanitary plumbing and drainage",
      ],
    },
    "Stack Work Maintenance": {
      materials: [
        "PVC Pipe",
        "PVC Fittings",
        "Brackets and Fixings",
        "Inspection Openings",
      ],
      equipment: ["Pipe Cutter", "Pipe Wrench", "Drain Camera (if required)"],
      reminders: [
        "Turn off water supply to the stack",
        "Check for blockages or damage",
      ],
      subcontractors: [],
      clauses: ["Adhere to AS3500.2 for sanitary plumbing and drainage"],
    },
  },

  "Stormwater / Drainage": {
    "Drainage System Install": {
      materials: ["PVC Pipe", "Drainage Pits", "Gullies", "Grates"],
      equipment: ["Excavator", "Shovel", "Pipe Cutter", "Laser Level"],
      reminders: [
        "Check local council stormwater requirements",
        "Ensure correct fall for drainage",
        "Install erosion control measures if required",
      ],
      subcontractors: ["Excavation"],
      clauses: ["Ensure compliance with AS3500.3 for stormwater drainage"],
    },
    "Stormwater To Street / Tank": {
      materials: [
        "PVC Pipe",
        "Stormwater Pit",
        "Backflow Prevention Valve",
        "Gutter Guard",
      ],
      equipment: ["Excavator", "Laser Level", "Pipe Cutter", "Pipe Bender"],
      reminders: [
        "Check for council approval for street discharge",
        "Ensure correct pipe gradients",
      ],
      subcontractors: ["Excavation"],
      clauses: [
        "Adhere to AS3500.3 for stormwater drainage",
        "Check compliance with local council requirements",
      ],
    },
  },

  "Roofing / Guttering": {
    "Re-Roof": {
      materials: [
        "Roof Sheets",
        "Screws and Fixings",
        "Insulation",
        "Guttering",
      ],
      equipment: ["Safety Harness", "Drill", "Tin Snips", "Scaffolding"],
      reminders: [
        "Check weather forecast",
        "Ensure safety measures are in place",
        "Dispose of old materials properly",
      ],
      subcontractors: ["Scaffolding", "Roofing Specialist"],
      clauses: [
        "Ensure compliance with AS1562 for roof installation",
        "Adhere to safety standards for working at heights",
      ],
    },
    "Replace Gutter System": {
      materials: ["Guttering", "Downpipes", "Brackets", "Sealant"],
      equipment: ["Ladder", "Drill", "Sealant Gun", "Tin Snips"],
      reminders: [
        "Check for leaks after installation",
        "Ensure correct fall for gutters",
      ],
      subcontractors: [],
      clauses: ["Ensure compliance with AS3500.3 for stormwater drainage"],
    },
    "Roof/Gutter Repairs": {
      materials: [
        "Roofing Sheets",
        "Sealant",
        "Fixings",
        "Replacement Gutter Sections",
      ],
      equipment: ["Ladder", "Drill", "Sealant Gun", "Tin Snips"],
      reminders: [
        "Check weather forecast",
        "Ensure safety measures are in place",
      ],
      subcontractors: [],
      clauses: [
        "Adhere to AS1562 for roof repairs",
        "Check compliance with local council requirements",
      ],
    },
  },

  "Waste Water Treatment": {
    "New Install Treatment Plant": {
      materials: [
        "Treatment Plant Unit",
        "PVC Pipe",
        "Fittings",
        "Concrete Slab",
      ],
      equipment: [
        "Excavator",
        "Crane (if required)",
        "Pipe Cutter",
        "Laser Level",
      ],
      reminders: [
        "Check local council approval",
        "Ensure correct location for installation",
        "Conduct initial plant setup and testing",
      ],
      subcontractors: ["Excavation", "Electrical"],
      clauses: [
        "Ensure compliance with AS1547 for on-site wastewater management",
      ],
    },
    "Replacement Treatment Plant": {
      materials: [
        "Replacement Treatment Plant",
        "PVC Pipe",
        "Concrete Slab",
        "Fittings",
      ],
      equipment: [
        "Excavator",
        "Crane (if required)",
        "Pipe Cutter",
        "Laser Level",
      ],
      reminders: [
        "Check for local council approval",
        "Ensure proper decommissioning of old plant",
      ],
      subcontractors: ["Excavation", "Electrical"],
      clauses: ["Adhere to AS1547 for on-site wastewater management"],
    },
  },

  "Trade Waste": {
    "Commercial GAT Replacement/Install": {
      materials: [
        "Grease Arrestor Trap",
        "PVC Pipe",
        "Inspection Openings",
        "Isolation Valve",
      ],
      equipment: ["Excavator", "Pipe Cutter", "Laser Level", "Concrete Cutter"],
      reminders: [
        "Check local trade waste approval",
        "Ensure proper location and installation",
      ],
      subcontractors: ["Excavation"],
      clauses: [
        "Ensure compliance with AS3500.2 and local trade waste requirements",
      ],
    },
    "Domestic GAT Replacement/Install": {
      materials: [
        "Grease Arrestor Trap",
        "PVC Pipe",
        "Inspection Openings",
        "Isolation Valve",
      ],
      equipment: ["Excavator", "Pipe Cutter", "Laser Level", "Concrete Cutter"],
      reminders: [
        "Check local trade waste approval",
        "Ensure proper installation and testing",
      ],
      subcontractors: ["Excavation"],
      clauses: ["Adhere to AS3500.2 and local trade waste requirements"],
    },
  },
};

export default jobTypes;
