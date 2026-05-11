/* GOOGLE ANALYTICS TRAFFIC TRACKING */

const googleAnalyticsID =
    "G-8ELCDTP3EK";

function loadGoogleAnalytics() {

    if (googleAnalyticsID === "G-8ELCDTP3EK") {
        return;
    }

    const googleScript =
        document.createElement("script");

    googleScript.async =
        true;

    googleScript.src =
        "https://www.googletagmanager.com/gtag/js?id=" + googleAnalyticsID;

    document.head.appendChild(googleScript);

    window.dataLayer =
        window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    window.gtag =
        gtag;

    gtag("js", new Date());

    gtag("config", googleAnalyticsID);

}

loadGoogleAnalytics();

const lessons = [
    "machine-basics",
    "resins-additives",
    "materials",
    "processing-parameters",
    "startup-shutdown",
    "mold-setup",
    "water-cooling",
    "quality-inspection",
    "troubleshooting",
    "hot-runners",
    "robotics-automation",
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

/* LESSON DROPDOWN SYSTEM */

function createLessonDropdowns() {

    const lessonLayout =
        document.querySelector(".lesson-layout");

    if (!lessonLayout) {
        return;
    }

    const currentPage =
        window.location.pathname;

    if (currentPage.includes("troubleshooting-quiz")) {
        return;
    }

    const buttonGroups =
        document.querySelectorAll(".lesson-layout .button-group");

    buttonGroups.forEach(buttonGroup => {

        if (buttonGroup.closest(".feedback-modal")) {
            return;
        }

        const buttons =
            buttonGroup.querySelectorAll("button");

        if (buttons.length < 3) {
            return;
        }

        if (buttonGroup.classList.contains("dropdown-converted")) {
            return;
        }

        buttonGroup.classList.add("dropdown-converted");

        const topicOptions =
            Array.from(buttons).map((button, index) => {
                return {
                    index: index,
                    label: button.innerText.trim(),
                    button: button
                };
            });

        const parentCard =
            buttonGroup.closest(".card");

        const infoCard =
            findNextCard(parentCard);

        if (infoCard && !infoCard.defaultInfoHTML) {

            infoCard.defaultInfoHTML =
                infoCard.innerHTML;

        }

        const topDropdown =
            buildTopicDropdown(topicOptions, "Select a topic...", function (selectedIndex) {

                if (selectedIndex === null) {

                    resetInformationCard(infoCard);

                    return;

                }

                buttons[selectedIndex].click();

                if (infoCard) {

                    setTimeout(function () {

                        infoCard.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 100);

                }

            });

        parentCard.insertBefore(topDropdown, buttonGroup);

    });

}

function buildTopicDropdown(topicOptions, placeholderText, onChangeFunction) {

    const dropdownWrapper =
        document.createElement("div");

    dropdownWrapper.className =
        "topic-dropdown-wrapper";

    const label =
        document.createElement("label");

    label.className =
        "topic-dropdown-label";

    label.innerText =
        "Choose Topic";

    const select =
        document.createElement("select");

    select.className =
        "topic-dropdown";

    const placeholderOption =
        document.createElement("option");

    placeholderOption.value =
        "";

    placeholderOption.innerText =
        placeholderText;

    select.appendChild(placeholderOption);

    topicOptions.forEach(topic => {

        const option =
            document.createElement("option");

        option.value =
            topic.index;

        option.innerText =
            topic.label;

        select.appendChild(option);

    });

    select.addEventListener("change", function () {

        if (select.value === "") {

            onChangeFunction(null);

            return;

        }

        const selectedIndex =
            parseInt(select.value);

        onChangeFunction(selectedIndex);

    });

    dropdownWrapper.appendChild(label);

    dropdownWrapper.appendChild(select);

    return dropdownWrapper;

}

function resetInformationCard(infoCard) {

    if (!infoCard) {
        return;
    }

    if (infoCard.defaultInfoHTML) {

        infoCard.innerHTML =
            infoCard.defaultInfoHTML;

    }

}

function findNextCard(currentCard) {

    if (!currentCard) {
        return null;
    }

    let nextElement =
        currentCard.nextElementSibling;

    while (nextElement) {

        if (nextElement.classList.contains("card")) {
            return nextElement;
        }

        nextElement =
            nextElement.nextElementSibling;

    }

    return null;

}

loadProgress();

createLessonDropdowns();