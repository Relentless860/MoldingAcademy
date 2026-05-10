const resinData = {

    overview: {
        title: "Material Overview",

        description:
            "Injection molding materials are selected based on strength, flexibility, heat resistance, chemical resistance, appearance, shrinkage, cost, and processing behavior. A technician should understand how each material behaves before adjusting the process.",

        mainIdeas: [
            "Different resins process very differently",
            "Material choice affects shrinkage, warpage, strength, appearance, and cycle time",
            "Some materials absorb moisture and must be dried",
            "Additives can change color, strength, flame rating, UV resistance, flexibility, and processing",
            "Wrong material or contamination can create major quality problems"
        ],

        commonUses: [
            "Consumer products",
            "Medical components",
            "Automotive parts",
            "Electrical housings",
            "Packaging",
            "Industrial components",
            "Precision mechanical parts"
        ],

        processingNotes: [
            "Always verify material grade, lot, colorant, and drying requirements",
            "Watch for contamination when switching materials",
            "Use the approved process sheet whenever available",
            "Different materials require different melt and mold temperatures",
            "Material changes can affect fill pressure, cushion, part weight, and dimensions"
        ],

        commonProblems: [
            "Wrong material loaded",
            "Wet material",
            "Excessive regrind",
            "Color contamination",
            "Burning or degradation",
            "Unexpected shrinkage",
            "Brittle parts"
        ],

        technicianTips: [
            "Read the material label before loading resin",
            "Confirm dryer settings before startup",
            "Watch first shots closely after material or color change",
            "Never assume two grades of the same resin process the same",
            "Document material lot or supplier changes when quality shifts"
        ]
    },

    commodity: {
        title: "Commodity Resins",

        description:
            "Commodity resins are lower-cost, high-volume plastics used in everyday products. They are usually easier to process than high-performance materials but may have lower heat and strength capability.",

        mainIdeas: [
            "Usually lower cost",
            "Used in high-volume applications",
            "Common examples include PE, PP, PS, and PVC",
            "Often used for packaging, containers, caps, lids, toys, and consumer goods",
            "Generally less heat resistant than engineering resins"
        ],

        commonUses: [
            "Bottles",
            "Containers",
            "Caps and closures",
            "Household goods",
            "Packaging",
            "Disposable products",
            "Basic consumer parts"
        ],

        processingNotes: [
            "Usually process at lower temperatures than engineering resins",
            "Often have forgiving flow behavior",
            "Shrinkage can be significant, especially with PE and PP",
            "Material handling and contamination still matter",
            "Some grades may be very flexible while others are rigid"
        ],

        commonProblems: [
            "Warpage",
            "Sink marks",
            "Dimensional variation",
            "Poor stiffness",
            "Color streaking",
            "Flash from easy-flowing grades"
        ],

        technicianTips: [
            "Watch shrinkage closely on PE and PP",
            "Do not underestimate drying or contamination requirements",
            "Check part weight if dimensions drift",
            "Keep colorant mixing consistent",
            "Verify grade because commodity resin families have many variations"
        ]
    },

    engineering: {
        title: "Engineering Resins",

        description:
            "Engineering resins are used when stronger mechanical performance, heat resistance, dimensional stability, wear resistance, or chemical resistance is needed.",

        mainIdeas: [
            "Higher performance than commodity resins",
            "Common examples include PC, Nylon, POM, PBT, PET, and ABS blends",
            "Often require better drying and tighter process control",
            "Used in automotive, electrical, medical, and mechanical components",
            "Can be reinforced with glass or mineral fillers"
        ],

        commonUses: [
            "Gears",
            "Clips",
            "Housings",
            "Electrical connectors",
            "Automotive components",
            "Medical devices",
            "Precision parts"
        ],

        processingNotes: [
            "Drying is often critical",
            "Melt temperature control is important",
            "Some materials are shear sensitive",
            "Some materials require hot molds",
            "Filled grades can wear screws, barrels, and molds"
        ],

        commonProblems: [
            "Splay from moisture",
            "Brittleness",
            "Warping",
            "Dimensional drift",
            "Burning",
            "Glass fiber exposure",
            "Mold wear"
        ],

        technicianTips: [
            "Always check the drying requirement",
            "Verify actual dryer temperature and time",
            "Watch for moisture-related defects",
            "Use approved barrel and mold temperatures",
            "Treat filled engineering resins as more abrasive"
        ]
    },

    performance: {
        title: "High-Performance Resins",

        description:
            "High-performance resins are used for demanding applications requiring high heat resistance, chemical resistance, strength, flame resistance, or dimensional stability.",

        mainIdeas: [
            "Higher cost than commodity and standard engineering resins",
            "Examples include PPS, PEEK, PEI, PSU, PES, and LCP",
            "Often require high processing temperatures",
            "May require special tooling, screws, heaters, and safety controls",
            "Often used in aerospace, medical, electronics, and high-temperature applications"
        ],

        commonUses: [
            "Electrical components",
            "Aerospace parts",
            "Medical instruments",
            "High-temperature components",
            "Chemical-resistant parts",
            "Precision connectors",
            "Pump and valve components"
        ],

        processingNotes: [
            "High barrel temperatures may be required",
            "Mold temperature may also be high",
            "Material drying is often critical",
            "Residence time must be controlled",
            "Purging must be planned carefully"
        ],

        commonProblems: [
            "Material degradation",
            "Black specks",
            "Short shots",
            "Burning",
            "Tooling temperature issues",
            "Difficult purging",
            "High processing pressure"
        ],

        technicianTips: [
            "Respect the approved process window",
            "Use proper PPE around high-temperature equipment",
            "Watch residence time",
            "Avoid unnecessary machine stoppages with material sitting hot",
            "Follow shutdown and purge procedures closely"
        ]
    },

    pe: {
        title: "Polyethylene PE",

        description:
            "Polyethylene is a common commodity resin known for chemical resistance, toughness, flexibility, low moisture absorption, and good impact performance. Major types include LDPE, LLDPE, HDPE, and UHMWPE.",

        mainIdeas: [
            "Good chemical resistance",
            "Low moisture absorption",
            "Can be flexible or rigid depending on grade",
            "Higher shrinkage than many amorphous materials",
            "Common in packaging and containers"
        ],

        commonUses: [
            "Caps",
            "Containers",
            "Bottles",
            "Toys",
            "Flexible parts",
            "Household goods",
            "Industrial liners"
        ],

        processingNotes: [
            "Usually does not require drying",
            "Shrinkage can be high",
            "Mold temperature affects shrinkage and warpage",
            "Easy-flowing grades may flash",
            "Cooling balance is important"
        ],

        commonProblems: [
            "Warpage",
            "Shrinkage variation",
            "Flash",
            "Sink marks",
            "Dimensional changes",
            "Poor stiffness in flexible grades"
        ],

        technicianTips: [
            "Watch dimensions as the mold stabilizes",
            "Control cooling carefully",
            "Check clamp force if flash appears",
            "Use part weight to monitor consistency",
            "Verify grade because PE types behave differently"
        ]
    },

    pp: {
        title: "Polypropylene PP",

        description:
            "Polypropylene is a lightweight, chemical-resistant commodity resin with good fatigue resistance. It is commonly used for living hinges, caps, containers, automotive parts, and consumer products.",

        mainIdeas: [
            "Lightweight material",
            "Good chemical resistance",
            "Good living hinge performance",
            "Semi-crystalline with noticeable shrinkage",
            "Can warp if cooling is uneven"
        ],

        commonUses: [
            "Living hinges",
            "Caps and closures",
            "Food containers",
            "Automotive trim",
            "Medical disposables",
            "Household products",
            "Appliance components"
        ],

        processingNotes: [
            "Usually does not require drying",
            "Shrinkage can be significant",
            "Mold temperature and cooling balance matter",
            "Nucleated grades may cool faster",
            "Glass-filled PP is stiffer but more abrasive"
        ],

        commonProblems: [
            "Warping",
            "Sink marks",
            "Shrinkage variation",
            "Flash",
            "Poor paint or adhesive bonding",
            "Flow lines"
        ],

        technicianTips: [
            "Pay close attention to cooling balance",
            "Check part flatness after ejection",
            "Watch gate freeze and pack settings",
            "Verify whether the grade is filled, unfilled, or nucleated",
            "Do not chase PP warpage without checking water flow"
        ]
    },

    ps: {
        title: "Polystyrene PS",

        description:
            "Polystyrene is an amorphous commodity resin known for stiffness, clarity in general-purpose grades, and easy molding. High-impact polystyrene, or HIPS, adds rubber modification for better toughness.",

        mainIdeas: [
            "Amorphous material",
            "Good dimensional stability",
            "Can be clear or opaque depending on grade",
            "General-purpose PS is brittle",
            "HIPS has improved impact strength"
        ],

        commonUses: [
            "Disposable products",
            "Packaging",
            "Cups",
            "Containers",
            "Housings",
            "Toys",
            "Display parts"
        ],

        processingNotes: [
            "Usually molds easily",
            "Drying may be needed if moisture is present",
            "Can be brittle if stressed",
            "Avoid excessive shear or overheating",
            "Mold temperature affects appearance"
        ],

        commonProblems: [
            "Brittleness",
            "Cracking",
            "Splay if moisture or contamination exists",
            "Burn marks",
            "Flow marks",
            "Stress whitening"
        ],

        technicianTips: [
            "Watch for cracking around gates or sharp corners",
            "Avoid excessive packing",
            "Check for trapped gas if burns appear",
            "Keep material clean",
            "Confirm whether the grade is GPPS or HIPS"
        ]
    },

    abs: {
        title: "ABS",

        description:
            "ABS is an engineering/commodity bridge material known for toughness, impact resistance, good appearance, and dimensional stability. It is widely used in housings, covers, automotive trim, and consumer products.",

        mainIdeas: [
            "Good impact resistance",
            "Good surface appearance",
            "Moderate heat resistance",
            "Can be plated, painted, or textured",
            "Usually needs proper drying"
        ],

        commonUses: [
            "Electronic housings",
            "Automotive trim",
            "Appliance parts",
            "Consumer products",
            "Covers",
            "Handles",
            "Toys"
        ],

        processingNotes: [
            "Drying is often recommended",
            "Can show splay if wet",
            "Overheating can cause discoloration or degradation",
            "Mold temperature affects gloss",
            "Gate location affects appearance"
        ],

        commonProblems: [
            "Splay",
            "Burn marks",
            "Gloss variation",
            "Color streaks",
            "Sink marks",
            "Weld lines",
            "Brittleness from degradation"
        ],

        technicianTips: [
            "Verify dryer settings",
            "Watch for moisture streaks",
            "Control melt temperature to avoid burning",
            "Use stable packing to control sinks",
            "Compare appearance to approved sample"
        ]
    },

    pvc: {
        title: "PVC",

        description:
            "PVC can be rigid or flexible depending on additives. It has good chemical resistance and flame resistance, but it is heat sensitive and can degrade if overheated.",

        mainIdeas: [
            "Can be rigid or flexible",
            "Good chemical resistance",
            "Naturally flame resistant compared with many plastics",
            "Heat sensitive",
            "Can release corrosive gases if degraded"
        ],

        commonUses: [
            "Pipe fittings",
            "Electrical parts",
            "Medical tubing",
            "Flexible components",
            "Profiles",
            "Housings",
            "Seals"
        ],

        processingNotes: [
            "Requires careful temperature control",
            "Avoid excessive residence time",
            "Do not overheat",
            "Proper screw and barrel condition matter",
            "Shutdown and purging procedures are important"
        ],

        commonProblems: [
            "Burning",
            "Discoloration",
            "Black specks",
            "Corrosion risk",
            "Poor flow if too cold",
            "Degradation from long residence time"
        ],

        technicianTips: [
            "Follow approved temperatures closely",
            "Avoid long stops with PVC sitting hot",
            "Purge correctly during shutdown",
            "Report burning or strong odor immediately",
            "Do not treat PVC like standard commodity resin"
        ]
    },

    pmma: {
        title: "Acrylic PMMA",

        description:
            "PMMA, commonly called acrylic, is an amorphous material known for excellent clarity, gloss, weather resistance, and stiffness. It is more brittle than PC.",

        mainIdeas: [
            "Excellent optical clarity",
            "Good weather resistance",
            "High gloss",
            "More brittle than polycarbonate",
            "Surface quality is very important"
        ],

        commonUses: [
            "Lenses",
            "Light pipes",
            "Display parts",
            "Clear covers",
            "Medical components",
            "Cosmetic packaging",
            "Automotive lighting"
        ],

        processingNotes: [
            "Drying is important",
            "Mold surface finish affects appearance",
            "Avoid contamination",
            "Gate design affects flow marks",
            "Careful handling prevents scratches"
        ],

        commonProblems: [
            "Splay",
            "Bubbles",
            "Scratches",
            "Flow lines",
            "Cracking",
            "Brittleness",
            "Poor clarity"
        ],

        technicianTips: [
            "Keep material and hopper clean",
            "Verify drying before molding",
            "Handle parts carefully",
            "Avoid excessive shear",
            "Inspect clarity under good lighting"
        ]
    },

    pc: {
        title: "Polycarbonate PC",

        description:
            "Polycarbonate is an amorphous engineering resin known for impact strength, clarity, toughness, and heat resistance. It is moisture sensitive and must be dried correctly.",

        mainIdeas: [
            "Very high impact resistance",
            "Can be transparent",
            "Good heat resistance",
            "Moisture sensitive",
            "Can be stress sensitive"
        ],

        commonUses: [
            "Lenses",
            "Medical parts",
            "Electrical housings",
            "Safety components",
            "Automotive lighting",
            "Clear covers",
            "Industrial guards"
        ],

        processingNotes: [
            "Drying is critical",
            "Melt temperature must be controlled",
            "High viscosity may require higher pressure",
            "Mold temperature affects stress and appearance",
            "Avoid excessive residence time"
        ],

        commonProblems: [
            "Splay",
            "Bubbles",
            "Brittleness",
            "Stress cracking",
            "Burn marks",
            "Short shots",
            "High molded-in stress"
        ],

        technicianTips: [
            "Never skip drying PC",
            "Watch for moisture streaks and bubbles",
            "Use approved melt and mold temperatures",
            "Avoid overpacking",
            "Check for stress cracking if parts are exposed to chemicals"
        ]
    },

    nylon: {
        title: "Nylon / Polyamide PA",

        description:
            "Nylon is a semi-crystalline engineering resin known for strength, toughness, wear resistance, and chemical resistance. Common types include PA6, PA66, PA12, and glass-filled nylon.",

        mainIdeas: [
            "Strong and tough",
            "Good wear resistance",
            "Absorbs moisture",
            "Semi-crystalline with shrinkage",
            "Often reinforced with glass fiber"
        ],

        commonUses: [
            "Gears",
            "Bearings",
            "Clips",
            "Automotive parts",
            "Electrical connectors",
            "Cable ties",
            "Mechanical components"
        ],

        processingNotes: [
            "Drying is critical",
            "Moisture affects appearance and mechanical properties",
            "Mold temperature affects crystallinity and shrinkage",
            "Glass-filled nylon can be abrasive",
            "Parts may absorb moisture after molding"
        ],

        commonProblems: [
            "Splay",
            "Bubbles",
            "Weak parts",
            "Warpage",
            "Dimensional changes",
            "Glass fiber exposure",
            "Burning if overheated"
        ],

        technicianTips: [
            "Verify drying time and temperature",
            "Watch moisture-related defects closely",
            "Control mold temperature",
            "Inspect glass-filled parts for fiber appearance",
            "Remember nylon dimensions can change with moisture absorption"
        ]
    },

    acetal: {
        title: "Acetal / POM",

        description:
            "Acetal, also called POM, is an engineering resin known for stiffness, low friction, wear resistance, and dimensional stability. It is commonly used for gears and precision mechanical parts.",

        mainIdeas: [
            "Good wear resistance",
            "Low friction",
            "Good dimensional stability",
            "Good fatigue resistance",
            "Can degrade if overheated"
        ],

        commonUses: [
            "Gears",
            "Bushings",
            "Bearings",
            "Clips",
            "Precision parts",
            "Pump components",
            "Mechanical linkages"
        ],

        processingNotes: [
            "Temperature control is important",
            "Avoid excessive residence time",
            "Material can release irritating fumes if degraded",
            "Usually does not need heavy drying but should be kept clean and dry",
            "Shrinkage must be considered"
        ],

        commonProblems: [
            "Burning",
            "Odor from degradation",
            "Warpage",
            "Voids",
            "Sink marks",
            "Dimensional variation",
            "Black specks"
        ],

        technicianTips: [
            "Do not overheat acetal",
            "Avoid long machine stops with material sitting hot",
            "Follow purge procedures",
            "Watch part dimensions closely",
            "Report strong odor or degradation signs"
        ]
    },

    pbtpet: {
        title: "PBT / PET",

        description:
            "PBT and PET are polyester engineering resins known for strength, chemical resistance, dimensional stability, and electrical properties. They are often used in connectors and automotive parts.",

        mainIdeas: [
            "Engineering polyester materials",
            "Good electrical properties",
            "Good chemical resistance",
            "Often glass-filled",
            "Drying is very important"
        ],

        commonUses: [
            "Electrical connectors",
            "Automotive parts",
            "Sensor housings",
            "Switches",
            "Appliance components",
            "Precision housings",
            "Under-hood components"
        ],

        processingNotes: [
            "Drying is critical",
            "Moisture can break down the polymer",
            "Mold temperature affects crystallinity",
            "Glass-filled grades are abrasive",
            "Proper packing helps control dimensions"
        ],

        commonProblems: [
            "Splay",
            "Brittleness",
            "Short shots",
            "Warping",
            "Glass fiber exposure",
            "Dimensional variation",
            "Weak parts from moisture degradation"
        ],

        technicianTips: [
            "Verify dryer operation before startup",
            "Check dew point if available",
            "Watch for brittle parts",
            "Control mold temperature",
            "Be careful with glass-filled grades"
        ]
    },

    tpe: {
        title: "TPE / TPU",

        description:
            "TPE and TPU materials behave like rubber but process like thermoplastics. They are used for flexible grips, seals, soft-touch surfaces, tubing, and overmolded parts.",

        mainIdeas: [
            "Flexible rubber-like materials",
            "Can be molded with standard thermoplastic equipment",
            "Used for soft-touch and sealing applications",
            "Some grades bond to rigid plastics during overmolding",
            "TPU often requires drying"
        ],

        commonUses: [
            "Grips",
            "Seals",
            "Gaskets",
            "Soft-touch handles",
            "Overmolded parts",
            "Tubing",
            "Flexible boots"
        ],

        processingNotes: [
            "Drying depends on grade and is often needed for TPU",
            "Material can be shear sensitive",
            "Ventilation helps avoid trapped air",
            "Overmolding requires compatible materials",
            "Demolding can be difficult for soft parts"
        ],

        commonProblems: [
            "Sticking",
            "Flash",
            "Splay",
            "Poor bonding in overmolding",
            "Bubbles",
            "Short shots",
            "Part deformation"
        ],

        technicianTips: [
            "Verify drying requirements",
            "Watch for flash on soft materials",
            "Check part release carefully",
            "Confirm overmold bond strength if applicable",
            "Avoid excessive injection speed if shear defects appear"
        ]
    },

    pps: {
        title: "PPS",

        description:
            "PPS is a high-performance resin known for high temperature resistance, chemical resistance, dimensional stability, and flame resistance. It is often glass-filled.",

        mainIdeas: [
            "High heat resistance",
            "Excellent chemical resistance",
            "Good dimensional stability",
            "Often glass or mineral filled",
            "Used in demanding applications"
        ],

        commonUses: [
            "Automotive under-hood parts",
            "Electrical components",
            "Pump components",
            "Connectors",
            "Chemical-resistant parts",
            "Industrial parts",
            "High-temperature housings"
        ],

        processingNotes: [
            "Drying may be required depending on grade and handling",
            "High mold temperatures may be used",
            "Filled grades are abrasive",
            "Venting is important",
            "Process should be stable and controlled"
        ],

        commonProblems: [
            "Flash",
            "Short shots",
            "Burning",
            "Glass fiber exposure",
            "Tool wear",
            "Dimensional variation",
            "Brittleness if mishandled"
        ],

        technicianTips: [
            "Use proper process settings",
            "Watch for mold wear with filled grades",
            "Check vents if burns appear",
            "Monitor part dimensions",
            "Follow material supplier and process sheet requirements"
        ]
    },

    peek: {
        title: "PEEK",

        description:
            "PEEK is a very high-performance resin with excellent heat resistance, chemical resistance, strength, and wear performance. It is expensive and requires high processing temperatures.",

        mainIdeas: [
            "Very high heat resistance",
            "Excellent chemical resistance",
            "High strength and wear resistance",
            "Expensive material",
            "Requires specialized processing discipline"
        ],

        commonUses: [
            "Medical implants and instruments",
            "Aerospace components",
            "High-performance bearings",
            "Pump and valve parts",
            "Electrical components",
            "Oil and gas components",
            "High-wear mechanical parts"
        ],

        processingNotes: [
            "Requires high barrel and mold temperatures",
            "Drying is important",
            "Residence time must be controlled",
            "Equipment must handle high temperatures",
            "Purging requires planning"
        ],

        commonProblems: [
            "Short shots",
            "High pressure demand",
            "Degradation",
            "Black specks",
            "Poor crystallinity control",
            "Difficult purging",
            "Part cost loss from scrap"
        ],

        technicianTips: [
            "Follow approved setup exactly",
            "Use proper safety practices around high heat",
            "Avoid unnecessary scrap",
            "Do not leave material sitting hot longer than needed",
            "Escalate process instability quickly"
        ]
    },

    lcp: {
        title: "LCP",

        description:
            "Liquid Crystal Polymer, or LCP, is a high-performance resin known for excellent flow in thin walls, high heat resistance, dimensional stability, and very low shrinkage in the flow direction.",

        mainIdeas: [
            "Excellent thin-wall flow",
            "High heat resistance",
            "Low shrinkage in flow direction",
            "Anisotropic shrinkage can cause directional behavior",
            "Often used in precision electronics"
        ],

        commonUses: [
            "Electrical connectors",
            "Thin-wall components",
            "Precision electronics",
            "High-temperature parts",
            "Small technical parts",
            "Switches",
            "Micro-molded components"
        ],

        processingNotes: [
            "Flows easily in thin sections",
            "Venting and gate design are important",
            "Material orientation affects properties",
            "Drying may be required",
            "Small process changes can affect precision parts"
        ],

        commonProblems: [
            "Flash",
            "Weak weld lines",
            "Directional warpage",
            "Short shots in poor venting conditions",
            "Brittle areas",
            "Dimensional variation"
        ],

        technicianTips: [
            "Watch flash carefully",
            "Use precise process control",
            "Check small features closely",
            "Monitor weld line areas",
            "Do not assume low shrink means no warpage risk"
        ]
    },

    additives: {
        title: "Additives Overview",

        description:
            "Additives are materials blended into resin to change performance, appearance, processing, cost, safety, or durability. They can improve the part but may also change processing behavior.",

        mainIdeas: [
            "Additives modify resin properties",
            "They may improve strength, color, UV resistance, flame resistance, flow, or flexibility",
            "Too much additive can create defects",
            "Additives must be mixed consistently",
            "Some additives change shrinkage, viscosity, and surface finish"
        ],

        commonUses: [
            "Color matching",
            "Glass-filled strength improvement",
            "Flame-retardant parts",
            "UV-resistant outdoor parts",
            "Impact-modified parts",
            "Lower-cost filled materials",
            "Static-control parts"
        ],

        processingNotes: [
            "Additives can change viscosity",
            "Filled materials may require different pressures",
            "Some additives are heat sensitive",
            "Colorant dispersion affects appearance",
            "Additives may increase screw, barrel, and mold wear"
        ],

        commonProblems: [
            "Poor mixing",
            "Color streaks",
            "Brittleness",
            "Surface defects",
            "Plate-out",
            "Dimensional changes",
            "Inconsistent properties"
        ],

        technicianTips: [
            "Verify additive or colorant ratio",
            "Watch material loading carefully",
            "Do not mix unapproved additives",
            "Look for streaking or poor dispersion",
            "Document additive changes"
        ]
    },

    glassfiber: {
        title: "Glass Fiber",

        description:
            "Glass fiber is added to plastics to increase stiffness, strength, heat resistance, and dimensional stability. Glass-filled materials are common in engineering resins.",

        mainIdeas: [
            "Increases stiffness and strength",
            "Reduces shrinkage in many cases",
            "Can improve heat deflection temperature",
            "Can increase warpage due to fiber orientation",
            "Abrasive to screws, barrels, gates, and molds"
        ],

        commonUses: [
            "Automotive parts",
            "Electrical connectors",
            "Structural brackets",
            "Housings",
            "Gears",
            "Clips",
            "Under-hood components"
        ],

        processingNotes: [
            "Fiber orientation affects shrinkage and warpage",
            "High shear can break fibers",
            "Filled resin may require higher pressure",
            "Mold wear is increased",
            "Surface may show fiber exposure"
        ],

        commonProblems: [
            "Warpage from fiber orientation",
            "Glass streaks",
            "Rough surface",
            "Tool wear",
            "Screw wear",
            "Gate wear",
            "Higher pressure demand"
        ],

        technicianTips: [
            "Watch for directional warpage",
            "Inspect gates and high-wear areas",
            "Avoid unnecessary shear",
            "Check part surface for fiber exposure",
            "Do not compare glass-filled shrinkage to unfilled resin"
        ]
    },

    mineralfillers: {
        title: "Mineral Fillers",

        description:
            "Mineral fillers such as talc, calcium carbonate, mica, and clay are used to improve stiffness, reduce cost, control shrinkage, improve dimensional stability, or change appearance.",

        mainIdeas: [
            "Can increase stiffness",
            "Can reduce material cost",
            "Can reduce shrinkage",
            "May increase density",
            "May affect impact strength and surface appearance"
        ],

        commonUses: [
            "Automotive trim",
            "Appliance parts",
            "Consumer products",
            "Housings",
            "Containers",
            "Structural covers",
            "Cost-reduced parts"
        ],

        processingNotes: [
            "Filled materials may flow differently",
            "Abrasion can increase depending on filler",
            "Part weight may increase",
            "Shrinkage may be lower than unfilled resin",
            "Surface finish can change"
        ],

        commonProblems: [
            "Brittleness",
            "Surface dullness",
            "Flow marks",
            "Poor impact strength",
            "Tool wear",
            "Dimensional changes",
            "Inconsistent filler dispersion"
        ],

        technicianTips: [
            "Verify filled versus unfilled grade",
            "Monitor part weight",
            "Watch for surface appearance changes",
            "Check dimensions after material changes",
            "Do not assume lower shrinkage means no warpage"
        ]
    },

    colorants: {
        title: "Colorants",

        description:
            "Colorants are added to resin as masterbatch, liquid color, dry color, or pre-colored resin. They control part color but can also affect processing and quality.",

        mainIdeas: [
            "Colorant must be mixed consistently",
            "Masterbatch is common in molding",
            "Liquid color requires accurate dosing",
            "Pre-colored resin provides consistency but may cost more",
            "Color changes require careful purging"
        ],

        commonUses: [
            "Brand color matching",
            "Cosmetic parts",
            "Medical color coding",
            "Automotive interiors",
            "Consumer products",
            "Safety color identification",
            "Opaque or translucent parts"
        ],

        processingNotes: [
            "Colorant ratio must be controlled",
            "Poor mixing causes streaks",
            "Some pigments affect shrinkage or properties",
            "Color changes may require extra purge",
            "Transparent colors show contamination easily"
        ],

        commonProblems: [
            "Color streaking",
            "Wrong color",
            "Specks",
            "Poor dispersion",
            "Color contamination",
            "Blotchy appearance",
            "Weak properties from too much carrier"
        ],

        technicianTips: [
            "Verify correct colorant and ratio",
            "Check feeder settings",
            "Purge thoroughly during color changes",
            "Compare first shots to approved color sample",
            "Keep colorant containers covered and labeled"
        ]
    },

    flameretardants: {
        title: "Flame Retardants",

        description:
            "Flame retardants are additives used to reduce flammability or help parts meet flame rating requirements. They are common in electrical and electronic components.",

        mainIdeas: [
            "Improve flame resistance",
            "Used for safety and compliance",
            "Can affect mechanical properties",
            "Can affect color and surface finish",
            "Some are heat sensitive"
        ],

        commonUses: [
            "Electrical housings",
            "Connectors",
            "Switches",
            "Appliance parts",
            "Electronic enclosures",
            "Battery components",
            "Industrial controls"
        ],

        processingNotes: [
            "Avoid overheating",
            "Residence time should be controlled",
            "Some grades may be corrosive or sensitive",
            "Drying may be required depending on base resin",
            "Color matching can be harder"
        ],

        commonProblems: [
            "Burning",
            "Discoloration",
            "Brittleness",
            "Plate-out",
            "Poor surface finish",
            "Gas or venting issues",
            "Reduced impact strength"
        ],

        technicianTips: [
            "Follow temperature limits closely",
            "Watch for discoloration",
            "Check vents if burns appear",
            "Do not mix flame-retardant and non-flame-retardant grades",
            "Keep material traceability accurate"
        ]
    },

    uvheat: {
        title: "UV & Heat Stabilizers",

        description:
            "UV and heat stabilizers help protect plastics from sunlight, heat aging, oxidation, discoloration, brittleness, and long-term property loss.",

        mainIdeas: [
            "UV stabilizers help outdoor parts resist sunlight damage",
            "Heat stabilizers protect against thermal aging",
            "Antioxidants help reduce oxidation",
            "Stabilizers improve long-term durability",
            "Additive package depends on application"
        ],

        commonUses: [
            "Outdoor products",
            "Automotive exterior parts",
            "Lawn and garden parts",
            "Electrical components",
            "Appliance parts",
            "Lighting components",
            "Heat-exposed housings"
        ],

        processingNotes: [
            "Excessive heat can still degrade material",
            "Stabilizers do not fix bad processing",
            "Color can change if material is overheated",
            "Material lot and grade matter",
            "Regrind may reduce long-term performance if uncontrolled"
        ],

        commonProblems: [
            "Discoloration",
            "Brittleness",
            "Surface chalking",
            "Cracking",
            "Loss of impact strength",
            "Burning from high residence time",
            "Inconsistent outdoor performance"
        ],

        technicianTips: [
            "Avoid overheating stabilized materials",
            "Control regrind levels",
            "Verify correct outdoor-rated grade",
            "Watch for discoloration during startup",
            "Document material changes for outdoor parts"
        ]
    },

    impact: {
        title: "Impact Modifiers",

        description:
            "Impact modifiers are additives used to improve toughness and reduce brittleness. They are common in brittle materials or parts that must survive drops, clips, snaps, or impact loads.",

        mainIdeas: [
            "Improve toughness",
            "Reduce cracking",
            "Can lower stiffness",
            "May change flow behavior",
            "Often used in blends and modified grades"
        ],

        commonUses: [
            "Housings",
            "Clips",
            "Snap-fit parts",
            "Automotive parts",
            "Consumer products",
            "Appliance parts",
            "Drop-resistant parts"
        ],

        processingNotes: [
            "Overheating can damage impact performance",
            "Poor mixing can create inconsistent toughness",
            "Material grade must match the requirement",
            "Cold molds may increase molded-in stress",
            "Excessive regrind may reduce impact strength"
        ],

        commonProblems: [
            "Brittle parts",
            "Cracking at snap fits",
            "Stress whitening",
            "Poor weld line strength",
            "Surface defects",
            "Inconsistent impact test results"
        ],

        technicianTips: [
            "Do not judge impact strength by appearance only",
            "Watch weld line areas",
            "Control regrind",
            "Avoid over-drying or overheating if not recommended",
            "Report brittle failures immediately"
        ]
    },

    lubricants: {
        title: "Lubricants / Mold Release",

        description:
            "Lubricants and internal mold release additives improve flow, reduce friction, help ejection, and improve processing. External mold release sprays should be controlled carefully.",

        mainIdeas: [
            "Can improve flow and release",
            "Can reduce sticking",
            "Can affect surface finish",
            "Too much can cause contamination or bonding issues",
            "External sprays can create quality problems"
        ],

        commonUses: [
            "Difficult ejection parts",
            "High-friction materials",
            "Thin-wall parts",
            "Cosmetic parts requiring controlled release",
            "Overmolding applications with caution",
            "Parts needing lower processing friction"
        ],

        processingNotes: [
            "Internal additives are blended into resin",
            "External mold release is sprayed on tooling",
            "Too much release can affect painting, printing, or bonding",
            "Plate-out can build up on mold surfaces",
            "Use only approved release products"
        ],

        commonProblems: [
            "Surface contamination",
            "Poor paint adhesion",
            "Poor bonding",
            "Plate-out",
            "Gloss variation",
            "Splay-like marks",
            "Dirty mold surfaces"
        ],

        technicianTips: [
            "Do not overuse mold release spray",
            "Clean mold surfaces if buildup appears",
            "Check whether parts are painted, printed, bonded, or welded later",
            "Use process correction before relying on spray",
            "Document repeated sticking problems"
        ]
    },

    plasticizers: {
        title: "Plasticizers",

        description:
            "Plasticizers are additives that make certain plastics softer and more flexible. They are commonly associated with flexible PVC and some specialty compounds.",

        mainIdeas: [
            "Increase flexibility",
            "Lower hardness",
            "Can improve softness and bendability",
            "May affect migration, odor, and long-term performance",
            "Used heavily in flexible compounds"
        ],

        commonUses: [
            "Flexible PVC parts",
            "Tubing",
            "Gaskets",
            "Seals",
            "Soft grips",
            "Flexible medical components",
            "Cable insulation"
        ],

        processingNotes: [
            "Compound formulation matters",
            "Plasticizer migration can affect surface feel",
            "Temperature control is important",
            "Soft materials may flash easily",
            "Parts may stick or deform during ejection"
        ],

        commonProblems: [
            "Flash",
            "Sticking",
            "Surface oiliness",
            "Dimensional change",
            "Poor hardness control",
            "Deformation after ejection",
            "Odor"
        ],

        technicianTips: [
            "Verify material hardness grade",
            "Watch flash on soft materials",
            "Check parts after cooling, not only at ejection",
            "Avoid excessive mold release",
            "Keep flexible compounds clean and labeled"
        ]
    },

    nucleating: {
        title: "Nucleating Agents",

        description:
            "Nucleating agents help semi-crystalline materials crystallize more quickly and uniformly. They can improve cycle time, stiffness, clarity in some materials, and dimensional control.",

        mainIdeas: [
            "Used mostly in semi-crystalline plastics",
            "Can speed crystallization",
            "Can reduce cycle time",
            "Can affect shrinkage and warpage",
            "Common in PP and some other crystalline materials"
        ],

        commonUses: [
            "Polypropylene parts",
            "Thin-wall packaging",
            "Clear or clarified PP",
            "Faster cycling parts",
            "Dimensionally controlled parts",
            "High-stiffness applications"
        ],

        processingNotes: [
            "Mold temperature still matters",
            "Cooling behavior changes",
            "Shrinkage may differ from non-nucleated grades",
            "Cycle time may be optimized",
            "Material grade must be verified"
        ],

        commonProblems: [
            "Unexpected shrinkage",
            "Warpage changes",
            "Appearance changes",
            "Dimensional shift after material change",
            "Different cycle requirements"
        ],

        technicianTips: [
            "Confirm if PP is nucleated or clarified",
            "Do not swap grades without approval",
            "Watch dimensions after material changes",
            "Check cooling time requirements",
            "Record process changes when switching grades"
        ]
    },

    antistatic: {
        title: "Antistatic Additives",

        description:
            "Antistatic additives reduce static buildup on plastic parts. They are useful when dust attraction, static discharge, or handling problems are concerns.",

        mainIdeas: [
            "Reduce static charge",
            "Help limit dust attraction",
            "Can improve handling",
            "Performance may depend on humidity",
            "Some additives can migrate to the surface"
        ],

        commonUses: [
            "Electronic packaging",
            "Medical packaging",
            "Dust-sensitive parts",
            "Conveyor-handled parts",
            "Film and packaging products",
            "Cleanroom-related components"
        ],

        processingNotes: [
            "Surface behavior matters",
            "Humidity can affect performance",
            "Additive may affect appearance",
            "Material formulation must match requirement",
            "Do not confuse antistatic with conductive"
        ],

        commonProblems: [
            "Dust attraction",
            "Static cling",
            "Parts sticking to conveyors",
            "Inconsistent static performance",
            "Surface haze",
            "Handling issues"
        ],

        technicianTips: [
            "Verify correct antistatic grade",
            "Watch handling and dust during production",
            "Do not substitute standard resin for antistatic material",
            "Check if the part has electronic requirements",
            "Report static-related packing or conveyor problems"
        ]
    },

    regrind: {
        title: "Regrind",

        description:
            "Regrind is previously molded or processed plastic that has been ground up and reused. It can reduce waste and cost, but it must be controlled carefully.",

        mainIdeas: [
            "Regrind has heat history",
            "Too much regrind can weaken parts",
            "Regrind can contain contamination",
            "Particle size and consistency matter",
            "Allowed percentage depends on the job"
        ],

        commonUses: [
            "Runner reuse",
            "Internal scrap recovery",
            "Cost reduction",
            "Non-critical parts",
            "Closed-loop production when approved"
        ],

        processingNotes: [
            "Regrind percentage must be controlled",
            "Drying may still be needed",
            "Dust or fines can cause feeding issues",
            "Color may shift",
            "Material properties can degrade with repeated heat history"
        ],

        commonProblems: [
            "Brittleness",
            "Color variation",
            "Black specks",
            "Contamination",
            "Feeding issues",
            "Dimensional variation",
            "Weak parts"
        ],

        technicianTips: [
            "Follow approved regrind percentage",
            "Keep regrind clean and labeled",
            "Do not mix unknown material",
            "Watch part color and brittleness",
            "Report excessive fines or contamination"
        ]
    },

    selection: {
        title: "Material Selection",

        description:
            "Material selection depends on what the finished part must do. A good resin choice balances performance, cost, processability, appearance, dimensional control, and long-term use conditions.",

        mainIdeas: [
            "Part function drives material selection",
            "Strength, flexibility, heat, chemicals, appearance, and cost all matter",
            "Processing difficulty must be considered",
            "Additives can improve one property while hurting another",
            "Material substitutions require approval"
        ],

        commonUses: [
            "Flexible parts need TPE, TPU, PVC, or flexible polyolefins",
            "Clear impact parts may use PC",
            "Clear rigid parts may use PMMA, PS, or PC",
            "Wear parts may use nylon, acetal, or PEEK",
            "Electrical parts may need flame-retardant materials",
            "Outdoor parts may need UV-stabilized grades"
        ],

        processingNotes: [
            "Drying requirement affects startup",
            "Shrinkage affects tooling and dimensions",
            "Melt viscosity affects pressure demand",
            "Mold temperature affects cycle and part quality",
            "Additives affect processing behavior"
        ],

        commonProblems: [
            "Wrong material for application",
            "Unapproved substitution",
            "Poor dimensional control",
            "Unexpected brittleness",
            "Chemical attack",
            "Poor heat resistance",
            "Appearance mismatch"
        ],

        technicianTips: [
            "Never substitute material without approval",
            "Read the full material grade, not just the resin family",
            "Check if the material is filled, flame retardant, UV stabilized, or impact modified",
            "Compare actual part performance to requirements",
            "Escalate when a material change causes process or quality drift"
        ]
    }

};

function showResin(topic) {

    const resinBox =
        document.getElementById("resinBox");

    const resinTopic =
        resinData[topic];

    if (!resinBox) {
        alert("resinBox was not found in the HTML file.");
        return;
    }

    if (!resinTopic) {

        resinBox.innerHTML = `

            <h3>Topic Not Found</h3>

            <p>
                This resin or additive topic has not been added yet.
            </p>

        `;

        return;
    }

    resinBox.innerHTML = `

        <h3>${resinTopic.title}</h3>

        <p>
            ${resinTopic.description}
        </p>

        <h4>Main Ideas</h4>
        ${createResinList(resinTopic.mainIdeas)}

        <h4>Common Uses</h4>
        ${createResinList(resinTopic.commonUses)}

        <h4>Processing Notes</h4>
        ${createResinList(resinTopic.processingNotes)}

        <h4>Common Problems</h4>
        ${createResinList(resinTopic.commonProblems)}

        <h4>Technician Tips</h4>
        ${createResinList(resinTopic.technicianTips)}

    `;

}

function createResinList(items) {

    return `

        <ul>

            ${items.map(item => `<li>${item}</li>`).join("")}

        </ul>

    `;

}