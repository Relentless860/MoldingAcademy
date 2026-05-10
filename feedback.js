document.addEventListener("DOMContentLoaded", function () {

    createFeedbackButton();

});

function createFeedbackButton() {

    const feedbackButton =
        document.createElement("button");

    feedbackButton.innerText =
        "Feedback / Bug Report";

    feedbackButton.className =
        "feedback-button";

    feedbackButton.onclick =
        openFeedbackForm;

    document.body.appendChild(feedbackButton);

}

function openFeedbackForm() {

    const existingForm =
        document.getElementById("feedbackOverlay");

    if (existingForm) {
        existingForm.remove();
    }

    const overlay =
        document.createElement("div");

    overlay.id =
        "feedbackOverlay";

    overlay.className =
        "feedback-overlay";

    overlay.innerHTML = `

        <div class="feedback-modal">

            <h2>Feedback / Bug Report</h2>

            <p>
                Send feedback, report a bug, or suggest an improvement.
            </p>

            <label for="feedbackType">
                Type
            </label>

            <select id="feedbackType">

                <option value="Bug Report">
                    Bug Report
                </option>

                <option value="Feedback">
                    Feedback
                </option>

                <option value="Suggestion">
                    Suggestion
                </option>

                <option value="Lesson Correction">
                    Lesson Correction
                </option>

            </select>

            <label for="feedbackName">
                Your Name
            </label>

            <input id="feedbackName"
                   type="text"
                   placeholder="Enter your name">

            <label for="feedbackMessage">
                Message
            </label>

            <textarea id="feedbackMessage"
                      placeholder="Describe the issue or suggestion..."></textarea>

            <div class="button-group">

                <button onclick="sendFeedbackEmail()">
                    Send Report
                </button>

                <button onclick="closeFeedbackForm()">
                    Cancel
                </button>

            </div>

            <p class="feedback-note">
                This opens Gmail with the report filled in.
                You will still need to click Send inside Gmail.
            </p>

        </div>

    `;

    document.body.appendChild(overlay);

}

function closeFeedbackForm() {

    const overlay =
        document.getElementById("feedbackOverlay");

    if (overlay) {
        overlay.remove();
    }

}

function sendFeedbackEmail() {

    const feedbackType =
        document.getElementById("feedbackType").value;

    const feedbackName =
        document.getElementById("feedbackName").value.trim();

    const feedbackMessage =
        document.getElementById("feedbackMessage").value.trim();

    if (feedbackMessage === "") {

        alert("Please enter a message before sending.");

        return;

    }

    const pageUrl =
        window.location.href;

    const subject =
        "MoldingAcademy " + feedbackType;

    const body =
        "Feedback Type: " + feedbackType + "\n\n" +
        "Name: " + (feedbackName || "Not provided") + "\n\n" +
        "Page: " + pageUrl + "\n\n" +
        "Message:\n" + feedbackMessage;

    const email =
        "dylanadamuska1995@gmail.com";

    const gmailLink =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(email) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.open(gmailLink, "_blank");

    closeFeedbackForm();

}