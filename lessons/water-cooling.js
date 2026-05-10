const coolingData = {

    overview: {
        title: "Cooling System Overview",

        description:
            "The cooling system removes heat from the molded part and controls mold temperature. Cooling is one of the biggest factors in cycle time, warpage, shrinkage, and dimensional stability.",

        mainIdeas: [
            "Cooling usually takes the largest portion of the molding cycle",
            "Mold temperature affects part dimensions and appearance",
            "Water flow must be consistent and balanced",
            "Uneven cooling can cause warpage and shrinkage variation",
            "Cooling problems are often mistaken for process problems"
        ],

        keyChecks: [
            "Waterlines connected correctly",
            "Supply and return lines verified",
            "Water flow confirmed",
            "Leaks repaired before production",
            "Mold temperature stable",
            "Cooling time appropriate for the part"
        ],

        commonProblems: [
            "Warped parts",
            "Sticking parts",
            "Long cycle times",
            "Dimensional variation",
            "Hot spots",
            "Uneven cavity temperatures"
        ],

        technicianStrategy: [
            "Check water flow before changing process settings",
            "Compare mold temperatures across cavities",
            "Watch for blocked or restricted circuits",
            "Do not use extra cooling time to hide poor water flow",
            "Document waterline routing when it affects the process"
        ]
    },

    moldtemp: {
        title: "Mold Temperature",

        description:
            "Mold temperature controls how fast plastic cools and how the part surface forms. It also affects shrinkage, warpage, gloss, and dimensional stability.",

        mainIdeas: [
            "Mold temperature affects cooling rate",
            "Stable mold temperature improves repeatability",
            "Higher mold temperature can improve surface finish",
            "Lower mold temperature can reduce cycle time but may increase stress",
            "Crystalline materials are strongly affected by mold temperature"
        ],

        keyChecks: [
            "Actual mold temperature",
            "Water temperature entering the mold",
            "Water temperature leaving the mold",
            "Temperature difference between mold halves",
            "Cavity-to-cavity temperature balance",
            "Temperature controller setpoint"
        ],

        commonProblems: [
            "Warpage from uneven mold temperature",
            "Dimensional drift",
            "Poor surface finish",
            "Part sticking",
            "Long cycle time",
            "Inconsistent shrinkage"
        ],

        technicianStrategy: [
            "Verify actual mold temperature, not just controller setpoint",
            "Check both A-side and B-side temperatures",
            "Look for hot spots near thick sections",
            "Watch dimensions as mold temperature stabilizes",
            "Record approved temperature settings"
        ]
    },

    routing: {
        title: "Waterline Routing",

        description:
            "Waterline routing is the way hoses are connected between the mold and the water supply or temperature controller. Correct routing is critical for repeatable cooling.",

        mainIdeas: [
            "Water must flow through the intended circuits",
            "Incorrect routing can cause uneven cooling",
            "Supply and return connections matter",
            "Water diagrams should be followed when available",
            "Routing changes should be documented"
        ],

        keyChecks: [
            "Water diagram or setup sheet",
            "Correct supply line connections",
            "Correct return line connections",
            "Hoses not crossed incorrectly",
            "Hoses not kinked",
            "Flow verified through each circuit"
        ],

        commonProblems: [
            "Warpage after setup",
            "Uneven mold temperature",
            "Blocked or dead circuits",
            "Wrong circuit direction",
            "Leaks at fittings",
            "Different results between setups"
        ],

        technicianStrategy: [
            "Follow the setup sheet or water diagram",
            "Label circuits if needed",
            "Check flow after connecting hoses",
            "Do not assume old hose routing was correct",
            "Document changes that improve cooling"
        ]
    },

    supplyreturn: {
        title: "Supply & Return",

        description:
            "Supply is the water going into the mold. Return is the water leaving the mold. Understanding supply and return helps technicians verify flow and temperature control.",

        mainIdeas: [
            "Supply water enters the cooling circuit",
            "Return water leaves after removing heat",
            "Temperature difference shows heat removal",
            "Incorrect supply and return routing can affect cooling",
            "Return flow confirms the circuit is open"
        ],

        keyChecks: [
            "Supply hose connected to correct inlet",
            "Return hose connected to correct outlet",
            "Return flow present",
            "Temperature difference between supply and return",
            "No kinks or restrictions",
            "Correct controller or manifold connection"
        ],

        commonProblems: [
            "No return flow",
            "Weak return flow",
            "Hoses reversed when direction matters",
            "High temperature difference",
            "Leaks at return fittings",
            "Mold temperature instability"
        ],

        technicianStrategy: [
            "Confirm water comes out the return side",
            "Check for weak or restricted flow",
            "Use flow meters if available",
            "Investigate high supply-return temperature differences",
            "Repair leaks before production"
        ]
    },

    flowrate: {
        title: "Flow Rate",

        description:
            "Flow rate is the amount of water moving through the cooling circuit. Proper flow removes heat efficiently and keeps mold temperature stable.",

        mainIdeas: [
            "Higher flow usually improves heat removal up to a useful limit",
            "Low flow can create hot spots",
            "Flow must be balanced across circuits",
            "Flow restrictions reduce cooling efficiency",
            "Flow consistency supports dimensional repeatability"
        ],

        keyChecks: [
            "Flow meter readings",
            "Water pressure",
            "Return flow strength",
            "Blocked fittings",
            "Kinked hoses",
            "Temperature difference across the circuit"
        ],

        commonProblems: [
            "Long cooling time",
            "Hot mold areas",
            "Warped parts",
            "Sticking parts",
            "Dimensional variation",
            "Uneven cavity cooling"
        ],

        technicianStrategy: [
            "Verify flow instead of assuming water is moving",
            "Compare flow between circuits",
            "Check for restrictions when a mold runs hot",
            "Clean or repair blocked fittings",
            "Use consistent water setup between runs"
        ]
    },

    turbulent: {
        title: "Turbulent Flow",

        description:
            "Turbulent flow means water moves with enough mixing action inside the cooling channel to remove heat efficiently. Laminar flow moves smoothly and removes heat less effectively.",

        mainIdeas: [
            "Turbulent flow improves heat transfer",
            "Low flow may become laminar and less effective",
            "Proper flow rate helps maintain turbulence",
            "Cooling channel size affects flow behavior",
            "Better heat transfer can reduce cycle time"
        ],

        keyChecks: [
            "Flow rate",
            "Water pressure",
            "Cooling channel diameter",
            "Flow restrictions",
            "Temperature difference",
            "Cooling performance"
        ],

        commonProblems: [
            "Poor heat removal",
            "Long cycle time",
            "Hot spots",
            "Unstable mold temperature",
            "Warpage",
            "Part sticking"
        ],

        technicianStrategy: [
            "Maintain adequate flow through each circuit",
            "Check restricted circuits first",
            "Do not rely only on cold water temperature",
            "Remember that flow matters as much as temperature",
            "Report repeated cooling inefficiency"
        ]
    },

    controllers: {
        title: "Temperature Controllers",

        description:
            "Temperature controllers regulate mold temperature by heating or cooling water or oil and circulating it through the mold.",

        mainIdeas: [
            "Controllers keep mold temperature stable",
            "They may heat, cool, or both",
            "Setpoint and actual temperature must be compared",
            "Flow through the controller must be verified",
            "Wrong controller settings can cause quality issues"
        ],

        keyChecks: [
            "Setpoint temperature",
            "Actual temperature",
            "Controller alarms",
            "Water level if applicable",
            "Pump operation",
            "Supply and return connections"
        ],

        commonProblems: [
            "Controller not reaching setpoint",
            "Temperature overshoot",
            "Low water level",
            "Pump failure",
            "Wrong setpoint",
            "Mold temperature drift"
        ],

        technicianStrategy: [
            "Check controller status during startup",
            "Verify the controller is connected to the correct mold circuits",
            "Compare actual temperature to setpoint",
            "Do not ignore controller alarms",
            "Document approved setpoints"
        ]
    },

    chillers: {
        title: "Chillers",

        description:
            "Chillers supply cold water to remove heat from molds, machines, and auxiliary equipment. They are important for cycle time and temperature stability.",

        mainIdeas: [
            "Chillers remove heat from water",
            "Chilled water can reduce mold temperature",
            "Too cold water can cause condensation",
            "Chiller performance affects multiple machines",
            "Stable chilled water supports repeatable cooling"
        ],

        keyChecks: [
            "Chiller temperature",
            "Water pressure",
            "Water flow",
            "Filter condition",
            "Alarms",
            "Condensation risk"
        ],

        commonProblems: [
            "Water too warm",
            "Low flow",
            "Chiller alarms",
            "Condensation on mold",
            "Temperature instability",
            "Multiple presses affected"
        ],

        technicianStrategy: [
            "Check if other machines are affected",
            "Verify chiller temperature and flow",
            "Watch for condensation in humid conditions",
            "Report chiller alarms quickly",
            "Do not assume a mold issue if plant water is unstable"
        ]
    },

    blocked: {
        title: "Blocked Waterlines",

        description:
            "Blocked or restricted waterlines prevent proper cooling and can cause hot spots, warpage, sticking, and long cycle times.",

        mainIdeas: [
            "Blockage reduces or stops water flow",
            "Rust, scale, debris, or fittings can restrict flow",
            "Blocked circuits may feel hotter than others",
            "Flow issues can look like process problems",
            "Blocked lines must be corrected, not hidden with settings"
        ],

        keyChecks: [
            "Return flow",
            "Flow meter reading",
            "Hose kinks",
            "Fitting blockage",
            "Temperature difference",
            "Mold surface temperature"
        ],

        commonProblems: [
            "Hot mold area",
            "Warping",
            "Part sticking",
            "Long cooling time",
            "Dimensional drift",
            "Inconsistent parts"
        ],

        technicianStrategy: [
            "Check flow before increasing cooling time",
            "Inspect fittings and hoses",
            "Compare circuit temperatures",
            "Clear or replace blocked fittings",
            "Report suspected internal blockage"
        ]
    },

    hotspots: {
        title: "Hot Spots",

        description:
            "Hot spots are areas of the mold that stay hotter than surrounding areas. They can create localized defects and dimensional variation.",

        mainIdeas: [
            "Hot spots often occur near thick part sections",
            "Poor cooling flow can create hot spots",
            "Hot spots can cause sticking or sinks",
            "Temperature imbalance can create warpage",
            "Thermal imaging or surface temperature checks can help"
        ],

        keyChecks: [
            "Mold surface temperature",
            "Water flow near hot area",
            "Part defect location",
            "Wall thickness near defect",
            "Cooling channel location",
            "Cycle time changes"
        ],

        commonProblems: [
            "Sink marks",
            "Voids",
            "Sticking parts",
            "Warpage",
            "Long cycle time",
            "Dimensional variation"
        ],

        technicianStrategy: [
            "Match part defect location to mold area",
            "Check water flow near the hot area",
            "Compare temperatures across the mold",
            "Avoid overpacking to hide cooling problems",
            "Report repeated hot spots for tooling review"
        ]
    },

    coolingtime: {
        title: "Cooling Time",

        description:
            "Cooling time is the time allowed for the molded part to solidify before the mold opens and ejects the part.",

        mainIdeas: [
            "Cooling time affects cycle time directly",
            "Too little cooling can cause deformation",
            "Too much cooling reduces production efficiency",
            "Cooling must be enough for safe ejection",
            "Cooling time should not be used to hide poor water flow"
        ],

        keyChecks: [
            "Part temperature at ejection",
            "Part sticking",
            "Warping after ejection",
            "Ejector marks",
            "Cycle time",
            "Dimensional stability"
        ],

        commonProblems: [
            "Warping from short cooling",
            "Sticking parts",
            "Ejector marks",
            "Long cycle time",
            "Part deformation",
            "Dimensional changes after ejection"
        ],

        technicianStrategy: [
            "Use the minimum cooling time that gives stable parts",
            "Check water flow before adding cooling time",
            "Watch for deformation after ejection",
            "Compare cycle time to approved standard",
            "Record cooling time changes"
        ]
    },

    warpage: {
        title: "Warpage From Cooling",

        description:
            "Cooling-related warpage happens when areas of the part shrink at different rates because the mold or part cools unevenly.",

        mainIdeas: [
            "Uneven cooling causes uneven shrinkage",
            "Hot areas shrink differently than cold areas",
            "Warpage direction can help identify the cause",
            "Crystalline materials are especially sensitive",
            "Cooling balance is critical for flat or tight-tolerance parts"
        ],

        keyChecks: [
            "Mold temperature balance",
            "Water flow in each circuit",
            "Part thickness variation",
            "Gate location",
            "Cooling time",
            "Warp direction"
        ],

        commonProblems: [
            "Bent parts",
            "Twisted parts",
            "Flatness failures",
            "Dimensional variation",
            "Post-mold shrinkage",
            "Parts changing shape after cooling"
        ],

        technicianStrategy: [
            "Identify the direction of warp",
            "Check mold temperatures on both halves",
            "Verify water flow before changing pressure",
            "Review part thickness and gate location",
            "Do not chase warpage with random process changes"
        ]
    },

    condensation: {
        title: "Condensation",

        description:
            "Condensation forms when mold surfaces are colder than the surrounding air dew point. Water on the mold can cause defects, rust, and unsafe conditions.",

        mainIdeas: [
            "Very cold mold water can create condensation",
            "Humidity increases condensation risk",
            "Water on the mold can cause cosmetic defects",
            "Condensation can create rust or maintenance issues",
            "Mold temperature may need to stay above dew point"
        ],

        keyChecks: [
            "Mold surface moisture",
            "Plant humidity",
            "Chilled water temperature",
            "Condensation on hoses",
            "Water marks on parts",
            "Rust risk"
        ],

        commonProblems: [
            "Water marks on parts",
            "Splay-like surface defects",
            "Mold rust",
            "Slippery floor",
            "Electrical risk near connectors",
            "Unstable surface appearance"
        ],

        technicianStrategy: [
            "Watch for sweating molds in humid weather",
            "Avoid running mold water colder than necessary",
            "Report condensation around electrical areas",
            "Dry affected surfaces safely",
            "Adjust temperature control when approved"
        ]
    },

    troubleshooting: {
        title: "Cooling Troubleshooting",

        description:
            "Cooling troubleshooting uses part defects, mold temperature, water flow, and cycle data to identify whether a problem is caused by cooling imbalance or poor heat removal.",

        mainIdeas: [
            "Cooling problems can look like process problems",
            "Always verify flow before changing process settings",
            "Defect location often points to cooling location",
            "Mold temperature drift can cause quality drift",
            "Stable cooling supports stable processing"
        ],

        keyChecks: [
            "Waterline routing",
            "Flow rate",
            "Supply and return temperature",
            "Mold surface temperature",
            "Part defect location",
            "Cooling time",
            "Cycle time"
        ],

        commonProblems: [
            "Warpage",
            "Sinks",
            "Voids",
            "Sticking",
            "Dimensional drift",
            "Hot spots",
            "Long cycles"
        ],

        technicianStrategy: [
            "Start with waterline routing and flow",
            "Compare mold temperatures across problem areas",
            "Match part defects to mold cooling zones",
            "Check for blocked circuits or kinked hoses",
            "Only adjust cooling time after verifying water flow"
        ]
    }

};

function showCooling(topic) {

    const coolingBox =
        document.getElementById("coolingBox");

    const coolingTopic =
        coolingData[topic];

    if (!coolingTopic) {

        coolingBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This cooling topic has not been added yet.
            </p>

        `;

        return;
    }

    coolingBox.innerHTML = `

        <h3>${coolingTopic.title}</h3>

        <p>
            ${coolingTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createCoolingList(coolingTopic.mainIdeas)}

        <h4>Key Checks</h4>
        ${createCoolingList(coolingTopic.keyChecks)}

        <h4>Common Problems</h4>
        ${createCoolingList(coolingTopic.commonProblems)}

        <h4>Technician Strategy</h4>
        ${createCoolingList(coolingTopic.technicianStrategy)}

    `;

}

function createCoolingList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}