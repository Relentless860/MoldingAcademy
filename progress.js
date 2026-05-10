const lessons = [
    "machine-basics",
    "processing-parameters",
    "troubleshooting",
    "materials",
    "mold-setup",
    "scientific-molding",
    "advanced-lessons",
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