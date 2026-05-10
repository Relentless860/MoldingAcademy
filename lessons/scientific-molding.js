const scientificData = {

    overview: {
        title: "Scientific Molding Overview",

        description:
            "Scientific molding is a data-driven approach to injection molding. Instead of guessing, technicians use process studies and machine data to build stable, repeatable processes.",

        mainIdeas: [
            "Uses data instead of guesswork",
            "Separates fill, pack, hold, cooling, and recovery",
            "Focuses on repeatability",
            "Helps identify true root causes",
            "Reduces random machine adjustments"
        ],

        procedure: [
            "Start with a documented baseline process",
            "Verify material, mold, and machine conditions",
            "Run controlled studies one step at a time",
            "Record process data and part results",
            "Use data to define an acceptable process window"
        ],

        dataToWatch: [
            "Fill time",
            "Peak injection pressure",
            "Transfer position",
            "Cushion",
            "Part weight",
            "Recovery time",
            "Cycle time"
        ],

        commonMistakes: [
            "Changing multiple settings at once",
            "Adjusting pressure without checking fill time",
            "Ignoring cushion variation",
            "Not recording baseline settings",
            "Reacting to one bad shot instead of watching trends"
        ],

        technicianStrategy: [
            "Make one process change at a time",
            "Record before and after data",
            "Separate machine, mold, material, and process causes",
            "Use part weight and dimensions to confirm changes",
            "Treat repeatability as the main goal"
        ]
    },

    decoupled: {
        title: "Decoupled Molding",

        description:
            "Decoupled molding separates cavity filling from packing. This makes the process easier to control and troubleshoot.",

        mainIdeas: [
            "First stage fills the cavity",
            "Second stage packs the part",
            "Transfer position separates fill from hold",
            "Fill should be consistent before packing is adjusted",
            "Improves process control and repeatability"
        ],

        procedure: [
            "Set first-stage injection to fill most of the part",
            "Transfer before the cavity is fully packed",
            "Use hold pressure to finish packing",
            "Check cushion after transfer",
            "Verify part weight and dimensions"
        ],

        dataToWatch: [
            "Fill time",
            "Transfer position",
            "Peak pressure",
            "Cushion",
            "Part weight",
            "Short shot appearance during fill-only study"
        ],

        commonMistakes: [
            "Using hold pressure to finish filling a short shot",
            "Transferring too late and overpacking the part",
            "Transferring too early and creating sinks",
            "Ignoring fill time variation",
            "Not separating fill problems from pack problems"
        ],

        technicianStrategy: [
            "Stabilize fill before adjusting hold pressure",
            "Use transfer position carefully",
            "Watch cushion repeatability",
            "Use part weight to confirm packing",
            "Do not chase defects without knowing which stage causes them"
        ]
    },

    fillonly: {
        title: "Fill-Only Study",

        description:
            "A fill-only study shows how the mold fills without pack and hold pressure. It helps identify the correct transfer position and fill balance.",

        mainIdeas: [
            "Removes pack and hold influence",
            "Shows how the cavity fills during first stage",
            "Helps set transfer position",
            "Reveals flow restrictions and cavity imbalance",
            "Usually targets a short shot before full packing"
        ],

        procedure: [
            "Turn hold pressure and hold time down or off according to shop procedure",
            "Run short shots safely",
            "Adjust shot size or transfer to observe fill pattern",
            "Target a consistent short shot before full pack",
            "Record fill time, pressure, and part appearance"
        ],

        dataToWatch: [
            "Fill percentage",
            "Fill time",
            "Peak injection pressure",
            "Flow pattern",
            "Cavity balance",
            "Short-shot location"
        ],

        commonMistakes: [
            "Running full parts and calling it fill-only",
            "Leaving hold pressure active",
            "Ignoring cavity imbalance",
            "Not recording the fill pattern",
            "Changing speed and transfer at the same time"
        ],

        technicianStrategy: [
            "Use fill-only to understand flow before troubleshooting packing",
            "Look for hesitation, race tracking, and imbalance",
            "Compare cavities if multi-cavity",
            "Set transfer based on consistent fill behavior",
            "Return hold settings carefully after the study"
        ]
    },

    viscosity: {
        title: "Viscosity Curve",

        description:
            "A viscosity curve shows how material flow behavior changes at different injection speeds. It helps identify a stable fill-speed range.",

        mainIdeas: [
            "Viscosity is resistance to flow",
            "Injection speed affects apparent viscosity",
            "Fill time and pressure show material response",
            "The most stable area is usually where pressure changes less dramatically",
            "Helps avoid running at unstable speed ranges"
        ],

        procedure: [
            "Run fill-only shots at different injection speeds",
            "Record fill time and peak pressure",
            "Compare pressure changes at each speed",
            "Look for a stable processing range",
            "Choose a fill speed that gives repeatable results"
        ],

        dataToWatch: [
            "Injection speed",
            "Fill time",
            "Peak pressure",
            "Short shot consistency",
            "Part appearance",
            "Pressure change between speed steps"
        ],

        commonMistakes: [
            "Using packed parts instead of fill-only shots",
            "Not allowing the process to stabilize",
            "Changing temperature during the study",
            "Only choosing the fastest speed",
            "Ignoring burns, jetting, or flow defects"
        ],

        technicianStrategy: [
            "Use the curve to find a stable speed range",
            "Avoid speeds that cause large pressure swings",
            "Balance fill speed with cosmetic quality",
            "Watch for excessive shear heat",
            "Use data instead of guessing"
        ]
    },

    pressureloss: {
        title: "Pressure Loss Study",

        description:
            "A pressure loss study identifies where pressure is being used or lost as plastic moves from the barrel through the mold.",

        mainIdeas: [
            "Shows pressure demand through each flow section",
            "Helps locate restrictions",
            "Can reveal nozzle, sprue, runner, gate, or cavity issues",
            "Useful when pressure is high or parts short-shot",
            "Helps separate machine issues from mold restrictions"
        ],

        procedure: [
            "Measure pressure demand at different flow points",
            "Compare pressure through nozzle, sprue, runner, gate, and cavity",
            "Identify where pressure increases sharply",
            "Inspect the restriction area",
            "Correct mold, machine, or material issues as needed"
        ],

        dataToWatch: [
            "Peak injection pressure",
            "Pressure at each study step",
            "Fill time",
            "Cushion",
            "Short-shot pattern",
            "Material temperature"
        ],

        commonMistakes: [
            "Assuming high pressure is always a machine problem",
            "Ignoring nozzle or gate restrictions",
            "Not checking for cold material",
            "Failing to compare pressure changes",
            "Making pressure changes without inspecting the flow path"
        ],

        technicianStrategy: [
            "Use pressure loss data to locate restrictions",
            "Check nozzle and sprue fit first if pressure is abnormal",
            "Inspect runners and gates for blockage",
            "Look for material viscosity changes",
            "Do not just raise pressure without finding the cause"
        ]
    },

    cavitybalance: {
        title: "Cavity Balance",

        description:
            "Cavity balance checks whether all cavities in a multi-cavity mold fill evenly and produce consistent parts.",

        mainIdeas: [
            "All cavities should fill as evenly as possible",
            "Imbalance can cause short shots, flash, and weight variation",
            "Runner and gate differences affect filling",
            "Mold temperature differences can affect balance",
            "Balance affects dimensional consistency"
        ],

        procedure: [
            "Run fill-only shots",
            "Compare how each cavity fills",
            "Weigh parts from each cavity",
            "Check short-shot differences",
            "Inspect gates, runners, vents, and temperatures"
        ],

        dataToWatch: [
            "Part weight by cavity",
            "Fill pattern by cavity",
            "Short-shot percentage",
            "Cavity pressure if available",
            "Mold temperature by cavity",
            "Defect location by cavity"
        ],

        commonMistakes: [
            "Only inspecting one cavity",
            "Mixing cavities without tracking them",
            "Ignoring hot or cold cavities",
            "Blaming process settings when one gate is blocked",
            "Not identifying cavities during inspection"
        ],

        technicianStrategy: [
            "Label parts by cavity",
            "Compare part weights",
            "Check the same cavity over multiple shots",
            "Inspect gates and vents on problem cavities",
            "Fix mold imbalance before over-adjusting process settings"
        ]
    },

    gatefreeze: {
        title: "Gate Freeze Study",

        description:
            "A gate freeze study determines how long hold pressure remains effective before the gate freezes and stops material from entering the cavity.",

        mainIdeas: [
            "Hold pressure only works while the gate is open",
            "After gate freeze, more hold time does not add material",
            "Part weight is used to identify gate freeze",
            "Helps optimize hold time",
            "Reduces wasted cycle time"
        ],

        procedure: [
            "Run parts at increasing hold times",
            "Keep other settings constant",
            "Weigh each part or sample group",
            "Find where part weight stops increasing",
            "Set hold time based on the weight plateau"
        ],

        dataToWatch: [
            "Hold time",
            "Part weight",
            "Cushion",
            "Sink marks",
            "Voids",
            "Cycle time"
        ],

        commonMistakes: [
            "Adding hold time after gate freeze",
            "Changing hold pressure during the study",
            "Not weighing parts",
            "Using only visual inspection",
            "Ignoring cushion stability"
        ],

        technicianStrategy: [
            "Use part weight to confirm gate freeze",
            "Do not waste cycle time with unnecessary hold time",
            "Use consistent samples",
            "Watch sinks and voids during the study",
            "Record the final hold time"
        ]
    },

    cushion: {
        title: "Cushion Control",

        description:
            "Cushion is the material left in front of the screw after injection. Stable cushion is critical for repeatable packing pressure.",

        mainIdeas: [
            "Prevents the screw from bottoming out",
            "Supports pressure transfer",
            "Helps maintain packing consistency",
            "Variation can indicate process instability",
            "Important indicator for shot repeatability"
        ],

        procedure: [
            "Record cushion over multiple cycles",
            "Compare cushion variation",
            "Check shot size and recovery",
            "Inspect check ring if variation is excessive",
            "Confirm cushion supports proper packing"
        ],

        dataToWatch: [
            "Cushion position",
            "Shot size",
            "Recovery time",
            "Part weight",
            "Peak pressure",
            "Hold pressure response"
        ],

        commonMistakes: [
            "Ignoring cushion variation",
            "Running with no cushion",
            "Using excessive cushion",
            "Assuming cushion does not affect part quality",
            "Not checking check ring performance"
        ],

        technicianStrategy: [
            "Cushion should be small and repeatable",
            "Investigate large cushion swings",
            "Check cushion when troubleshooting short shots",
            "Use part weight with cushion data",
            "Do not allow the screw to bottom out"
        ]
    },

    partweight: {
        title: "Part Weight Study",

        description:
            "A part weight study uses molded part weight to understand fill, pack, hold, gate freeze, and process consistency.",

        mainIdeas: [
            "Part weight reveals process changes",
            "Weight increases when packing increases",
            "Stable weight usually indicates stable filling and packing",
            "Weight helps diagnose sinks, voids, and short shots",
            "Useful for process validation"
        ],

        procedure: [
            "Collect samples under controlled conditions",
            "Weigh parts consistently",
            "Record machine data with each sample",
            "Compare weight changes to process changes",
            "Use results to optimize packing and hold time"
        ],

        dataToWatch: [
            "Part weight",
            "Hold pressure",
            "Hold time",
            "Cushion",
            "Fill time",
            "Part dimensions"
        ],

        commonMistakes: [
            "Weighing mixed cavities without labels",
            "Using inconsistent sample sizes",
            "Changing multiple settings at once",
            "Ignoring moisture or material lot changes",
            "Not recording process data with weight results"
        ],

        technicianStrategy: [
            "Label samples clearly",
            "Compare cavity-to-cavity weight",
            "Use part weight when tuning hold pressure",
            "Watch weight trends during production",
            "Connect weight changes to dimensions and defects"
        ]
    },

    processwindow: {
        title: "Process Window",

        description:
            "A process window is the acceptable range where the process can make good parts consistently without running too close to defect limits.",

        mainIdeas: [
            "Defines high and low acceptable limits",
            "Helps avoid running near short-shot or flash conditions",
            "Improves repeatability across shifts",
            "Supports process validation",
            "Helps technicians know when the process is drifting"
        ],

        procedure: [
            "Start with a stable baseline process",
            "Identify short-shot limit",
            "Identify flash or overpack limit",
            "Check dimensions and appearance",
            "Choose a stable center point inside the good range"
        ],

        dataToWatch: [
            "Fill time range",
            "Pressure range",
            "Cushion range",
            "Part weight range",
            "Dimensional range",
            "Mold temperature range"
        ],

        commonMistakes: [
            "Running too close to defect limits",
            "Only checking cosmetic parts",
            "Ignoring dimensional drift",
            "Not testing high and low limits",
            "Assuming a process is stable after a few shots"
        ],

        technicianStrategy: [
            "Find the middle of the good process range",
            "Avoid edge-of-window processing",
            "Track both appearance and dimensions",
            "Document acceptable limits",
            "Use trend data to catch drift early"
        ]
    },

    monitoring: {
        title: "Process Monitoring",

        description:
            "Process monitoring means watching key machine and part data during production to detect process drift before bad parts are made.",

        mainIdeas: [
            "Stable processes show stable data",
            "Trends matter more than one cycle",
            "Process drift can come from material, mold, machine, or cooling changes",
            "Monitoring helps prevent scrap",
            "Good technicians know what normal data looks like"
        ],

        procedure: [
            "Know the approved process settings",
            "Watch key values during production",
            "Compare current values to baseline",
            "Investigate trends before defects become severe",
            "Document alarms, changes, and corrections"
        ],

        dataToWatch: [
            "Fill time",
            "Peak pressure",
            "Cushion",
            "Recovery time",
            "Cycle time",
            "Mold temperature",
            "Part weight"
        ],

        commonMistakes: [
            "Ignoring small trends",
            "Only reacting after quality rejects parts",
            "Not knowing the baseline process",
            "Changing settings without identifying the drift cause",
            "Failing to communicate changes between shifts"
        ],

        technicianStrategy: [
            "Know normal process values",
            "Watch for gradual drift",
            "Check material and cooling when data changes",
            "Record adjustments",
            "Use machine data and part inspection together"
        ]
    },

    documentation: {
        title: "Scientific Molding Documentation",

        description:
            "Scientific molding documentation records study results, approved settings, process windows, and key data needed to repeat a successful process.",

        mainIdeas: [
            "Turns process knowledge into repeatable instructions",
            "Protects the approved process",
            "Helps troubleshoot future issues",
            "Supports training and shift communication",
            "Prevents tribal knowledge from being lost"
        ],

        procedure: [
            "Record baseline settings",
            "Record study methods and results",
            "Document approved process window",
            "Save part weight and dimension data",
            "Update setup sheets after approved changes"
        ],

        dataToWatch: [
            "Approved machine settings",
            "Study results",
            "Process limits",
            "Part weight targets",
            "Quality standards",
            "Change history"
        ],

        commonMistakes: [
            "Not recording changes",
            "Using outdated setup sheets",
            "Saving only machine settings without study data",
            "Failing to document why a change was made",
            "Not sharing updates with other shifts"
        ],

        technicianStrategy: [
            "Document what changed and why",
            "Keep setup sheets accurate",
            "Use process data during shift handoff",
            "Record proven corrections",
            "Make the process repeatable for the next technician"
        ]
    }

};

function showScientific(topic) {

    const scientificBox =
        document.getElementById("scientificBox");

    const scientificTopic =
        scientificData[topic];

    if (!scientificTopic) {

        scientificBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This scientific molding topic has not been added yet.
            </p>

        `;

        return;
    }

    scientificBox.innerHTML = `

        <h3>${scientificTopic.title}</h3>

        <p>
            ${scientificTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createScientificList(scientificTopic.mainIdeas)}

        <h4>Procedure</h4>
        ${createScientificList(scientificTopic.procedure)}

        <h4>Data To Watch</h4>
        ${createScientificList(scientificTopic.dataToWatch)}

        <h4>Common Mistakes</h4>
        ${createScientificList(scientificTopic.commonMistakes)}

        <h4>Technician Strategy</h4>
        ${createScientificList(scientificTopic.technicianStrategy)}

    `;

}

function createScientificList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}