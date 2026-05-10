const lessons = [
    "machine-basics",
    "advanced-lessons",
    "startup-shutdown",
    "processing-parameters",
    "troubleshooting",
    "materials",
    "mold-setup",
    "scientific-molding",
    "quality-inspection",
    "hot-runners",
    "water-cooling",
    "robotics-automation",
    "troubleshooting-quiz"
];

function loadProgress() {

    let completedCount = 0;

    lessons.forEach(lesson => {

        if (localStorage.getItem(lesson) === "completed") {
            completedCount++;
        }

    });

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("progressFill");

    if (progressText && progressFill) {

        progressText.innerText =
            "Lessons Completed: " + completedCount + " / " + lessons.length;

        const percent =
            (completedCount / lessons.length) * 100;

        progressFill.style.width =
            percent + "%";

    }

    updateLessonBadges();

}

function updateLessonBadges() {

    const lessonCards =
        document.querySelectorAll(".lesson-card");

    lessonCards.forEach(card => {

        const lessonName =
            card.getAttribute("data-lesson");

        const statusText =
            card.querySelector(".lesson-status");

        if (!lessonName || !statusText) {
            return;
        }

        if (localStorage.getItem(lessonName) === "completed") {

            statusText.innerText =
                "✅ Completed";

            statusText.classList.add("completed-status");

            statusText.classList.remove("not-started-status");

        }

        else {

            statusText.innerText =
                "⚪ Not Started";

            statusText.classList.add("not-started-status");

            statusText.classList.remove("completed-status");

        }

    });

}

function markLessonComplete(lessonName) {

    localStorage.setItem(lessonName, "completed");

    alert("Lesson marked complete!");

    loadProgress();

}

function resetProgress() {

    const confirmReset =
        confirm("Are you sure you want to reset your progress?");

    if (!confirmReset) {
        return;
    }

    lessons.forEach(lesson => {
        localStorage.removeItem(lesson);
    });

    loadProgress();

}

loadProgress();