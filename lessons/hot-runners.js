const hotRunnerData = {

    overview: {
        title: "Hot Runner Overview",

        description:
            "A hot runner system keeps plastic molten inside heated channels so material can flow directly into the mold cavities without forming a cold runner.",

        mainIdeas: [
            "Eliminates or reduces cold runner scrap",
            "Keeps material molten inside heated manifolds and drops",
            "Can improve cycle time and material usage",
            "Requires accurate temperature control",
            "Can cause major quality issues if zones are not balanced"
        ],

        keyChecks: [
            "All zones heating correctly",
            "No temperature alarms",
            "No leaking around drops",
            "Gate appearance is acceptable",
            "Cavity filling is balanced",
            "Material is not degrading inside the system"
        ],

        commonProblems: [
            "Cold drops",
            "Overheated zones",
            "Burned material",
            "Gate blush",
            "Stringing or drooling",
            "Short shots in specific cavities"
        ],

        technicianStrategy: [
            "Check hot runner controller before adjusting machine settings",
            "Verify actual zone temperatures",
            "Identify whether the issue affects one cavity or all cavities",
            "Allow zones to stabilize before production",
            "Do not raise temperatures blindly to fix flow problems"
        ]
    },

    manifold: {
        title: "Manifold",

        description:
            "The manifold is the heated distribution block that carries molten plastic from the sprue or inlet to each hot runner drop.",

        mainIdeas: [
            "Distributes molten plastic to each cavity",
            "Must maintain stable temperature",
            "Needs balanced flow paths",
            "Can contain dead spots if poorly designed or contaminated",
            "Affects cavity balance and material residence time"
        ],

        keyChecks: [
            "Manifold temperature zones",
            "Temperature stability",
            "Pressure required to fill cavities",
            "Flow balance between drops",
            "Signs of material degradation",
            "Hot runner leaks"
        ],

        commonProblems: [
            "Uneven heating",
            "Burned material inside the manifold",
            "Unbalanced cavity fill",
            "Material hang-up",
            "Leaking seals",
            "High pressure demand"
        ],

        technicianStrategy: [
            "Compare cavity fill patterns",
            "Check manifold zone alarms",
            "Watch for recurring black specks after downtime",
            "Purge carefully if degradation is suspected",
            "Report suspected leaks or internal damage"
        ]
    },

    drops: {
        title: "Drops / Nozzles",

        description:
            "Hot runner drops, also called hot runner nozzles, deliver molten plastic from the manifold to the gate area of each cavity.",

        mainIdeas: [
            "Each drop feeds a cavity or gate",
            "Drop temperature affects flow at the gate",
            "A cold drop can cause short shots",
            "A hot drop can cause drool, stringing, or degradation",
            "Drop problems often affect one cavity repeatedly"
        ],

        keyChecks: [
            "Drop temperature",
            "Gate appearance",
            "Cavity fill pattern",
            "Short shots by cavity",
            "Drooling or stringing",
            "Material leakage around the drop"
        ],

        commonProblems: [
            "Cold drop",
            "Overheated drop",
            "Blocked gate",
            "Poor gate vestige",
            "Stringing",
            "One cavity filling differently than others"
        ],

        technicianStrategy: [
            "Identify whether the defect follows one cavity",
            "Check the drop zone for alarms",
            "Compare gate appearance cavity to cavity",
            "Avoid changing all zones when only one cavity has a problem",
            "Allow drop temperatures to stabilize before judging results"
        ]
    },

    heaters: {
        title: "Heaters",

        description:
            "Heaters provide the heat needed to keep the manifold and drops at processing temperature.",

        mainIdeas: [
            "Maintain molten plastic inside the hot runner",
            "Each heater zone may control a specific area",
            "Failed heaters can cause cold material and short shots",
            "Overheating can degrade material",
            "Heater performance affects process repeatability"
        ],

        keyChecks: [
            "Controller zone status",
            "Actual temperature compared to setpoint",
            "Heater alarms",
            "Slow heating zones",
            "Temperature overshoot",
            "Repeated temperature fluctuation"
        ],

        commonProblems: [
            "Open heater circuit",
            "Heater not reaching setpoint",
            "Temperature overshoot",
            "Short shots from cold zones",
            "Burning from overheated zones",
            "Intermittent heating failure"
        ],

        technicianStrategy: [
            "Check alarms before making process changes",
            "Report zones that do not reach temperature",
            "Watch actual temperature, not just setpoint",
            "Let maintenance handle electrical diagnosis",
            "Do not bypass heater problems with excessive machine pressure"
        ]
    },

    thermocouples: {
        title: "Thermocouples",

        description:
            "Thermocouples read temperature and send feedback to the hot runner controller so each zone can be controlled correctly.",

        mainIdeas: [
            "Measure actual hot runner temperature",
            "Provide feedback to the controller",
            "Bad thermocouples can cause false readings",
            "Incorrect readings can lead to overheating or underheating",
            "Temperature control depends on accurate feedback"
        ],

        keyChecks: [
            "Temperature reading accuracy",
            "Open thermocouple alarms",
            "Reversed thermocouple behavior",
            "Sudden temperature jumps",
            "Temperature reading stuck at one value",
            "Zone not responding normally"
        ],

        commonProblems: [
            "Open thermocouple",
            "Reversed thermocouple",
            "Loose connection",
            "False high reading",
            "False low reading",
            "Controller unable to control zone"
        ],

        technicianStrategy: [
            "Do not ignore thermocouple alarms",
            "Watch whether temperature reacts normally",
            "Report strange temperature behavior",
            "Avoid running production with unstable temperature feedback",
            "Use maintenance support for electrical troubleshooting"
        ]
    },

    controller: {
        title: "Hot Runner Controller",

        description:
            "The hot runner controller manages heater zones and uses thermocouple feedback to maintain correct hot runner temperatures.",

        mainIdeas: [
            "Controls manifold and drop temperatures",
            "Displays setpoint and actual temperature",
            "Shows heater and thermocouple alarms",
            "May use soft start to protect heaters",
            "Is critical for stable hot runner performance"
        ],

        keyChecks: [
            "Correct recipe or setup loaded",
            "All zones enabled",
            "Setpoints match setup sheet",
            "Actual temperatures are stable",
            "No alarms present",
            "Zones are not in manual override unless approved"
        ],

        commonProblems: [
            "Wrong recipe loaded",
            "Zone turned off",
            "Incorrect setpoint",
            "Alarm ignored",
            "Manual output left active",
            "Controller cable connection issue"
        ],

        technicianStrategy: [
            "Verify controller settings during startup",
            "Compare setpoints to the setup sheet",
            "Do not assume the controller is correct after a mold change",
            "Investigate alarms before making parts",
            "Document approved temperature changes"
        ]
    },

    valvegates: {
        title: "Valve Gates",

        description:
            "Valve gates use pins to mechanically open and close the gate, controlling when material enters the cavity.",

        mainIdeas: [
            "Control gate opening and closing",
            "Can improve gate appearance",
            "Can reduce drool and stringing",
            "Require proper timing and actuation",
            "Can be hydraulic, pneumatic, or electric"
        ],

        keyChecks: [
            "Valve gate timing",
            "Pin open and close confirmation",
            "Air or hydraulic supply",
            "Gate vestige",
            "Cavity fill sequence",
            "Pin sticking or delayed movement"
        ],

        commonProblems: [
            "Valve pin stuck closed",
            "Valve pin stuck open",
            "Late opening",
            "Early closing",
            "Poor gate vestige",
            "Cavity short shot from gate not opening"
        ],

        technicianStrategy: [
            "Verify valve gate sequence before automatic production",
            "Check air or hydraulic supply",
            "Watch cavity fill behavior",
            "Do not treat a stuck valve gate like a normal pressure issue",
            "Report mechanical sticking or timing issues"
        ]
    },

    coldslug: {
        title: "Cold Drops",

        description:
            "A cold drop is a hot runner drop that is too cold or restricted, causing poor flow into one cavity or gate.",

        mainIdeas: [
            "Usually affects one cavity or gate",
            "Can cause repeated short shots",
            "May create high pressure demand",
            "Can be caused by heater, thermocouple, or blockage issues",
            "May appear during startup before full heat stabilization"
        ],

        keyChecks: [
            "Specific cavity short shot",
            "Drop temperature",
            "Gate freeze or blockage",
            "Heater alarm",
            "Thermocouple alarm",
            "Fill balance"
        ],

        commonProblems: [
            "Short shot in one cavity",
            "Cold slug entering part",
            "High pressure",
            "Gate blockage",
            "Poor cosmetic gate area",
            "Unbalanced filling"
        ],

        technicianStrategy: [
            "Identify the affected cavity",
            "Check the matching drop zone",
            "Verify actual temperature",
            "Allow proper heat soak time",
            "Inspect gate or drop if issue repeats"
        ]
    },

    balance: {
        title: "Hot Runner Balance",

        description:
            "Hot runner balance means each cavity receives material evenly so parts fill, pack, and weigh consistently.",

        mainIdeas: [
            "Balanced filling improves part consistency",
            "Imbalance can cause some cavities to flash while others short shot",
            "Temperature differences can affect flow",
            "Gate or runner restrictions can cause imbalance",
            "Part weight by cavity helps show balance"
        ],

        keyChecks: [
            "Fill pattern by cavity",
            "Part weight by cavity",
            "Gate appearance",
            "Cavity temperature",
            "Drop temperatures",
            "Short shot study results"
        ],

        commonProblems: [
            "One cavity fills early",
            "One cavity fills late",
            "Flash in one cavity",
            "Short shot in one cavity",
            "Weight differences between cavities",
            "Dimensional variation by cavity"
        ],

        technicianStrategy: [
            "Label parts by cavity",
            "Run fill-only checks if needed",
            "Compare part weights",
            "Check individual drop temperatures",
            "Do not adjust the whole process to fix one bad cavity without investigation"
        ]
    },

    colorchange: {
        title: "Color Change / Purging",

        description:
            "Hot runner color changes require careful purging because material can remain inside the manifold, drops, and gate areas.",

        mainIdeas: [
            "Hot runners can hold old color inside flow channels",
            "Color changes may take longer than cold runner molds",
            "Dead spots can trap old material",
            "Purging must protect the hot runner from pressure or heat damage",
            "Some colors and materials are harder to clean out"
        ],

        keyChecks: [
            "Purge material appearance",
            "Gate area color",
            "Cavity-to-cavity color consistency",
            "Black specks",
            "Temperature stability",
            "Material compatibility"
        ],

        commonProblems: [
            "Color streaks",
            "Old color bleeding through",
            "Black specks after purging",
            "Material degradation",
            "Contamination",
            "Long startup scrap"
        ],

        technicianStrategy: [
            "Follow approved purge procedure",
            "Avoid excessive temperatures during purging",
            "Watch each cavity for old color",
            "Use proper purge compound if required",
            "Document difficult color changes for future setups"
        ]
    },

    defects: {
        title: "Hot Runner Defects",

        description:
            "Hot runner problems can create defects that look like normal process problems but are actually caused by zone temperature, gates, drops, or flow imbalance.",

        mainIdeas: [
            "Hot runner issues often affect specific cavities",
            "Temperature imbalance can cause flow imbalance",
            "Overheated zones can degrade resin",
            "Cold zones can cause short shots",
            "Gate issues can cause cosmetic defects"
        ],

        keyChecks: [
            "Defect location by cavity",
            "Hot runner zone alarms",
            "Gate appearance",
            "Part weight by cavity",
            "Fill balance",
            "Purge appearance"
        ],

        commonProblems: [
            "Short shots",
            "Flash by cavity",
            "Burn marks",
            "Black specks",
            "Gate blush",
            "Stringing",
            "Drool",
            "Color streaks"
        ],

        technicianStrategy: [
            "Always check whether the defect is cavity-specific",
            "Match the bad cavity to its drop zone",
            "Check controller alarms and actual temperatures",
            "Use part weight to identify imbalance",
            "Separate hot runner problems from machine setting problems"
        ]
    },

    safety: {
        title: "Hot Runner Safety",

        description:
            "Hot runner systems use high temperatures, electrical components, pressure, and molten plastic, so safe setup and troubleshooting practices are critical.",

        mainIdeas: [
            "Hot runner components can cause severe burns",
            "Electrical troubleshooting should be done by qualified personnel",
            "Molten plastic may spray under pressure",
            "Purging must be done carefully",
            "Never bypass safety procedures to save time"
        ],

        keyChecks: [
            "Proper PPE",
            "Temperature status",
            "Pressure relieved before service",
            "Controller alarms",
            "Cables and connectors secure",
            "Safe purge direction"
        ],

        commonProblems: [
            "Burn injuries",
            "Plastic spray during purge",
            "Damaged cables",
            "Ignoring alarms",
            "Working on hot components without protection",
            "Unsafe troubleshooting under pressure"
        ],

        technicianStrategy: [
            "Wear proper PPE around hot plastic",
            "Keep clear during purge",
            "Do not touch hot runner components without verifying temperature",
            "Report damaged cables or connectors",
            "Use maintenance support for electrical issues"
        ]
    }

};

function showHotRunner(topic) {

    const hotRunnerBox =
        document.getElementById("hotRunnerBox");

    const hotRunnerTopic =
        hotRunnerData[topic];

    if (!hotRunnerTopic) {

        hotRunnerBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This hot runner topic has not been added yet.
            </p>

        `;

        return;
    }

    hotRunnerBox.innerHTML = `

        <h3>${hotRunnerTopic.title}</h3>

        <p>
            ${hotRunnerTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createHotRunnerList(hotRunnerTopic.mainIdeas)}

        <h4>Key Checks</h4>
        ${createHotRunnerList(hotRunnerTopic.keyChecks)}

        <h4>Common Problems</h4>
        ${createHotRunnerList(hotRunnerTopic.commonProblems)}

        <h4>Technician Strategy</h4>
        ${createHotRunnerList(hotRunnerTopic.technicianStrategy)}

    `;

}

function createHotRunnerList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}