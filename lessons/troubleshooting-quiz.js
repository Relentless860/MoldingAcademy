function makeQuestion(question, answers, correct, explanation) {

    return {
        question: question,
        answers: answers,
        correct: correct,
        explanation: explanation
    };

}

const quizData = {

    machine: [

        makeQuestion(
            "What is the main purpose of the hopper?",
            [
                "To store and feed resin into the barrel",
                "To cool the mold",
                "To apply clamp tonnage",
                "To eject finished parts"
            ],
            "To store and feed resin into the barrel",
            "The hopper stores plastic pellets and feeds them into the feed throat of the barrel."
        ),

        makeQuestion(
            "Which component conveys, melts, mixes, meters, and injects plastic?",
            [
                "Screw",
                "Tie bar",
                "Platen",
                "Ejector plate"
            ],
            "Screw",
            "The screw rotates to prepare material and moves forward to inject the shot."
        ),

        makeQuestion(
            "What does the clamp unit do?",
            [
                "Keeps the mold closed during injection",
                "Dries the material",
                "Controls colorant ratio",
                "Removes moisture from resin"
            ],
            "Keeps the mold closed during injection",
            "Clamp force keeps the mold closed against injection pressure."
        ),

        makeQuestion(
            "What can too little clamp force cause?",
            [
                "Flash",
                "Better drying",
                "Lower moisture",
                "Nozzle freeze"
            ],
            "Flash",
            "Low clamp force can allow the mold to open slightly, creating flash."
        ),

        makeQuestion(
            "What is mold protection designed to prevent?",
            [
                "Mold damage during closing",
                "Material drying",
                "Color changes",
                "Shot size changes"
            ],
            "Mold damage during closing",
            "Mold protection helps detect obstructions before full clamp force is applied."
        ),

        makeQuestion(
            "What happens during pack and hold?",
            [
                "Material is packed into the part to compensate for shrinkage",
                "The mold opens",
                "The hopper dries resin",
                "The robot changes color"
            ],
            "Material is packed into the part to compensate for shrinkage",
            "Pack and hold pressure helps control sinks, shrinkage, and part weight."
        ),

        makeQuestion(
            "What is the purpose of the nozzle?",
            [
                "To transfer molten plastic from the barrel into the mold sprue or hot runner",
                "To cool the part",
                "To hold the mold closed",
                "To move the ejector pins"
            ],
            "To transfer molten plastic from the barrel into the mold sprue or hot runner",
            "The nozzle seals against the mold and directs molten plastic into the mold."
        ),

        makeQuestion(
            "What are tie bars used for?",
            [
                "To guide and support clamp movement",
                "To dry material",
                "To control water temperature",
                "To mix colorant"
            ],
            "To guide and support clamp movement",
            "Tie bars help guide the moving platen and support the clamp structure."
        ),

        makeQuestion(
            "What does the ejector system do?",
            [
                "Pushes the molded part out of the mold",
                "Melts the plastic",
                "Controls barrel temperature",
                "Loads resin into the dryer"
            ],
            "Pushes the molded part out of the mold",
            "Ejector pins, sleeves, or plates push the cooled part out after mold opening."
        ),

        makeQuestion(
            "What is the feed throat area?",
            [
                "The area where resin enters the barrel from the hopper",
                "The area where the robot removes the part",
                "The mold cooling inlet",
                "The clamp lubrication point"
            ],
            "The area where resin enters the barrel from the hopper",
            "The feed throat is where pellets enter the barrel so the screw can convey them forward."
        ),

        makeQuestion(
            "Why is barrel temperature control important?",
            [
                "It helps melt the resin consistently",
                "It controls clamp tonnage",
                "It opens the mold",
                "It detects short shots"
            ],
            "It helps melt the resin consistently",
            "Stable barrel heat helps create a consistent melt and reduces processing variation."
        ),

        makeQuestion(
            "What is the purpose of the moving platen?",
            [
                "It moves the mold open and closed",
                "It dries the resin",
                "It controls regrind percentage",
                "It checks part color"
            ],
            "It moves the mold open and closed",
            "The moving platen carries one half of the mold and moves during clamp open and close."
        ),

        makeQuestion(
            "What is a common danger area on an injection molding machine?",
            [
                "The mold area during clamp movement",
                "The label printer",
                "The finished goods box only",
                "The operator clipboard"
            ],
            "The mold area during clamp movement",
            "The mold and clamp area has pinch points and high clamp force, so safety gates and procedures are critical."
        ),

        makeQuestion(
            "What does shot size control?",
            [
                "The amount of material prepared for injection",
                "The water temperature",
                "The robot speed",
                "The number of boxes packed"
            ],
            "The amount of material prepared for injection",
            "Shot size controls how much molten material is prepared in front of the screw."
        )

    ],

    resins: [

        makeQuestion(
            "Why is it important to know the exact resin grade, not just the resin family?",
            [
                "Different grades can process, shrink, and perform differently",
                "All grades are always identical",
                "The grade only affects the label",
                "The grade only matters for box count"
            ],
            "Different grades can process, shrink, and perform differently",
            "Different grades may have different flow rates, fillers, additives, drying needs, shrinkage, and properties."
        ),

        makeQuestion(
            "Which material family usually has higher shrinkage and needs close cooling control?",
            [
                "Polyethylene PE",
                "Acrylic PMMA",
                "Polycarbonate PC",
                "Polystyrene PS"
            ],
            "Polyethylene PE",
            "PE is semi-crystalline and commonly shrinks more than many amorphous materials."
        ),

        makeQuestion(
            "What is a major technician concern when molding Polycarbonate PC?",
            [
                "Proper drying before molding",
                "Never heating the barrel",
                "Ignoring moisture",
                "Only checking conveyor speed"
            ],
            "Proper drying before molding",
            "PC is moisture sensitive. Wet PC can cause splay, bubbles, brittleness, and weak parts."
        ),

        makeQuestion(
            "Why is Nylon / Polyamide moisture sensitive?",
            [
                "It absorbs moisture before and after molding",
                "It repels all moisture",
                "It cannot be dried",
                "It only absorbs oil"
            ],
            "It absorbs moisture before and after molding",
            "Nylon is hygroscopic and can absorb moisture, affecting processing, appearance, strength, and dimensions."
        ),

        makeQuestion(
            "What does glass fiber usually do when added to resin?",
            [
                "Increases stiffness and strength",
                "Eliminates all warpage",
                "Removes the need for cooling",
                "Makes every resin transparent"
            ],
            "Increases stiffness and strength",
            "Glass fiber improves stiffness and strength but may also cause fiber orientation, warpage, and tooling wear."
        ),

        makeQuestion(
            "What is a common risk of excessive or uncontrolled regrind?",
            [
                "Brittleness, color variation, and contamination",
                "Perfect properties every time",
                "No heat history",
                "No quality risk"
            ],
            "Brittleness, color variation, and contamination",
            "Regrind has heat history and can contain contamination, fines, or degraded material."
        ),

        makeQuestion(
            "What is the purpose of flame-retardant additives?",
            [
                "To improve flame resistance or meet flame rating requirements",
                "To make all plastics flexible",
                "To remove the need for drying",
                "To increase water flow"
            ],
            "To improve flame resistance or meet flame rating requirements",
            "Flame retardants are used in electrical and safety-related applications."
        ),

        makeQuestion(
            "Why should mold release spray be controlled carefully?",
            [
                "Too much can contaminate parts and affect painting, bonding, or welding",
                "It always improves every process",
                "It replaces mold maintenance",
                "It removes the need for ejectors"
            ],
            "Too much can contaminate parts and affect painting, bonding, or welding",
            "Excessive mold release can cause surface contamination, plate-out, poor adhesion, and cosmetic issues."
        ),

        makeQuestion(
            "What type of resin is PP?",
            [
                "Semi-crystalline",
                "Thermoset only",
                "Metal-filled only",
                "Always amorphous"
            ],
            "Semi-crystalline",
            "Polypropylene is a semi-crystalline resin, which means cooling and crystallization strongly affect shrinkage and warpage."
        ),

        makeQuestion(
            "What is PMMA commonly known for?",
            [
                "Excellent clarity and gloss",
                "High moisture absorption like nylon",
                "Being impossible to mold",
                "Replacing all glass-filled materials"
            ],
            "Excellent clarity and gloss",
            "PMMA, or acrylic, is known for optical clarity, gloss, and weather resistance."
        ),

        makeQuestion(
            "What is Acetal / POM commonly used for?",
            [
                "Gears, bushings, and low-friction mechanical parts",
                "Disposable foam cups only",
                "Clear lenses only",
                "Paper packaging"
            ],
            "Gears, bushings, and low-friction mechanical parts",
            "Acetal has low friction, good wear resistance, and dimensional stability."
        ),

        makeQuestion(
            "What is a technician warning for PVC?",
            [
                "It can degrade if overheated",
                "It never burns",
                "It needs no temperature control",
                "It always runs at PEEK temperatures"
            ],
            "It can degrade if overheated",
            "PVC is heat sensitive and can degrade if overheated or left sitting hot too long."
        ),

        makeQuestion(
            "What is PEEK known for?",
            [
                "Very high heat resistance and high-performance applications",
                "Being the cheapest commodity resin",
                "Never needing high mold temperatures",
                "Being used only for bottle caps"
            ],
            "Very high heat resistance and high-performance applications",
            "PEEK is a high-performance resin used in demanding medical, aerospace, oil and gas, and wear applications."
        ),

        makeQuestion(
            "What can colorant problems cause?",
            [
                "Streaks, specks, wrong color, or poor dispersion",
                "Perfect molding every time",
                "No cosmetic variation",
                "Automatic drying"
            ],
            "Streaks, specks, wrong color, or poor dispersion",
            "Colorants must be mixed and metered consistently to avoid appearance and property issues."
        ),

        makeQuestion(
            "Why can filled materials increase tooling wear?",
            [
                "Fillers such as glass fiber can be abrasive",
                "They remove all friction",
                "They cool the mold automatically",
                "They lower all injection pressure to zero"
            ],
            "Fillers such as glass fiber can be abrasive",
            "Glass and mineral-filled materials can wear screws, barrels, gates, and mold details."
        )

    ],

    materials: [

        makeQuestion(
            "What does hygroscopic mean?",
            [
                "The material absorbs moisture from the air",
                "The material never needs drying",
                "The material cannot be molded",
                "The material is always transparent"
            ],
            "The material absorbs moisture from the air",
            "Hygroscopic materials absorb moisture and usually need proper drying."
        ),

        makeQuestion(
            "What defect is commonly caused by wet material?",
            [
                "Splay",
                "Perfect surface finish",
                "Lower moisture content",
                "No process change"
            ],
            "Splay",
            "Moisture can turn to steam during molding and create splay, bubbles, or weak parts."
        ),

        makeQuestion(
            "Which materials usually shrink more?",
            [
                "Semi-crystalline materials",
                "Amorphous materials",
                "Metals",
                "Water"
            ],
            "Semi-crystalline materials",
            "Semi-crystalline materials usually shrink more as crystalline structure forms during cooling."
        ),

        makeQuestion(
            "What does viscosity mean?",
            [
                "Resistance to flow",
                "Cooling water pressure",
                "Clamp speed",
                "Ejector stroke"
            ],
            "Resistance to flow",
            "Viscosity describes how resistant a material is to flow."
        ),

        makeQuestion(
            "What does Melt Flow Index help describe?",
            [
                "How easily plastic flows under test conditions",
                "How many cavities are in the mold",
                "How much water is in the chiller",
                "How many ejector pins are used"
            ],
            "How easily plastic flows under test conditions",
            "MFI helps compare material flow behavior under specific lab conditions."
        ),

        makeQuestion(
            "Why is residence time important?",
            [
                "Material can degrade if it sits hot too long",
                "It controls operator break time",
                "It replaces drying",
                "It only affects water temperature"
            ],
            "Material can degrade if it sits hot too long",
            "Long residence time can cause degradation, burning, black specks, and weak parts."
        ),

        makeQuestion(
            "What is an amorphous resin characteristic?",
            [
                "It softens over a temperature range and usually has lower shrinkage",
                "It always has extremely high shrinkage",
                "It cannot be injection molded",
                "It never needs process control"
            ],
            "It softens over a temperature range and usually has lower shrinkage",
            "Amorphous materials generally soften over a range and often shrink less than semi-crystalline resins."
        ),

        makeQuestion(
            "What is a semi-crystalline resin characteristic?",
            [
                "It forms crystalline structure during cooling",
                "It has no shrinkage",
                "It is always clear",
                "It cannot warp"
            ],
            "It forms crystalline structure during cooling",
            "Semi-crystalline resins form ordered molecular regions during cooling, which affects shrinkage and dimensions."
        ),

        makeQuestion(
            "Why does drying time matter?",
            [
                "Material needs enough time at temperature to remove moisture",
                "It only changes box count",
                "It replaces mold temperature",
                "It controls clamp tonnage"
            ],
            "Material needs enough time at temperature to remove moisture",
            "Drying requires both correct temperature and enough time to remove moisture from the pellets."
        ),

        makeQuestion(
            "What can overdrying or overheating some materials cause?",
            [
                "Degradation or property loss",
                "Perfect material forever",
                "No color change possible",
                "Lower barrel temperature automatically"
            ],
            "Degradation or property loss",
            "Some materials can degrade or lose properties if exposed to excessive drying heat or time."
        ),

        makeQuestion(
            "Why should material contamination be taken seriously?",
            [
                "It can cause defects, weak parts, black specks, or rejects",
                "It always improves strength",
                "It never affects appearance",
                "It only affects the hopper lid"
            ],
            "It can cause defects, weak parts, black specks, or rejects",
            "Contamination can affect appearance, strength, processing, and customer quality."
        ),

        makeQuestion(
            "What does shrinkage affect?",
            [
                "Final part dimensions",
                "Only hopper level",
                "Only robot speed",
                "Only dryer airflow"
            ],
            "Final part dimensions",
            "Shrinkage determines how much the part changes size as it cools and after molding."
        ),

        makeQuestion(
            "Why does regrind have to be controlled?",
            [
                "It has heat history and can affect properties",
                "It is always better than virgin resin",
                "It never changes color",
                "It removes the need for drying"
            ],
            "It has heat history and can affect properties",
            "Regrind has already been processed and may affect strength, color, flow, and consistency."
        ),

        makeQuestion(
            "What can material lot changes cause?",
            [
                "Processing or quality shifts",
                "No possible change",
                "Automatic cycle improvement",
                "No dimensional effect"
            ],
            "Processing or quality shifts",
            "Even approved material can vary slightly by lot, which may affect flow, dimensions, or appearance."
        )

    ],

    processing: [

        makeQuestion(
            "What does melt temperature mainly affect?",
            [
                "Material viscosity and flow",
                "Tie bar spacing",
                "Robot color",
                "Operator schedule"
            ],
            "Material viscosity and flow",
            "Melt temperature changes how easily the plastic flows."
        ),

        makeQuestion(
            "What can low melt temperature cause?",
            [
                "Short shots and poor flow",
                "Perfect flow every time",
                "Lower pressure demand",
                "No effect"
            ],
            "Short shots and poor flow",
            "Cold material is more viscous and harder to fill."
        ),

        makeQuestion(
            "What does injection speed control?",
            [
                "How fast the cavity fills",
                "How long material dries",
                "How much water flows through the mold",
                "How far the mold opens"
            ],
            "How fast the cavity fills",
            "Injection speed controls the movement of the flow front through the cavity."
        ),

        makeQuestion(
            "What can excessive injection speed cause?",
            [
                "Burn marks or jetting",
                "Better drying",
                "No shear heat",
                "Lower gas trapping"
            ],
            "Burn marks or jetting",
            "Excessive speed can trap gas, increase shear heat, or cause jetting."
        ),

        makeQuestion(
            "What does hold pressure do?",
            [
                "Packs material into the part after filling",
                "Rotates the screw",
                "Opens the mold",
                "Controls dryer airflow"
            ],
            "Packs material into the part after filling",
            "Hold pressure compensates for shrinkage after the cavity fills."
        ),

        makeQuestion(
            "Hold time is useful until what happens?",
            [
                "The gate freezes",
                "The hopper empties",
                "The mold opens",
                "The operator weighs parts"
            ],
            "The gate freezes",
            "After gate freeze, hold pressure can no longer pack more material into the cavity."
        ),

        makeQuestion(
            "What is cushion?",
            [
                "Material left in front of the screw after injection",
                "A soft pad behind the mold",
                "A dryer filter",
                "A robot safety zone"
            ],
            "Material left in front of the screw after injection",
            "Cushion allows pressure transfer and prevents the screw from bottoming out."
        ),

        makeQuestion(
            "What is transfer position?",
            [
                "The switch point from fill to pack/hold",
                "The robot home position",
                "The dryer setpoint",
                "The chiller return port"
            ],
            "The switch point from fill to pack/hold",
            "Transfer separates first-stage fill from second-stage pack/hold."
        ),

        makeQuestion(
            "What can too high hold pressure cause?",
            [
                "Flash, stress, overpacking, or difficult ejection",
                "Less packing",
                "No dimensional change",
                "Automatic drying"
            ],
            "Flash, stress, overpacking, or difficult ejection",
            "Excessive hold pressure can overpack the part and increase stress or flash."
        ),

        makeQuestion(
            "What can too low hold pressure cause?",
            [
                "Sinks, voids, low part weight, or shrinkage",
                "Overpacking",
                "Higher part weight always",
                "Better dimensions always"
            ],
            "Sinks, voids, low part weight, or shrinkage",
            "Low hold pressure may not pack enough material into the cavity."
        ),

        makeQuestion(
            "What does back pressure affect?",
            [
                "Melt mixing, material density, and screw recovery",
                "Clamp open distance only",
                "Conveyor speed only",
                "Water return temperature only"
            ],
            "Melt mixing, material density, and screw recovery",
            "Back pressure affects melt quality, color mixing, and how the screw recovers."
        ),

        makeQuestion(
            "What can excessive back pressure cause?",
            [
                "Extra shear heat and longer recovery time",
                "No melt change",
                "Lower material temperature always",
                "No screw load"
            ],
            "Extra shear heat and longer recovery time",
            "Too much back pressure can increase shear heat, screw load, and cycle time."
        ),

        makeQuestion(
            "What does screw RPM affect?",
            [
                "How fast the screw recovers and how much shear heat is generated",
                "Clamp tonnage only",
                "Mold open stroke only",
                "Part inspection frequency only"
            ],
            "How fast the screw recovers and how much shear heat is generated",
            "Screw RPM affects recovery time, melt mixing, and shear heat."
        ),

        makeQuestion(
            "Why is cooling time important?",
            [
                "It allows the part to solidify enough for ejection",
                "It dries the material",
                "It changes the resin family",
                "It controls hopper feed"
            ],
            "It allows the part to solidify enough for ejection",
            "Cooling time must be long enough for the part to eject without deformation."
        ),

        makeQuestion(
            "What does a stable fill time indicate?",
            [
                "The filling portion of the process is repeating consistently",
                "The dryer is always correct",
                "The mold cannot have issues",
                "The robot is perfect"
            ],
            "The filling portion of the process is repeating consistently",
            "Fill time is a key process indicator. Changes can point to viscosity, pressure, or machine variation."
        )

    ],

    startup: [

        makeQuestion(
            "What should be verified during startup before running production?",
            [
                "Machine, mold, material, dryer, water, process, and automation readiness",
                "Only the box count",
                "Only the operator name",
                "Only the break schedule"
            ],
            "Machine, mold, material, dryer, water, process, and automation readiness",
            "Startup is a full system check before production is released."
        ),

        makeQuestion(
            "Why is material verification important at startup?",
            [
                "Wrong material can create scrap, contamination, and customer rejects",
                "Material does not affect quality",
                "Only color matters",
                "It replaces first-piece inspection"
            ],
            "Wrong material can create scrap, contamination, and customer rejects",
            "Wrong resin, grade, lot, colorant, or regrind level can create quality and traceability problems."
        ),

        makeQuestion(
            "What should be checked on the dryer before startup?",
            [
                "Temperature, drying time, material, airflow, and alarms",
                "Only the outside color",
                "Only the power cord",
                "Only the hopper lid"
            ],
            "Temperature, drying time, material, airflow, and alarms",
            "The dryer must be set correctly and the material must have enough drying time before molding."
        ),

        makeQuestion(
            "Why is barrel heat soak important?",
            [
                "It allows the barrel, screw, nozzle, and material to reach stable temperature",
                "It cools the mold",
                "It shuts off the dryer",
                "It removes the need for purging"
            ],
            "It allows the barrel, screw, nozzle, and material to reach stable temperature",
            "Proper heat soak helps prevent unmelted pellets, cold slugs, and poor melt quality."
        ),

        makeQuestion(
            "What can happen if a press is started before the barrel is fully heated?",
            [
                "Unmelted pellets, high screw load, poor melt quality, or damage",
                "Perfect melt quality",
                "Lower screw torque",
                "Automatic mold protection"
            ],
            "Unmelted pellets, high screw load, poor melt quality, or damage",
            "Starting cold can overload the screw and produce poorly melted material."
        ),

        makeQuestion(
            "Why should mold temperature be stable before production approval?",
            [
                "Mold temperature affects dimensions, shrinkage, appearance, and warpage",
                "Mold temperature only affects box count",
                "Mold temperature does not matter",
                "Mold temperature only controls the robot"
            ],
            "Mold temperature affects dimensions, shrinkage, appearance, and warpage",
            "Parts can change as the mold heats or cools to a stable condition."
        ),

        makeQuestion(
            "What should be verified after connecting waterlines?",
            [
                "Return flow and leaks",
                "Only hose color",
                "Only mold number",
                "Only clamp speed"
            ],
            "Return flow and leaks",
            "Connected hoses do not guarantee flow. Return flow and leaks must be checked."
        ),

        makeQuestion(
            "Why should the robot or automation be checked during startup?",
            [
                "To confirm the correct program, safe motion, part pickup, and clear signal",
                "To dry the resin",
                "To increase melt temperature",
                "To replace quality inspection"
            ],
            "To confirm the correct program, safe motion, part pickup, and clear signal",
            "Automation must work safely with mold open, ejectors, part pickup, and mold close permission."
        ),

        makeQuestion(
            "What is the purpose of first shots?",
            [
                "To verify material flow, process settings, mold function, and part quality",
                "To immediately pack finished goods",
                "To skip inspection",
                "To avoid checking the process"
            ],
            "To verify material flow, process settings, mold function, and part quality",
            "First shots help verify the setup before full production."
        ),

        makeQuestion(
            "Why should startup scrap be kept separate?",
            [
                "It may contain purge contamination, defects, or unapproved parts",
                "It is always good product",
                "It should be mixed with finished goods",
                "It improves traceability when mixed together"
            ],
            "It may contain purge contamination, defects, or unapproved parts",
            "Startup parts should not be mixed with approved production parts."
        ),

        makeQuestion(
            "Why should process verification include actual values, not just setpoints?",
            [
                "Actual fill time, cushion, recovery, and cycle time show real process stability",
                "Setpoints are always enough",
                "Actual values never change",
                "Only the operator should know actual values"
            ],
            "Actual fill time, cushion, recovery, and cycle time show real process stability",
            "Actual values confirm whether the press is truly running stable."
        ),

        makeQuestion(
            "What should be done during a normal shutdown?",
            [
                "Follow the shutdown checklist, control material, purge if required, and leave the machine safe",
                "Leave degraded material in the barrel",
                "Ignore the mold condition",
                "Skip documentation"
            ],
            "Follow the shutdown checklist, control material, purge if required, and leave the machine safe",
            "A controlled shutdown protects the machine, mold, material, and next startup."
        ),

        makeQuestion(
            "Why is purge-out important during some shutdowns?",
            [
                "It removes old material, color, degraded resin, or heat-sensitive material",
                "It replaces the dryer",
                "It cools the mold water",
                "It lowers clamp tonnage"
            ],
            "It removes old material, color, degraded resin, or heat-sensitive material",
            "Purging can prevent contamination, burning, black specks, and startup problems."
        ),

        makeQuestion(
            "What is the priority during an emergency shutdown?",
            [
                "People and safety first",
                "Keeping cycle time low",
                "Saving every part",
                "Ignoring the alarm"
            ],
            "People and safety first",
            "Emergency shutdown prioritizes safety before production."
        ),

        makeQuestion(
            "What should a good shift handoff include?",
            [
                "Machine status, process changes, quality issues, material concerns, and open risks",
                "Only the next break time",
                "Only the box count",
                "Only the operator name"
            ],
            "Machine status, process changes, quality issues, material concerns, and open risks",
            "Good handoff prevents repeated mistakes and missed quality issues."
        )

    ],

    moldsetup: [

        makeQuestion(
            "What should be verified first during mold preparation?",
            [
                "Correct mold identification",
                "Operator lunch schedule",
                "Box label color",
                "Robot speed only"
            ],
            "Correct mold identification",
            "The mold number should match the work order before setup begins."
        ),

        makeQuestion(
            "What does machine / mold match verify?",
            [
                "The mold fits the press and the machine can run the job safely",
                "The part color is correct",
                "The operator is trained",
                "The chiller brand"
            ],
            "The mold fits the press and the machine can run the job safely",
            "Tie bar spacing, mold height, shot capacity, tonnage, and ejectors must match the job."
        ),

        makeQuestion(
            "Why is platen and mold mounting cleanliness important?",
            [
                "Debris can affect mold alignment, clamping, and mold safety",
                "It changes material color",
                "It controls dryer dew point",
                "It replaces mold protection"
            ],
            "Debris can affect mold alignment, clamping, and mold safety",
            "Clean mounting surfaces help the mold sit flat and clamp correctly."
        ),

        makeQuestion(
            "Why should lifting equipment and eyebolts be verified?",
            [
                "To safely handle the mold weight during installation or removal",
                "To change resin viscosity",
                "To adjust cooling time",
                "To increase injection speed"
            ],
            "To safely handle the mold weight during installation or removal",
            "Mold handling is a major safety risk. Rigging must be correct for the mold weight."
        ),

        makeQuestion(
            "Why is mold height important?",
            [
                "The machine must be able to clamp and open the mold correctly",
                "It controls material drying",
                "It sets colorant percentage",
                "It replaces water flow"
            ],
            "The machine must be able to clamp and open the mold correctly",
            "Mold height must fit within the machine clamp adjustment range."
        ),

        makeQuestion(
            "Why is nozzle alignment important?",
            [
                "To prevent leaks, damage, and flow restriction",
                "To improve box stacking",
                "To reduce dryer dew point",
                "To change resin type"
            ],
            "To prevent leaks, damage, and flow restriction",
            "Poor nozzle seating can cause leakage, sprue issues, flow restriction, or damage."
        ),

        makeQuestion(
            "What can poor nozzle seating cause?",
            [
                "Drool, leakage, sprue problems, or damage",
                "Better drying",
                "Lower cycle time automatically",
                "Improved part inspection"
            ],
            "Drool, leakage, sprue problems, or damage",
            "The nozzle must seat properly against the sprue bushing or hot runner inlet."
        ),

        makeQuestion(
            "What should be verified after waterlines are connected?",
            [
                "Correct routing, return flow, leaks, and kinked hoses",
                "Only hose color",
                "Only the press number",
                "Only the cycle counter"
            ],
            "Correct routing, return flow, leaks, and kinked hoses",
            "Waterline setup affects cooling, part quality, and safety."
        ),

        makeQuestion(
            "Why are ejector connections checked during setup?",
            [
                "To make sure the machine ejector system matches the mold and moves correctly",
                "To increase resin drying",
                "To change the material grade",
                "To adjust colorant mixing"
            ],
            "To make sure the machine ejector system matches the mold and moves correctly",
            "Incorrect ejector setup can damage the mold or prevent part removal."
        ),

        makeQuestion(
            "What are core pulls and slides used for?",
            [
                "To form and release undercuts or side features",
                "To dry resin",
                "To increase hopper capacity",
                "To control barrel heat"
            ],
            "To form and release undercuts or side features",
            "Slides and cores create features that cannot release straight with normal mold opening."
        ),

        makeQuestion(
            "Why must core pull timing be verified?",
            [
                "Incorrect timing can damage the mold or part",
                "It controls material lot number",
                "It replaces part inspection",
                "It removes the need for clamp force"
            ],
            "Incorrect timing can damage the mold or part",
            "Cores and slides must move in the correct sequence before mold open, close, or ejection."
        ),

        makeQuestion(
            "Why is dry cycling important?",
            [
                "It verifies mold, ejector, core, and machine movement before production",
                "It dries the resin",
                "It replaces first-piece inspection",
                "It increases regrind"
            ],
            "It verifies mold, ejector, core, and machine movement before production",
            "Dry cycling helps catch motion and setup issues before plastic is injected."
        ),

        makeQuestion(
            "What is a major risk of poor mold protection setup?",
            [
                "Mold damage",
                "Better cycle time",
                "Improved drying",
                "Reduced inspection"
            ],
            "Mold damage",
            "Incorrect mold protection can allow stuck parts or obstructions to damage tooling."
        ),

        makeQuestion(
            "Why should first shots after setup be inspected carefully?",
            [
                "They confirm the mold, process, material, and quality are acceptable",
                "They are always automatically good",
                "They should skip quality approval",
                "They only check box weight"
            ],
            "They confirm the mold, process, material, and quality are acceptable",
            "First shots verify the setup before production continues."
        ),

        makeQuestion(
            "What should a setup technician document after a changeover?",
            [
                "Water routing issues, process changes, mold problems, and startup concerns",
                "Only lunch time",
                "Only box count",
                "Only weather conditions"
            ],
            "Water routing issues, process changes, mold problems, and startup concerns",
            "Documentation helps the next shift and prevents repeat problems."
        )

    ],

    cooling: [

        makeQuestion(
            "Why is cooling important in injection molding?",
            [
                "It affects cycle time, dimensions, shrinkage, and warpage",
                "It only changes hopper level",
                "It replaces packing pressure",
                "It removes the need for quality"
            ],
            "It affects cycle time, dimensions, shrinkage, and warpage",
            "Cooling is one of the biggest drivers of cycle time and part stability."
        ),

        makeQuestion(
            "What should be checked before adding more cooling time?",
            [
                "Water flow and routing",
                "Only operator schedule",
                "Only part color",
                "Only box count"
            ],
            "Water flow and routing",
            "Poor water flow should be corrected instead of hidden with extra cooling time."
        ),

        makeQuestion(
            "What can blocked waterlines cause?",
            [
                "Hot spots, warpage, sticking, and long cycle times",
                "Perfect cooling",
                "Lower mold temperature everywhere",
                "Better part release every time"
            ],
            "Hot spots, warpage, sticking, and long cycle times",
            "Restricted cooling circuits reduce heat removal and create temperature imbalance."
        ),

        makeQuestion(
            "What is turbulent flow important for?",
            [
                "Better heat transfer",
                "Color mixing only",
                "Ejector return only",
                "Robot grip force"
            ],
            "Better heat transfer",
            "Turbulent flow removes heat more efficiently than smooth laminar flow."
        ),

        makeQuestion(
            "Cooling-related warpage is usually caused by what?",
            [
                "Uneven cooling and uneven shrinkage",
                "Perfect mold balance",
                "Correct water flow everywhere",
                "Only colorant ratio"
            ],
            "Uneven cooling and uneven shrinkage",
            "Uneven cooling causes areas of the part to shrink differently."
        ),

        makeQuestion(
            "What is supply water?",
            [
                "Water going into the mold cooling circuit",
                "Water leaving the mold only",
                "Material entering the barrel",
                "Hydraulic oil"
            ],
            "Water going into the mold cooling circuit",
            "Supply water enters the mold cooling channel or temperature control circuit."
        ),

        makeQuestion(
            "What is return water?",
            [
                "Water leaving the mold after removing heat",
                "Water entering the hopper",
                "Material leaving the nozzle",
                "Air from the dryer"
            ],
            "Water leaving the mold after removing heat",
            "Return water exits the mold after absorbing heat from the tool."
        ),

        makeQuestion(
            "Why is the difference between supply and return temperature useful?",
            [
                "It shows how much heat the circuit is removing",
                "It shows resin lot number",
                "It controls clamp force",
                "It replaces part inspection"
            ],
            "It shows how much heat the circuit is removing",
            "A large temperature difference may point to low flow or heavy heat load."
        ),

        makeQuestion(
            "What can low flow rate cause?",
            [
                "Poor heat removal and hot spots",
                "Better cooling automatically",
                "Lower mold temperature everywhere",
                "No dimensional effect"
            ],
            "Poor heat removal and hot spots",
            "Low flow reduces cooling efficiency and can create localized heat problems."
        ),

        makeQuestion(
            "Why should waterline routing be repeatable?",
            [
                "Different routing can change cooling balance and part quality",
                "Routing only affects hose color",
                "Routing never affects the process",
                "It only affects the conveyor"
            ],
            "Different routing can change cooling balance and part quality",
            "Incorrect or inconsistent waterline routing can change mold temperature and part dimensions."
        ),

        makeQuestion(
            "What can mold temperature affect?",
            [
                "Surface finish, shrinkage, warpage, dimensions, and cycle time",
                "Only operator schedule",
                "Only hopper level",
                "Only box labels"
            ],
            "Surface finish, shrinkage, warpage, dimensions, and cycle time",
            "Mold temperature is a major part-quality and process-control factor."
        ),

        makeQuestion(
            "What is a hot spot?",
            [
                "A mold area that stays hotter than surrounding areas",
                "A dryer alarm",
                "A colorant feed setting",
                "A robot home position"
            ],
            "A mold area that stays hotter than surrounding areas",
            "Hot spots often cause local sinks, sticking, warpage, or dimensional variation."
        ),

        makeQuestion(
            "Why can too little cooling time cause part problems?",
            [
                "The part may deform, stick, warp, or show ejector marks",
                "The material dries too much",
                "The hopper empties",
                "The chiller becomes unnecessary"
            ],
            "The part may deform, stick, warp, or show ejector marks",
            "The part must be solid enough to eject without distortion."
        ),

        makeQuestion(
            "Why can too much cooling time be a problem?",
            [
                "It increases cycle time and reduces production efficiency",
                "It always improves profit",
                "It lowers all scrap to zero",
                "It replaces water flow"
            ],
            "It increases cycle time and reduces production efficiency",
            "Extra cooling time may hide cooling problems and slow production."
        ),

        makeQuestion(
            "What can condensation on a mold cause?",
            [
                "Water marks, rust, defects, and unsafe conditions",
                "Better drying",
                "Higher clamp force",
                "Improved resin flow"
            ],
            "Water marks, rust, defects, and unsafe conditions",
            "Cold mold surfaces in humid air can sweat, causing quality and safety issues."
        )

    ],

    quality: [

        makeQuestion(
            "What does first-piece inspection confirm?",
            [
                "Parts meet requirements before full production",
                "The mold can be skipped",
                "Material no longer matters",
                "Operators do not need samples"
            ],
            "Parts meet requirements before full production",
            "First-piece inspection verifies setup and part quality before production release."
        ),

        makeQuestion(
            "Why should parts be checked by cavity on multi-cavity molds?",
            [
                "One cavity may have a unique issue",
                "Cavity tracking is never useful",
                "All cavities are always identical",
                "Only the runner matters"
            ],
            "One cavity may have a unique issue",
            "Cavity-specific tracking helps locate mold or hot runner problems."
        ),

        makeQuestion(
            "What can part weight tracking reveal?",
            [
                "Fill, pack, and process stability changes",
                "Only operator name",
                "Only box size",
                "Only chiller brand"
            ],
            "Fill, pack, and process stability changes",
            "Part weight is a strong indicator of process consistency."
        ),

        makeQuestion(
            "What is containment?",
            [
                "Separating suspect or defective parts to protect the customer",
                "Mixing all parts together",
                "Skipping inspection",
                "Changing material without notice"
            ],
            "Separating suspect or defective parts to protect the customer",
            "Containment prevents suspect parts from reaching the customer or next operation."
        ),

        makeQuestion(
            "What does root cause thinking focus on?",
            [
                "Why the defect happened",
                "Only hiding the defect",
                "Only increasing pressure",
                "Ignoring trends"
            ],
            "Why the defect happened",
            "Root cause thinking identifies the true cause so the issue does not repeat."
        ),

        makeQuestion(
            "What is visual inspection used to check?",
            [
                "Surface defects, color, flash, short shots, burns, and contamination",
                "Only machine oil level",
                "Only dryer airflow",
                "Only operator schedule"
            ],
            "Surface defects, color, flash, short shots, burns, and contamination",
            "Visual inspection catches obvious part defects before they reach the customer."
        ),

        makeQuestion(
            "What are dimensional checks used for?",
            [
                "To confirm the part meets required measurements and tolerances",
                "To confirm the hopper is full",
                "To set robot speed",
                "To replace the mold setup sheet"
            ],
            "To confirm the part meets required measurements and tolerances",
            "Dimensional inspection verifies that the molded part matches required specifications."
        ),

        makeQuestion(
            "Why should gauges and measuring tools be handled carefully?",
            [
                "Damaged or dirty tools can give bad measurements",
                "They control barrel temperature",
                "They dry resin",
                "They replace waterlines"
            ],
            "Damaged or dirty tools can give bad measurements",
            "Inspection tools must be clean, protected, and used correctly for accurate results."
        ),

        makeQuestion(
            "What is an approved sample used for?",
            [
                "To compare production parts against an accepted standard",
                "To replace all inspections forever",
                "To change the resin grade",
                "To adjust the chiller"
            ],
            "To compare production parts against an accepted standard",
            "Approved samples help operators and technicians compare appearance and features."
        ),

        makeQuestion(
            "Why should defects be documented clearly?",
            [
                "So the problem can be tracked, contained, and corrected",
                "So no one knows what happened",
                "To avoid fixing the issue",
                "To hide scrap"
            ],
            "So the problem can be tracked, contained, and corrected",
            "Good defect documentation helps troubleshooting and prevents repeat problems."
        ),

        makeQuestion(
            "What is a quality alert?",
            [
                "A communication that warns about a known or high-risk quality issue",
                "A dryer setting",
                "A mold temperature controller",
                "A robot speed command"
            ],
            "A communication that warns about a known or high-risk quality issue",
            "Quality alerts help operators and technicians watch for specific defects or risks."
        ),

        makeQuestion(
            "What should happen when suspect parts are found?",
            [
                "Stop, contain, identify the range affected, and notify the proper people",
                "Mix them into finished goods",
                "Ignore them unless the box is full",
                "Only change injection speed"
            ],
            "Stop, contain, identify the range affected, and notify the proper people",
            "Suspect product must be controlled to prevent shipment of bad parts."
        ),

        makeQuestion(
            "Why is shift handoff important for quality?",
            [
                "It communicates defects, process changes, containment, and open issues",
                "It replaces all inspection",
                "It only lists break times",
                "It removes the need for samples"
            ],
            "It communicates defects, process changes, containment, and open issues",
            "Good handoff prevents the next shift from missing known risks."
        ),

        makeQuestion(
            "What can a trend in part weight indicate?",
            [
                "A process shift before obvious visual defects appear",
                "Only a packaging issue",
                "No useful information",
                "Only operator speed"
            ],
            "A process shift before obvious visual defects appear",
            "Part weight trends can show changes in fill, pack, cushion, or material behavior."
        ),

        makeQuestion(
            "What should a technician do if parts fail inspection after a process change?",
            [
                "Contain suspect parts, review the change, and restore or escalate the process",
                "Ship the parts anyway",
                "Erase the process notes",
                "Ignore the failure"
            ],
            "Contain suspect parts, review the change, and restore or escalate the process",
            "Quality failures after changes must be controlled, documented, and corrected."
        )

    ],

    troubleshooting: [

        makeQuestion(
            "A part is incomplete and missing material at the end of fill. What defect is this?",
            [
                "Short shot",
                "Flash",
                "Splay",
                "Delamination"
            ],
            "Short shot",
            "A short shot occurs when the cavity does not completely fill."
        ),

        makeQuestion(
            "Thin plastic fins along the parting line are called what?",
            [
                "Flash",
                "Sink marks",
                "Voids",
                "Weld lines"
            ],
            "Flash",
            "Flash is excess plastic escaping through parting lines, vents, or shutoffs."
        ),

        makeQuestion(
            "Surface depressions in thick areas are usually what?",
            [
                "Sink marks",
                "Jetting",
                "Black specks",
                "Flow lines"
            ],
            "Sink marks",
            "Sink marks are caused by shrinkage, usually in thick sections."
        ),

        makeQuestion(
            "Dark discoloration near the end of fill often points to what?",
            [
                "Burn marks",
                "Voids",
                "Ejector marks",
                "Shrinkage only"
            ],
            "Burn marks",
            "Burn marks often come from trapped gas, poor venting, or excessive heat."
        ),

        makeQuestion(
            "Silver streaks on the part surface are usually called what?",
            [
                "Splay",
                "Flash",
                "Ejector marks",
                "Sink"
            ],
            "Splay",
            "Splay is often caused by moisture, trapped gas, contamination, or shear."
        ),

        makeQuestion(
            "A visible line where two flow fronts meet is called what?",
            [
                "Weld line",
                "Short shot",
                "Black speck",
                "Sink"
            ],
            "Weld line",
            "Weld lines form where flow fronts meet and do not fully bond."
        )

    ],

    hotrunner: [

        makeQuestion(
            "What does a hot runner system do?",
            [
                "Keeps plastic molten inside heated channels",
                "Cools the mold only",
                "Dries resin",
                "Applies clamp force"
            ],
            "Keeps plastic molten inside heated channels",
            "Hot runners use heated manifolds and drops to deliver molten plastic to gates."
        ),

        makeQuestion(
            "What does the manifold do?",
            [
                "Distributes molten plastic to hot runner drops",
                "Ejects parts",
                "Runs the conveyor",
                "Stores resin"
            ],
            "Distributes molten plastic to hot runner drops",
            "The manifold distributes melt from the inlet to each drop."
        ),

        makeQuestion(
            "What can a cold drop cause?",
            [
                "Short shot in one cavity",
                "Better flow always",
                "No pressure change",
                "Lower cycle time only"
            ],
            "Short shot in one cavity",
            "A cold or restricted drop often affects one cavity repeatedly."
        ),

        makeQuestion(
            "What do thermocouples do in a hot runner?",
            [
                "Read temperature and provide feedback to the controller",
                "Open the mold",
                "Remove parts",
                "Measure part weight"
            ],
            "Read temperature and provide feedback to the controller",
            "Thermocouples allow the controller to regulate zone temperature."
        ),

        makeQuestion(
            "What can poor hot runner balance cause?",
            [
                "Some cavities flash while others short shot",
                "Perfect cavity balance",
                "No dimensional variation",
                "No need for inspection"
            ],
            "Some cavities flash while others short shot",
            "Imbalanced filling can create different defects cavity to cavity."
        )

    ],

    robotics: [

        makeQuestion(
            "What is the main purpose of automation in injection molding?",
            [
                "Remove parts, improve consistency, and reduce manual handling",
                "Dry resin",
                "Create clamp force",
                "Heat the barrel"
            ],
            "Remove parts, improve consistency, and reduce manual handling",
            "Automation supports part removal, handling, sorting, insert loading, and consistency."
        ),

        makeQuestion(
            "What is EOAT?",
            [
                "End-of-arm tooling",
                "Extra oil and temperature",
                "Ejector-only automatic timer",
                "External operator access terminal"
            ],
            "End-of-arm tooling",
            "EOAT is tooling mounted to the robot arm to grip, vacuum, or support parts."
        ),

        makeQuestion(
            "What signal tells the machine it is safe to close the mold?",
            [
                "Robot clear signal",
                "Color signal",
                "Dryer ready signal only",
                "Part weight signal"
            ],
            "Robot clear signal",
            "The robot clear signal confirms the robot is out of the mold area."
        ),

        makeQuestion(
            "What can vacuum failure cause?",
            [
                "Dropped parts",
                "Better part pickup",
                "Lower moisture",
                "Higher melt temperature"
            ],
            "Dropped parts",
            "Vacuum loss can cause parts to fall during removal or transfer."
        ),

        makeQuestion(
            "Why is part detection important?",
            [
                "It helps prevent stuck parts and mold crashes",
                "It replaces mold protection",
                "It controls barrel heat",
                "It dries material"
            ],
            "It helps prevent stuck parts and mold crashes",
            "Part detection confirms whether parts were removed properly."
        )

    ],

    scientific: [

        makeQuestion(
            "What is scientific molding mainly based on?",
            [
                "Data and controlled studies",
                "Guessing",
                "Changing multiple settings at once",
                "Only visual inspection"
            ],
            "Data and controlled studies",
            "Scientific molding uses process data instead of random adjustments."
        ),

        makeQuestion(
            "What does decoupled molding separate?",
            [
                "Filling from packing",
                "Material from color",
                "Water from oil",
                "The mold from the machine"
            ],
            "Filling from packing",
            "Decoupled molding separates first-stage fill from second-stage pack/hold."
        ),

        makeQuestion(
            "What does a fill-only study help identify?",
            [
                "Fill pattern, transfer position, and cavity balance",
                "Only robot speed",
                "Only dryer temperature",
                "Only box count"
            ],
            "Fill pattern, transfer position, and cavity balance",
            "Fill-only studies show how the mold fills without pack/hold influence."
        ),

        makeQuestion(
            "What does a viscosity curve compare?",
            [
                "Injection speed, fill time, and pressure response",
                "Only part color",
                "Only ejector stroke",
                "Only cooling water"
            ],
            "Injection speed, fill time, and pressure response",
            "A viscosity curve helps find a stable fill-speed range."
        ),

        makeQuestion(
            "What does a gate freeze study use heavily?",
            [
                "Part weight at different hold times",
                "Robot home position",
                "Colorant label",
                "Conveyor belt speed"
            ],
            "Part weight at different hold times",
            "Gate freeze is found when part weight stops increasing as hold time increases."
        )

    ],

    advanced: [

        makeQuestion(
            "What is the goal of advanced process control?",
            [
                "To keep the process stable, repeatable, and data-driven",
                "To change settings randomly",
                "To ignore process trends",
                "To remove inspection"
            ],
            "To keep the process stable, repeatable, and data-driven",
            "Advanced process control focuses on stability, repeatability, documentation, and data."
        ),

        makeQuestion(
            "Why should technicians document process changes?",
            [
                "So changes can be understood, repeated, and reviewed",
                "So no one knows what happened",
                "To avoid quality checks",
                "To hide defects"
            ],
            "So changes can be understood, repeated, and reviewed",
            "Good documentation helps the next shift understand what changed and why."
        ),

        makeQuestion(
            "What should a technician do when the approved process cannot make good parts?",
            [
                "Escalate and document the issue",
                "Keep changing random settings",
                "Ignore the defect",
                "Ship the parts anyway"
            ],
            "Escalate and document the issue",
            "If the approved process cannot make acceptable parts, the issue should be escalated and documented."
        ),

        makeQuestion(
            "What is a good shift handoff focused on?",
            [
                "Machine status, quality issues, process changes, and open risks",
                "Only break times",
                "Only operator opinions",
                "Only box count"
            ],
            "Machine status, quality issues, process changes, and open risks",
            "A good handoff prevents repeated mistakes and missed quality issues."
        ),

        makeQuestion(
            "What is the technician mindset for troubleshooting?",
            [
                "Find the root cause before making random changes",
                "Change everything at once",
                "Ignore data",
                "Blame the material every time"
            ],
            "Find the root cause before making random changes",
            "Good troubleshooting uses symptoms, data, and process knowledge to find root cause."
        )

    ]

};

