"use strict";
var HealthState;
(function (HealthState) {
    HealthState[HealthState["HEALTHY"] = 0] = "HEALTHY";
    HealthState[HealthState["SICK"] = 1] = "SICK";
    HealthState[HealthState["CRITICAL"] = 2] = "CRITICAL";
    HealthState[HealthState["OOF"] = 3] = "OOF";
})(HealthState || (HealthState = {}));
function registerLiving(name, age) {
    return Object.assign({}, name, { age, health: HealthState.HEALTHY });
}
;
const pet = registerLiving({ name: 'Doggo' }, 7);
pet.health;
// Union
function count(element) {
    if (typeof element === "string") {
        return element.length;
    }
    else {
        return element;
    }
}
count("test");
function getSpeed(organism) {
    if ("altitude" in organism) {
        return organism.flightSpeed;
    }
    else {
        return organism.swimSpeed;
    }
}
const myPet = {
    name: 'Archimedes',
    flightSpeed: 12,
    altitude: 50,
    age: 2,
    health: HealthState.HEALTHY,
};
