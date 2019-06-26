// Intersection
interface Named {
  name: string;
  lastName?: string;
}

enum HealthState {
  HEALTHY,
  SICK,
  CRITICAL,
  OOF
}

interface Organism {
  age: number,
  health: HealthState
}

function registerLiving(name: Named, age: number): Named & Organism {
  return {
    ...name,
    age,
    health: HealthState.HEALTHY
  }
};
const pet = registerLiving({ name: 'Doggo' }, 7);
pet.health;

// Union
function count(element: string | number): number {
  if(typeof element === "string") {
    return element.length;
  } else {
    return element;
  }
}

count("test");

// Type Guards

interface Bird extends Organism {
  altitude: number;
  flightSpeed: number;
}

interface Fish extends Organism {
  swimSpeed: number;
}

function getSpeed(organism: Bird | Fish): number {
  if("altitude" in organism) {
    return organism.flightSpeed;
  } else {
    return organism.swimSpeed;
  }
}

// Type Aliases

type Pet = Named & (Bird | Fish);

const myPet: Pet = {
  name: 'Archimedes',
  flightSpeed: 12,
  altitude: 50,
  age: 2,
  health: HealthState.HEALTHY,
};