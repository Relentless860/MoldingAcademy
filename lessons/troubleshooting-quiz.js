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
                "The hopper stores plastic pellets and feeds them into the barrel."
        },

        {
            question: "Which component conveys, compresses, melts, mixes, meters, and injects plastic?",
            answers: [
                "Screw",
                "Platen",
                "Tie bar",
                "Ejector plate"
            ],
            correct: "Screw",
            explanation:
                "The screw moves material through the barrel and prepares the shot."
        },

        {
            question: "What does the clamp unit do?",
            answers: [
                "Keeps the mold closed during injection",
                "Dries the material",
                "Controls colorant ratio",
                "Removes moisture from resin"
            ],
            correct: "Keeps the mold closed during injection",
            explanation:
                "Clamp force keeps the mold closed against cavity pressure."
        },

        {
            question: "What can too little clamp tonnage cause?",
            answers: [
                "Flash",
                "Splay",
                "Low screw RPM",
                "Material drying"
            ],
            correct: "Flash",
            explanation:
                "Low clamp force can allow the mold to open slightly and create flash."
        },

        {
            question: "What is mold protection designed to prevent?",
            answers: [
                "Mold damage during closing",
                "Color changes",
                "Material drying",
                "Shot size changes"
            ],
            correct: "Mold damage during closing",
            explanation:
                "Mold protection detects obstructions before full clamp force is applied."
        },

        {
            question: "What happens during pack and hold?",
            answers: [
                "Material is packed into the part to compensate for shrinkage",
                "The mold opens",
                "The hopper dries material",
                "The robot removes the part"
            ],
            correct: "Material is packed into the part to compensate for shrinkage",
            explanation:
                "Pack and hold pressure helps control shrinkage, sinks, and part weight."
        },

        {
            question: "What does the ejector system do?",
            answers: [
                "Removes the finished part from the mold",
                "Controls melt temperature",
                "Feeds resin to the barrel",
                "Applies back pressure"
            ],
            correct: "Removes the finished part from the mold",
            explanation:
                "Ejectors push or assist the molded part out after cooling."
        }

    ],

    processing: [

        {
            question: "What does melt temperature mainly affect?",
            answers: [
                "Material viscosity and flow",
                "Tie bar spacing",
                "Robot speed",
                "Operator schedule"
            ],
            correct: "Material viscosity and flow",
            explanation:
                "Melt temperature changes how easily the plastic flows."
        },

        {
            question: "What can low melt temperature cause?",
            answers: [
                "Short shots and poor flow",
                "Perfect flow every time",
                "Lower injection pressure demand",
                "No effect"
            ],
            correct: "Short shots and poor flow",
            explanation:
                "Cold material is more viscous and harder to fill into the cavity."
        },

        {
            question: "What does injection speed control?",
            answers: [
                "How fast the cavity fills",
                "How long material dries",
                "How much water flows through the mold",
                "How far the mold opens"
            ],
            correct: "How fast the cavity fills",
            explanation:
                "Injection speed controls the movement of the flow front."
        },

        {
            question: "What can excessive injection speed cause?",
            answers: [
                "Burn marks or jetting",
                "Better drying",
                "No shear heat",
                "Lower gas trapping"
            ],
            correct: "Burn marks or jetting",
            explanation:
                "Fast injection can trap gas, create shear heat, or cause jetting."
        },

        {
            question: "What does hold pressure do?",
            answers: [
                "Packs material into the part after filling",
                "Rotates the screw",
                "Opens the mold",
                "Controls dryer airflow"
            ],
            correct: "Packs material into the part after filling",
            explanation:
                "Hold pressure compensates for shrinkage after fill."
        },

        {
            question: "Hold time is only useful until what happens?",
            answers: [
                "The gate freezes",
                "The hopper empties",
                "The mold opens",
                "The operator weighs parts"
            ],
            correct: "The gate freezes",
            explanation:
                "After gate freeze, hold pressure can no longer pack material into the cavity."
        },

        {
            question: "What is cushion?",
            answers: [
                "Material left in front of the screw after injection",
                "A soft pad behind the mold",
                "A dryer filter",
                "A robot safety zone"
            ],
            correct: "Material left in front of the screw after injection",
            explanation:
                "Cushion allows pressure transfer and prevents the screw from bottoming out."
        },

        {
            question: "What is transfer position?",
            answers: [
                "The switch point from fill to pack/hold",
                "The robot home position",
                "The dryer setpoint",
                "The chiller return port"
            ],
            correct: "The switch point from fill to pack/hold",
            explanation:
                "Transfer separates first-stage fill from second-stage pack/hold."
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
            question: "Thin plastic fins along the parting line are called what?",
            answers: [
                "Flash",
                "Sink marks",
                "Voids",
                "Weld lines"
            ],
            correct: "Flash",
            explanation:
                "Flash is excess plastic escaping through parting lines, vents, or shutoffs."
        },

        {
            question: "Surface depressions in thick areas are usually what?",
            answers: [
                "Sink marks",
                "Jetting",
                "Black specks",
                "Flow lines"
            ],
            correct: "Sink marks",
            explanation:
                "Sink marks are caused by shrinkage, usually in thick sections."
        },

        {
            question: "Dark discoloration near the end of fill often points to what?",
            answers: [
                "Burn marks",
                "Voids",
                "Ejector marks",
                "Shrinkage only"
            ],
            correct: "Burn marks",
            explanation:
                "Burn marks often come from trapped gas, poor venting, or excessive heat."
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
                "Splay is often caused by moisture, trapped gas, contamination, or shear."
        },

        {
            question: "Snake-like flow marks near the gate are usually what?",
            answers: [
                "Jetting",
                "Voids",
                "Black specks",
                "Dimensional variation"
            ],
            correct: "Jetting",
            explanation:
                "Jetting occurs when plastic shoots into the cavity before contacting the mold wall."
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
            question: "Random dark particles in molded parts are usually what?",
            answers: [
                "Black specks",
                "Jetting",
                "Mold protection",
                "Cushion"
            ],
            correct: "Black specks",
            explanation:
                "Black specks often come from contamination, degraded resin, or burnt material."
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
                "Thermoplastics can usually be melted, shaped, cooled, and reheated."
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
                "Hygroscopic materials absorb moisture and often require drying."
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
                "Moisture can turn to steam during molding and cause splay or bubbles."
        },

        {
            question: "Which materials usually shrink more?",
            answers: [
                "Crystalline materials",
                "Amorphous materials",
                "Metals",
                "Water"
            ],
            correct: "Crystalline materials",
            explanation:
                "Crystalline materials usually shrink more as molecular structure forms during cooling."
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
                "MFI helps compare flow behavior under specific lab conditions."
        },

        {
            question: "What is viscosity?",
            answers: [
                "Resistance to flow",
                "Cooling water pressure",
                "Clamp speed",
                "Ejector stroke"
            ],
            correct: "Resistance to flow",
            explanation:
                "Viscosity describes how thick or resistant to flow a material is."
        },

        {
            question: "What can excessive or inconsistent regrind cause?",
            answers: [
                "Brittleness, color variation, and dimensional variation",
                "Perfect consistency",
                "No contamination risk",
                "No property change"
            ],
            correct: "Brittleness, color variation, and dimensional variation",
            explanation:
                "Regrind has heat history and must be controlled carefully."
        }

    ],

    moldsetup: [

        {
            question: "What should be verified first during mold preparation?",
            answers: [
                "Correct mold identification",
                "Operator lunch schedule",
                "Box label color",
                "Robot speed only"
            ],
            correct: "Correct mold identification",
            explanation:
                "The mold number should match the work order before setup begins."
        },

        {
            question: "What does machine / mold match verify?",
            answers: [
                "The mold fits the press and the machine can run the job safely",
                "The part color is correct",
                "The operator is trained",
                "The chiller brand"
            ],
            correct: "The mold fits the press and the machine can run the job safely",
            explanation:
                "Tie bar spacing, mold height, tonnage, shot size, and ejectors must match."
        },

        {
            question: "Why is nozzle alignment important?",
            answers: [
                "To prevent leaks, damage, and flow restriction",
                "To improve box stacking",
                "To reduce dryer dew point",
                "To change resin type"
            ],
            correct: "To prevent leaks, damage, and flow restriction",
            explanation:
                "Poor nozzle seating can cause leakage, sprue issues, or damage."
        },

        {
            question: "What should be verified after connecting waterlines?",
            answers: [
                "Water flow and leaks",
                "Only the color of the hoses",
                "Operator badge number",
                "Only the mold name"
            ],
            correct: "Water flow and leaks",
            explanation:
                "Connected hoses do not guarantee flow. Flow and leaks must be checked."
        },

        {
            question: "Why is dry cycling important?",
            answers: [
                "It verifies mold, ejector, core, and machine movement before production",
                "It dries the resin",
                "It replaces first-piece inspection",
                "It increases regrind"
            ],
            correct: "It verifies mold, ejector, core, and machine movement before production",
            explanation:
                "Dry cycling helps catch motion and setup issues before plastic is injected."
        },

        {
            question: "What is a major risk of poor mold protection setup?",
            answers: [
                "Mold damage",
                "Better cycle time",
                "Improved drying",
                "Reduced need for inspection"
            ],
            correct: "Mold damage",
            explanation:
                "Incorrect mold protection can allow stuck parts or obstructions to damage tooling."
        }

    ],

    scientific: [

        {
            question: "What is scientific molding mainly based on?",
            answers: [
                "Data and controlled studies",
                "Guessing",
                "Changing multiple settings at once",
                "Only visual inspection"
            ],
            correct: "Data and controlled studies",
            explanation:
                "Scientific molding uses process data instead of random adjustments."
        },

        {
            question: "What does decoupled molding separate?",
            answers: [
                "Filling from packing",
                "Material from color",
                "Water from oil",
                "The mold from the machine"
            ],
            correct: "Filling from packing",
            explanation:
                "Decoupled molding separates first-stage fill from second-stage pack/hold."
        },

        {
            question: "What does a fill-only study help identify?",
            answers: [
                "Fill pattern, transfer position, and cavity balance",
                "Only robot speed",
                "Only dryer temperature",
                "Only box count"
            ],
            correct: "Fill pattern, transfer position, and cavity balance",
            explanation:
                "Fill-only studies show how the mold fills without pack/hold influence."
        },

        {
            question: "What does a viscosity curve compare?",
            answers: [
                "Injection speed, fill time, and pressure response",
                "Only part color",
                "Only ejector stroke",
                "Only cooling water"
            ],
            correct: "Injection speed, fill time, and pressure response",
            explanation:
                "A viscosity curve helps find a stable fill-speed range."
        },

        {
            question: "What does a gate freeze study use heavily?",
            answers: [
                "Part weight at different hold times",
                "Robot home position",
                "Colorant label",
                "Conveyor belt speed"
            ],
            correct: "Part weight at different hold times",
            explanation:
                "Gate freeze is found when part weight stops increasing as hold time increases."
        },

        {
            question: "Why is cushion control important?",
            answers: [
                "It supports repeatable pressure transfer",
                "It changes material color",
                "It cools the mold",
                "It replaces drying"
            ],
            correct: "It supports repeatable pressure transfer",
            explanation:
                "Stable cushion helps maintain consistent packing pressure."
        }

    ],

    quality: [

        {
            question: "What does first-piece inspection confirm?",
            answers: [
                "Parts meet requirements before full production",
                "The mold can be skipped",
                "Material no longer matters",
                "Operators do not need samples"
            ],
            correct: "Parts meet requirements before full production",
            explanation:
                "First-piece inspection verifies setup and part quality before production release."
        },

        {
            question: "Why should parts be checked by cavity on multi-cavity molds?",
            answers: [
                "One cavity may have a unique issue",
                "Cavity tracking is never useful",
                "All cavities are always identical",
                "Only the runner matters"
            ],
            correct: "One cavity may have a unique issue",
            explanation:
                "Cavity-specific tracking helps locate mold or hot runner problems."
        },

        {
            question: "What can part weight tracking reveal?",
            answers: [
                "Fill, pack, and process stability changes",
                "Only operator name",
                "Only box size",
                "Only chiller brand"
            ],
            correct: "Fill, pack, and process stability changes",
            explanation:
                "Part weight is a strong indicator of process consistency."
        },

        {
            question: "What is containment?",
            answers: [
                "Separating suspect or defective parts to protect the customer",
                "Mixing all parts together",
                "Skipping inspection",
                "Changing material without notice"
            ],
            correct: "Separating suspect or defective parts to protect the customer",
            explanation:
                "Containment prevents suspect parts from reaching the customer or next operation."
        },

        {
            question: "What does root cause thinking focus on?",
            answers: [
                "Why the defect happened",
                "Only hiding the defect",
                "Only increasing pressure",
                "Ignoring trends"
            ],
            correct: "Why the defect happened",
            explanation:
                "Root cause thinking identifies the true cause so the issue does not repeat."
        },

        {
            question: "Why is shift handoff important?",
            answers: [
                "It communicates process changes, quality issues, and open risks",
                "It replaces all documentation",
                "It removes the need for quality checks",
                "It only lists break times"
            ],
            correct: "It communicates process changes, quality issues, and open risks",
            explanation:
                "Good handoff prevents repeated mistakes and missed quality issues."
        }

    ],

    hotrunner: [

        {
            question: "What does a hot runner system do?",
            answers: [
                "Keeps plastic molten inside heated channels",
                "Cools the mold only",
                "Dries resin",
                "Applies clamp force"
            ],
            correct: "Keeps plastic molten inside heated channels",
            explanation:
                "Hot runners use heated manifolds and drops to deliver molten plastic to gates."
        },

        {
            question: "What does the manifold do?",
            answers: [
                "Distributes molten plastic to hot runner drops",
                "Ejects parts",
                "Runs the conveyor",
                "Stores resin"
            ],
            correct: "Distributes molten plastic to hot runner drops",
            explanation:
                "The manifold distributes melt from the inlet to each drop."
        },

        {
            question: "What can a cold drop cause?",
            answers: [
                "Short shot in one cavity",
                "Better flow always",
                "No pressure change",
                "Lower cycle time only"
            ],
            correct: "Short shot in one cavity",
            explanation:
                "A cold or restricted drop often affects one cavity repeatedly."
        },

        {
            question: "What do thermocouples do in a hot runner?",
            answers: [
                "Read temperature and provide feedback to the controller",
                "Open the mold",
                "Remove parts",
                "Measure part weight"
            ],
            correct: "Read temperature and provide feedback to the controller",
            explanation:
                "Thermocouples allow the controller to regulate zone temperature."
        },

        {
            question: "What can poor hot runner balance cause?",
            answers: [
                "Some cavities flash while others short shot",
                "Perfect cavity balance",
                "No dimensional variation",
                "No need for inspection"
            ],
            correct: "Some cavities flash while others short shot",
            explanation:
                "Imbalanced filling can create different defects cavity to cavity."
        },

        {
            question: "Why are hot runner color changes sometimes difficult?",
            answers: [
                "Old color can remain inside flow channels",
                "Hot runners cannot process color",
                "Color changes never require purging",
                "Only cold runners hold old color"
            ],
            correct: "Old color can remain inside flow channels",
            explanation:
                "Manifolds and drops can trap old color or degraded material."
        }

    ],

    cooling: [

        {
            question: "Why is cooling so important in injection molding?",
            answers: [
                "It affects cycle time, dimensions, shrinkage, and warpage",
                "It only changes hopper level",
                "It replaces packing pressure",
                "It removes the need for quality"
            ],
            correct: "It affects cycle time, dimensions, shrinkage, and warpage",
            explanation:
                "Cooling is one of the biggest drivers of cycle time and part stability."
        },

        {
            question: "What should be checked before adding more cooling time?",
            answers: [
                "Water flow and routing",
                "Only operator schedule",
                "Only part color",
                "Only box count"
            ],
            correct: "Water flow and routing",
            explanation:
                "Poor water flow should be corrected instead of hidden with extra cooling time."
        },

        {
            question: "What can blocked waterlines cause?",
            answers: [
                "Hot spots, warpage, sticking, and long cycle times",
                "Perfect cooling",
                "Lower mold temperature everywhere",
                "Better part release every time"
            ],
            correct: "Hot spots, warpage, sticking, and long cycle times",
            explanation:
                "Restricted circuits reduce heat removal and cause local temperature problems."
        },

        {
            question: "What is turbulent flow important for?",
            answers: [
                "Better heat transfer",
                "Color mixing only",
                "Ejector return only",
                "Robot grip force"
            ],
            correct: "Better heat transfer",
            explanation:
                "Turbulent water flow removes heat more effectively than laminar flow."
        },

        {
            question: "What can condensation on a mold cause?",
            answers: [
                "Water marks, rust, and unsafe conditions",
                "Improved drying",
                "Higher clamp force",
                "Better material viscosity"
            ],
            correct: "Water marks, rust, and unsafe conditions",
            explanation:
                "Condensation can create defects, rust risk, and safety issues."
        },

        {
            question: "Cooling-related warpage is usually caused by what?",
            answers: [
                "Uneven cooling and uneven shrinkage",
                "Perfect mold balance",
                "Correct water flow everywhere",
                "Only colorant ratio"
            ],
            correct: "Uneven cooling and uneven shrinkage",
            explanation:
                "Uneven cooling causes areas of the part to shrink differently."
        }

    ],

    robotics: [

        {
            question: "What is the main purpose of automation in injection molding?",
            answers: [
                "Remove parts, improve consistency, and reduce manual handling",
                "Dry resin",
                "Create clamp force",
                "Heat the barrel"
            ],
            correct: "Remove parts, improve consistency, and reduce manual handling",
            explanation:
                "Automation supports part removal, handling, sorting, insert loading, and consistency."
        },

        {
            question: "What is EOAT?",
            answers: [
                "End-of-arm tooling",
                "Extra oil and temperature",
                "Ejector-only automatic timer",
                "External operator access terminal"
            ],
            correct: "End-of-arm tooling",
            explanation:
                "EOAT is the tooling mounted to the robot arm to grip, vacuum, or support parts."
        },

        {
            question: "What signal tells the machine it is safe to close the mold?",
            answers: [
                "Robot clear signal",
                "Color signal",
                "Dryer ready signal only",
                "Part weight signal"
            ],
            correct: "Robot clear signal",
            explanation:
                "The robot clear signal confirms the robot is out of the mold area."
        },

        {
            question: "What can vacuum failure cause?",
            answers: [
                "Dropped parts",
                "Better part pickup",
                "Lower moisture",
                "Higher melt temperature"
            ],
            correct: "Dropped parts",
            explanation:
                "Vacuum loss can cause parts to fall during removal or transfer."
        },

        {
            question: "Why is part detection important?",
            answers: [
                "It helps prevent stuck parts and mold crashes",
                "It replaces mold protection",
                "It controls barrel heat",
                "It dries material"
            ],
            correct: "It helps prevent stuck parts and mold crashes",
            explanation:
                "Part detection confirms whether parts were removed properly."
        },

        {
            question: "What should be verified before robot pickup?",
            answers: [
                "Stable part ejection",
                "Only box count",
                "Only regrind amount",
                "Only chiller brand"
            ],
            correct: "Stable part ejection",
            explanation:
                "Automation cannot be reliable if parts are not ejected consistently."
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
            ...quizData.materials,
            ...quizData.moldsetup,
            ...quizData.scientific,
            ...quizData.quality,
            ...quizData.hotrunner,
            ...quizData.cooling,
            ...quizData.robotics
        ];

        activeQuestions = shuffleItems(activeQuestions);

        document.getElementById("quizTitle").innerText =
            "Full Mixed Final Exam";

    }

    else {

        activeQuestions =
            shuffleItems(quizData[category]);

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
        shuffleItems(question.answers);

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

    const answerButtons =
        document.querySelectorAll("#quizBox button");

    answerButtons.forEach(button => {
        button.disabled = true;
    });

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
        "quiz-score-" + category;

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

    const categories = [
        "machine",
        "processing",
        "troubleshooting",
        "materials",
        "moldsetup",
        "scientific",
        "quality",
        "hotrunner",
        "cooling",
        "robotics",
        "mixed"
    ];

    let scoreCards = "";

    categories.forEach(category => {

        const scoreKey =
            "quiz-score-" + category;

        const savedScore =
            JSON.parse(localStorage.getItem(scoreKey));

        if (savedScore) {

            scoreCards += `

                <div class="score-card">

                    <h3>${getCategoryTitle(category)}</h3>

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

function resetQuizScores() {

    const confirmReset =
        confirm("Are you sure you want to reset all saved quiz scores?");

    if (!confirmReset) {
        return;
    }

    const categories = [
        "machine",
        "processing",
        "troubleshooting",
        "materials",
        "moldsetup",
        "scientific",
        "quality",
        "hotrunner",
        "cooling",
        "robotics",
        "mixed"
    ];

    categories.forEach(category => {

        localStorage.removeItem("quiz-score-" + category);

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

    else if (category === "moldsetup") {
        return "Mold Setup & Changeover Test";
    }

    else if (category === "scientific") {
        return "Scientific Molding Test";
    }

    else if (category === "quality") {
        return "Quality & Inspection Test";
    }

    else if (category === "hotrunner") {
        return "Hot Runner Systems Test";
    }

    else if (category === "cooling") {
        return "Water & Cooling Systems Test";
    }

    else if (category === "robotics") {
        return "Robotics & Automation Test";
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

function escapeText(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}

updateQuizScoreBoard();