function showComponent(component) {

    const infoBox = document.getElementById("infoBox");

    if (component === "hopper") {
        infoBox.innerHTML = `
            <h3>Hopper</h3>

            <p>
                The hopper stores plastic pellets before they enter the barrel.
                It is the starting point of the material feed system.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Stores raw plastic resin</li>
                <li>Feeds pellets into the barrel</li>
                <li>Supports material loaders and dryers</li>
                <li>Helps maintain continuous machine operation</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Wrong material loaded</li>
                <li>Material contamination</li>
                <li>Moisture in resin</li>
                <li>Pellet bridging or poor flow</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Verify material before startup</li>
                <li>Keep hopper lids closed</li>
                <li>Check dryer temperature and dew point when required</li>
                <li>Watch for splay when processing wet material</li>
            </ul>
        `;
    }

    else if (component === "barrel") {
        infoBox.innerHTML = `
            <h3>Barrel</h3>

            <p>
                The barrel surrounds the screw and uses heater bands to help
                melt the plastic as it moves forward.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Heats resin to processing temperature</li>
                <li>Controls melt through temperature zones</li>
                <li>Works with screw shear to melt material</li>
                <li>Maintains stable melt flow</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Heater band failure</li>
                <li>Incorrect temperature profile</li>
                <li>Burned or degraded resin</li>
                <li>Cold slugs entering the mold</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Check actual temperatures, not just setpoints</li>
                <li>Watch for black specks from degradation</li>
                <li>Too cold can cause short shots</li>
                <li>Too hot can cause burns, gas, and material breakdown</li>
            </ul>
        `;
    }

    else if (component === "screw") {
        infoBox.innerHTML = `
            <h3>Screw</h3>

            <p>
                The screw conveys, compresses, melts, mixes, meters,
                and injects molten plastic.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Moves material forward through the barrel</li>
                <li>Creates shear heat</li>
                <li>Mixes resin and colorant</li>
                <li>Builds the next shot size</li>
                <li>Injects molten plastic into the mold</li>
            </ul>

            <h4>Screw Zones</h4>
            <ul>
                <li><strong>Feed Zone:</strong> accepts solid pellets</li>
                <li><strong>Transition Zone:</strong> compresses and melts resin</li>
                <li><strong>Metering Zone:</strong> prepares consistent melt</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Screw wear</li>
                <li>Poor mixing</li>
                <li>Unstable recovery time</li>
                <li>Material degradation from excessive shear</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Screw RPM affects shear heat</li>
                <li>Back pressure affects melt consistency</li>
                <li>Recovery time should stay consistent</li>
                <li>Cushion stability helps prove shot consistency</li>
            </ul>
        `;
    }

    else if (component === "nozzle") {
        infoBox.innerHTML = `
            <h3>Nozzle</h3>

            <p>
                The nozzle connects the barrel to the mold and transfers
                molten plastic into the sprue bushing.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Transfers melt into the mold</li>
                <li>Maintains front-end melt temperature</li>
                <li>Seals against the sprue bushing</li>
                <li>Helps prevent leakage during injection</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Nozzle drool</li>
                <li>Freeze-off</li>
                <li>Leaking at the sprue</li>
                <li>Burned material from excessive heat</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Check nozzle alignment and contact pressure</li>
                <li>A cold nozzle can restrict flow</li>
                <li>A hot nozzle can cause drooling or stringing</li>
                <li>Use caution around purging and molten plastic</li>
            </ul>
        `;
    }

    else if (component === "clamp") {
        infoBox.innerHTML = `
            <h3>Clamp Unit</h3>

            <p>
                The clamp unit opens and closes the mold and keeps it closed
                during injection and packing.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Closes the mold safely</li>
                <li>Applies clamp force</li>
                <li>Resists cavity pressure</li>
                <li>Opens the mold after cooling</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Flash from low clamp force</li>
                <li>Mold damage from poor protection settings</li>
                <li>Clamp alarms</li>
                <li>Mold alignment problems</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Never bypass safety gates</li>
                <li>Set mold protection correctly</li>
                <li>Do not use excessive tonnage to hide process problems</li>
                <li>Clamp force should match the mold and process needs</li>
            </ul>
        `;
    }

    else if (component === "ejectors") {
        infoBox.innerHTML = `
            <h3>Ejector System</h3>

            <p>
                The ejector system removes the finished part from the mold
                after cooling is complete.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Pushes parts off the core</li>
                <li>Returns before the next mold close</li>
                <li>Supports automated part removal</li>
                <li>Maintains cycle repeatability</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Parts sticking in the mold</li>
                <li>Ejector pin marks</li>
                <li>Bent or broken ejector pins</li>
                <li>Ejector return alarms</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Verify ejector return before mold close</li>
                <li>Check cooling if parts are sticking</li>
                <li>Set ejector stroke and speed properly</li>
                <li>Watch for parts hanging on pins or cores</li>
            </ul>
        `;
    }
}

