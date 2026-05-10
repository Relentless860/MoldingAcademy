const startupData = {

    overview: {
        title: "Procedure Overview",

        description:
            "Startup and shutdown procedures keep the molding process safe, repeatable, and controlled. A good technician follows a checklist instead of guessing or rushing the press into production.",

        mainIdeas: [
            "Startup verifies that the machine, mold, material, dryer, water, process, and automation are ready",
            "Shutdown protects the machine, mold, hot runner, barrel, and material",
            "A controlled procedure prevents contamination, defects, equipment damage, and safety issues",
            "The same setup should be repeatable from shift to shift",
            "Documentation helps the next technician understand what happened"
        ],

        keyChecks: [
            "Correct work order",
            "Correct mold",
            "Correct material",
            "Correct process sheet",
            "Waterlines connected and flowing",
            "Barrel and mold temperatures stable",
            "Robot or automation ready",
            "First-piece approval completed"
        ],

        commonProblems: [
            "Wrong material loaded",
            "Dryer not at temperature",
            "Waterlines not flowing",
            "Mold not fully heated",
            "Robot not ready",
            "Parts started before approval",
            "Previous material not fully purged"
        ],

        technicianStrategy: [
            "Use a startup checklist every time",
            "Verify one system at a time",
            "Do not assume the previous setup was correct",
            "Document process changes and startup issues",
            "Never rush startup at the expense of safety or quality"
        ]
    },

    safety: {
        title: "Safety Checks",

        description:
            "Safety checks must happen before running the machine. Injection molding equipment has high heat, high pressure, pinch points, moving platens, robots, water pressure, and electrical hazards.",

        mainIdeas: [
            "Safety is verified before automatic operation",
            "Guards and interlocks must function correctly",
            "Emergency stops must be accessible",
            "No one should be inside the robot or mold area during automatic cycling",
            "Unsafe conditions must be corrected before production"
        ],

        keyChecks: [
            "Machine guards closed",
            "Safety gates working",
            "Emergency stop buttons accessible",
            "Robot safety zone clear",
            "No tools inside mold area",
            "Water or oil leaks addressed",
            "Heater bands and wiring visually safe"
        ],

        commonProblems: [
            "Bypassed safety gate",
            "Tools left in the mold area",
            "Robot not homed",
            "Leaking water near electrical areas",
            "Loose heater wiring",
            "Operator standing in unsafe area"
        ],

        technicianStrategy: [
            "Stop if anything looks unsafe",
            "Never bypass safety devices to save cycle time",
            "Check the mold area before closing",
            "Use lockout procedures when required",
            "Report damaged guards, wiring, or unsafe robot behavior"
        ]
    },

    material: {
        title: "Material Verification",

        description:
            "Material verification confirms that the correct resin, color, lot, regrind level, and drying requirements match the work order and setup sheet.",

        mainIdeas: [
            "Wrong material can create scrap, customer rejects, and machine contamination",
            "Material must match the work order and process sheet",
            "Colorant and regrind must be controlled",
            "Material lot changes may affect processing",
            "Hygroscopic materials require proper drying"
        ],

        keyChecks: [
            "Material name",
            "Material grade",
            "Material lot number",
            "Colorant or masterbatch",
            "Regrind percentage",
            "Drying requirement",
            "Material in hopper or loader"
        ],

        commonProblems: [
            "Wrong resin loaded",
            "Wrong colorant",
            "Material contamination",
            "Excess regrind",
            "Wet material",
            "Old material left in loader or hopper"
        ],

        technicianStrategy: [
            "Compare resin labels to the work order",
            "Check the hopper, loader, and dryer before startup",
            "Verify colorant ratio when applicable",
            "Clean material handling equipment when changing materials",
            "Document material lot changes"
        ]
    },

    dryers: {
        title: "Dryer Checks",

        description:
            "Dryer checks confirm that moisture-sensitive materials have been dried correctly before molding. Improper drying can cause splay, bubbles, brittleness, weak parts, and appearance defects.",

        mainIdeas: [
            "Drying time and temperature must meet material requirements",
            "Dryer temperature must be stable before use",
            "Airflow and desiccant condition matter",
            "Wet material can damage part properties",
            "Dryer settings should be verified before startup"
        ],

        keyChecks: [
            "Dryer temperature",
            "Drying time",
            "Material in dryer",
            "Hopper level",
            "Dew point if available",
            "Airflow",
            "Return air filter",
            "Loader operation"
        ],

        commonProblems: [
            "Material not dried long enough",
            "Dryer not up to temperature",
            "Wrong dryer setpoint",
            "Low airflow",
            "Wet material causing splay",
            "Material exposed to air too long"
        ],

        technicianStrategy: [
            "Confirm material drying requirements",
            "Check actual dryer temperature, not just the setpoint",
            "Verify the material has had enough drying time",
            "Watch first shots for splay or bubbles",
            "Do not start production with questionable drying"
        ]
    },

    barrel: {
        title: "Barrel Heat Soak",

        description:
            "Barrel heat soak allows the barrel, screw, nozzle, and material to reach stable processing temperature before injection begins.",

        mainIdeas: [
            "The barrel must be fully heated before purging or molding",
            "Heat soak helps avoid unmelted pellets",
            "Starting too early can damage the screw or create poor melt quality",
            "Nozzle temperature must be stable",
            "Material residence time must be considered"
        ],

        keyChecks: [
            "Barrel zone temperatures",
            "Nozzle temperature",
            "Actual temperature versus setpoint",
            "Material type",
            "Heat soak time",
            "No heater alarms",
            "No cold slug during purge"
        ],

        commonProblems: [
            "Cold barrel startup",
            "Unmelted pellets",
            "High screw torque",
            "Nozzle freeze-off",
            "Burnt material from excessive soak",
            "Temperature alarms"
        ],

        technicianStrategy: [
            "Wait for all zones to reach setpoint",
            "Allow enough heat soak before purging",
            "Purge slowly at first if the barrel was cold",
            "Watch for unmelted material or black specks",
            "Do not force screw recovery if material is not melted"
        ]
    },

    moldtemp: {
        title: "Mold Temperature Setup",

        description:
            "Mold temperature setup brings the mold to the approved processing temperature before production begins. Stable mold temperature is critical for dimensions, warpage, shrinkage, and appearance.",

        mainIdeas: [
            "Mold temperature affects part quality and repeatability",
            "The mold may need time to stabilize",
            "Both mold halves should be checked",
            "Temperature controllers should match the setup sheet",
            "Crystalline materials are especially sensitive to mold temperature"
        ],

        keyChecks: [
            "Controller setpoint",
            "Actual controller temperature",
            "Mold surface temperature",
            "A-side temperature",
            "B-side temperature",
            "Water or oil flow",
            "Temperature controller alarms"
        ],

        commonProblems: [
            "Mold not up to temperature",
            "Uneven mold temperature",
            "Wrong controller setpoint",
            "Disconnected hoses",
            "Temperature drift",
            "Dimensional changes during startup"
        ],

        technicianStrategy: [
            "Start mold temperature control early when needed",
            "Verify actual mold temperature",
            "Check both mold halves",
            "Do not approve parts until mold temperature is stable",
            "Record approved temperature settings"
        ]
    },

    waterlines: {
        title: "Waterline Verification",

        description:
            "Waterline verification confirms that every cooling circuit is connected, flowing, leak-free, and routed correctly before production.",

        mainIdeas: [
            "Connected hoses do not guarantee flow",
            "Wrong routing can cause warpage or dimensional variation",
            "Blocked lines create hot spots",
            "Leaks can create safety and quality problems",
            "Waterline setup must be repeatable"
        ],

        keyChecks: [
            "Supply connections",
            "Return connections",
            "Return flow",
            "Leaks",
            "Kinked hoses",
            "Flow meters if available",
            "Waterline diagram or setup sheet"
        ],

        commonProblems: [
            "No flow",
            "Weak flow",
            "Crossed hoses",
            "Kinked hose",
            "Blocked fittings",
            "Leaks at quick-connects",
            "Hot mold sections"
        ],

        technicianStrategy: [
            "Verify return flow from each circuit",
            "Repair leaks before production",
            "Follow the waterline diagram",
            "Check flow before adjusting process settings",
            "Document any waterline routing changes"
        ]
    },

    automation: {
        title: "Robot / Automation Checks",

        description:
            "Automation checks verify that the robot, conveyor, EOAT, vacuum, grippers, sensors, and machine signals are ready before automatic production.",

        mainIdeas: [
            "The robot must be in the correct program",
            "EOAT must match the mold and part",
            "Part pickup and release must be confirmed",
            "Machine and robot signals must communicate properly",
            "Automation must never interfere with mold closing"
        ],

        keyChecks: [
            "Correct robot program",
            "Robot home position",
            "EOAT mounted securely",
            "Vacuum and grippers working",
            "Part detection working",
            "Conveyor running",
            "Robot clear signal",
            "Mold open signal"
        ],

        commonProblems: [
            "Wrong robot program",
            "Robot misses the part",
            "Vacuum leak",
            "Gripper not opening",
            "Sensor fault",
            "Conveyor stopped",
            "Machine waiting for robot"
        ],

        technicianStrategy: [
            "Run the robot slowly during setup",
            "Verify stable ejection before automatic pickup",
            "Check EOAT clearances",
            "Confirm part detection before full-speed production",
            "Never bypass automation safety signals"
        ]
    },

    firstshots: {
        title: "First Shots",

        description:
            "First shots are the first molded parts produced after startup. They help confirm material flow, process settings, mold function, cooling, ejection, and part quality.",

        mainIdeas: [
            "First shots should be treated as verification parts",
            "The process may need time to stabilize",
            "Parts should be checked before full production",
            "First shots may show purge contamination",
            "First-piece approval is required before release"
        ],

        keyChecks: [
            "Part fill",
            "Flash",
            "Sinks",
            "Splay",
            "Short shots",
            "Part sticking",
            "Ejector marks",
            "Dimensions if required",
            "Part weight if required"
        ],

        commonProblems: [
            "Short shots",
            "Flash",
            "Old color contamination",
            "Black specks",
            "Splay",
            "Parts sticking",
            "Robot misses parts"
        ],

        technicianStrategy: [
            "Inspect first shots carefully",
            "Do not mix startup scrap with good parts",
            "Let the process stabilize before judging final quality",
            "Compare parts to approved samples",
            "Get required quality approval before production release"
        ]
    },

    verification: {
        title: "Process Verification",

        description:
            "Process verification confirms that the machine is running the approved process and producing acceptable parts before production continues.",

        mainIdeas: [
            "Process settings must match the approved setup",
            "Actual values matter as much as setpoints",
            "Fill time, cushion, recovery, and cycle time should be stable",
            "Part quality must match requirements",
            "Any process change should be documented"
        ],

        keyChecks: [
            "Injection speed",
            "Injection pressure",
            "Transfer position",
            "Hold pressure",
            "Hold time",
            "Cooling time",
            "Cushion",
            "Recovery time",
            "Cycle time",
            "Part weight"
        ],

        commonProblems: [
            "Cushion variation",
            "Fill time drift",
            "Recovery instability",
            "Pressure limits reached",
            "Cycle time off standard",
            "Parts approved before process is stable"
        ],

        technicianStrategy: [
            "Compare actual values to the process sheet",
            "Watch multiple cycles before approval",
            "Check part quality and process stability together",
            "Document deviations from standard",
            "Escalate if the approved process cannot make good parts"
        ]
    },

    normalshutdown: {
        title: "Normal Shutdown",

        description:
            "Normal shutdown is a planned stop that protects the mold, machine, barrel, hot runner, material, and next startup.",

        mainIdeas: [
            "Shutdown should follow the material and mold requirements",
            "The press should not be left in an unsafe condition",
            "Material may need to be purged from the barrel",
            "Hot runners may need controlled temperature reduction",
            "Mold and water conditions should be left correctly"
        ],

        keyChecks: [
            "Production stopped safely",
            "Parts and scrap cleared",
            "Material handling controlled",
            "Barrel purged if required",
            "Mold position safe",
            "Water and temperature controllers handled correctly",
            "Robot placed safely"
        ],

        commonProblems: [
            "Material left burning in barrel",
            "Mold left wet",
            "Hot runner shut down incorrectly",
            "Scrap left around press",
            "Robot left in unsafe position",
            "Poor notes for next shift"
        ],

        technicianStrategy: [
            "Follow the shutdown checklist",
            "Purge material when required",
            "Leave the mold and machine safe",
            "Clean the work area",
            "Document the shutdown condition"
        ]
    },

    purgeout: {
        title: "Material Purge-Out",

        description:
            "Purge-out removes old material, color, degraded resin, or heat-sensitive material from the barrel, screw, nozzle, or hot runner system.",

        mainIdeas: [
            "Purge prevents contamination during the next startup",
            "Some materials degrade if left hot too long",
            "Color changes often require extra purge",
            "Purge compound may be used for difficult materials",
            "Purging should be done safely and consistently"
        ],

        keyChecks: [
            "Material type",
            "Next material",
            "Color change requirement",
            "Barrel temperature",
            "Nozzle condition",
            "Purge appearance",
            "Purge safety"
        ],

        commonProblems: [
            "Old color remains",
            "Black specks",
            "Burnt material",
            "Nozzle drool",
            "Material degradation",
            "Purge not completed before shutdown"
        ],

        technicianStrategy: [
            "Know whether the material must be purged out",
            "Use approved purge procedure",
            "Watch purge material for color and contamination",
            "Avoid standing directly in front of the nozzle",
            "Document difficult color or material changes"
        ]
    },

    hotrunner: {
        title: "Hot Runner Shutdown",

        description:
            "Hot runner shutdown must protect the manifold, drops, gates, heaters, thermocouples, and material inside the runner system.",

        mainIdeas: [
            "Hot runners may need a controlled shutdown",
            "Some materials should not sit hot inside the manifold",
            "Incorrect shutdown can cause degradation or plugged gates",
            "Temperature zones should be monitored",
            "Startup issues often come from poor previous shutdown"
        ],

        keyChecks: [
            "Material type",
            "Hot runner temperatures",
            "Controller status",
            "Purge requirement",
            "Valve gate position if applicable",
            "Manifold and drop zones",
            "Alarms before power-down"
        ],

        commonProblems: [
            "Burnt material in hot runner",
            "Cold drop at next startup",
            "Plugged gate",
            "Controller alarms",
            "Uneven zone shutdown",
            "Material degradation"
        ],

        technicianStrategy: [
            "Follow the hot runner shutdown procedure",
            "Do not randomly shut off zones without understanding the mold",
            "Purge heat-sensitive materials when required",
            "Record hot runner issues for the next startup",
            "Report repeated zone alarms"
        ]
    },

    emergency: {
        title: "Emergency Shutdown",

        description:
            "Emergency shutdown is used when there is a safety risk, equipment failure, mold crash risk, fire, major leak, robot fault, or uncontrolled machine condition.",

        mainIdeas: [
            "Emergency shutdown prioritizes people first",
            "Emergency stop may be required immediately",
            "The machine should not be restarted until the cause is understood",
            "Affected parts may need containment",
            "Maintenance, supervision, or safety may need to be involved"
        ],

        keyChecks: [
            "People safe",
            "Emergency stop activated if needed",
            "Machine motion stopped",
            "Robot stopped",
            "Mold area checked",
            "Leaks or smoke checked",
            "Supervisor notified",
            "Parts contained if needed"
        ],

        commonProblems: [
            "Mold crash risk",
            "Robot stuck in mold area",
            "Hydraulic leak",
            "Water leak near electrical area",
            "Smoke or burning material",
            "Uncontrolled machine movement",
            "Operator injury risk"
        ],

        technicianStrategy: [
            "Stop the machine when safety is at risk",
            "Do not restart until the cause is identified",
            "Keep people clear of the hazard",
            "Call the proper support personnel",
            "Document what happened before restarting"
        ]
    },

    handoff: {
        title: "Shift Handoff",

        description:
            "Shift handoff communicates machine status, process changes, quality concerns, material issues, maintenance needs, and open problems to the next technician or operator.",

        mainIdeas: [
            "Good handoff prevents repeated troubleshooting",
            "The next shift needs to know what changed",
            "Quality concerns must be clearly communicated",
            "Open maintenance issues should be documented",
            "Process changes should not be hidden"
        ],

        keyChecks: [
            "Machine status",
            "Current process condition",
            "Quality issues",
            "Scrap or containment",
            "Material lot or color changes",
            "Maintenance problems",
            "Robot or automation issues",
            "Water or temperature concerns"
        ],

        commonProblems: [
            "No one reports process changes",
            "Quality issue continues into next shift",
            "Maintenance problem not communicated",
            "Material change missed",
            "Containment not explained",
            "Startup issue repeated"
        ],

        technicianStrategy: [
            "Write clear handoff notes",
            "Tell the next technician what changed and why",
            "Mention any unstable trends",
            "Identify parts or boxes on hold",
            "Communicate safety or maintenance concerns immediately"
        ]
    }

};

function showStartup(topic) {

    const startupBox =
        document.getElementById("startupBox");

    const startupTopic =
        startupData[topic];

    if (!startupTopic) {

        startupBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This startup or shutdown topic has not been added yet.
            </p>

        `;

        return;
    }

    startupBox.innerHTML = `

        <h3>${startupTopic.title}</h3>

        <p>
            ${startupTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createStartupList(startupTopic.mainIdeas)}

        <h4>Key Checks</h4>
        ${createStartupList(startupTopic.keyChecks)}

        <h4>Common Problems</h4>
        ${createStartupList(startupTopic.commonProblems)}

        <h4>Technician Strategy</h4>
        ${createStartupList(startupTopic.technicianStrategy)}

    `;

}

function createStartupList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}