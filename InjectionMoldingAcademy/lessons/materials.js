const materialData = {

    thermoplastics: {
        title: "Thermoplastics",

        description:
            "Thermoplastics are plastic materials that can be melted, shaped, cooled, and reheated multiple times. Most injection molding materials are thermoplastics.",

        mainIdeas: [
            "Soften when heated",
            "Solidify when cooled",
            "Can usually be reprocessed",
            "Used in most injection molding applications"
        ],

        processingBehavior: [
            "Require proper melt temperature",
            "Flow depends on viscosity and shear",
            "Cooling rate affects shrinkage and dimensions",
            "Material properties can degrade if overheated"
        ],

        commonDefects: [
            "Short shots from poor flow",
            "Burning from overheating",
            "Warping from uneven cooling",
            "Splay from moisture or trapped gas"
        ],

        technicianNotes: [
            "Each resin has its own processing window",
            "Do not assume all plastics process the same",
            "Temperature, pressure, speed, and cooling must match the material",
            "Material behavior is a major part of troubleshooting"
        ]
    },

    commodity: {
        title: "Commodity Resins",

        description:
            "Commodity resins are common, lower-cost plastics used in high-volume production. They are generally easier to process than engineering resins.",

        mainIdeas: [
            "Common in packaging and consumer goods",
            "Usually lower cost",
            "Often processed in large volumes",
            "Generally less heat-resistant than engineering plastics"
        ],

        processingBehavior: [
            "Usually have wide processing windows",
            "Can often run fast cycle times",
            "May shrink more than amorphous engineering resins",
            "Often used where cost matters more than high performance"
        ],

        commonDefects: [
            "Warping from shrinkage",
            "Flash from low viscosity",
            "Sink marks in thick sections",
            "Dimensional variation from cooling imbalance"
        ],

        technicianNotes: [
            "Examples include PP, PE, and PS",
            "Polypropylene and polyethylene are semi-crystalline",
            "Shrinkage must be considered during troubleshooting",
            "Cooling consistency is very important"
        ]
    },

    engineering: {
        title: "Engineering Resins",

        description:
            "Engineering resins are higher-performance plastics used where strength, heat resistance, chemical resistance, or dimensional stability are important.",

        mainIdeas: [
            "Higher mechanical performance",
            "Better heat resistance",
            "Often used in automotive, electrical, and industrial parts",
            "Usually more sensitive to processing conditions"
        ],

        processingBehavior: [
            "May require tighter temperature control",
            "Many require proper drying",
            "Can be more shear sensitive",
            "Processing errors can reduce final part strength"
        ],

        commonDefects: [
            "Splay from moisture",
            "Brittleness from degradation",
            "Burn marks from excessive heat",
            "Dimensional issues from improper packing"
        ],

        technicianNotes: [
            "Examples include ABS, PC, Nylon, PBT, and Acetal",
            "Always check drying requirements",
            "Heat history matters more with engineering resins",
            "Wrong processing can damage material properties"
        ]
    },

    hygroscopic: {
        title: "Hygroscopic Materials",

        description:
            "Hygroscopic materials absorb moisture from the air. If they are not dried correctly before molding, moisture can damage part quality and material strength.",

        mainIdeas: [
            "Absorb moisture from the atmosphere",
            "Need proper drying before processing",
            "Moisture can become steam during molding",
            "Moisture can break down polymer chains"
        ],

        processingBehavior: [
            "Wet material may show splay or bubbles",
            "Moisture can reduce strength",
            "Drying time and temperature are critical",
            "Dew point and airflow affect drying quality"
        ],

        commonDefects: [
            "Splay",
            "Bubbles",
            "Weak parts",
            "Brittleness",
            "Surface streaking"
        ],

        technicianNotes: [
            "Common examples include Nylon, PC, PET, ABS, and PBT",
            "Keep material sealed after drying",
            "Verify dryer temperature and dew point",
            "Do not assume material is dry just because it feels dry"
        ]
    },

    drying: {
        title: "Material Drying",

        description:
            "Material drying removes moisture from hygroscopic resins before they enter the molding machine.",

        mainIdeas: [
            "Drying protects part quality",
            "Drying protects material strength",
            "Drying depends on time, temperature, airflow, and dew point",
            "Improper drying is a common root cause of defects"
        ],

        processingBehavior: [
            "Underdried material may create steam during injection",
            "Overdrying can damage some materials",
            "Poor airflow can prevent moisture removal",
            "Material can reabsorb moisture if exposed too long"
        ],

        commonDefects: [
            "Splay",
            "Bubbles",
            "Burn marks",
            "Brittle parts",
            "Reduced mechanical strength"
        ],

        technicianNotes: [
            "Check the material data sheet for drying requirements",
            "Verify actual dryer temperature",
            "Monitor dew point when available",
            "Avoid leaving dried material exposed to humid air"
        ]
    },

    "amorphous-crystalline": {
        title: "Amorphous vs Crystalline Materials",

        description:
            "Plastic materials behave differently depending on their molecular structure. Amorphous and crystalline materials shrink, cool, and process differently.",

        mainIdeas: [
            "Amorphous materials have random molecular structure",
            "Crystalline materials form organized regions as they cool",
            "Crystalline materials usually shrink more",
            "Material structure affects warpage and dimensional control"
        ],

        processingBehavior: [
            "Amorphous materials usually have better dimensional stability",
            "Crystalline materials need more attention to cooling",
            "Mold temperature strongly affects crystalline materials",
            "Crystalline materials may warp more if cooling is uneven"
        ],

        commonDefects: [
            "Warping in crystalline materials",
            "Shrinkage variation",
            "Dimensional instability",
            "Surface defects from improper temperature control"
        ],

        technicianNotes: [
            "Amorphous examples include ABS, PC, Acrylic, and PS",
            "Crystalline examples include PP, PE, Nylon, PBT, and Acetal",
            "Crystalline materials usually need more cooling control",
            "Do not process crystalline and amorphous resins with the same assumptions"
        ]
    },

    mfi: {
        title: "Melt Flow Index",

        description:
            "Melt Flow Index, or MFI, measures how easily a plastic flows under specific test conditions.",

        mainIdeas: [
            "Higher MFI usually means easier flow",
            "Lower MFI usually means thicker, more viscous flow",
            "MFI helps compare grades of the same resin family",
            "MFI does not fully describe real molding behavior"
        ],

        processingBehavior: [
            "High MFI materials may fill thin walls easier",
            "Low MFI materials may need higher pressure",
            "Lot-to-lot MFI variation can affect fill pressure",
            "MFI can influence flash risk and packing behavior"
        ],

        commonDefects: [
            "Short shots with low-flow material",
            "Flash with very high-flow material",
            "Dimensional variation from lot changes",
            "Fill imbalance in multi-cavity molds"
        ],

        technicianNotes: [
            "Use MFI as a guide, not the full answer",
            "Compare material lot changes when process behavior changes",
            "Higher flow does not always mean better part performance",
            "MFI is tested differently than real injection molding conditions"
        ]
    },

    viscosity: {
        title: "Viscosity",

        description:
            "Viscosity is a material's resistance to flow. In injection molding, viscosity affects pressure, fill time, shear, and part quality.",

        mainIdeas: [
            "High viscosity means thicker flow",
            "Low viscosity means easier flow",
            "Temperature affects viscosity",
            "Shear rate also affects viscosity"
        ],

        processingBehavior: [
            "Higher melt temperature usually lowers viscosity",
            "Faster injection can reduce apparent viscosity in many plastics",
            "High viscosity may require more pressure",
            "Viscosity changes can create process instability"
        ],

        commonDefects: [
            "Short shots",
            "High injection pressure",
            "Poor weld lines",
            "Flash if viscosity drops too low",
            "Fill imbalance"
        ],

        technicianNotes: [
            "Viscosity changes may come from material lot changes",
            "Moisture, temperature, and shear can affect viscosity",
            "Stable fill time is a key process indicator",
            "Scientific molding often studies viscosity behavior"
        ]
    },

    shrinkage: {
        title: "Shrinkage",

        description:
            "Shrinkage is the reduction in part size as molten plastic cools and solidifies.",

        mainIdeas: [
            "All plastics shrink as they cool",
            "Shrinkage affects final dimensions",
            "Crystalline materials usually shrink more",
            "Packing and cooling strongly influence shrinkage"
        ],

        processingBehavior: [
            "Higher hold pressure can reduce shrinkage",
            "Longer effective hold time can improve dimensional stability",
            "Uneven cooling can cause uneven shrinkage",
            "Wall thickness affects shrinkage behavior"
        ],

        commonDefects: [
            "Sink marks",
            "Voids",
            "Warpage",
            "Dimensional variation",
            "Out-of-tolerance parts"
        ],

        technicianNotes: [
            "Part weight can help monitor packing and shrinkage",
            "Gate freeze affects how long packing pressure works",
            "Cooling balance is critical",
            "Do not fix shrinkage problems blindly with pressure alone"
        ]
    },

    regrind: {
        title: "Regrind",

        description:
            "Regrind is recycled plastic material made from runners, sprues, scrap parts, or rejected material.",

        mainIdeas: [
            "Can reduce material waste",
            "Can lower production cost",
            "Must be controlled carefully",
            "Too much regrind can reduce consistency"
        ],

        processingBehavior: [
            "Regrind may have different flow behavior",
            "Regrind can contain dust or fines",
            "Repeated heat history can degrade material",
            "Inconsistent regrind ratio can affect dimensions"
        ],

        commonDefects: [
            "Black specks",
            "Brittleness",
            "Color variation",
            "Splay",
            "Dimensional variation"
        ],

        technicianNotes: [
            "Keep regrind clean and dry",
            "Use consistent regrind percentages",
            "Do not mix incompatible materials",
            "Watch for degraded or overheated regrind"
        ]
    },

    fillers: {
        title: "Fillers & Additives",

        description:
            "Fillers and additives are mixed into resin to change material properties such as strength, stiffness, color, UV resistance, or flame resistance.",

        mainIdeas: [
            "Glass fiber improves stiffness and strength",
            "Mineral fillers can reduce shrinkage",
            "UV stabilizers improve outdoor performance",
            "Flame retardants improve fire resistance"
        ],

        processingBehavior: [
            "Filled materials can be more abrasive",
            "Glass-filled materials can wear screws and barrels",
            "Fiber orientation can affect warpage",
            "Additives may change flow and temperature sensitivity"
        ],

        commonDefects: [
            "Warping from fiber orientation",
            "Surface streaks",
            "Screw and barrel wear",
            "Brittleness",
            "Poor appearance"
        ],

        technicianNotes: [
            "Filled materials may require different mold temperatures",
            "Glass-filled materials can damage tooling over time",
            "Fiber orientation often follows flow direction",
            "Processing changes can affect part strength"
        ]
    },

    colorants: {
        title: "Colorants",

        description:
            "Colorants are added to resin using masterbatch, liquid color, or pre-colored material to achieve the required part color.",

        mainIdeas: [
            "Color must be mixed consistently",
            "Color loading ratio matters",
            "Some colorants affect material properties",
            "Color changes require good purging"
        ],

        processingBehavior: [
            "Poor mixing can cause streaks",
            "Incorrect letdown ratio can cause color variation",
            "Some pigments are heat sensitive",
            "Colorant carrier resin must be compatible"
        ],

        commonDefects: [
            "Color streaking",
            "Color variation",
            "Black specks",
            "Material contamination",
            "Weak parts from incompatible carrier"
        ],

        technicianNotes: [
            "Check color feeder settings",
            "Verify colorant compatibility",
            "Purge thoroughly during color changes",
            "Watch for streaking when back pressure is too low"
        ]
    },

    contamination: {
        title: "Material Contamination",

        description:
            "Contamination occurs when foreign material, wrong resin, dirt, dust, metal, moisture, or degraded plastic enters the process.",

        mainIdeas: [
            "Can come from hoppers, loaders, grinders, bags, or barrels",
            "Can cause cosmetic and structural defects",
            "Can damage screws, barrels, and molds",
            "Can be difficult to diagnose if intermittent"
        ],

        processingBehavior: [
            "Contaminants may burn or streak",
            "Wrong resin may not melt correctly",
            "Dust and fines may degrade faster",
            "Metal contamination can damage equipment"
        ],

        commonDefects: [
            "Black specks",
            "Delamination",
            "Brittleness",
            "Color streaks",
            "Weak parts"
        ],

        technicianNotes: [
            "Verify material labels before loading",
            "Clean hoppers and loaders during material changes",
            "Keep gaylords and bags covered",
            "Investigate contamination immediately"
        ]
    },

    residence: {
        title: "Residence Time",

        description:
            "Residence time is how long plastic remains heated inside the barrel before being injected.",

        mainIdeas: [
            "Long residence time can degrade material",
            "Short residence time can cause poor melting",
            "Barrel capacity and shot size affect residence time",
            "Heat-sensitive materials need careful control"
        ],

        processingBehavior: [
            "Small shot size in a large barrel can increase residence time",
            "Downtime with heat on can degrade resin",
            "High temperatures accelerate degradation",
            "Purging may be needed after long delays"
        ],

        commonDefects: [
            "Burn marks",
            "Black specks",
            "Brittleness",
            "Discoloration",
            "Material degradation"
        ],

        technicianNotes: [
            "Purge before restarting after long downtime",
            "Lower heats if machine will sit idle when appropriate",
            "Watch for degraded smell or discoloration",
            "Match barrel size to shot size when possible"
        ]
    }

};

function showMaterial(topic) {

    const materialBox =
        document.getElementById("materialBox");

    const material =
        materialData[topic];

    if (!material) {

        materialBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This material topic has not been added yet.
            </p>

        `;

        return;
    }

    materialBox.innerHTML = `

        <h3>${material.title}</h3>

        <p>
            ${material.description}
        </p>

        <h4>Main Ideas</h4>
        ${createMaterialList(material.mainIdeas)}

        <h4>Processing Behavior</h4>
        ${createMaterialList(material.processingBehavior)}

        <h4>Common Defects</h4>
        ${createMaterialList(material.commonDefects)}

        <h4>Technician Notes</h4>
        ${createMaterialList(material.technicianNotes)}

    `;
}

function createMaterialList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;
}