function showCycle(stage) {

    const cycleBox = document.getElementById("cycleBox");

    if (stage === "clamping") {
        cycleBox.innerHTML = `
            <h3>Clamping</h3>

            <p>
                The mold closes and clamp force is applied before injection.
            </p>

            <h4>Purpose</h4>
            <ul>
                <li>Close the mold safely</li>
                <li>Protect the mold from damage</li>
                <li>Hold the mold shut against injection pressure</li>
            </ul>

            <h4>What To Watch</h4>
            <ul>
                <li>Mold protection alarms</li>
                <li>Clamp tonnage settings</li>
                <li>Obstructions or stuck parts</li>
                <li>Parting line condition</li>
            </ul>
        `;
    }

    else if (stage === "injection") {
        cycleBox.innerHTML = `
            <h3>Injection</h3>

            <p>
                The screw moves forward and pushes molten plastic into the mold cavity.
            </p>

            <h4>Purpose</h4>
            <ul>
                <li>Fill the mold cavity</li>
                <li>Control flow front movement</li>
                <li>Maintain consistent fill time</li>
            </ul>

            <h4>Common Defects</h4>
            <ul>
                <li>Short shots</li>
                <li>Burn marks</li>
                <li>Jetting</li>
                <li>Flow lines</li>
            </ul>
        `;
    }

    else if (stage === "packing") {
        cycleBox.innerHTML = `
            <h3>Pack & Hold</h3>

            <p>
                Pack and hold pressure compensates for material shrinkage
                after the cavity fills.
            </p>

            <h4>Purpose</h4>
            <ul>
                <li>Reduce sinks</li>
                <li>Improve part weight consistency</li>
                <li>Improve dimensional stability</li>
            </ul>

            <h4>What To Watch</h4>
            <ul>
                <li>Hold pressure</li>
                <li>Hold time</li>
                <li>Gate freeze time</li>
                <li>Part weight trends</li>
            </ul>
        `;
    }

    else if (stage === "cooling") {
        cycleBox.innerHTML = `
            <h3>Cooling</h3>

            <p>
                Cooling allows the plastic part to solidify before ejection.
            </p>

            <h4>Purpose</h4>
            <ul>
                <li>Prevent deformation</li>
                <li>Maintain part dimensions</li>
                <li>Prepare part for ejection</li>
            </ul>

            <h4>Common Defects</h4>
            <ul>
                <li>Warpage</li>
                <li>Sticking</li>
                <li>Dimensional variation</li>
                <li>Long cycle time</li>
            </ul>
        `;
    }

    else if (stage === "ejection") {
        cycleBox.innerHTML = `
            <h3>Ejection</h3>

            <p>
                The mold opens and ejector pins, plates, air, or robotics remove the part.
            </p>

            <h4>Purpose</h4>
            <ul>
                <li>Remove the part cleanly</li>
                <li>Prevent part damage</li>
                <li>Reset the mold for the next shot</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Part sticking</li>
                <li>Ejector marks</li>
                <li>Broken parts</li>
                <li>Incomplete ejection</li>
            </ul>
        `;
    }
}

