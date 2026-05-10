const lessons = [
    "machine-basics",
    "processing-parameters",
    "troubleshooting",
    "troubleshooting-quiz",
    "materials"
];

function loadProgress() {

    let completedCount = 0;

    lessons.forEach(lesson => {

        if (localStorage.getItem(lesson) === "completed") {
            completedCount++;
        }

    });

    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");

    if (progressText && progressFill) {

        progressText.innerText =
            "Lessons Completed: " + completedCount + " / " + lessons.length;

        const percent =
            (completedCount / lessons.length) * 100;

        progressFill.style.width = percent + "%";

    }

}

function markLessonComplete(lessonName) {

    localStorage.setItem(lessonName, "completed");

    alert("Lesson marked complete!");

}

function resetProgress() {

    lessons.forEach(lesson => {
        localStorage.removeItem(lesson);
    });

    loadProgress();

}

loadProgress();