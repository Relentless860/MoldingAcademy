function showParameter(parameter) {

    const parameterBox =
        document.getElementById("parameterBox");

    // MELT TEMPERATURE

    if (parameter === "temperature") {

        parameterBox.innerHTML = `

            <h3>Melt Temperature</h3>

            <p>
                Melt temperature controls how easily molten plastic flows
                through the runner system, gate, and cavity.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Controls material viscosity</li>
                <li>Improves flow through thin sections</li>
                <li>Affects surface finish and gloss</li>
                <li>Influences shrinkage and internal stress</li>
            </ul>

            <h4>If Temperature Is Too Low</h4>

            <ul>
                <li>Short shots</li>
                <li>Poor flow</li>
                <li>Flow lines</li>
                <li>High injection pressure</li>
                <li>Incomplete packing</li>
            </ul>

            <h4>If Temperature Is Too High</h4>

            <ul>
                <li>Burn marks</li>
                <li>Material degradation</li>
                <li>Gas formation</li>
                <li>Flash</li>
                <li>Discoloration</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Always follow material processing ranges</li>
                <li>Rear barrel zones are often cooler than front zones</li>
                <li>Monitor actual temperature, not only setpoint</li>
                <li>Excessive heat can reduce material strength</li>
            </ul>

        `;
    }

    // INJECTION SPEED

    else if (parameter === "speed") {

        parameterBox.innerHTML = `

            <h3>Injection Speed</h3>

            <p>
                Injection speed controls how fast molten plastic fills
                the mold cavity during first-stage injection.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Controls flow front movement</li>
                <li>Affects shear rate and shear heat</li>
                <li>Influences trapped gas behavior</li>
                <li>Affects cosmetic appearance</li>
            </ul>

            <h4>If Speed Is Too Low</h4>

            <ul>
                <li>Flow lines</li>
                <li>Short shots</li>
                <li>Poor surface finish</li>
                <li>Cold material fronts</li>
                <li>Weak weld lines</li>
            </ul>

            <h4>If Speed Is Too High</h4>

            <ul>
                <li>Burn marks</li>
                <li>Jetting</li>
                <li>Flash</li>
                <li>Excessive shear heat</li>
                <li>Gas traps</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Maintain stable fill times</li>
                <li>Different sections may require staged speed control</li>
                <li>Fast fill can help thin-wall parts</li>
                <li>Watch for hesitation in long flow paths</li>
            </ul>

        `;
    }

    // INJECTION PRESSURE

    else if (parameter === "pressure") {

        parameterBox.innerHTML = `

            <h3>Injection Pressure</h3>

            <p>
                Injection pressure is the force used to push molten plastic
                through the mold during filling.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Overcomes flow resistance</li>
                <li>Helps fill thin sections</li>
                <li>Controls cavity filling</li>
                <li>Affects fill consistency</li>
            </ul>

            <h4>If Pressure Is Too Low</h4>

            <ul>
                <li>Short shots</li>
                <li>Incomplete filling</li>
                <li>Poor weld lines</li>
                <li>Weak packing</li>
                <li>Low part weight</li>
            </ul>

            <h4>If Pressure Is Too High</h4>

            <ul>
                <li>Flash</li>
                <li>Overpacking</li>
                <li>Part stress</li>
                <li>Mold wear</li>
                <li>Clamp overload</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Pressure demand changes with material viscosity</li>
                <li>Monitor peak pressure consistency</li>
                <li>Sudden pressure increases may indicate restriction</li>
                <li>Separate speed problems from pressure problems</li>
            </ul>

        `;
    }

    // HOLD PRESSURE

    else if (parameter === "hold") {

        parameterBox.innerHTML = `

            <h3>Hold Pressure</h3>

            <p>
                Hold pressure packs additional material into the cavity
                after fill completion.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Compensates for shrinkage</li>
                <li>Maintains part dimensions</li>
                <li>Improves density consistency</li>
                <li>Reduces sink marks and voids</li>
            </ul>

            <h4>If Hold Pressure Is Too Low</h4>

            <ul>
                <li>Sink marks</li>
                <li>Voids</li>
                <li>Underpacked parts</li>
                <li>Dimensional variation</li>
                <li>Low part weight</li>
            </ul>

            <h4>If Hold Pressure Is Too High</h4>

            <ul>
                <li>Flash</li>
                <li>Stress whitening</li>
                <li>Sticking parts</li>
                <li>Overpacking</li>
                <li>Excessive part weight</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Gate freeze time determines effective hold time</li>
                <li>Part weight studies help optimize packing</li>
                <li>Stable cushion improves consistency</li>
                <li>Monitor dimensional trends carefully</li>
            </ul>

        `;
    }

    // HOLD TIME

    else if (parameter === "holdtime") {

        parameterBox.innerHTML = `

            <h3>Hold Time</h3>

            <p>
                Hold time controls how long packing pressure is applied
                after the mold cavity is filled.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Maintains packing pressure</li>
                <li>Helps control material shrinkage</li>
                <li>Improves part weight consistency</li>
                <li>Supports dimensional stability</li>
            </ul>

            <h4>If Hold Time Is Too Short</h4>

            <ul>
                <li>Sink marks</li>
                <li>Voids</li>
                <li>Weight variation</li>
                <li>Dimensional instability</li>
                <li>Underpacked parts</li>
            </ul>

            <h4>If Hold Time Is Too Long</h4>

            <ul>
                <li>Longer cycle time</li>
                <li>No added benefit after gate freeze</li>
                <li>Reduced production efficiency</li>
                <li>Unnecessary machine time</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Hold time only works until the gate freezes</li>
                <li>Gate freeze studies help optimize hold time</li>
                <li>Part weight should stabilize when hold time is correct</li>
                <li>Do not add unnecessary hold time after gate freeze</li>
            </ul>

        `;
    }

    // COOLING TIME

    else if (parameter === "cooling") {

        parameterBox.innerHTML = `

            <h3>Cooling Time</h3>

            <p>
                Cooling time allows the molten plastic to solidify
                before the mold opens and the part ejects.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Solidifies the molded part</li>
                <li>Stabilizes part dimensions</li>
                <li>Prepares the part for ejection</li>
                <li>Controls overall cycle time</li>
            </ul>

            <h4>If Cooling Time Is Too Short</h4>

            <ul>
                <li>Warping</li>
                <li>Sticking parts</li>
                <li>Part deformation</li>
                <li>Dimensional instability</li>
                <li>Ejector marks</li>
            </ul>

            <h4>If Cooling Time Is Too Long</h4>

            <ul>
                <li>Long cycle times</li>
                <li>Reduced production efficiency</li>
                <li>Unnecessary machine downtime</li>
                <li>Higher part cost</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Cooling often controls total cycle time</li>
                <li>Uniform cooling improves consistency</li>
                <li>Monitor mold water temperatures</li>
                <li>Different materials cool differently</li>
            </ul>

        `;
    }

    // BACK PRESSURE

    else if (parameter === "backpressure") {

        parameterBox.innerHTML = `

            <h3>Back Pressure</h3>

            <p>
                Back pressure creates resistance during screw recovery
                to improve melt quality.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Improves material mixing</li>
                <li>Improves color dispersion</li>
                <li>Creates more uniform melt</li>
                <li>Helps remove trapped air in the melt</li>
            </ul>

            <h4>If Back Pressure Is Too Low</h4>

            <ul>
                <li>Poor mixing</li>
                <li>Inconsistent shot size</li>
                <li>Color streaking</li>
                <li>Unstable recovery</li>
                <li>Air trapped in melt</li>
            </ul>

            <h4>If Back Pressure Is Too High</h4>

            <ul>
                <li>Excessive shear heat</li>
                <li>Material degradation</li>
                <li>Long recovery time</li>
                <li>Higher screw wear</li>
                <li>Burning or discoloration</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Use the minimum effective back pressure</li>
                <li>Monitor screw recovery consistency</li>
                <li>Higher back pressure increases melt temperature</li>
                <li>Recovery time should stay repeatable</li>
            </ul>

        `;
    }

    // SCREW RPM

    else if (parameter === "screwrpm") {

        parameterBox.innerHTML = `

            <h3>Screw RPM</h3>

            <p>
                Screw RPM controls how fast the screw rotates
                during recovery.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Controls recovery speed</li>
                <li>Affects shear heat</li>
                <li>Influences melt mixing</li>
                <li>Helps prepare the next shot</li>
            </ul>

            <h4>If Screw RPM Is Too Low</h4>

            <ul>
                <li>Long recovery time</li>
                <li>Poor mixing</li>
                <li>Longer cycle time</li>
                <li>Possible inconsistent melt</li>
            </ul>

            <h4>If Screw RPM Is Too High</h4>

            <ul>
                <li>Excessive shear heat</li>
                <li>Material degradation</li>
                <li>Splay or burning</li>
                <li>Screw wear</li>
                <li>Unstable melt temperature</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Use the lowest RPM that meets cycle requirements</li>
                <li>Watch recovery time consistency</li>
                <li>Heat-sensitive materials need careful RPM control</li>
                <li>RPM works together with back pressure</li>
            </ul>

        `;
    }

    // SHOT SIZE

    else if (parameter === "shot-size") {

        parameterBox.innerHTML = `

            <h3>Shot Size</h3>

            <p>
                Shot size controls how much material is prepared
                in front of the screw for each injection cycle.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Provides enough material to fill the cavity</li>
                <li>Supports proper cushion</li>
                <li>Controls available packing material</li>
                <li>Affects part weight consistency</li>
            </ul>

            <h4>If Shot Size Is Too Low</h4>

            <ul>
                <li>Short shots</li>
                <li>Low cushion</li>
                <li>Poor packing</li>
                <li>Dimensional variation</li>
                <li>Low part weight</li>
            </ul>

            <h4>If Shot Size Is Too High</h4>

            <ul>
                <li>Large cushion</li>
                <li>Longer residence time</li>
                <li>Possible degradation</li>
                <li>Unstable process control</li>
                <li>Excess material remaining</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Shot size should allow a stable cushion</li>
                <li>Do not confuse shot size with hold pressure</li>
                <li>Part weight can help verify shot consistency</li>
                <li>Changes should be made carefully and recorded</li>
            </ul>

        `;
    }

    // CUSHION

    else if (parameter === "cushion") {

        parameterBox.innerHTML = `

            <h3>Cushion</h3>

            <p>
                Cushion is the small amount of material left in front
                of the screw after injection.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Maintains pressure transfer</li>
                <li>Prevents the screw from bottoming out</li>
                <li>Improves shot consistency</li>
                <li>Supports stable packing pressure</li>
            </ul>

            <h4>If Cushion Is Too Low</h4>

            <ul>
                <li>Short shots</li>
                <li>Loss of packing pressure</li>
                <li>Inconsistent parts</li>
                <li>Screw bottoming out</li>
                <li>Low part weight</li>
            </ul>

            <h4>If Cushion Is Too High</h4>

            <ul>
                <li>Excess material remaining</li>
                <li>Longer residence time</li>
                <li>Possible material degradation</li>
                <li>Process instability</li>
                <li>Inconsistent pressure transfer</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Cushion should be small and repeatable</li>
                <li>Large cushion variation signals process instability</li>
                <li>Check cushion when diagnosing short shots</li>
                <li>Stable cushion is important in scientific molding</li>
            </ul>

        `;
    }

    // TRANSFER POSITION

    else if (parameter === "transfer") {

        parameterBox.innerHTML = `

            <h3>Transfer Position</h3>

            <p>
                Transfer position is where the machine switches from
                injection fill to pack/hold pressure.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Separates filling from packing</li>
                <li>Controls cavity fill level before hold pressure</li>
                <li>Improves process repeatability</li>
                <li>Helps prevent overpacking</li>
            </ul>

            <h4>If Transfer Is Too Early</h4>

            <ul>
                <li>Short shots</li>
                <li>Underpacked parts</li>
                <li>Sink marks</li>
                <li>Low part weight</li>
                <li>Dimensional variation</li>
            </ul>

            <h4>If Transfer Is Too Late</h4>

            <ul>
                <li>Flash</li>
                <li>Overpacking</li>
                <li>High cavity pressure</li>
                <li>Part stress</li>
                <li>High peak pressure</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Transfer is critical in decoupled molding</li>
                <li>Most processes transfer before the cavity is fully packed</li>
                <li>Fill-only studies help set transfer position</li>
                <li>Watch fill time and cushion consistency</li>
            </ul>

        `;
    }

    // MOLD TEMPERATURE

    else if (parameter === "moldtemp") {

        parameterBox.innerHTML = `

            <h3>Mold Temperature</h3>

            <p>
                Mold temperature controls how quickly the plastic cools
                and how the surface of the part forms.
            </p>

            <h4>Main Functions</h4>

            <ul>
                <li>Controls cooling rate</li>
                <li>Affects surface finish</li>
                <li>Influences shrinkage</li>
                <li>Helps control warpage</li>
            </ul>

            <h4>If Mold Temperature Is Too Low</h4>

            <ul>
                <li>Poor surface finish</li>
                <li>Flow lines</li>
                <li>High internal stress</li>
                <li>Possible warpage</li>
                <li>Weak weld lines</li>
            </ul>

            <h4>If Mold Temperature Is Too High</h4>

            <ul>
                <li>Long cycle time</li>
                <li>Sticking parts</li>
                <li>Excess shrinkage</li>
                <li>Dimensional variation</li>
                <li>Longer cooling requirements</li>
            </ul>

            <h4>Technician Notes</h4>

            <ul>
                <li>Balanced mold temperatures improve consistency</li>
                <li>Cooling line restrictions can cause warpage</li>
                <li>Always verify actual water temperature and flow</li>
                <li>Mold temperature affects crystalline materials strongly</li>
            </ul>

        `;
    }

}