let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = "";
let hardMode = false;
let missedQuestions = [];

const categories = [
    "machine",
    "resins",
    "materials",
    "processing",
    "startup",
    "moldsetup",
    "cooling",
    "quality",
    "troubleshooting",
    "hotrunner",
    "robotics",
    "scientific",
    "advanced",
    "mixed"
];

function startQuiz(category) {

    selectedCategory = category;

    const hardModeToggle =
        document.getElementById("hardModeToggle");

    hardMode =
        hardModeToggle && hardModeToggle.checked;

    missedQuestions = [];

    currentQuestionIndex = 0;

    score = 0;

    if (category === "mixed") {

        activeQuestions = [
            ...quizData.machine,
            ...quizData.resins,
            ...quizData.materials,
            ...quizData.processing,
            ...quizData.startup,
            ...quizData.moldsetup,
            ...quizData.cooling,
            ...quizData.quality,
            ...quizData.troubleshooting,
            ...quizData.hotrunner,
            ...quizData.robotics,
            ...quizData.scientific,
            ...quizData.advanced
        ];

        activeQuestions = shuffleItems(activeQuestions);

    }

    else {

        if (!quizData[category]) {

            document.getElementById("quizBox").innerHTML = `

                <p class="incorrect">
                    This quiz category was not found.
                </p>

            `;

            return;

        }

        activeQuestions =
            shuffleItems(quizData[category]);

    }

    document.getElementById("quizTitle").innerText =
        getCategoryTitle(category) + (hardMode ? " - Hard Mode" : "");

    document.getElementById("resultBox").innerHTML = `

        <p>
            ${
                hardMode
                    ? "Hard Mode is active. Explanations will appear at the end."
                    : "Answer each question to complete the test."
            }
        </p>

    `;

    showQuestion();

}

