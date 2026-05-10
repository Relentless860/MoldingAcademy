const moldSetupData = {

    preparation: {
        title: "Mold Preparation",

        description:
            "Mold preparation is the process of getting the mold, machine, material, and setup information ready before the mold is installed.",

        mainIdeas: [
            "Verify the correct mold is being installed",
            "Review the work order and setup sheet",
            "Inspect the mold before hanging",
            "Confirm required material, colorant, inserts, and auxiliary equipment",
            "Check that the machine is available and ready"
        ],

        setupChecks: [
            "Mold number matches the work order",
            "Mold is clean and free of visible damage",
            "Eyebolts or lifting points are safe and rated",
            "Water fittings, plugs, and hoses are available",
            "Required clamps, bolts, and setup tools are ready"
        ],

        commonMistakes: [
            "Hanging the wrong mold",
            "Skipping mold inspection",
            "Using damaged water fittings",
            "Not checking setup sheet requirements",
            "Starting setup before material or dryer is ready"
        ],

        technicianStrategy: [
            "Start every setup by verifying mold identification",
            "Check for obvious damage before the mold enters the press",
            "Stage waterlines, clamps, bolts, and tools before install",
            "Read the setup sheet before making assumptions",
            "Communicate missing components before the setup is delayed"
        ]
    },

    "machine-match": {
        title: "Machine / Mold Match",

        description:
            "Machine and mold matching ensures the mold physically fits the press and the machine has enough capacity to run the job safely and consistently.",

        mainIdeas: [
            "The mold must fit between tie bars",
            "The mold must fit within minimum and maximum mold height",
            "The machine must have enough clamp tonnage",
            "Shot capacity must match part and runner volume",
            "Ejector stroke and pattern must match the mold"
        ],

        setupChecks: [
            "Tie bar spacing",
            "Minimum and maximum mold height",
            "Platen size",
            "Clamp tonnage requirement",
            "Nozzle radius and sprue bushing match",
            "Ejector pattern and stroke"
        ],

        commonMistakes: [
            "Assuming a mold fits because it ran before",
            "Ignoring required clamp tonnage",
            "Using a machine with poor shot size match",
            "Not checking ejector compatibility",
            "Failing to verify nozzle/sprue fit"
        ],

        technicianStrategy: [
            "Confirm machine assignment before moving the mold",
            "Check mold height before closing the clamp",
            "Verify ejector stroke before automatic cycling",
            "Review shot size and cushion once process starts",
            "Question any setup that requires forcing fitment"
        ]
    },

    hanging: {
        title: "Mold Hanging",

        description:
            "Mold hanging is the physical process of lifting, positioning, and securing the mold into the machine safely.",

        mainIdeas: [
            "Mold hanging must be done safely and controlled",
            "Lifting equipment must be rated for the mold weight",
            "The mold must be balanced before moving",
            "Hands and body must stay clear of pinch points",
            "The mold must be secured before releasing the crane or hoist"
        ],

        setupChecks: [
            "Correct lifting equipment",
            "Eyebolts fully seated",
            "Mold weight within hoist capacity",
            "Platens clean before install",
            "Mold centered and supported",
            "Clamp bolts installed correctly"
        ],

        commonMistakes: [
            "Using incorrect eyebolts",
            "Standing under suspended loads",
            "Releasing the hoist before mold is secured",
            "Leaving dirt between mold and platen",
            "Not centering the mold properly"
        ],

        technicianStrategy: [
            "Never rush a mold hang",
            "Keep the mold close to the ground when moving",
            "Clean platen surfaces before mounting",
            "Use proper clamps and bolts",
            "Confirm the mold is secured before removing lifting tension"
        ]
    },

    clamping: {
        title: "Clamp Setup",

        description:
            "Clamp setup controls how the mold opens, closes, locks up, and applies force during injection.",

        mainIdeas: [
            "Clamp settings protect the mold and machine",
            "Clamp tonnage must be appropriate for the job",
            "Open and close positions must allow safe part removal",
            "Mold close speed should slow before mold protection",
            "Mold height must be set correctly"
        ],

        setupChecks: [
            "Mold height",
            "Clamp tonnage",
            "Mold open position",
            "Mold close speed",
            "Low pressure mold protection area",
            "Lockup position"
        ],

        commonMistakes: [
            "Using excessive clamp tonnage",
            "Setting mold protection too high",
            "Opening the mold farther than needed",
            "Closing too fast near parting line",
            "Not checking clamp alarms during dry cycle"
        ],

        technicianStrategy: [
            "Use enough clamp force to prevent flash without over-stressing the mold",
            "Set mold open only as far as needed for safe ejection",
            "Slow mold close before the protection zone",
            "Avoid using clamp tonnage to hide process problems",
            "Watch for unusual noises during clamp movement"
        ]
    },

    nozzle: {
        title: "Nozzle Alignment",

        description:
            "Nozzle alignment ensures the machine nozzle seats correctly against the mold sprue bushing without leaking, damaging the mold, or restricting flow.",

        mainIdeas: [
            "The nozzle must align with the sprue bushing",
            "Nozzle radius must match the sprue bushing radius",
            "Nozzle contact pressure must be correct",
            "Poor alignment can cause leaks or sprue issues",
            "Nozzle temperature affects flow into the mold"
        ],

        setupChecks: [
            "Nozzle center alignment",
            "Nozzle radius",
            "Sprue bushing condition",
            "Nozzle contact pressure",
            "Nozzle temperature",
            "Material leakage during purge or injection"
        ],

        commonMistakes: [
            "Running with poor nozzle contact",
            "Using the wrong nozzle radius",
            "Ignoring material leakage",
            "Overloading nozzle contact pressure",
            "Not checking for sprue sticking"
        ],

        technicianStrategy: [
            "Check nozzle seat before full production",
            "Watch for leaking at the sprue bushing",
            "Verify nozzle temperature is appropriate for the material",
            "Inspect sprue appearance during first shots",
            "Correct alignment problems before increasing pressure"
        ]
    },

    waterlines: {
        title: "Waterlines",

        description:
            "Waterlines control mold temperature by moving water through cooling circuits inside the mold.",

        mainIdeas: [
            "Correct waterline routing is critical",
            "Water flow affects cooling consistency",
            "Restricted circuits can cause hot spots",
            "Leaks can damage machines, molds, and parts",
            "Mold temperature affects warpage, shrinkage, and cycle time"
        ],

        setupChecks: [
            "Waterline layout matches setup sheet",
            "Supply and return lines are correct",
            "Hoses are not kinked",
            "Fittings are tight",
            "Flow is verified",
            "Leaks are repaired before production"
        ],

        commonMistakes: [
            "Crossing waterlines incorrectly",
            "Assuming water is flowing because hoses are connected",
            "Ignoring slow leaks",
            "Leaving blocked circuits unresolved",
            "Using cooling time to hide poor water flow"
        ],

        technicianStrategy: [
            "Follow the water diagram when available",
            "Check flow, not just hose connection",
            "Repair leaks before production",
            "Feel or measure mold temperature changes carefully",
            "Investigate warpage by checking cooling balance"
        ]
    },

    ejectors: {
        title: "Ejector Setup",

        description:
            "Ejector setup controls how the part is pushed out of the mold after cooling.",

        mainIdeas: [
            "Ejector stroke must be enough to clear the part",
            "Ejector speed must avoid part damage",
            "Ejectors must return before mold close",
            "Ejector pattern must match the machine",
            "Improper ejection can damage parts or tooling"
        ],

        setupChecks: [
            "Ejector rod connection",
            "Ejector stroke",
            "Ejector forward speed",
            "Ejector return position",
            "Part clears the mold",
            "No ejector return alarms"
        ],

        commonMistakes: [
            "Too much ejector stroke",
            "Too little ejector stroke",
            "Fast ejection causing part damage",
            "Not verifying ejector return",
            "Cycling with parts hanging on pins"
        ],

        technicianStrategy: [
            "Start with cautious ejector movement",
            "Verify part clears the mold every cycle",
            "Watch for ejector marks or cracking",
            "Confirm ejector return before mold close",
            "Adjust stroke and speed based on part behavior"
        ]
    },

    cores: {
        title: "Core Pulls & Slides",

        description:
            "Core pulls and slides move mold components to form undercuts, holes, threads, or side features in the part.",

        mainIdeas: [
            "Core pulls must move in the correct sequence",
            "Hydraulic, pneumatic, or electric cores may be used",
            "Slides must be fully seated before injection",
            "Improper sequence can crash the mold",
            "Sensors may confirm core position"
        ],

        setupChecks: [
            "Core pull sequence",
            "Hydraulic line connections",
            "Air line connections",
            "Core forward and back positions",
            "Limit switch or sensor signals",
            "Mold open/close clearance"
        ],

        commonMistakes: [
            "Reversing hydraulic lines",
            "Incorrect core sequence",
            "Ignoring missing core confirmation",
            "Cycling before verifying slide movement",
            "Running with damaged or sticky slides"
        ],

        technicianStrategy: [
            "Test core movement slowly during setup",
            "Verify sequence before automatic cycle",
            "Confirm cores are fully in position before injection",
            "Check alarms instead of bypassing them",
            "Look for wear, sticking, or timing problems"
        ]
    },

    protection: {
        title: "Mold Protection",

        description:
            "Mold protection uses low-pressure mold closing to detect stuck parts, ejector issues, or obstructions before full clamp force is applied.",

        mainIdeas: [
            "Mold protection prevents expensive mold damage",
            "Protection should occur before final clamp lockup",
            "Low pressure should be sensitive enough to stop on obstruction",
            "Mold protection must never be bypassed",
            "Stuck parts are a common cause of mold damage"
        ],

        setupChecks: [
            "Low pressure start position",
            "Low pressure end position",
            "Mold close speed",
            "Protection pressure",
            "Stuck part detection",
            "Ejector return confirmation"
        ],

        commonMistakes: [
            "Setting mold protection pressure too high",
            "Ending protection too early",
            "Bypassing alarms",
            "Ignoring stuck parts",
            "Restarting without checking the cavity"
        ],

        technicianStrategy: [
            "Set protection before the mold reaches full close",
            "Use the lowest effective pressure",
            "Test protection carefully during setup",
            "Always inspect after a mold protection alarm",
            "Never treat repeated protection alarms as normal"
        ]
    },

    drycycle: {
        title: "Dry Cycling",

        description:
            "Dry cycling means cycling the mold without making parts to verify machine movement, mold movement, ejectors, cores, and safety before production.",

        mainIdeas: [
            "Dry cycling verifies setup before plastic is injected",
            "It helps catch movement problems safely",
            "Ejectors, slides, and cores should be checked",
            "Robot or automation timing can be verified",
            "Dry cycling reduces startup risk"
        ],

        setupChecks: [
            "Mold opens and closes smoothly",
            "Ejectors move and return correctly",
            "Core pulls sequence correctly",
            "No abnormal noises",
            "Mold protection works",
            "Robot clears mold area if used"
        ],

        commonMistakes: [
            "Skipping dry cycle",
            "Ignoring odd noises",
            "Not checking ejector return",
            "Not checking core sequence",
            "Going straight to automatic production"
        ],

        technicianStrategy: [
            "Run slow manual cycles first",
            "Watch the mold, ejectors, and slides closely",
            "Confirm alarms are resolved before production",
            "Verify safety gates and interlocks",
            "Only increase speed after motion is proven"
        ]
    },

    firstshots: {
        title: "First Shots",

        description:
            "First shots are the first molded parts made after setup. They are used to verify process, part quality, and safe production readiness.",

        mainIdeas: [
            "First shots confirm the mold and process are ready",
            "Parts should be inspected before full production",
            "Startup settings should match the approved process",
            "Defects should be corrected before production release",
            "Quality approval may be required"
        ],

        setupChecks: [
            "Part fills completely",
            "No flash",
            "No sticking",
            "No burn marks or splay",
            "Part dimensions checked if required",
            "Part weight or visual standard verified"
        ],

        commonMistakes: [
            "Starting full production before inspection",
            "Ignoring minor defects at startup",
            "Changing settings without recording them",
            "Not checking cavities individually",
            "Skipping first-piece approval"
        ],

        technicianStrategy: [
            "Inspect first shots carefully",
            "Compare parts to known good samples when available",
            "Check all cavities in multi-cavity molds",
            "Record any process changes",
            "Do not release production until parts are acceptable"
        ]
    },

    changeover: {
        title: "Changeover Checklist",

        description:
            "A changeover checklist helps make sure the mold change is completed safely, consistently, and without missed steps.",

        mainIdeas: [
            "Checklists reduce setup mistakes",
            "Repeatable setup improves startup speed",
            "Documentation helps different shifts follow the same process",
            "Missed setup steps can cause scrap, downtime, or mold damage",
            "A good changeover ends with verified quality"
        ],

        setupChecks: [
            "Correct mold installed",
            "Correct material loaded and dried",
            "Waterlines connected and flowing",
            "Ejectors and cores verified",
            "Mold protection set",
            "Dry cycle completed",
            "First shots inspected"
        ],

        commonMistakes: [
            "Skipping checklist items",
            "Not documenting waterline changes",
            "Leaving old material in the machine",
            "Forgetting auxiliary equipment",
            "Failing to communicate setup issues"
        ],

        technicianStrategy: [
            "Use the checklist every setup",
            "Do not rely only on memory",
            "Document problems found during changeover",
            "Communicate issues to processing and quality",
            "Update setup notes when better methods are proven"
        ]
    }

};

function showMoldSetup(topic) {

    const moldSetupBox =
        document.getElementById("moldSetupBox");

    const moldTopic =
        moldSetupData[topic];

    if (!moldTopic) {

        moldSetupBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This mold setup topic has not been added yet.
            </p>

        `;

        return;
    }

    moldSetupBox.innerHTML = `

        <h3>${moldTopic.title}</h3>

        <p>
            ${moldTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createMoldSetupList(moldTopic.mainIdeas)}

        <h4>Setup Checks</h4>
        ${createMoldSetupList(moldTopic.setupChecks)}

        <h4>Common Mistakes</h4>
        ${createMoldSetupList(moldTopic.commonMistakes)}

        <h4>Technician Strategy</h4>
        ${createMoldSetupList(moldTopic.technicianStrategy)}

    `;

}

function createMoldSetupList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}