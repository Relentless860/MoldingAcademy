const defectData = {

    shortshot: {
        title: "Short Shot",

        description:
            "A short shot occurs when the mold cavity does not completely fill with plastic.",

        appearance: [
            "Incomplete part",
            "Missing features",
            "Rounded or soft edges at the flow end",
            "Thin sections not fully formed"
        ],

        machineCauses: [
            "Low injection pressure",
            "Low injection speed",
            "Low melt temperature",
            "Insufficient shot size",
            "Transfer position too early"
        ],

        moldCauses: [
            "Restricted gate",
            "Poor venting",
            "Thin flow paths",
            "Cold mold temperature",
            "Blocked runner or gate"
        ],

        materialCauses: [
            "High viscosity material",
            "Cold material",
            "Moisture contamination",
            "Incorrect resin grade"
        ],

        processIndicators: [
            "Fill time may increase",
            "Peak pressure may rise",
            "Cushion may be low or inconsistent",
            "Part weight may drop"
        ],

        corrections: [
            "Increase injection pressure",
            "Increase injection speed",
            "Increase melt temperature",
            "Increase shot size",
            "Check gate and runner restrictions"
        ],

        technicianStrategy: [
            "Verify cushion first",
            "Check fill time consistency",
            "Inspect the short area on the part",
            "Confirm material and barrel temperatures",
            "Make one process change at a time"
        ],

        prevention:
            "Maintain stable material temperature, proper shot size, and consistent fill conditions."
    },

    flash: {
        title: "Flash",

        description:
            "Flash is excess plastic that escapes between mold parting surfaces, vents, shutoffs, or ejector areas.",

        appearance: [
            "Thin plastic fins",
            "Plastic along parting line",
            "Excess material near vents",
            "Flash around ejector pins or inserts"
        ],

        machineCauses: [
            "High injection pressure",
            "High hold pressure",
            "Excessive shot size",
            "Clamp force too low",
            "Transfer position too late"
        ],

        moldCauses: [
            "Worn parting line",
            "Damaged shutoffs",
            "Mold mismatch",
            "Poor mold alignment",
            "Vents too deep"
        ],

        materialCauses: [
            "Low viscosity material",
            "Overheated resin",
            "Incorrect material grade"
        ],

        processIndicators: [
            "Peak pressure may be high",
            "Clamp may be overloaded",
            "Cushion may be excessive",
            "Part weight may increase"
        ],

        corrections: [
            "Reduce injection pressure",
            "Reduce hold pressure",
            "Check clamp tonnage",
            "Reduce shot size if excessive",
            "Inspect mold parting line"
        ],

        technicianStrategy: [
            "Identify exactly where flash appears",
            "Determine whether it is process-related or mold-related",
            "Reduce pressure gradually",
            "Do not hide mold damage with excessive clamp force",
            "Check mold condition if flash stays in one location"
        ],

        prevention:
            "Maintain correct clamp force, avoid overpacking, and keep mold shutoffs in good condition."
    },

    sinkmarks: {
        title: "Sink Marks",

        description:
            "Sink marks are surface depressions caused by material shrinkage during cooling.",

        appearance: [
            "Small dents",
            "Depressions in thick sections",
            "Surface shrink near ribs or bosses",
            "Uneven cosmetic surface"
        ],

        machineCauses: [
            "Low hold pressure",
            "Short hold time",
            "Early transfer position",
            "Low shot size",
            "Low cushion"
        ],

        moldCauses: [
            "Thick wall sections",
            "Poor gate location",
            "Small gate size",
            "Uneven cooling",
            "Poor cooling near thick areas"
        ],

        materialCauses: [
            "High shrinkage resin",
            "Excessive regrind",
            "Incorrect material selection"
        ],

        processIndicators: [
            "Part weight may be low",
            "Weight may increase when hold pressure is raised",
            "Sink location often matches thick sections",
            "Cushion may be unstable"
        ],

        corrections: [
            "Increase hold pressure",
            "Increase hold time",
            "Check gate freeze time",
            "Improve cooling",
            "Modify gate size or location if needed"
        ],

        technicianStrategy: [
            "Inspect thick areas first",
            "Run a part weight study",
            "Confirm gate is not freezing too early",
            "Increase packing carefully",
            "Avoid overpacking the entire part to fix one sink"
        ],

        prevention:
            "Use proper packing pressure, adequate hold time, and balanced part design."
    },

    burnmarks: {
        title: "Burn Marks",

        description:
            "Burn marks are dark discolorations caused by trapped gas, excessive heat, or material degradation.",

        appearance: [
            "Black streaks",
            "Dark brown marks",
            "Burning near end of fill",
            "Discoloration around trapped gas areas"
        ],

        machineCauses: [
            "Injection speed too high",
            "Melt temperature too high",
            "Excessive back pressure",
            "Excessive screw RPM",
            "Long residence time"
        ],

        moldCauses: [
            "Poor venting",
            "Blocked vents",
            "Gas traps",
            "Restricted flow path",
            "End-of-fill air compression"
        ],

        materialCauses: [
            "Material degradation",
            "Contaminated resin",
            "Incorrect drying",
            "Heat-sensitive resin"
        ],

        processIndicators: [
            "Pressure may spike near end of fill",
            "Burn usually appears in same location",
            "Fill speed may be too aggressive",
            "Material may smell degraded during purge"
        ],

        corrections: [
            "Reduce injection speed",
            "Improve venting",
            "Lower melt temperature",
            "Reduce screw RPM",
            "Reduce residence time"
        ],

        technicianStrategy: [
            "Inspect burn location",
            "Check vents before making major process changes",
            "Reduce fill speed gradually",
            "Verify barrel temperature profile",
            "Purge machine if material is degraded"
        ],

        prevention:
            "Keep vents clean, avoid excessive shear, and prevent material from overheating."
    },

    warping: {
        title: "Warping",

        description:
            "Warping occurs when uneven shrinkage or internal stress causes the part to bend or twist.",

        appearance: [
            "Bent part",
            "Twisted part geometry",
            "Uneven flatness",
            "Dimensional distortion after cooling"
        ],

        machineCauses: [
            "Uneven packing",
            "Excessive hold pressure",
            "Cooling time too short",
            "Unstable mold temperature",
            "High internal stress"
        ],

        moldCauses: [
            "Uneven cooling",
            "Poor gate location",
            "Cooling channel imbalance",
            "Uneven wall thickness",
            "Hot spots in mold"
        ],

        materialCauses: [
            "High shrinkage resin",
            "Moisture contamination",
            "Crystalline material shrinkage",
            "Fiber orientation"
        ],

        processIndicators: [
            "Part may look fine at ejection but warp after cooling",
            "Dimensions may drift over time",
            "Mold temperature imbalance may be visible",
            "Warp direction often follows flow or cooling imbalance"
        ],

        corrections: [
            "Balance mold cooling",
            "Increase cooling time",
            "Optimize hold pressure",
            "Adjust mold temperature",
            "Review gate location and wall thickness"
        ],

        technicianStrategy: [
            "Identify the direction of warp",
            "Check cooling water flow",
            "Compare cavity temperatures",
            "Review packing pressure",
            "Avoid chasing warp with random pressure changes"
        ],

        prevention:
            "Maintain balanced cooling, stable packing, and consistent mold temperatures."
    },

    splay: {
        title: "Splay",

        description:
            "Splay appears as silver streaks caused by moisture, gas, contamination, or excessive shear in the melt.",

        appearance: [
            "Silver streaks",
            "Cloudy marks",
            "Streaking along flow direction",
            "Surface haze or splash-like marks"
        ],

        machineCauses: [
            "Excessive screw RPM",
            "High back pressure",
            "Excessive melt temperature",
            "Air trapped during recovery",
            "Decompression issues"
        ],

        moldCauses: [
            "Poor venting",
            "Restricted gate",
            "Sharp transitions causing shear"
        ],

        materialCauses: [
            "Wet material",
            "Contaminated resin",
            "Degraded material",
            "Excessive regrind",
            "Improper drying"
        ],

        processIndicators: [
            "Often changes when material is dried correctly",
            "May appear worse after long residence time",
            "May follow flow path",
            "Can appear randomly with contamination"
        ],

        corrections: [
            "Dry material properly",
            "Reduce screw RPM",
            "Reduce back pressure",
            "Lower melt temperature if excessive",
            "Inspect material handling"
        ],

        technicianStrategy: [
            "Verify dryer temperature and dew point",
            "Check material lot and contamination risk",
            "Inspect purge for bubbles or streaks",
            "Reduce shear gradually",
            "Confirm drying time before production"
        ],

        prevention:
            "Use proper drying, clean material handling, and controlled screw recovery settings."
    },

    jetting: {
        title: "Jetting",

        description:
            "Jetting occurs when molten plastic shoots into the cavity without properly contacting the mold wall.",

        appearance: [
            "Snake-like flow marks",
            "Wavy surface pattern",
            "Visible stream marks",
            "Distorted flow near gate"
        ],

        machineCauses: [
            "Injection speed too high at start",
            "Poor fill profile",
            "Melt temperature too low",
            "Incorrect transfer setup"
        ],

        moldCauses: [
            "Poor gate design",
            "Gate aimed into open cavity",
            "Improper gate location",
            "Restricted gate"
        ],

        materialCauses: [
            "Low viscosity material",
            "Material too cold",
            "Poor flow behavior"
        ],

        processIndicators: [
            "Jetting usually starts near the gate",
            "May improve with slower initial fill",
            "Surface pattern follows initial material stream"
        ],

        corrections: [
            "Reduce initial injection speed",
            "Increase melt temperature if too low",
            "Use staged injection speed",
            "Modify gate design if needed",
            "Improve gate location"
        ],

        technicianStrategy: [
            "Inspect defect location relative to gate",
            "Slow only the initial fill if possible",
            "Do not reduce the entire fill speed blindly",
            "Review gate geometry"
        ],

        prevention:
            "Use proper gate design and controlled initial injection speed."
    },

    voids: {
        title: "Voids",

        description:
            "Voids are internal pockets caused by shrinkage, trapped gas, or insufficient packing.",

        appearance: [
            "Internal bubbles",
            "Hollow sections",
            "Weak thick areas",
            "Visible bubbles in transparent parts"
        ],

        machineCauses: [
            "Low hold pressure",
            "Short hold time",
            "Low shot size",
            "Early transfer",
            "Insufficient packing"
        ],

        moldCauses: [
            "Thick wall sections",
            "Poor gate location",
            "Gate freezes too early",
            "Poor venting"
        ],

        materialCauses: [
            "Moisture contamination",
            "High shrinkage resin",
            "Volatile material contamination"
        ],

        processIndicators: [
            "Part weight may be low",
            "Voids often appear in thick areas",
            "Increasing hold pressure may reduce voids",
            "Moisture may create bubbles instead of shrink voids"
        ],

        corrections: [
            "Increase hold pressure",
            "Increase hold time",
            "Check gate freeze time",
            "Dry material properly",
            "Improve gate size or location"
        ],

        technicianStrategy: [
            "Determine if void is shrinkage or gas-related",
            "Inspect thick areas",
            "Run a hold time or gate freeze study",
            "Check material drying",
            "Monitor part weight"
        ],

        prevention:
            "Use proper packing, correct drying, and avoid overly thick wall sections."
    },

    weldlines: {
        title: "Weld Lines",

        description:
            "Weld lines form where two flow fronts meet and do not fully bond together.",

        appearance: [
            "Visible line where flows meet",
            "Weak area on part",
            "Cosmetic line near holes or ribs",
            "Cracking along flow meeting point"
        ],

        machineCauses: [
            "Low melt temperature",
            "Low injection speed",
            "Low injection pressure",
            "Poor packing"
        ],

        moldCauses: [
            "Flow obstruction",
            "Poor gate location",
            "Cold mold temperature",
            "Poor venting at flow meeting area"
        ],

        materialCauses: [
            "High viscosity resin",
            "Filled material",
            "Low melt strength",
            "Contamination"
        ],

        processIndicators: [
            "Weld line location is usually repeatable",
            "Strength may improve with higher melt temperature",
            "Cosmetic appearance may change with fill speed",
            "May be worse near vents or inserts"
        ],

        corrections: [
            "Increase melt temperature",
            "Increase injection speed",
            "Increase mold temperature",
            "Improve venting",
            "Review gate location"
        ],

        technicianStrategy: [
            "Identify where flow fronts meet",
            "Check if line is cosmetic or structural",
            "Improve flow front temperature",
            "Inspect venting near weld location",
            "Avoid over-adjusting pressure without understanding flow"
        ],

        prevention:
            "Use proper gate location, melt temperature, and venting to improve flow-front bonding."
    },

    flowlines: {
        title: "Flow Lines",

        description:
            "Flow lines are visible surface patterns caused by inconsistent material flow or cooling.",

        appearance: [
            "Wavy lines",
            "Circular flow marks near gate",
            "Surface streaks",
            "Gloss variation"
        ],

        machineCauses: [
            "Low injection speed",
            "Low melt temperature",
            "Inconsistent fill profile",
            "Low mold temperature"
        ],

        moldCauses: [
            "Poor gate location",
            "Cold mold surface",
            "Sudden wall thickness changes",
            "Long flow length"
        ],

        materialCauses: [
            "High viscosity material",
            "Poor color dispersion",
            "Material too cold"
        ],

        processIndicators: [
            "Often appears near the gate",
            "May improve with faster fill",
            "May change with mold temperature",
            "Fill time may be inconsistent"
        ],

        corrections: [
            "Increase injection speed",
            "Increase melt temperature",
            "Increase mold temperature",
            "Optimize gate location",
            "Smooth fill profile"
        ],

        technicianStrategy: [
            "Compare defect to flow direction",
            "Check fill speed profile",
            "Review melt and mold temperatures",
            "Watch for hesitation during fill"
        ],

        prevention:
            "Maintain stable fill speed, proper temperatures, and smooth material flow."
    },

    bubbles: {
        title: "Bubbles",

        description:
            "Bubbles are gas or moisture pockets visible inside or on the surface of the molded part.",

        appearance: [
            "Round bubbles",
            "Clear internal pockets",
            "Surface blisters",
            "Foamy or cloudy areas"
        ],

        machineCauses: [
            "Excessive decompression",
            "Air trapped during recovery",
            "High screw RPM",
            "Excessive back pressure",
            "Poor shot consistency"
        ],

        moldCauses: [
            "Poor venting",
            "Gas traps",
            "Thick sections",
            "Restricted flow"
        ],

        materialCauses: [
            "Wet material",
            "Volatile contamination",
            "Degraded resin",
            "Improper drying"
        ],

        processIndicators: [
            "Bubbles may reduce after drying material",
            "May appear during purge",
            "May worsen with high shear",
            "Can appear randomly with contamination"
        ],

        corrections: [
            "Dry material properly",
            "Reduce screw RPM",
            "Adjust decompression",
            "Improve venting",
            "Reduce excessive shear"
        ],

        technicianStrategy: [
            "Check if bubbles are moisture or shrinkage voids",
            "Inspect purge material",
            "Verify dryer operation",
            "Check screw recovery settings",
            "Review venting"
        ],

        prevention:
            "Control drying, avoid air entrapment, and maintain stable recovery settings."
    },

    blackspecks: {
        title: "Black Specks",

        description:
            "Black specks are dark particles caused by degraded material, contamination, or burnt resin.",

        appearance: [
            "Small black dots",
            "Dark streaks",
            "Random contamination marks",
            "Specks appearing throughout part"
        ],

        machineCauses: [
            "Excessive barrel temperature",
            "Long residence time",
            "Dead spots in barrel or nozzle",
            "Improper purging",
            "Excessive shear"
        ],

        moldCauses: [
            "Burnt buildup in hot runner",
            "Contaminated runner system",
            "Dirty mold surfaces"
        ],

        materialCauses: [
            "Contaminated resin",
            "Degraded regrind",
            "Wrong material mixed in",
            "Dust or foreign material"
        ],

        processIndicators: [
            "May appear randomly",
            "May increase after downtime",
            "May improve after purging",
            "May worsen with high temperature"
        ],

        corrections: [
            "Purge machine thoroughly",
            "Lower excessive temperatures",
            "Reduce residence time",
            "Clean hopper and feed system",
            "Inspect material contamination"
        ],

        technicianStrategy: [
            "Check when specks started",
            "Inspect material source",
            "Purge and observe changes",
            "Check hot runner or nozzle buildup",
            "Review temperature history"
        ],

        prevention:
            "Use clean material handling, proper purging, and controlled residence time."
    },

    delamination: {
        title: "Delamination",

        description:
            "Delamination occurs when thin layers separate from the part surface or inside the molded part.",

        appearance: [
            "Peeling surface layers",
            "Flaky material",
            "Layer separation",
            "Weak laminated appearance"
        ],

        machineCauses: [
            "Low melt temperature",
            "Poor mixing",
            "Low back pressure",
            "Improper screw recovery"
        ],

        moldCauses: [
            "Excessive shear at gate",
            "Restricted gate",
            "Sharp flow transitions"
        ],

        materialCauses: [
            "Material contamination",
            "Incompatible resins mixed together",
            "Excessive regrind",
            "Moisture contamination"
        ],

        processIndicators: [
            "May appear suddenly after material change",
            "Often linked to contamination",
            "May worsen with poor mixing",
            "Can cause weak parts"
        ],

        corrections: [
            "Check for material contamination",
            "Increase melt temperature if too low",
            "Improve mixing",
            "Reduce incompatible regrind",
            "Clean material handling system"
        ],

        technicianStrategy: [
            "Verify material identity",
            "Check regrind and colorant",
            "Inspect purge for unmelted layers",
            "Review recent material changes",
            "Clean hopper and loader"
        ],

        prevention:
            "Prevent material mixing, control regrind, and maintain clean material handling."
    },

    brittleness: {
        title: "Brittleness",

        description:
            "Brittleness occurs when parts crack, snap, or fail more easily than expected.",

        appearance: [
            "Parts crack during handling",
            "Parts break during assembly",
            "Low impact strength",
            "Stress cracking"
        ],

        machineCauses: [
            "Excessive melt temperature",
            "High shear",
            "Long residence time",
            "Improper drying",
            "Overpacking stress"
        ],

        moldCauses: [
            "Sharp corners",
            "Poor gate design",
            "High molded-in stress",
            "Poor cooling balance"
        ],

        materialCauses: [
            "Material degradation",
            "Moisture damage",
            "Incorrect resin",
            "Too much regrind",
            "Contamination"
        ],

        processIndicators: [
            "Parts may look visually acceptable",
            "Failures may happen during testing",
            "Impact strength may drop",
            "Brittleness may increase after overheating"
        ],

        corrections: [
            "Lower excessive melt temperature",
            "Reduce shear",
            "Check drying conditions",
            "Reduce regrind",
            "Verify correct material"
        ],

        technicianStrategy: [
            "Check material certification",
            "Review drying and residence time",
            "Inspect parts for stress whitening",
            "Compare fresh resin vs regrind",
            "Check for overpacking"
        ],

        prevention:
            "Protect material properties by controlling heat history, drying, and contamination."
    },

    ejectormarks: {
        title: "Ejector Marks",

        description:
            "Ejector marks are visible marks, dents, or stress points caused by part removal from the mold.",

        appearance: [
            "Round pin marks",
            "White stress marks",
            "Dents where pins contact part",
            "Cracks near ejector locations"
        ],

        machineCauses: [
            "Ejection speed too high",
            "Ejection force too high",
            "Cooling time too short",
            "Part sticking"
        ],

        moldCauses: [
            "Poor ejector pin placement",
            "Insufficient draft",
            "Damaged ejector pins",
            "Uneven ejection",
            "Rough core surface"
        ],

        materialCauses: [
            "Material too soft at ejection",
            "High shrink material gripping core",
            "Poor release behavior"
        ],

        processIndicators: [
            "Marks may improve with more cooling",
            "Parts may stick before ejection",
            "Ejection alarms may occur",
            "Defect location matches ejector pins"
        ],

        corrections: [
            "Increase cooling time",
            "Reduce ejector speed",
            "Check ejector stroke",
            "Inspect ejector pins",
            "Improve mold release conditions"
        ],

        technicianStrategy: [
            "Match mark location to ejector layout",
            "Check part temperature at ejection",
            "Inspect pins for damage",
            "Verify part is not sticking to the core",
            "Adjust ejector motion carefully"
        ],

        prevention:
            "Use proper cooling, good ejector setup, adequate draft, and smooth mold surfaces."
    },

    dimensional: {
        title: "Dimensional Variation",

        description:
            "Dimensional variation occurs when molded parts do not hold consistent measurements shot to shot.",

        appearance: [
            "Parts measure differently over time",
            "Assembly fit issues",
            "Tolerance failures",
            "Inconsistent part weight"
        ],

        machineCauses: [
            "Unstable cushion",
            "Inconsistent fill time",
            "Unstable hold pressure",
            "Temperature variation",
            "Recovery variation"
        ],

        moldCauses: [
            "Uneven cooling",
            "Mold temperature variation",
            "Worn mold components",
            "Gate freeze inconsistency"
        ],

        materialCauses: [
            "Lot-to-lot material variation",
            "Moisture variation",
            "Regrind inconsistency",
            "Shrinkage variation"
        ],

        processIndicators: [
            "Cushion changes shot to shot",
            "Fill time drifts",
            "Part weight changes",
            "Dimensions change as mold temperature changes"
        ],

        corrections: [
            "Stabilize cushion",
            "Verify fill time consistency",
            "Control mold temperature",
            "Check hold pressure and hold time",
            "Verify material consistency"
        ],

        technicianStrategy: [
            "Measure part weight and dimensions together",
            "Check process trends before adjusting",
            "Look for drift, not just one bad shot",
            "Verify cooling and material conditions",
            "Record changes carefully"
        ],

        prevention:
            "Maintain a stable process window with consistent material, temperatures, fill time, and cushion."
    }

};

function showDefect(defectKey) {

    const defectBox =
        document.getElementById("defectBox");

    const defect =
        defectData[defectKey];

    if (!defect) {

        defectBox.innerHTML = `

            <h3>Defect Not Found</h3>

            <p>
                This defect has not been added yet.
            </p>

        `;

        return;
    }

    defectBox.innerHTML = `

        <h3>${defect.title}</h3>

        <p>
            ${defect.description}
        </p>

        <h4>Common Appearance</h4>
        ${createList(defect.appearance)}

        <h4>Machine Causes</h4>
        ${createList(defect.machineCauses)}

        <h4>Mold Causes</h4>
        ${createList(defect.moldCauses)}

        <h4>Material Causes</h4>
        ${createList(defect.materialCauses)}

        <h4>Process Indicators</h4>
        ${createList(defect.processIndicators)}

        <h4>Recommended Corrections</h4>
        ${createList(defect.corrections)}

        <h4>Technician Strategy</h4>
        ${createList(defect.technicianStrategy)}

        <h4>Prevention</h4>

        <p>
            ${defect.prevention}
        </p>

    `;
}

function createList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;
}