function showQuestion() {

    const quizBox =
        document.getElementById("quizBox");

    const question =
        activeQuestions[currentQuestionIndex];

    const shuffledAnswers =
        shuffleItems(question.answers);

    let answerButtons =
        "";

    shuffledAnswers.forEach((answer, index) => {

        answerButtons += `

            <button class="answer-button" data-answer-index="${index}">
                ${answer}
            </button>

        `;

    });

    quizBox.innerHTML = `

        <h3>
            Question ${currentQuestionIndex + 1} of ${activeQuestions.length}
        </h3>

        <p>
            ${question.question}
        </p>

        ${answerButtons}

    `;

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach((button, index) => {

        button.addEventListener("click", function () {

            checkAnswer(shuffledAnswers[index]);

        });

    });

}

function checkAnswer(selectedAnswer) {

    const question =
        activeQuestions[currentQuestionIndex];

    const resultBox =
        document.getElementById("resultBox");

    const answerButtons =
        document.querySelectorAll(".answer-button");

    answerButtons.forEach(button => {

        button.disabled = true;

    });

    if (selectedAnswer === question.correct) {

        score++;

        if (hardMode) {

            resultBox.innerHTML = `

                <p class="correct">
                    Answer locked in.
                </p>

                <button onclick="nextQuestion()">
                    Next Question
                </button>

            `;

        }

        else {

            resultBox.innerHTML = `

                <p class="correct">
                    Correct!
                </p>

                <p>
                    ${question.explanation}
                </p>

                <button onclick="nextQuestion()">
                    Next Question
                </button>

            `;

        }

    }

    else {

        missedQuestions.push({
            question: question.question,
            selected: selectedAnswer,
            correct: question.correct,
            explanation: question.explanation
        });

        if (hardMode) {

            resultBox.innerHTML = `

                <p>
                    Answer locked in.
                </p>

                <button onclick="nextQuestion()">
                    Next Question
                </button>

            `;

        }

        else {

            resultBox.innerHTML = `

                <p class="incorrect">
                    Incorrect.
                </p>

                <p>
                    Correct Answer:
                    <strong>${question.correct}</strong>
                </p>

                <p>
                    ${question.explanation}
                </p>

                <button onclick="nextQuestion()">
                    Next Question
                </button>

            `;

        }

    }

}

