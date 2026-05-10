const quizData = {

    machine: [

        {
            question: "What is the main purpose of the hopper?",
            answers: [
                "To store and feed resin into the barrel",
                "To cool the mold",
                "To apply clamp tonnage",
                "To eject finished parts"
            ],
            correct: "To store and feed resin into the barrel",
            explanation:
                "The hopper holds plastic pellets and feeds them into the barrel."
        },

        {
            question: "Which machine component melts and transports plastic through the barrel?",
            answers: [
                "Screw",
                "Platen",
                "Tie bar",
                "Ejector plate"
            ],
            correct: "Screw",
            explanation:
                "The screw conveys, compresses, melts, mixes, meters, and injects plastic."
        },

        {
            question: "What does the barrel do?",
            answers: [
                "Heats and helps melt the resin",
                "Closes the mold",
                "Removes parts from the tool",
                "Controls water flow"
            ],
            correct: "Heats and helps melt the resin",
            explanation:
                "The barrel uses heater bands and works with screw shear to melt plastic."
        },

        {
            question: "What can happen if the nozzle is too cold?",
            answers: [
                "Restricted flow or freeze-off",
                "Too much clamp force",
                "Excessive cooling water",
                "Ejector return failure"
            ],
            correct: "Restricted flow or freeze-off",
            explanation:
                "A cold nozzle can restrict material flow and cause freeze-off."
        },

        {
            question: "What is the main job of the clamp unit?",
            answers: [
                "Keep the mold closed during injection",
                "Dry the material",
                "Mix colorant",
                "Measure part weight"
            ],
            correct: "Keep the mold closed during injection",
            explanation:
                "The clamp unit closes the mold and applies force to resist cavity pressure."
        },

        {
            question: "What does the ejector system do?",
            answers: [
                "Removes the finished part from the mold",
                "Controls melt temperature",
                "Feeds resin into the barrel",
                "Applies back pressure"
            ],
            correct: "Removes the finished part from the mold",
            explanation:
                "The ejector system pushes or assists the part out of the mold after cooling."
        },

        {
            question: "During which cycle stage is molten plastic pushed into the cavity?",
            answers: [
                "Injection",
                "Cooling",
                "Ejection",
                "Screw recovery"
            ],
            correct: "Injection",
            explanation:
                "During injection, the screw moves forward and fills the cavity with molten plastic."
        },

        {
            question: "What is the purpose of pack and hold?",
            answers: [
                "Compensate for material shrinkage",
                "Open the mold",
                "Dry the resin",
                "Clean the hopper"
            ],
            correct: "Compensate for material shrinkage",
            explanation:
                "Pack and hold pressure pushes additional material into the cavity as the part shrinks."
        },

        {
            question: "What can happen if cooling time is too short?",
            answers: [
                "Warping or sticking",
                "Better dimensional stability",
                "Reduced internal stress",
                "Longer cycle time"
            ],
            correct: "Warping or sticking",
            explanation:
                "If the part is not solid enough before ejection, it can warp, deform, or stick."
        },

        {
            question: "What is mold protection designed to prevent?",
            answers: [
                "Mold damage during closing",
                "Material drying",
                "Shot size changes",
                "Color streaking"
            ],
            correct: "Mold damage during closing",
            explanation:
                "Mold protection uses low-pressure closing to detect stuck parts or obstructions."
        },

        {
            question: "What can too little clamp tonnage cause?",
            answers: [
                "Flash",
                "Splay",
                "Moisture absorption",
                "Low screw RPM"
            ],
            correct: "Flash",
            explanation:
                "If clamp force is too low, cavity pressure can force the mold open and create flash."
        },

        {
            question: "What can too much clamp tonnage cause?",
            answers: [
                "Vent crushing and mold stress",
                "Short cooling time",
                "Wet material",
                "Nozzle freeze-off only"
            ],
            correct: "Vent crushing and mold stress",
            explanation:
                "Excessive clamp force can crush vents, stress tooling, and damage the parting line."
        },

        {
            question: "What do tie bars and platens help maintain?",
            answers: [
                "Mold alignment and clamp force distribution",
                "Material drying time",
                "Resin color",
                "Part weight only"
            ],
            correct: "Mold alignment and clamp force distribution",
            explanation:
                "Tie bars and platens support mold alignment and distribute clamp load."
        },

        {
            question: "Which machine type commonly uses servo motors for precise movement?",
            answers: [
                "Electric machine",
                "Hydraulic machine",
                "Material dryer",
                "Hot runner controller"
            ],
            correct: "Electric machine",
            explanation:
                "Electric molding machines use servo motors for accurate motion control."
        },

        {
            question: "What should a technician do before making machine setting changes?",
            answers: [
                "Record the original settings",
                "Increase all pressures",
                "Turn off mold protection",
                "Ignore trend data"
            ],
            correct: "Record the original settings",
            explanation:
                "Recording original settings allows you to return to the baseline if the change fails."
        }

    ],

    processing: [

        {
            question: "What does melt temperature mainly affect?",
            answers: [
                "Material viscosity and flow",
                "Ejector pin length",
                "Operator schedule",
                "Mold clamp height only"
            ],
            correct: "Material viscosity and flow",
            explanation:
                "Melt temperature controls how easily the plastic flows into the mold."
        },

        {
            question: "What can happen if melt temperature is too low?",
            answers: [
                "Short shots and poor flow",
                "Material degradation only",
                "Lower injection pressure",
                "No process change"
            ],
            correct: "Short shots and poor flow",
            explanation:
                "Cold material is thicker and harder to push through the cavity."
        },

        {
            question: "What can happen if melt temperature is too high?",
            answers: [
                "Burning or degradation",
                "Better material strength always",
                "Less gas formation",
                "Nozzle freeze-off"
            ],
            correct: "Burning or degradation",
            explanation:
                "Excess heat can degrade resin and create gas, discoloration, and weak parts."
        },

        {
            question: "What does injection speed control?",
            answers: [
                "How fast the cavity fills",
                "How long material dries",
                "How much water flows through the mold",
                "How many parts are boxed"
            ],
            correct: "How fast the cavity fills",
            explanation:
                "Injection speed controls flow front movement during cavity filling."
        },

        {
            question: "What defect can injection speed that is too high cause?",
            answers: [
                "Burn marks or jetting",
                "Underdried material",
                "Low dryer dew point",
                "Less shear heat"
            ],
            correct: "Burn marks or jetting",
            explanation:
                "Excessive fill speed can trap gas, shear the material, or create jetting."
        },

        {
            question: "What does injection pressure help overcome?",
            answers: [
                "Flow resistance",
                "Material drying time",
                "Ejector pin return",
                "Color selection"
            ],
            correct: "Flow resistance",
            explanation:
                "Injection pressure pushes molten plastic through restrictions in the runner, gate, and cavity."
        },

        {
            question: "What can excessive injection pressure cause?",
            answers: [
                "Flash and overpacking",
                "Material drying",
                "Lower part weight",
                "Less cavity pressure"
            ],
            correct: "Flash and overpacking",
            explanation:
                "Too much pressure can overpack the mold and force plastic into parting lines."
        },

        {
            question: "What is the purpose of hold pressure?",
            answers: [
                "Pack material into the part after filling",
                "Rotate the screw during recovery",
                "Open the mold",
                "Cool the hopper"
            ],
            correct: "Pack material into the part after filling",
            explanation:
                "Hold pressure compensates for shrinkage after the cavity is filled."
        },

        {
            question: "What can low hold pressure cause?",
            answers: [
                "Sink marks and voids",
                "Excessive flash only",
                "Overpacking",
                "Nozzle drool only"
            ],
            correct: "Sink marks and voids",
            explanation:
                "Without enough packing pressure, thick areas can shrink and create sinks or voids."
        },

        {
            question: "What does hold time control?",
            answers: [
                "How long packing pressure is applied",
                "How fast the screw rotates",
                "How long resin sits in the hopper",
                "How much clamp oil is used"
            ],
            correct: "How long packing pressure is applied",
            explanation:
                "Hold time controls how long hold pressure remains active after transfer."
        },

        {
            question: "Hold time is only useful until what happens?",
            answers: [
                "The gate freezes",
                "The hopper empties",
                "The ejectors move forward",
                "The operator inspects the part"
            ],
            correct: "The gate freezes",
            explanation:
                "After gate freeze, additional hold time cannot pack more material into the part."
        },

        {
            question: "What does cooling time affect the most?",
            answers: [
                "Part solidification and cycle time",
                "Material loading only",
                "Dryer airflow only",
                "Colorant ratio only"
            ],
            correct: "Part solidification and cycle time",
            explanation:
                "Cooling time allows the part to solidify and often makes up most of the total cycle."
        },

        {
            question: "What does back pressure improve?",
            answers: [
                "Melt mixing and consistency",
                "Clamp tonnage",
                "Mold open stroke",
                "Water fitting size"
            ],
            correct: "Melt mixing and consistency",
            explanation:
                "Back pressure creates resistance during recovery and improves melt uniformity."
        },

        {
            question: "What can back pressure that is too high cause?",
            answers: [
                "Excessive shear heat",
                "Less screw wear",
                "Lower recovery time every time",
                "No material degradation"
            ],
            correct: "Excessive shear heat",
            explanation:
                "Too much back pressure can increase shear heat, recovery time, degradation, and screw wear."
        },

        {
            question: "What does screw RPM control?",
            answers: [
                "How fast the screw rotates during recovery",
                "How fast the mold opens only",
                "How much clamp force is applied",
                "The gate size"
            ],
            correct: "How fast the screw rotates during recovery",
            explanation:
                "Screw RPM controls recovery speed and affects shear heat."
        },

        {
            question: "What is cushion?",
            answers: [
                "Material left in front of the screw after injection",
                "A mold safety pad",
                "A hopper liner",
                "A dryer filter"
            ],
            correct: "Material left in front of the screw after injection",
            explanation:
                "Cushion is the remaining material that allows pressure transfer without bottoming out the screw."
        },

        {
            question: "What can an unstable cushion indicate?",
            answers: [
                "Process instability",
                "Perfect shot consistency",
                "Correct material drying",
                "Low mold temperature only"
            ],
            correct: "Process instability",
            explanation:
                "Large cushion variation can indicate shot inconsistency, check ring issues, or process instability."
        },

        {
            question: "What is transfer position?",
            answers: [
                "The switch point from fill to pack/hold",
                "The point where the part ejects",
                "The dryer changeover point",
                "The mold storage location"
            ],
            correct: "The switch point from fill to pack/hold",
            explanation:
                "Transfer position determines where the machine changes from first-stage injection to second-stage hold."
        },

        {
            question: "What can transfer that is too late cause?",
            answers: [
                "Flash and overpacking",
                "Short shots only",
                "Low part weight only",
                "No pressure rise"
            ],
            correct: "Flash and overpacking",
            explanation:
                "A late transfer can overfill the cavity before hold pressure begins."
        },

        {
            question: "What does mold temperature affect?",
            answers: [
                "Cooling rate, surface finish, shrinkage, and warpage",
                "Only hopper material level",
                "Only screw diameter",
                "Only operator login"
            ],
            correct: "Cooling rate, surface finish, shrinkage, and warpage",
            explanation:
                "Mold temperature strongly affects cooling, dimensions, appearance, and shrinkage."
        }

    ],

    troubleshooting: [

        {
            question: "A part is incomplete and missing material at the end of fill. What defect is this?",
            answers: [
                "Short shot",
                "Flash",
                "Splay",
                "Delamination"
            ],
            correct: "Short shot",
            explanation:
                "A short shot occurs when the cavity does not completely fill."
        },

        {
            question: "Which condition can cause a short shot?",
            answers: [
                "Low shot size",
                "Excessive clamp tonnage only",
                "Too much hold time after gate freeze",
                "Too much cooling water only"
            ],
            correct: "Low shot size",
            explanation:
                "If shot size is too low, there may not be enough material to fill and pack the cavity."
        },

        {
            question: "Thin plastic fins along the parting line are called what?",
            answers: [
                "Flash",
                "Sink marks",
                "Voids",
                "Weld lines"
            ],
            correct: "Flash",
            explanation:
                "Flash is excess material escaping through parting lines, vents, or shutoffs."
        },

        {
            question: "What can cause flash?",
            answers: [
                "High injection pressure or low clamp force",
                "Wet material only",
                "Low cooling time only",
                "Low screw RPM only"
            ],
            correct: "High injection pressure or low clamp force",
            explanation:
                "Flash can be caused by excessive cavity pressure, insufficient clamp force, or mold wear."
        },

        {
            question: "Surface depressions in thick areas are usually what defect?",
            answers: [
                "Sink marks",
                "Jetting",
                "Black specks",
                "Flow lines"
            ],
            correct: "Sink marks",
            explanation:
                "Sink marks are depressions caused by shrinkage, usually in thick sections."
        },

        {
            question: "Which correction commonly helps sink marks?",
            answers: [
                "Increase hold pressure or effective hold time",
                "Reduce all packing",
                "Lower shot size",
                "Disable cooling"
            ],
            correct: "Increase hold pressure or effective hold time",
            explanation:
                "More effective packing can reduce shrinkage in thick areas."
        },

        {
            question: "Dark discoloration near the end of fill often points to what defect?",
            answers: [
                "Burn marks",
                "Voids",
                "Ejector marks",
                "Shrinkage only"
            ],
            correct: "Burn marks",
            explanation:
                "Burn marks are often caused by trapped gas, poor venting, or excessive heat."
        },

        {
            question: "What mold issue commonly causes burn marks?",
            answers: [
                "Poor venting",
                "Oversized water fittings",
                "Too much ejector stroke",
                "Too much dryer airflow"
            ],
            correct: "Poor venting",
            explanation:
                "Poor venting traps gas and can cause burning when gas is compressed."
        },

        {
            question: "A bent or twisted part is usually caused by what defect condition?",
            answers: [
                "Warping",
                "Flash",
                "Black specks",
                "Splay"
            ],
            correct: "Warping",
            explanation:
                "Warping comes from uneven shrinkage, uneven cooling, or internal stress."
        },

        {
            question: "Silver streaks on the part surface are usually called what?",
            answers: [
                "Splay",
                "Flash",
                "Ejector marks",
                "Sink"
            ],
            correct: "Splay",
            explanation:
                "Splay appears as silver streaks and is often caused by moisture, gas, or shear."
        },

        {
            question: "What is the first thing to check when seeing splay on hygroscopic material?",
            answers: [
                "Drying conditions",
                "Clamp tonnage only",
                "Ejector stroke only",
                "Parting line wear only"
            ],
            correct: "Drying conditions",
            explanation:
                "Wet hygroscopic material is one of the most common causes of splay."
        },

        {
            question: "Snake-like flow marks starting near the gate are usually what?",
            answers: [
                "Jetting",
                "Voids",
                "Black specks",
                "Dimensional variation"
            ],
            correct: "Jetting",
            explanation:
                "Jetting happens when material shoots into the cavity before contacting the mold wall."
        },

        {
            question: "What adjustment often helps jetting?",
            answers: [
                "Reduce initial injection speed",
                "Increase contamination",
                "Remove mold protection",
                "Increase regrind randomly"
            ],
            correct: "Reduce initial injection speed",
            explanation:
                "Slowing the initial fill can help the melt contact the cavity wall more smoothly."
        },

        {
            question: "Internal hollow pockets in thick areas are called what?",
            answers: [
                "Voids",
                "Flash",
                "Flow lines",
                "Ejector marks"
            ],
            correct: "Voids",
            explanation:
                "Voids are internal empty pockets caused by shrinkage, trapped gas, or poor packing."
        },

        {
            question: "A visible line where two flow fronts meet is called what?",
            answers: [
                "Weld line",
                "Short shot",
                "Black speck",
                "Sink"
            ],
            correct: "Weld line",
            explanation:
                "Weld lines form where flow fronts meet and do not fully bond."
        },

        {
            question: "What can help improve weld line strength?",
            answers: [
                "Increase melt temperature or improve venting",
                "Lower material temperature drastically",
                "Reduce all packing",
                "Increase contamination"
            ],
            correct: "Increase melt temperature or improve venting",
            explanation:
                "Hotter flow fronts and better venting can improve bonding where flows meet."
        },

        {
            question: "Random dark particles in parts are usually called what?",
            answers: [
                "Black specks",
                "Jetting",
                "Mold protection",
                "Cushion"
            ],
            correct: "Black specks",
            explanation:
                "Black specks often come from degraded resin, contamination, or burnt material."
        },

        {
            question: "Peeling or layer separation in a molded part is called what?",
            answers: [
                "Delamination",
                "Flash",
                "Warping",
                "Cushion loss"
            ],
            correct: "Delamination",
            explanation:
                "Delamination occurs when layers separate due to contamination, poor bonding, or incompatible materials."
        },

        {
            question: "Round marks or stress marks from pins are usually what defect?",
            answers: [
                "Ejector marks",
                "Burn marks",
                "Flow lines",
                "Black specks"
            ],
            correct: "Ejector marks",
            explanation:
                "Ejector marks appear where pins or ejection force affect the part."
        },

        {
            question: "Shot-to-shot changes in measurements are called what?",
            answers: [
                "Dimensional variation",
                "Flash only",
                "Splay only",
                "Nozzle drool"
            ],
            correct: "Dimensional variation",
            explanation:
                "Dimensional variation means part measurements are not staying consistent."
        }

    ],

    materials: [

        {
            question: "What are thermoplastics able to do?",
            answers: [
                "Melt when heated and solidify when cooled",
                "Only cure once permanently",
                "Never be reheated",
                "Replace mold cooling"
            ],
            correct: "Melt when heated and solidify when cooled",
            explanation:
                "Thermoplastics can usually be reheated, melted, shaped, and cooled again."
        },

        {
            question: "Which materials are examples of commodity resins?",
            answers: [
                "PP, PE, and PS",
                "Steel and aluminum",
                "Copper and brass",
                "Water and oil"
            ],
            correct: "PP, PE, and PS",
            explanation:
                "Polypropylene, polyethylene, and polystyrene are common commodity resins."
        },

        {
            question: "Engineering resins are usually chosen for what?",
            answers: [
                "Higher performance requirements",
                "Only lowest possible cost",
                "No drying requirements ever",
                "No temperature sensitivity"
            ],
            correct: "Higher performance requirements",
            explanation:
                "Engineering resins are used where strength, heat resistance, or dimensional stability matter."
        },

        {
            question: "What does hygroscopic mean?",
            answers: [
                "The material absorbs moisture from the air",
                "The material never needs drying",
                "The material cannot be molded",
                "The material is always transparent"
            ],
            correct: "The material absorbs moisture from the air",
            explanation:
                "Hygroscopic materials absorb moisture and often need drying before processing."
        },

        {
            question: "What defect is commonly caused by wet hygroscopic material?",
            answers: [
                "Splay",
                "Perfect surface finish",
                "Lower moisture content",
                "Better impact strength"
            ],
            correct: "Splay",
            explanation:
                "Moisture can turn into steam during molding and cause splay or bubbles."
        },

        {
            question: "What does material drying depend on?",
            answers: [
                "Time, temperature, airflow, and dew point",
                "Clamp tonnage only",
                "Ejector stroke only",
                "Operator name only"
            ],
            correct: "Time, temperature, airflow, and dew point",
            explanation:
                "Effective drying requires proper time, temperature, airflow, and dry air quality."
        },

        {
            question: "Which type of material usually shrinks more?",
            answers: [
                "Crystalline",
                "Amorphous",
                "Metal",
                "Water"
            ],
            correct: "Crystalline",
            explanation:
                "Crystalline materials usually shrink more because their molecular structure organizes as they cool."
        },

        {
            question: "Which materials are examples of amorphous resins?",
            answers: [
                "ABS, PC, Acrylic, and PS",
                "PP, PE, Nylon, and Acetal only",
                "Steel and brass",
                "Oil and water"
            ],
            correct: "ABS, PC, Acrylic, and PS",
            explanation:
                "ABS, polycarbonate, acrylic, and polystyrene are common amorphous materials."
        },

        {
            question: "Which materials are examples of crystalline or semi-crystalline resins?",
            answers: [
                "PP, PE, Nylon, PBT, and Acetal",
                "ABS and PC only",
                "Acrylic only",
                "Rubber bands only"
            ],
            correct: "PP, PE, Nylon, PBT, and Acetal",
            explanation:
                "These materials develop crystalline regions as they cool and often shrink more."
        },

        {
            question: "What does Melt Flow Index help describe?",
            answers: [
                "How easily plastic flows under test conditions",
                "How many cavities are in a mold",
                "How much water is in the chiller",
                "How many ejector pins are used"
            ],
            correct: "How easily plastic flows under test conditions",
            explanation:
                "MFI compares flow behavior under specific lab test conditions."
        },

        {
            question: "Higher MFI usually means what?",
            answers: [
                "Easier flow",
                "Harder flow",
                "More clamp tonnage",
                "No flow difference"
            ],
            correct: "Easier flow",
            explanation:
                "A higher melt flow index generally means the material flows more easily."
        },

        {
            question: "What is viscosity?",
            answers: [
                "Resistance to flow",
                "Cooling water pressure",
                "Clamp speed",
                "Ejector stroke distance"
            ],
            correct: "Resistance to flow",
            explanation:
                "Viscosity describes how thick or resistant to flow the material is."
        },

        {
            question: "What usually happens to viscosity when melt temperature increases?",
            answers: [
                "Viscosity decreases",
                "Viscosity always increases",
                "The material becomes impossible to inject",
                "Clamp force disappears"
            ],
            correct: "Viscosity decreases",
            explanation:
                "As plastic gets hotter, it usually flows easier and has lower viscosity."
        },

        {
            question: "What is shrinkage?",
            answers: [
                "Reduction in part size as plastic cools",
                "Increase in hopper size",
                "Increase in screw diameter",
                "Only a color issue"
            ],
            correct: "Reduction in part size as plastic cools",
            explanation:
                "Plastic shrinks as it cools and solidifies."
        },

        {
            question: "What can excessive or inconsistent regrind cause?",
            answers: [
                "Brittleness, color variation, and dimensional variation",
                "Perfect consistency every time",
                "No contamination risk",
                "No property change"
            ],
            correct: "Brittleness, color variation, and dimensional variation",
            explanation:
                "Regrind has heat history and can introduce inconsistency if not controlled."
        },

        {
            question: "What issue can glass-filled materials cause over time?",
            answers: [
                "Screw, barrel, and tooling wear",
                "No wear at all",
                "Lower abrasion only",
                "No processing change"
            ],
            correct: "Screw, barrel, and tooling wear",
            explanation:
                "Glass-filled materials are abrasive and can wear machine and mold components."
        },

        {
            question: "What can poor colorant mixing cause?",
            answers: [
                "Color streaking",
                "Better gate freeze",
                "No surface defects",
                "Perfect drying"
            ],
            correct: "Color streaking",
            explanation:
                "Poor color dispersion can cause streaks and inconsistent appearance."
        },

        {
            question: "What is residence time?",
            answers: [
                "How long plastic remains heated in the barrel",
                "How long the operator is on break",
                "How long water stays in the chiller",
                "How long the mold sits on a bench"
            ],
            correct: "How long plastic remains heated in the barrel",
            explanation:
                "Residence time is the time resin spends heated inside the barrel before injection."
        },

        {
            question: "What can long residence time cause?",
            answers: [
                "Material degradation and black specks",
                "Perfect material quality",
                "Lower heat history",
                "No color change"
            ],
            correct: "Material degradation and black specks",
            explanation:
                "If material sits hot too long, it can degrade, discolor, burn, or create black specks."
        }

    ]

};

