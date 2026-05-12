const checklistStorageKey =
    "process-change-checklist-records";

function getValue(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();

}

function getCheckedValues(className) {

    const checkboxes =
        document.querySelectorAll("." + className + ":checked");

    return Array.from(checkboxes).map(checkbox => {
        return checkbox.value;
    });

}

function createRecordId() {

    return "record-" + Date.now() + "-" + Math.floor(Math.random() * 100000);

}

function saveChecklistRecord() {

    const record = {
        id: createRecordId(),
        dateTime: new Date().toLocaleString(),

        techName: getValue("techName"),
        machineNumber: getValue("machineNumber"),
        moldNumber: getValue("moldNumber"),
        partNumber: getValue("partNumber"),
        materialName: getValue("materialName"),
        changeReason: getValue("changeReason"),
        reasonNotes: getValue("reasonNotes"),

        beforeChecks: getCheckedValues("before-check"),

        beforeData: {
            fillTime: getValue("beforeFillTime"),
            cushion: getValue("beforeCushion"),
            peakPressure: getValue("beforePeakPressure"),
            transfer: getValue("beforeTransfer"),
            holdPressure: getValue("beforeHoldPressure"),
            holdTime: getValue("beforeHoldTime"),
            recovery: getValue("beforeRecovery"),
            cycle: getValue("beforeCycle"),
            meltTemp: getValue("beforeMeltTemp"),
            moldTemp: getValue("beforeMoldTemp"),
            partWeight: getValue("beforePartWeight"),
            dimension: getValue("beforeDimension")
        },

        settingChanged: getValue("settingChanged"),
        oldSetting: getValue("oldSetting"),
        newSetting: getValue("newSetting"),
        expectedResult: getValue("expectedResult"),

        changeChecks: getCheckedValues("change-check"),

        afterData: {
            fillTime: getValue("afterFillTime"),
            cushion: getValue("afterCushion"),
            peakPressure: getValue("afterPeakPressure"),
            transfer: getValue("afterTransfer"),
            holdPressure: getValue("afterHoldPressure"),
            holdTime: getValue("afterHoldTime"),
            recovery: getValue("afterRecovery"),
            cycle: getValue("afterCycle"),
            meltTemp: getValue("afterMeltTemp"),
            moldTemp: getValue("afterMoldTemp"),
            partWeight: getValue("afterPartWeight"),
            dimension: getValue("afterDimension")
        },

        afterChecks: getCheckedValues("after-check"),
        finalNotes: getValue("finalNotes")
    };

    if (record.techName === "" ||
        record.machineNumber === "" ||
        record.settingChanged === "" ||
        record.oldSetting === "" ||
        record.newSetting === "") {

        alert("Please fill in technician name, machine number, setting changed, old setting, and new setting before saving.");

        return;

    }

    const savedRecords =
        getSavedChecklistRecords();

    savedRecords.unshift(record);

    saveRecordsToStorage(savedRecords);

    alert("Process change record saved.");

    displaySavedChecklistRecords();

}

function getSavedChecklistRecords() {

    const savedData =
        localStorage.getItem(checklistStorageKey);

    if (!savedData) {
        return [];
    }

    try {

        const savedRecords =
            JSON.parse(savedData);

        if (!Array.isArray(savedRecords)) {
            return [];
        }

        let recordsWereRepaired =
            false;

        savedRecords.forEach((record, index) => {

            if (!record.id) {

                record.id =
                    "repaired-record-" + Date.now() + "-" + index;

                recordsWereRepaired =
                    true;

            }

        });

        if (recordsWereRepaired) {

            saveRecordsToStorage(savedRecords);

        }

        return savedRecords;

    }

    catch (error) {

        console.error("Saved checklist records could not be loaded:", error);

        return [];

    }

}

function saveRecordsToStorage(records) {

    localStorage.setItem(
        checklistStorageKey,
        JSON.stringify(records)
    );

}