function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex < activeQuestions.length) {

        document.getElementById("resultBox").innerHTML = `

            <p>
                ${
                    hardMode
                        ? "Select your answer. Explanations will appear at the end."
                        : "Select your answer."
                }
            </p>

        `;

        showQuestion();

    }

    else {

        showFinalScore();

    }

}

function showFinalScore() {

    const quizBox =
        document.getElementById("quizBox");

    const resultBox =
        document.getElementById("resultBox");

    const percent =
        Math.round((score / activeQuestions.length) * 100);

    saveQuizScore(
        selectedCategory,
        score,
        activeQuestions.length,
        percent
    );

    updateQuizScoreBoard();

    quizBox.innerHTML = `

        <h3>Test Complete</h3>

        <p>
            You completed the ${getCategoryTitle(selectedCategory)}${hardMode ? " in Hard Mode" : ""}.
        </p>

    `;

    let passStatus = "";
    let feedback = "";

    if (hardMode) {

        if (percent >= 80) {

            passStatus =
                "PASSED HARD MODE";

            feedback =
                "Strong work. You passed the technician-level version of this test.";

        }

        else {

            passStatus =
                "DID NOT PASS HARD MODE";

            feedback =
                "Review the missed questions, study the lesson again, and retake the test. Hard Mode requires 80%.";

        }

    }

    else {

        if (percent >= 90) {

            passStatus =
                "EXCELLENT";

            feedback =
                "Excellent work. You are showing strong technician-level understanding.";

        }

        else if (percent >= 75) {

            passStatus =
                "GOOD";

            feedback =
                "Good job. You understand the main concepts, but a little review would help.";

        }

        else if (percent >= 60) {

            passStatus =
                "NEEDS REVIEW";

            feedback =
                "You are getting there. Review the lesson category and retake the test.";

        }

        else {

            passStatus =
                "RETRAINING RECOMMENDED";

            feedback =
                "Keep training. Go back through the lesson material and focus on the missed concepts.";

        }

    }

    let missedReview = "";

    if (hardMode && missedQuestions.length > 0) {

        missedReview = `

            <h3>Missed Question Review</h3>

            ${missedQuestions.map(item => `

                <div class="score-card missed-question-card">

                    <p>
                        <strong>Question:</strong>
                        ${item.question}
                    </p>

                    <p>
                        <strong>Your Answer:</strong>
                        ${item.selected}
                    </p>

                    <p>
                        <strong>Correct Answer:</strong>
                        ${item.correct}
                    </p>

                    <p>
                        <strong>Explanation:</strong>
                        ${item.explanation}
                    </p>

                </div>

            `).join("")}

        `;

    }

    else if (hardMode && missedQuestions.length === 0) {

        missedReview = `

            <div class="score-card">

                <h3>Perfect Hard Mode Score</h3>

                <p>
                    You did not miss any questions in Hard Mode.
                </p>

            </div>

        `;

    }

    resultBox.innerHTML = `

        <h3>Final Score</h3>

        <p>
            Status:
            <strong>${passStatus}</strong>
        </p>

        <p>
            Score:
            <strong>${score} / ${activeQuestions.length}</strong>
        </p>

        <p>
            Percentage:
            <strong>${percent}%</strong>
        </p>

        <p>
            ${feedback}
        </p>

        <p class="saved-score-message">
            Score saved successfully.
        </p>

        ${missedReview}

        <div class="button-group">

            <button onclick="restartSameQuiz()">
                Retake Same Test
            </button>

            <button onclick="resetQuizSelection()">
                Choose Different Test
            </button>

        </div>

    `;

}