let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = "";

function startQuiz(category) {

    selectedCategory = category;
    currentQuestionIndex = 0;
    score = 0;

    if (category === "mixed") {

        activeQuestions = [
            ...quizData.machine,
            ...quizData.processing,
            ...quizData.troubleshooting,
            ...quizData.materials
        ];

        activeQuestions = shuffleQuestions(activeQuestions);

        document.getElementById("quizTitle").innerText =
            "Full Mixed Final Exam";

    }

    else {

        activeQuestions = shuffleQuestions(quizData[category]);

        document.getElementById("quizTitle").innerText =
            getCategoryTitle(category);

    }

    document.getElementById("resultBox").innerHTML = `

        <p>
            Answer each question to complete the test.
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
        shuffleQuestions(question.answers);

    quizBox.innerHTML = `

        <h3>
            Question ${currentQuestionIndex + 1} of ${activeQuestions.length}
        </h3>

        <p>
            ${question.question}
        </p>

        ${shuffledAnswers.map(answer => `

            <button onclick="checkAnswer('${escapeText(answer)}')">
                ${answer}
            </button>

        `).join("")}

    `;

}

function checkAnswer(selectedAnswer) {

    const question =
        activeQuestions[currentQuestionIndex];

    const resultBox =
        document.getElementById("resultBox");

    if (selectedAnswer === question.correct) {

        score++;

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

function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex < activeQuestions.length) {

        document.getElementById("resultBox").innerHTML = `

            <p>
                Select your answer.
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

    quizBox.innerHTML = `

        <h3>Test Complete</h3>

        <p>
            You completed the ${getCategoryTitle(selectedCategory)}.
        </p>

    `;

    let feedback = "";

    if (percent >= 90) {

        feedback =
            "Excellent work. You are showing strong technician-level understanding.";

    }

    else if (percent >= 75) {

        feedback =
            "Good job. You understand the main concepts, but a little review would help.";

    }

    else if (percent >= 60) {

        feedback =
            "You are getting there. Review the lesson category and retake the test.";

    }

    else {

        feedback =
            "Keep training. Go back through the lesson material and focus on the missed concepts.";

    }

    resultBox.innerHTML = `

        <h3>Final Score</h3>

        <p>
            Score: <strong>${score} / ${activeQuestions.length}</strong>
        </p>

        <p>
            Percentage: <strong>${percent}%</strong>
        </p>

        <p>
            ${feedback}
        </p>

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

function restartSameQuiz() {

    startQuiz(selectedCategory);

}

function resetQuizSelection() {

    activeQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    selectedCategory = "";

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

    else if (category === "processing") {
        return "Processing Parameters Test";
    }

    else if (category === "troubleshooting") {
        return "Troubleshooting Test";
    }

    else if (category === "materials") {
        return "Materials & Resin Science Test";
    }

    else if (category === "mixed") {
        return "Full Mixed Final Exam";
    }

    else {
        return "Quiz";
    }

}

function shuffleQuestions(array) {

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

function escapeText(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}