function displaySavedChecklistRecords() {

    const recordsBox =
        document.getElementById("savedChecklistRecords");

    if (!recordsBox) {
        return;
    }

    const savedRecords =
        getSavedChecklistRecords();

    if (savedRecords.length === 0) {

        recordsBox.innerHTML = `

            <p>
                No saved process change records yet.
            </p>

        `;

        return;

    }

    let recordsHTML =
        "";

    savedRecords.forEach(record => {

        recordsHTML += `

            <div class="score-card checklist-record-card">

                <h3>
                    ${escapeHTML(record.dateTime)}
                </h3>

                <p>
                    <strong>Technician:</strong>
                    ${escapeHTML(record.techName)}
                </p>

                <p>
                    <strong>Machine:</strong>
                    ${escapeHTML(record.machineNumber)}
                </p>

                <p>
                    <strong>Mold:</strong>
                    ${escapeHTML(record.moldNumber)}
                </p>

                <p>
                    <strong>Part:</strong>
                    ${escapeHTML(record.partNumber)}
                </p>

                <p>
                    <strong>Material:</strong>
                    ${escapeHTML(record.materialName)}
                </p>

                <p>
                    <strong>Reason:</strong>
                    ${escapeHTML(record.changeReason)}
                </p>

                <p>
                    <strong>Setting Changed:</strong>
                    ${escapeHTML(record.settingChanged)}
                </p>

                <p>
                    <strong>Old Setting:</strong>
                    ${escapeHTML(record.oldSetting)}
                </p>

                <p>
                    <strong>New Setting:</strong>
                    ${escapeHTML(record.newSetting)}
                </p>

                <details>

                    <summary>
                        View Full Record
                    </summary>

                    ${buildRecordDetails(record)}

                </details>

                <button onclick="deleteChecklistRecord('${escapeHTML(record.id)}')">
                    Delete This Record
                </button>

            </div>

        `;

    });

    recordsBox.innerHTML =
        recordsHTML;

}

function buildRecordDetails(record) {

    return `

        <div class="checklist-detail-box">

            <h4>Issue / Reason Notes</h4>

            <p>
                ${escapeHTML(record.reasonNotes)}
            </p>

            <h4>Before Change Checklist</h4>

            ${buildList(record.beforeChecks)}

            <h4>Before Process Data</h4>

            ${buildDataTable(record.beforeData)}

            <h4>Change Details</h4>

            <p>
                <strong>Expected Result:</strong>
                ${escapeHTML(record.expectedResult)}
            </p>

            <h4>Change Checklist</h4>

            ${buildList(record.changeChecks)}

            <h4>After Process Data</h4>

            ${buildDataTable(record.afterData)}

            <h4>After Change Verification</h4>

            ${buildList(record.afterChecks)}

            <h4>Final Notes / Handoff</h4>

            <p>
                ${escapeHTML(record.finalNotes)}
            </p>

        </div>

    `;

}

function buildList(items) {

    if (!items || items.length === 0) {

        return `

            <p>
                No items checked.
            </p>

        `;

    }

    return `

        <ul>

            ${items.map(item => `

                <li>
                    ${escapeHTML(item)}
                </li>

            `).join("")}

        </ul>

    `;

}

function buildDataTable(data) {

    if (!data) {

        return `

            <p>
                No process data saved.
            </p>

        `;

    }

    return `

        <div class="process-data-summary">

            <p><strong>Fill Time:</strong> ${escapeHTML(data.fillTime)}</p>
            <p><strong>Cushion:</strong> ${escapeHTML(data.cushion)}</p>
            <p><strong>Peak Pressure:</strong> ${escapeHTML(data.peakPressure)}</p>
            <p><strong>Transfer:</strong> ${escapeHTML(data.transfer)}</p>
            <p><strong>Hold Pressure:</strong> ${escapeHTML(data.holdPressure)}</p>
            <p><strong>Hold Time:</strong> ${escapeHTML(data.holdTime)}</p>
            <p><strong>Recovery:</strong> ${escapeHTML(data.recovery)}</p>
            <p><strong>Cycle:</strong> ${escapeHTML(data.cycle)}</p>
            <p><strong>Melt / Barrel Temp:</strong> ${escapeHTML(data.meltTemp)}</p>
            <p><strong>Mold Temp:</strong> ${escapeHTML(data.moldTemp)}</p>
            <p><strong>Part Weight:</strong> ${escapeHTML(data.partWeight)}</p>
            <p><strong>Critical Dimension:</strong> ${escapeHTML(data.dimension)}</p>

        </div>

    `;

}