function saveQuizScore(category, currentScore, totalQuestions, percent) {

    const scoreKey =
        hardMode
            ? "quiz-score-" + category + "-hard"
            : "quiz-score-" + category;

    const existingScore =
        JSON.parse(localStorage.getItem(scoreKey)) || {
            bestPercent: 0,
            bestScore: 0,
            bestTotal: totalQuestions,
            lastPercent: 0,
            lastScore: 0,
            lastTotal: totalQuestions,
            attempts: 0,
            lastTaken: "Never"
        };

    existingScore.lastPercent =
        percent;

    existingScore.lastScore =
        currentScore;

    existingScore.lastTotal =
        totalQuestions;

    existingScore.attempts =
        (existingScore.attempts || 0) + 1;

    if (percent > existingScore.bestPercent) {

        existingScore.bestPercent =
            percent;

        existingScore.bestScore =
            currentScore;

        existingScore.bestTotal =
            totalQuestions;

    }

    existingScore.lastTaken =
        new Date().toLocaleString();

    localStorage.setItem(scoreKey, JSON.stringify(existingScore));

}

function updateQuizScoreBoard() {

    const scoreHistoryBox =
        document.getElementById("scoreHistoryBox");

    if (!scoreHistoryBox) {
        return;
    }

    let scoreCards = "";

    categories.forEach(category => {

        const normalScore =
            JSON.parse(localStorage.getItem("quiz-score-" + category));

        const hardScore =
            JSON.parse(localStorage.getItem("quiz-score-" + category + "-hard"));

        if (normalScore) {

            scoreCards += createScoreCard(
                category,
                normalScore,
                "Normal Mode"
            );

        }

        if (hardScore) {

            scoreCards += createScoreCard(
                category,
                hardScore,
                "Hard Mode"
            );

        }

    });

    if (scoreCards === "") {

        scoreHistoryBox.innerHTML = `

            <p>
                No quiz scores saved yet. Complete a test to save your first score.
            </p>

        `;

    }

    else {

        scoreHistoryBox.innerHTML =
            scoreCards;

    }

}

