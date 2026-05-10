const qualityData = {

    overview: {
        title: "Quality Overview",

        description:
            "Quality in injection molding means producing parts that meet visual, dimensional, functional, and customer requirements consistently.",

        mainIdeas: [
            "Quality is built into the process, not inspected in at the end",
            "Good parts must meet cosmetic and functional requirements",
            "Process stability directly affects quality",
            "Technicians help quality by monitoring trends and defects",
            "Documentation protects the process and the customer"
        ],

        inspectionChecks: [
            "Visual appearance",
            "Critical dimensions",
            "Part weight",
            "Fit and function",
            "Cavity identification",
            "Defect location and frequency"
        ],

        commonMistakes: [
            "Only checking appearance",
            "Ignoring dimensional drift",
            "Not checking after a process change",
            "Mixing good and suspect parts",
            "Failing to document recurring defects"
        ],

        technicianStrategy: [
            "Know the quality standard before production starts",
            "Compare parts to approved samples when available",
            "Watch process data with part quality",
            "React to trends before scrap increases",
            "Communicate quality concerns early"
        ]
    },

    firstpiece: {
        title: "First-Piece Inspection",

        description:
            "First-piece inspection confirms that parts made after setup meet requirements before full production begins.",

        mainIdeas: [
            "First pieces verify setup accuracy",
            "Quality approval may be required before production release",
            "All cavities should be checked on multi-cavity molds",
            "First shots reveal setup, material, and process problems",
            "Do not assume production is ready after one good-looking part"
        ],

        inspectionChecks: [
            "Correct material and color",
            "Complete fill",
            "No flash",
            "No burn marks, splay, sinks, or shorts",
            "Critical dimensions",
            "Cavity-to-cavity consistency"
        ],

        commonMistakes: [
            "Starting full production before approval",
            "Checking only one cavity",
            "Ignoring startup defects",
            "Not recording process changes",
            "Failing to compare against the standard"
        ],

        technicianStrategy: [
            "Inspect first shots carefully",
            "Separate parts by cavity",
            "Verify known problem areas",
            "Record any process adjustments",
            "Wait for required approval before full production"
        ]
    },

    visual: {
        title: "Visual Inspection",

        description:
            "Visual inspection checks the appearance of molded parts for cosmetic defects, contamination, damage, and process-related issues.",

        mainIdeas: [
            "Visual standards define acceptable and unacceptable defects",
            "Lighting and inspection angle matter",
            "Some defects are cosmetic while others affect function",
            "Defect location helps identify root cause",
            "Consistent inspection prevents bad parts from escaping"
        ],

        inspectionChecks: [
            "Short shots",
            "Flash",
            "Sinks",
            "Burn marks",
            "Splay",
            "Flow lines",
            "Black specks",
            "Ejector marks"
        ],

        commonMistakes: [
            "Inspecting in poor lighting",
            "Ignoring small recurring defects",
            "Not identifying defect location",
            "Calling every cosmetic issue acceptable",
            "Failing to separate suspect parts"
        ],

        technicianStrategy: [
            "Use approved samples when possible",
            "Inspect the same areas every time",
            "Track whether defects repeat in the same cavity",
            "Separate cosmetic defects from functional risks",
            "Report repeating defects quickly"
        ]
    },

    dimensions: {
        title: "Dimensional Checks",

        description:
            "Dimensional checks confirm that molded parts meet required measurements and tolerances.",

        mainIdeas: [
            "Dimensions prove whether the part will fit or function",
            "Some dimensions are more critical than others",
            "Temperature and shrinkage affect measurements",
            "Dimensional drift can signal process instability",
            "Part dimensions should be checked after setup and process changes"
        ],

        inspectionChecks: [
            "Critical dimensions",
            "Overall length, width, and height",
            "Wall thickness",
            "Hole size and position",
            "Flatness or warpage",
            "Cavity-specific dimensions"
        ],

        commonMistakes: [
            "Measuring too soon while parts are still hot",
            "Using the wrong measuring tool",
            "Not checking all cavities",
            "Ignoring tolerance limits",
            "Only measuring after defects appear"
        ],

        technicianStrategy: [
            "Know which dimensions are critical",
            "Use the correct gauge or measuring tool",
            "Allow parts to cool when required",
            "Record measurements clearly",
            "Connect dimensional changes to process data"
        ]
    },

    gauges: {
        title: "Gauges & Measuring Tools",

        description:
            "Gauges and measuring tools are used to verify part dimensions, fit, and function.",

        mainIdeas: [
            "The correct tool must be used for the inspection",
            "Tools must be clean and in good condition",
            "Calibration status matters",
            "Measurement technique affects results",
            "Functional gauges can confirm real-world part fit"
        ],

        inspectionChecks: [
            "Calipers",
            "Micrometers",
            "Pin gauges",
            "Go / no-go gauges",
            "Height gauges",
            "Fixtures",
            "Customer-specific gauges"
        ],

        commonMistakes: [
            "Using uncalibrated tools",
            "Measuring with dirty tools",
            "Applying inconsistent pressure",
            "Using calipers where a fixture is required",
            "Not zeroing the tool before use"
        ],

        technicianStrategy: [
            "Verify the tool is correct for the check",
            "Check calibration labels when required",
            "Zero the tool before measuring",
            "Measure consistently each time",
            "Ask quality when measurement method is unclear"
        ]
    },

    partweight: {
        title: "Part Weight Tracking",

        description:
            "Part weight tracking helps monitor fill, pack, hold, material consistency, and process stability.",

        mainIdeas: [
            "Part weight is a strong process indicator",
            "Weight changes can reveal packing changes",
            "Weight trends may appear before visual defects",
            "Cavity weight differences can reveal imbalance",
            "Weight data supports troubleshooting"
        ],

        inspectionChecks: [
            "Total part weight",
            "Cavity-by-cavity weight",
            "Runner and part weight if applicable",
            "Weight after process changes",
            "Weight trend during production",
            "Weight compared to approved range"
        ],

        commonMistakes: [
            "Mixing cavities during weighing",
            "Using inconsistent sample sizes",
            "Ignoring small weight trends",
            "Not recording machine data with weight",
            "Only weighing after a reject occurs"
        ],

        technicianStrategy: [
            "Label samples by cavity",
            "Use the same scale and method",
            "Track weight with fill time and cushion",
            "Use weight to verify hold pressure changes",
            "Investigate sudden weight shifts"
        ]
    },

    samples: {
        title: "Approved Samples",

        description:
            "Approved samples are known-good parts used as a reference for appearance, color, fit, and sometimes dimensions.",

        mainIdeas: [
            "Approved samples help define acceptable quality",
            "Samples reduce opinion-based inspection",
            "Golden samples must be protected from damage",
            "Samples should match the current revision",
            "Operators and technicians should know where samples are stored"
        ],

        inspectionChecks: [
            "Color match",
            "Surface finish",
            "Allowed cosmetic marks",
            "Gate trim condition",
            "Part shape and fit",
            "Revision level"
        ],

        commonMistakes: [
            "Using an outdated sample",
            "Using a damaged sample",
            "Not comparing under proper lighting",
            "Assuming all cosmetic variation is acceptable",
            "Failing to replace missing samples"
        ],

        technicianStrategy: [
            "Confirm sample revision",
            "Protect approved samples",
            "Use samples during startup and troubleshooting",
            "Train operators on what to compare",
            "Ask quality when the sample and print disagree"
        ]
    },

    defects: {
        title: "Defect Documentation",

        description:
            "Defect documentation records what went wrong, where it happened, how often it happened, and what was done to correct it.",

        mainIdeas: [
            "Good documentation helps identify patterns",
            "Defect location can point to root cause",
            "Cavity-specific data is important",
            "Correction history helps future troubleshooting",
            "Poor documentation causes repeated problems"
        ],

        inspectionChecks: [
            "Defect type",
            "Defect location",
            "Cavity number",
            "Time defect started",
            "Machine settings at time of defect",
            "Corrective action taken"
        ],

        commonMistakes: [
            "Writing vague notes",
            "Not recording cavity number",
            "Failing to record process changes",
            "Mixing multiple defects together",
            "Not saving photos when useful"
        ],

        technicianStrategy: [
            "Describe the defect clearly",
            "Record where it appears on the part",
            "Track whether it repeats in one cavity",
            "Document what correction worked",
            "Use defect history during future setups"
        ]
    },

    controlplan: {
        title: "Control Plans",

        description:
            "A control plan defines what must be checked, how often it must be checked, what tool is used, and what action is required if parts fail.",

        mainIdeas: [
            "Control plans help maintain quality during production",
            "They define inspection frequency",
            "They identify critical characteristics",
            "They tell production how to respond to failures",
            "They create consistency between shifts"
        ],

        inspectionChecks: [
            "Inspection frequency",
            "Critical dimensions",
            "Visual requirements",
            "Required gauges",
            "Reaction plan",
            "Documentation requirements"
        ],

        commonMistakes: [
            "Not following inspection frequency",
            "Skipping required checks",
            "Using the wrong gauge",
            "Not following the reaction plan",
            "Failing to document inspection results"
        ],

        technicianStrategy: [
            "Know the control plan for the job",
            "Check critical features at required intervals",
            "Follow reaction plans when defects occur",
            "Communicate failures quickly",
            "Do not restart production until the issue is understood"
        ]
    },

    alerts: {
        title: "Quality Alerts",

        description:
            "Quality alerts notify production of known issues, customer concerns, special inspection requirements, or temporary containment actions.",

        mainIdeas: [
            "Quality alerts communicate important risks",
            "They may be temporary or job-specific",
            "Alerts often require special checks",
            "Technicians must make sure operators understand them",
            "Ignoring alerts can lead to customer escapes"
        ],

        inspectionChecks: [
            "Alert description",
            "Affected part number",
            "Specific defect or risk",
            "Inspection method",
            "Containment requirement",
            "Who to notify if found"
        ],

        commonMistakes: [
            "Not reading posted alerts",
            "Assuming operators already know",
            "Missing special inspection requirements",
            "Not removing outdated alerts",
            "Failing to escalate repeated issues"
        ],

        technicianStrategy: [
            "Review alerts during startup",
            "Point out quality risks during handoff",
            "Make sure operators know what to inspect",
            "Escalate repeat defects",
            "Verify alerts match the current production job"
        ]
    },

    containment: {
        title: "Containment",

        description:
            "Containment is the process of stopping suspect or defective parts from reaching the customer or the next operation.",

        mainIdeas: [
            "Containment protects the customer",
            "Suspect parts must be separated",
            "Parts made during unstable process periods may need review",
            "Containment requires clear labeling",
            "Production should not continue blindly during quality failures"
        ],

        inspectionChecks: [
            "Time defect started",
            "Last known good part",
            "Suspect quantity",
            "Affected cavities",
            "Parts in boxes, bins, or downstream areas",
            "Hold tags or quarantine labels"
        ],

        commonMistakes: [
            "Mixing suspect parts with good parts",
            "Not identifying the time range",
            "Failing to check downstream parts",
            "Continuing production without correction",
            "Not communicating containment status"
        ],

        technicianStrategy: [
            "Stop and separate suspect material",
            "Find the last known good parts",
            "Label suspect containers clearly",
            "Notify quality and supervision",
            "Do not release contained parts without approval"
        ]
    },

    rootcause: {
        title: "Root Cause Thinking",

        description:
            "Root cause thinking means finding the real reason a quality problem happened instead of only treating the symptom.",

        mainIdeas: [
            "A defect is a symptom",
            "Root cause explains why the defect happened",
            "Machine, mold, material, method, and measurement should be considered",
            "Fixing root cause prevents repeat problems",
            "Guessing leads to repeated scrap"
        ],

        inspectionChecks: [
            "When the defect started",
            "What changed before the defect appeared",
            "Which cavity is affected",
            "Which process data changed",
            "Material and drying condition",
            "Mold condition"
        ],

        commonMistakes: [
            "Changing settings without understanding the cause",
            "Blaming material without evidence",
            "Ignoring mold-specific defects",
            "Not checking recent changes",
            "Fixing the symptom only"
        ],

        technicianStrategy: [
            "Ask what changed",
            "Use process data and part evidence together",
            "Check cavity patterns",
            "Verify material, mold, and machine conditions",
            "Document the proven correction"
        ]
    },

    handoff: {
        title: "Shift Handoff",

        description:
            "Shift handoff communicates production status, quality issues, process changes, and risks to the next shift.",

        mainIdeas: [
            "Good handoff prevents repeated mistakes",
            "Process changes must be communicated",
            "Quality concerns should be clearly explained",
            "Open issues should not be hidden",
            "The next shift needs enough information to continue safely"
        ],

        inspectionChecks: [
            "Current process status",
            "Known defects",
            "Quality holds or containment",
            "Recent process changes",
            "Material or dryer concerns",
            "Tooling or machine issues"
        ],

        commonMistakes: [
            "Leaving vague notes",
            "Not mentioning process changes",
            "Failing to communicate quality holds",
            "Assuming the next shift will notice",
            "Not documenting recurring defects"
        ],

        technicianStrategy: [
            "Give clear notes",
            "Explain what changed and why",
            "Point out parts or defects to watch",
            "Share quality alerts or containment status",
            "Leave the next shift with useful information"
        ]
    }

};

function showQuality(topic) {

    const qualityBox =
        document.getElementById("qualityBox");

    const qualityTopic =
        qualityData[topic];

    if (!qualityTopic) {

        qualityBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This quality topic has not been added yet.
            </p>

        `;

        return;
    }

    qualityBox.innerHTML = `

        <h3>${qualityTopic.title}</h3>

        <p>
            ${qualityTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createQualityList(qualityTopic.mainIdeas)}

        <h4>Inspection Checks</h4>
        ${createQualityList(qualityTopic.inspectionChecks)}

        <h4>Common Mistakes</h4>
        ${createQualityList(qualityTopic.commonMistakes)}

        <h4>Technician Strategy</h4>
        ${createQualityList(qualityTopic.technicianStrategy)}

    `;

}

function createQualityList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}