function deleteChecklistRecord(recordId) {

    const confirmDelete =
        confirm("Delete this process change record?");

    if (!confirmDelete) {
        return;
    }

    const savedRecords =
        getSavedChecklistRecords();

    const updatedRecords =
        savedRecords.filter(record => {

            return String(record.id) !== String(recordId);

        });

    saveRecordsToStorage(updatedRecords);

    displaySavedChecklistRecords();

    alert("Record deleted.");

}

function deleteAllChecklistRecords() {

    const confirmDelete =
        confirm("Delete all saved process change records?");

    if (!confirmDelete) {
        return;
    }

    localStorage.removeItem(checklistStorageKey);

    displaySavedChecklistRecords();

    alert("All saved records deleted.");

}

function clearChecklistForm() {

    const confirmClear =
        confirm("Clear the current form? Unsaved information will be lost.");

    if (!confirmClear) {
        return;
    }

    const inputs =
        document.querySelectorAll("input, textarea, select");

    inputs.forEach(input => {

        if (input.type === "checkbox") {

            input.checked =
                false;

        }

        else {

            input.value =
                "";

        }

    });

}

function printChecklistRecord() {

    window.print();

}

function exportChecklistCSV() {

    const savedRecords =
        getSavedChecklistRecords();

    if (savedRecords.length === 0) {

        alert("No saved records to export.");

        return;

    }

    const headers = [
        "Date Time",
        "Technician",
        "Machine",
        "Mold",
        "Part",
        "Material",
        "Reason",
        "Setting Changed",
        "Old Setting",
        "New Setting",
        "Before Fill Time",
        "After Fill Time",
        "Before Cushion",
        "After Cushion",
        "Before Peak Pressure",
        "After Peak Pressure",
        "Before Part Weight",
        "After Part Weight",
        "Before Dimension",
        "After Dimension",
        "Final Notes"
    ];

    const rows =
        savedRecords.map(record => {

            return [
                record.dateTime,
                record.techName,
                record.machineNumber,
                record.moldNumber,
                record.partNumber,
                record.materialName,
                record.changeReason,
                record.settingChanged,
                record.oldSetting,
                record.newSetting,
                record.beforeData ? record.beforeData.fillTime : "",
                record.afterData ? record.afterData.fillTime : "",
                record.beforeData ? record.beforeData.cushion : "",
                record.afterData ? record.afterData.cushion : "",
                record.beforeData ? record.beforeData.peakPressure : "",
                record.afterData ? record.afterData.peakPressure : "",
                record.beforeData ? record.beforeData.partWeight : "",
                record.afterData ? record.afterData.partWeight : "",
                record.beforeData ? record.beforeData.dimension : "",
                record.afterData ? record.afterData.dimension : "",
                record.finalNotes
            ];

        });

    const csvContent =
        [headers, ...rows]
            .map(row => {

                return row.map(value => {

                    return '"' + String(value || "").replace(/"/g, '""') + '"';

                }).join(",");

            })
            .join("\n");

    const blob =
        new Blob(
            [csvContent],
            { type: "text/csv;charset=utf-8;" }
        );

    const link =
        document.createElement("a");

    const url =
        URL.createObjectURL(blob);

    link.setAttribute("href", url);

    link.setAttribute("download", "process-change-records.csv");

    link.style.display =
        "none";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

}

function escapeHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}

/*
    Make functions available to HTML onclick buttons.
    This prevents button issues on some browsers/pages.
*/

window.saveChecklistRecord =
    saveChecklistRecord;

window.clearChecklistForm =
    clearChecklistForm;

window.printChecklistRecord =
    printChecklistRecord;

window.exportChecklistCSV =
    exportChecklistCSV;

window.deleteChecklistRecord =
    deleteChecklistRecord;

window.deleteAllChecklistRecords =
    deleteAllChecklistRecords;

displaySavedChecklistRecords();