function createScoreCard(category, savedScore, modeName) {

    return `

        <div class="score-card">

            <h3>${getCategoryTitle(category)} - ${modeName}</h3>

            <p>
                Best Score:
                <strong>${savedScore.bestPercent}%</strong>
                (${savedScore.bestScore} / ${savedScore.bestTotal})
            </p>

            <p>
                Last Score:
                <strong>${savedScore.lastPercent}%</strong>
                (${savedScore.lastScore} / ${savedScore.lastTotal})
            </p>

            <p>
                Attempts:
                <strong>${savedScore.attempts}</strong>
            </p>

            <p>
                Last Taken:
                <strong>${savedScore.lastTaken}</strong>
            </p>

        </div>

    `;

}

function resetQuizScores() {

    const confirmReset =
        confirm("Are you sure you want to reset all saved quiz scores?");

    if (!confirmReset) {
        return;
    }

    categories.forEach(category => {

        localStorage.removeItem("quiz-score-" + category);

        localStorage.removeItem("quiz-score-" + category + "-hard");

    });

    updateQuizScoreBoard();

}

function restartSameQuiz() {

    startQuiz(selectedCategory);

}

function resetQuizSelection() {

    activeQuestions = [];

    currentQuestionIndex = 0;

    score = 0;

    selectedCategory = "";

    missedQuestions = [];

    document.getElementById("quizTitle").innerText =
        "Quiz";

    document.getElementById("quizBox").innerHTML = `

        <p>
            Select a test category to begin.
        </p>

    `;

    document.getElementById("resultBox").innerHTML = `

        <p>
            Your score and feedback will appear here.
        </p>

    `;

}