function showSystem(system) {

    const systemBox = document.getElementById("systemBox");

    if (system === "hydraulic") {
        systemBox.innerHTML = `
            <h3>Hydraulic System</h3>

            <p>
                Hydraulic machines use pressurized oil to power machine movement.
            </p>

            <h4>Strengths</h4>
            <ul>
                <li>Strong clamp force</li>
                <li>Good for large parts</li>
                <li>Handles heavy-duty molding well</li>
            </ul>

            <h4>Common Concerns</h4>
            <ul>
                <li>Oil leaks</li>
                <li>Oil contamination</li>
                <li>Temperature-sensitive performance</li>
                <li>Higher maintenance needs</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Monitor oil temperature</li>
                <li>Report leaks immediately</li>
                <li>Watch for pressure instability</li>
                <li>Dirty oil can damage valves and pumps</li>
            </ul>
        `;
    }

    else if (system === "electric") {
        systemBox.innerHTML = `
            <h3>Electric Machines</h3>

            <p>
                Electric machines use servo motors for motion control.
            </p>

            <h4>Strengths</h4>
            <ul>
                <li>High precision</li>
                <li>Energy efficient</li>
                <li>Clean operation</li>
                <li>Excellent repeatability</li>
            </ul>

            <h4>Common Concerns</h4>
            <ul>
                <li>Servo alarms</li>
                <li>Drive faults</li>
                <li>Higher repair cost</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Watch position deviation alarms</li>
                <li>Good for tight tolerance parts</li>
                <li>Useful in medical and clean-room molding</li>
            </ul>
        `;
    }

    else if (system === "tiebar") {
        systemBox.innerHTML = `
            <h3>Tie Bars & Platens</h3>

            <p>
                Tie bars guide the clamp and help distribute clamp force.
                Platens support and hold the mold halves.
            </p>

            <h4>Main Responsibilities</h4>
            <ul>
                <li>Maintain mold alignment</li>
                <li>Support mold weight</li>
                <li>Distribute clamp force</li>
                <li>Keep mold halves parallel</li>
            </ul>

            <h4>Common Issues</h4>
            <ul>
                <li>Uneven clamp force</li>
                <li>Mold mismatch</li>
                <li>Tie bar strain imbalance</li>
                <li>Platen wear</li>
            </ul>
        `;
    }

    else if (system === "moldprotection") {
        systemBox.innerHTML = `
            <h3>Mold Protection</h3>

            <p>
                Mold protection uses low-pressure closing to detect problems
                before full clamp force is applied.
            </p>

            <h4>Why It Matters</h4>
            <ul>
                <li>Prevents mold crashes</li>
                <li>Detects stuck parts</li>
                <li>Protects pins, cores, and inserts</li>
                <li>Reduces costly mold damage</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Never bypass mold protection</li>
                <li>Verify ejectors are returned</li>
                <li>Check for stuck parts before restart</li>
                <li>Set protection before full clamp lockup</li>
            </ul>
        `;
    }

    else if (system === "tonnage") {
        systemBox.innerHTML = `
            <h3>Clamp Tonnage</h3>

            <p>
                Clamp tonnage keeps the mold closed during injection and packing.
            </p>

            <h4>Too Little Tonnage</h4>
            <ul>
                <li>Flash</li>
                <li>Mold opening during injection</li>
                <li>Dimensional instability</li>
            </ul>

            <h4>Too Much Tonnage</h4>
            <ul>
                <li>Vent crushing</li>
                <li>Parting line damage</li>
                <li>Unnecessary mold stress</li>
                <li>Possible tooling wear</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Do not use excessive tonnage as a process fix</li>
                <li>Flash may be caused by pressure, wear, or clamp settings</li>
                <li>Excess tonnage can reduce vent effectiveness</li>
            </ul>
        `;
    }

    else if (system === "controls") {
        systemBox.innerHTML = `
            <h3>Control Panel</h3>

            <p>
                The control panel is where technicians monitor and adjust the process.
            </p>

            <h4>Common Settings</h4>
            <ul>
                <li>Barrel temperatures</li>
                <li>Injection speed</li>
                <li>Injection pressure</li>
                <li>Hold pressure</li>
                <li>Cooling time</li>
                <li>Screw recovery settings</li>
            </ul>

            <h4>Important Process Data</h4>
            <ul>
                <li>Fill time</li>
                <li>Cushion position</li>
                <li>Peak pressure</li>
                <li>Recovery time</li>
                <li>Cycle time</li>
            </ul>

            <h4>Technician Tips</h4>
            <ul>
                <li>Record original settings before changes</li>
                <li>Make one change at a time</li>
                <li>Watch trends, not single shots</li>
                <li>Consistency is more important than guessing</li>
            </ul>
        `;
    }
}