const automationData = {

    overview: {
        title: "Automation Overview",

        description:
            "Automation in injection molding uses robots, conveyors, sensors, and auxiliary equipment to remove parts, separate runners, load inserts, inspect parts, and improve production consistency.",

        mainIdeas: [
            "Automation improves cycle consistency",
            "Robots reduce manual part handling",
            "Automation must coordinate with mold open, ejectors, and machine signals",
            "Sensors help confirm part removal and safe operation",
            "Poor automation setup can damage molds, parts, or equipment"
        ],

        keyChecks: [
            "Robot program loaded correctly",
            "Mold open position verified",
            "Ejector timing confirmed",
            "Part pickup confirmed",
            "Robot clears the mold before close",
            "Safety devices active"
        ],

        commonProblems: [
            "Robot misses parts",
            "Robot slows cycle time",
            "Parts drop during transfer",
            "Mold closes before robot clears",
            "Vacuum loss",
            "Part detection failure"
        ],

        technicianStrategy: [
            "Verify stable ejection before adding robot movement",
            "Run slow manual robot cycles during setup",
            "Confirm pickup and release positions",
            "Watch for cycle delays caused by automation",
            "Never bypass safety devices to keep production running"
        ]
    },

    robottypes: {
        title: "Robot Types",

        description:
            "Different robot types are used depending on part size, mold layout, cycle time, automation complexity, and production needs.",

        mainIdeas: [
            "Top-entry robots remove parts from above the mold",
            "Side-entry robots are used for fast cycles",
            "Six-axis robots provide flexible movement",
            "Sprue pickers remove runners or sprues",
            "Automation choice depends on the application"
        ],

        keyChecks: [
            "Robot reach",
            "Payload capacity",
            "Cycle time requirement",
            "Mold open stroke",
            "Clearance around machine",
            "Part handling requirement"
        ],

        commonProblems: [
            "Robot cannot reach pickup position",
            "Payload too heavy",
            "Robot path interferes with mold",
            "Slow take-out time",
            "Wrong program selected",
            "Poor repeatability"
        ],

        technicianStrategy: [
            "Confirm robot type matches the job",
            "Verify the robot program during changeover",
            "Check mold open position before robot entry",
            "Make sure robot motion clears tie bars, guards, and tooling",
            "Report repeated reach or path problems"
        ]
    },

    eoat: {
        title: "End-of-Arm Tooling",

        description:
            "End-of-arm tooling, or EOAT, is the tooling mounted to the robot arm that contacts, grips, vacuums, or supports the molded part.",

        mainIdeas: [
            "EOAT is customized to the part and mold",
            "Vacuum cups, grippers, slides, and sensors may be used",
            "EOAT must pick the part without damage",
            "Incorrect EOAT setup causes dropped or damaged parts",
            "EOAT must clear the mold during robot movement"
        ],

        keyChecks: [
            "EOAT mounted securely",
            "Vacuum cups in correct position",
            "Grippers aligned",
            "Sensors connected",
            "Air lines connected",
            "EOAT clears mold features"
        ],

        commonProblems: [
            "Loose EOAT",
            "Wrong EOAT installed",
            "Vacuum cups missing the part",
            "Grippers damaging the part",
            "Air leaks",
            "EOAT hits mold components"
        ],

        technicianStrategy: [
            "Verify EOAT matches the job",
            "Check all air and sensor connections",
            "Watch the first several pickups closely",
            "Inspect parts for grip or vacuum marks",
            "Adjust pickup position carefully"
        ]
    },

    sequence: {
        title: "Take-Out Sequence",

        description:
            "The take-out sequence is the programmed order of robot movement used to enter the mold, pick the part, exit safely, and release the part.",

        mainIdeas: [
            "Robot movement must match the molding cycle",
            "The mold must be open before robot entry",
            "The robot must clear before mold close",
            "Pickup and release positions must be repeatable",
            "Sequence errors can cause crashes"
        ],

        keyChecks: [
            "Mold open signal received",
            "Robot enters at correct time",
            "Part pickup confirmed",
            "Robot exits fully",
            "Mold close permission given",
            "Part released correctly"
        ],

        commonProblems: [
            "Robot enters too early",
            "Robot exits too slowly",
            "Pickup position off",
            "Part drops before release",
            "Machine waits for robot",
            "Robot waits for machine"
        ],

        technicianStrategy: [
            "Run the sequence slowly during setup",
            "Confirm each step before automatic operation",
            "Watch machine wait time and robot wait time",
            "Do not shorten timing until pickup is reliable",
            "Keep hands clear during robot movement"
        ]
    },

    signals: {
        title: "Machine Signals",

        description:
            "Machine signals allow the molding machine and robot to communicate safely during automatic operation.",

        mainIdeas: [
            "The machine tells the robot when the mold is open",
            "The robot tells the machine when it is clear",
            "Signals prevent unsafe mold close",
            "Part detection may confirm successful pickup",
            "Signal problems can stop automatic cycling"
        ],

        keyChecks: [
            "Mold open complete signal",
            "Ejector forward signal",
            "Ejector back signal",
            "Robot clear signal",
            "Part confirmation signal",
            "Emergency stop circuit"
        ],

        commonProblems: [
            "Robot waiting for machine signal",
            "Machine waiting for robot clear",
            "Ejector signal missing",
            "Part confirmation failed",
            "Interlock fault",
            "Wrong interface setting"
        ],

        technicianStrategy: [
            "Read the alarm carefully before resetting",
            "Identify which signal is missing",
            "Check sensors and cables",
            "Verify ejectors and mold positions",
            "Do not bypass robot clear or safety signals"
        ]
    },

    vacuum: {
        title: "Vacuum Systems",

        description:
            "Vacuum systems use suction cups and vacuum generators to pick and hold molded parts during robot removal.",

        mainIdeas: [
            "Vacuum cups seal against the part surface",
            "Vacuum pressure confirms the part is held",
            "Leaks reduce holding strength",
            "Part shape and surface affect vacuum pickup",
            "Vacuum failure can drop parts into the mold"
        ],

        keyChecks: [
            "Vacuum cup condition",
            "Vacuum pressure level",
            "Air supply",
            "Vacuum sensor setting",
            "Cup placement",
            "Part surface condition"
        ],

        commonProblems: [
            "Vacuum leak",
            "Cracked suction cups",
            "Cups missing the part",
            "Low air pressure",
            "Part drops during transfer",
            "False vacuum confirmation"
        ],

        technicianStrategy: [
            "Inspect cups for wear or cracks",
            "Verify vacuum level during pickup",
            "Check air lines and fittings",
            "Adjust cup position if pickup is inconsistent",
            "Never ignore repeated vacuum alarms"
        ]
    },

    grippers: {
        title: "Grippers",

        description:
            "Grippers mechanically hold parts, runners, or inserts during automation. They may be pneumatic, electric, or mechanical.",

        mainIdeas: [
            "Grippers physically hold the part or runner",
            "Grip force must be strong enough but not damaging",
            "Grippers must open and close at the correct time",
            "Incorrect grip location can deform parts",
            "Gripper wear affects repeatability"
        ],

        keyChecks: [
            "Grip location",
            "Grip pressure",
            "Open and close timing",
            "Jaw condition",
            "Air pressure",
            "Part damage after gripping"
        ],

        commonProblems: [
            "Part slipping",
            "Grip marks",
            "Cracked parts",
            "Gripper not opening",
            "Gripper not closing",
            "Air leak"
        ],

        technicianStrategy: [
            "Check grip marks during startup",
            "Adjust grip force carefully",
            "Verify gripper open and close signals",
            "Replace worn gripper pads when needed",
            "Make sure grippers clear mold details"
        ]
    },

    sensors: {
        title: "Part Detection",

        description:
            "Part detection uses sensors to confirm whether a part was picked, removed, dropped, or placed correctly.",

        mainIdeas: [
            "Sensors help prevent stuck parts",
            "Part confirmation protects the mold",
            "Sensors may detect vacuum, part presence, or position",
            "Bad sensors can create false alarms",
            "Ignoring part detection failures can cause mold crashes"
        ],

        keyChecks: [
            "Sensor alignment",
            "Sensor cable condition",
            "Part present signal",
            "Vacuum confirmation",
            "Dropped part detection",
            "Sensor cleanliness"
        ],

        commonProblems: [
            "False part-present signal",
            "Sensor blocked by dirt",
            "Sensor not detecting clear plastic",
            "Loose cable",
            "Incorrect sensitivity",
            "Dropped part not detected"
        ],

        technicianStrategy: [
            "Clean and inspect sensors",
            "Verify part detection during setup",
            "Check sensor position after EOAT adjustments",
            "Do not bypass part confirmation without approval",
            "Investigate repeated false alarms"
        ]
    },

    "ejector-timing": {
        title: "Ejector Timing",

        description:
            "Ejector timing controls when the mold ejectors move in relation to robot entry and part pickup.",

        mainIdeas: [
            "Ejectors must move when the robot is ready",
            "Parts must be presented in a repeatable position",
            "Ejectors must return before mold close",
            "Incorrect timing can damage parts or EOAT",
            "Stable ejection is required for reliable automation"
        ],

        keyChecks: [
            "Ejector forward timing",
            "Ejector return timing",
            "Robot pickup timing",
            "Part position after ejection",
            "Ejector stroke",
            "Ejector alarms"
        ],

        commonProblems: [
            "Robot arrives before part is ejected",
            "Part falls before pickup",
            "Ejector pins hit EOAT",
            "Ejectors return too early",
            "Part hangs on pins",
            "Ejector return alarm"
        ],

        technicianStrategy: [
            "Verify ejection without robot first",
            "Then verify robot pickup slowly",
            "Adjust timing only after part position is stable",
            "Watch for parts hanging on pins",
            "Make sure ejectors return before mold close"
        ]
    },

    conveyors: {
        title: "Conveyors",

        description:
            "Conveyors move parts, runners, or scrap away from the machine after molding or robot release.",

        mainIdeas: [
            "Conveyors support continuous production",
            "They prevent parts from piling up",
            "Conveyors may separate good parts from scrap",
            "Part release location must match conveyor position",
            "Conveyor problems can back up production"
        ],

        keyChecks: [
            "Conveyor running",
            "Correct direction",
            "Correct speed",
            "Part release location",
            "Parts not bouncing or falling",
            "No buildup at end of conveyor"
        ],

        commonProblems: [
            "Conveyor stopped",
            "Wrong belt direction",
            "Parts falling off",
            "Parts piling up",
            "Runner and part mixing",
            "Belt damage"
        ],

        technicianStrategy: [
            "Verify conveyor operation before automatic production",
            "Check part landing position",
            "Adjust belt speed when needed",
            "Keep conveyors clear",
            "Report damaged belts or unsafe conditions"
        ]
    },

    insert: {
        title: "Insert Loading",

        description:
            "Insert loading uses robots or operators to place metal, plastic, or other components into the mold before injection.",

        mainIdeas: [
            "Inserts must be positioned correctly",
            "Incorrect inserts can damage the mold",
            "Sensors may confirm insert presence",
            "Insert temperature may affect molding",
            "Insert loading must be coordinated with mold close"
        ],

        keyChecks: [
            "Correct insert type",
            "Insert orientation",
            "Insert seated fully",
            "Insert presence sensor",
            "Robot placement accuracy",
            "Mold close clearance"
        ],

        commonProblems: [
            "Missing insert",
            "Misloaded insert",
            "Insert shifts during close",
            "Mold damage",
            "Short shot around insert",
            "Poor bond or fit"
        ],

        technicianStrategy: [
            "Verify insert position during startup",
            "Check sensors before automatic cycle",
            "Inspect first shots carefully",
            "Do not run with repeated insert alarms",
            "Stop if inserts are not seating correctly"
        ]
    },

    degating: {
        title: "Degating",

        description:
            "Degating separates the molded part from the runner, sprue, or gate after molding. It can be manual or automated.",

        mainIdeas: [
            "Degating removes runner or gate material",
            "Automated degating improves consistency",
            "Poor degating can damage parts",
            "Gate vestige may be a quality requirement",
            "Degating equipment must be aligned correctly"
        ],

        keyChecks: [
            "Gate trim quality",
            "Degating fixture alignment",
            "Part support",
            "Runner separation",
            "Sharp edges or stress marks",
            "Scrap separation"
        ],

        commonProblems: [
            "Gate damage",
            "Stress whitening",
            "Cracked parts",
            "Excess gate vestige",
            "Runner not separating",
            "Parts mixed with scrap"
        ],

        technicianStrategy: [
            "Compare gate area to approved sample",
            "Verify degating position",
            "Check for stress or cracks",
            "Adjust carefully to avoid part damage",
            "Keep scrap separated from good parts"
        ]
    },

    safety: {
        title: "Automation Safety",

        description:
            "Automation safety protects people, molds, machines, robots, and parts from injury or damage during automatic operation.",

        mainIdeas: [
            "Robots move quickly and can cause injury",
            "Guards and interlocks must stay active",
            "Lockout procedures may be required for service",
            "Never enter the robot area during automatic operation",
            "Safety devices must not be bypassed"
        ],

        keyChecks: [
            "Guard doors closed",
            "Emergency stops working",
            "Robot clear before mold close",
            "Safety interlocks active",
            "No one inside robot area",
            "Alarms understood before reset"
        ],

        commonProblems: [
            "Bypassed safety gate",
            "Person entering robot path",
            "Unexpected robot movement",
            "EOAT crash",
            "Mold closes with robot in area",
            "Emergency stop ignored"
        ],

        technicianStrategy: [
            "Respect robot safety zones",
            "Use manual mode carefully",
            "Keep clear of pinch points",
            "Never bypass safety to save cycle time",
            "Stop and investigate unsafe robot behavior"
        ]
    },

    troubleshooting: {
        title: "Automation Troubleshooting",

        description:
            "Automation troubleshooting means identifying whether problems come from robot timing, EOAT, sensors, vacuum, grippers, machine signals, or part ejection.",

        mainIdeas: [
            "Automation problems often appear as cycle interruptions",
            "Dropped parts can lead to mold damage",
            "Sensors and signals should be checked before process changes",
            "Part ejection must be stable before robot pickup",
            "Robot problems can create quality and safety risks"
        ],

        keyChecks: [
            "Alarm message",
            "Robot position",
            "Machine signal status",
            "Vacuum level",
            "Sensor status",
            "Part pickup and release",
            "Ejector timing"
        ],

        commonProblems: [
            "Robot wait time",
            "Machine wait time",
            "Vacuum alarm",
            "Part not picked",
            "Part dropped",
            "Sensor fault",
            "EOAT misalignment"
        ],

        technicianStrategy: [
            "Read the alarm before resetting",
            "Identify whether robot, machine, or part caused the stop",
            "Check pickup position and part ejection",
            "Verify sensors and vacuum",
            "Run slow manual cycles after adjustments"
        ]
    }

};

function showAutomation(topic) {

    const automationBox =
        document.getElementById("automationBox");

    const automationTopic =
        automationData[topic];

    if (!automationTopic) {

        automationBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This automation topic has not been added yet.
            </p>

        `;

        return;
    }

    automationBox.innerHTML = `

        <h3>${automationTopic.title}</h3>

        <p>
            ${automationTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createAutomationList(automationTopic.mainIdeas)}

        <h4>Key Checks</h4>
        ${createAutomationList(automationTopic.keyChecks)}

        <h4>Common Problems</h4>
        ${createAutomationList(automationTopic.commonProblems)}

        <h4>Technician Strategy</h4>
        ${createAutomationList(automationTopic.technicianStrategy)}

    `;

}

function createAutomationList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}