function getCategoryTitle(category) {

    if (category === "machine") {
        return "Machine Basics Test";
    }

    else if (category === "resins") {
        return "Resins, Materials & Additives Test";
    }

    else if (category === "materials") {
        return "Materials & Resin Science Test";
    }

    else if (category === "processing") {
        return "Processing Parameters Test";
    }

    else if (category === "startup") {
        return "Startup & Shutdown Procedures Test";
    }

    else if (category === "moldsetup") {
        return "Mold Setup & Changeover Test";
    }

    else if (category === "cooling") {
        return "Water & Cooling Systems Test";
    }

    else if (category === "quality") {
        return "Quality & Inspection Test";
    }

    else if (category === "troubleshooting") {
        return "Troubleshooting Test";
    }

    else if (category === "hotrunner") {
        return "Hot Runner Systems Test";
    }

    else if (category === "robotics") {
        return "Robotics & Automation Test";
    }

    else if (category === "scientific") {
        return "Scientific Molding Test";
    }

    else if (category === "advanced") {
        return "Advanced Injection Molding Test";
    }

    else if (category === "mixed") {
        return "Full Mixed Final Exam";
    }

    else {
        return "Quiz";
    }

}

function shuffleItems(array) {

    const copiedArray =
        [...array];

    for (let i = copiedArray.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        const temporaryValue =
            copiedArray[i];

        copiedArray[i] =
            copiedArray[randomIndex];

        copiedArray[randomIndex] =
            temporaryValue;

    }

    return copiedArray;

}

updateQuizScoreBoard();