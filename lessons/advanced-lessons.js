const advancedData = {

    scientific: {
        title: "Scientific Molding",

        description:
            "Scientific molding is a structured approach to developing and controlling an injection molding process using data instead of guesswork.",

        mainIdeas: [
            "Separates fill, pack, hold, cooling, and recovery",
            "Uses machine data to make decisions",
            "Focuses on repeatability and process control",
            "Reduces random adjustments and troubleshooting confusion"
        ],

        importantData: [
            "Fill time",
            "Peak injection pressure",
            "Transfer position",
            "Cushion",
            "Part weight",
            "Recovery time",
            "Cycle time"
        ],

        technicianStrategy: [
            "Make one change at a time",
            "Record the original process before adjusting",
            "Watch trends instead of reacting to one bad shot",
            "Use part weight and dimensions to verify changes",
            "Separate machine problems from mold and material problems"
        ],

        commonMistakes: [
            "Changing multiple settings at once",
            "Using pressure to fix every defect",
            "Ignoring cushion variation",
            "Not recording process changes",
            "Running without knowing the normal process window"
        ]
    },

    processwindow: {
        title: "Process Window Development",

        description:
            "A process window is the safe operating range where the machine can make good parts consistently.",

        mainIdeas: [
            "Defines acceptable high and low limits",
            "Helps identify stable processing conditions",
            "Improves repeatability across shifts",
            "Reduces scrap caused by running too close to process limits"
        ],

        importantData: [
            "Minimum and maximum fill pressure",
            "Acceptable fill time range",
            "Cushion range",
            "Part weight range",
            "Dimensional limits",
            "Mold temperature range"
        ],

        technicianStrategy: [
            "Start with a stable baseline process",
            "Adjust one parameter at a time",
            "Record when defects begin to appear",
            "Find the center of the good process range",
            "Avoid running at the edge of acceptable quality"
        ],

        commonMistakes: [
            "Calling a process stable after only a few shots",
            "Ignoring mold temperature drift",
            "Not checking part dimensions",
            "Only looking at cosmetic appearance",
            "Running too close to flash or short-shot limits"
        ]
    },

    moldsetup: {
        title: "Mold Setup",

        description:
            "Mold setup is the process of safely installing, aligning, connecting, and preparing a mold for production.",

        mainIdeas: [
            "Correct setup protects the mold and machine",
            "Water, air, hydraulics, and electrical connections must be verified",
            "Clamp tonnage and mold protection must be set correctly",
            "Setup mistakes can cause mold damage or unsafe conditions"
        ],

        importantData: [
            "Mold size and machine compatibility",
            "Clamp tonnage requirement",
            "Waterline layout",
            "Ejector stroke",
            "Core pull sequence",
            "Nozzle radius and sprue bushing fit"
        ],

        technicianStrategy: [
            "Verify correct mold before installation",
            "Clean platens and mold mounting surfaces",
            "Check waterlines for leaks and proper flow",
            "Set mold open and close positions carefully",
            "Confirm ejector return before cycling"
        ],

        commonMistakes: [
            "Wrong waterline routing",
            "Nozzle not seated correctly",
            "Mold protection set too high",
            "Ejectors not returning fully",
            "Skipping dry-cycle checks before production"
        ]
    },

    startup: {
        title: "Startup / Shutdown",

        description:
            "Startup and shutdown procedures protect material, molds, hot runners, and machine components during production changes.",

        mainIdeas: [
            "Startup should verify safety, material, mold, and process readiness",
            "Shutdown should prevent degradation and equipment damage",
            "Different materials require different shutdown procedures",
            "Hot runners and heat-sensitive materials need extra attention"
        ],

        importantData: [
            "Barrel temperature profile",
            "Mold temperature",
            "Material drying status",
            "Purge condition",
            "Hot runner temperature",
            "First-piece inspection results"
        ],

        technicianStrategy: [
            "Verify material and dryer settings before startup",
            "Allow heats to stabilize",
            "Purge until clean material is present",
            "Start with documented process settings",
            "Inspect first shots before increasing production speed"
        ],

        commonMistakes: [
            "Starting before material is dry",
            "Skipping purge after downtime",
            "Leaving heat-sensitive material sitting hot",
            "Not confirming first-piece quality",
            "Restarting after an alarm without checking the cause"
        ]
    },

    hotrunner: {
        title: "Hot Runner Systems",

        description:
            "Hot runner systems keep plastic molten inside heated manifolds and drops so material can flow directly into the cavity without a cold runner.",

        mainIdeas: [
            "Reduce runner waste",
            "Improve cycle efficiency",
            "Require accurate temperature control",
            "Can create defects if zones are too hot, too cold, or unbalanced"
        ],

        importantData: [
            "Manifold temperatures",
            "Drop temperatures",
            "Zone alarms",
            "Gate appearance",
            "Fill balance",
            "Material residence time"
        ],

        technicianStrategy: [
            "Verify all hot runner zones are heating correctly",
            "Watch for cold drops or overheated zones",
            "Check fill balance between cavities",
            "Avoid unnecessary temperature increases",
            "Purge carefully during color or material changes"
        ],

        commonMistakes: [
            "Ignoring one cold zone",
            "Overheating the hot runner to fix flow",
            "Not allowing zones to stabilize",
            "Poor purging during color change",
            "Confusing hot runner issues with machine pressure problems"
        ]
    },

    cooling: {
        title: "Water & Cooling Systems",

        description:
            "Cooling systems control mold temperature and remove heat from the molded part. Cooling is one of the biggest factors in cycle time and dimensional stability.",

        mainIdeas: [
            "Cooling controls part solidification",
            "Uneven cooling causes warpage and dimensional variation",
            "Restricted water flow can create hot spots",
            "Mold temperature must be stable for repeatable parts"
        ],

        importantData: [
            "Water temperature",
            "Water flow",
            "Pressure drop",
            "Mold surface temperature",
            "Cooling time",
            "Part temperature at ejection"
        ],

        technicianStrategy: [
            "Verify waterlines are connected correctly",
            "Check for blocked or restricted flow",
            "Use consistent water temperature",
            "Compare cavity temperatures when troubleshooting",
            "Inspect fittings and hoses for leaks or kinks"
        ],

        commonMistakes: [
            "Connecting waterlines incorrectly",
            "Ignoring low-flow circuits",
            "Using cooling time to hide water problems",
            "Not checking mold temperature drift",
            "Assuming water is flowing because hoses are connected"
        ]
    },

    automation: {
        title: "Robotics & Automation",

        description:
            "Robotics and automation remove parts, separate runners, place inserts, inspect parts, and help maintain consistent production flow.",

        mainIdeas: [
            "Improves cycle consistency",
            "Reduces manual handling",
            "Can support insert molding and part sorting",
            "Must be coordinated with mold open, ejection, and safety signals"
        ],

        importantData: [
            "Robot take-out time",
            "Mold open position",
            "Ejector timing",
            "Part detection signal",
            "Cycle time impact",
            "Safety interlock status"
        ],

        technicianStrategy: [
            "Confirm robot path is clear",
            "Verify part pickup before running automatic cycle",
            "Check sensors and vacuum signals",
            "Make sure robot timing does not slow the cycle unnecessarily",
            "Use manual mode carefully during setup"
        ],

        commonMistakes: [
            "Robot not clearing before mold close",
            "Poor part grip or vacuum loss",
            "Incorrect pickup position",
            "Ignoring safety interlocks",
            "Running automation before confirming stable ejection"
        ]
    },

    quality: {
        title: "Quality Checks",

        description:
            "Quality checks confirm that molded parts meet visual, dimensional, functional, and customer requirements.",

        mainIdeas: [
            "Quality is verified throughout production",
            "Visual defects and dimensions must both be monitored",
            "Part weight can reveal process changes",
            "Good documentation supports repeatability"
        ],

        importantData: [
            "First-piece inspection",
            "Part dimensions",
            "Part weight",
            "Visual defect checks",
            "Gauge results",
            "Customer specifications"
        ],

        technicianStrategy: [
            "Inspect first shots before full production",
            "Check critical dimensions at required intervals",
            "Watch part weight trends",
            "Separate cosmetic defects from functional failures",
            "Record process changes that affect quality"
        ],

        commonMistakes: [
            "Only checking cosmetic appearance",
            "Ignoring dimensional drift",
            "Not checking after process changes",
            "Failing to document scrap causes",
            "Assuming good parts without measurement"
        ]
    },

    documentation: {
        title: "Process Documentation",

        description:
            "Process documentation records the approved machine settings, quality standards, setup notes, and troubleshooting history needed to repeat a successful process.",

        mainIdeas: [
            "Creates a known good baseline",
            "Helps different shifts run the same process",
            "Supports troubleshooting and audits",
            "Prevents tribal knowledge from being lost"
        ],

        importantData: [
            "Machine settings",
            "Mold setup notes",
            "Material and dryer settings",
            "Waterline layout",
            "Quality checks",
            "Approved process changes"
        ],

        technicianStrategy: [
            "Record original settings before changing anything",
            "Document what changed and why",
            "Update setup sheets when improvements are approved",
            "Use trend data to support decisions",
            "Communicate important changes between shifts"
        ],

        commonMistakes: [
            "Changing settings without recording them",
            "Using outdated setup sheets",
            "Not documenting waterline changes",
            "Failing to record defect corrections",
            "Relying only on memory"
        ]
    }

};

function showAdvancedTopic(topic) {

    const advancedBox =
        document.getElementById("advancedBox");

    const advancedTopic =
        advancedData[topic];

    if (!advancedTopic) {

        advancedBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This advanced topic has not been added yet.
            </p>

        `;

        return;
    }

    advancedBox.innerHTML = `

        <h3>${advancedTopic.title}</h3>

        <p>
            ${advancedTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createAdvancedList(advancedTopic.mainIdeas)}

        <h4>Important Data To Watch</h4>
        ${createAdvancedList(advancedTopic.importantData)}

        <h4>Technician Strategy</h4>
        ${createAdvancedList(advancedTopic.technicianStrategy)}

        <h4>Common Mistakes</h4>
        ${createAdvancedList(advancedTopic.commonMistakes)}

    `;

}

function createAdvancedList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}