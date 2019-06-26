interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}
const Me: Person = { firstName: "My", lastName: "Name" };

interface People {
  [Key: string]: Person;
}
//
// Indexable types
const Employees: People = {
  '5cde2ef1': { firstName: "First", lastName: "Person", age: 20 },
  '5cde2a3e': { firstName: "Nubmer", lastName: "Two" },
  '5cde3a42': Me,
};
//
// Function types
interface Func {
  (var1: string, var2: number): boolean;
}
const myFunc: Func = (var1: string, var2: number) => { return true };

interface Identity {
  identity: Person;
  birthday: () => void
  getAge: () => number | undefined;
}

class Myself implements Identity {
  identity: Person;

  birthday() {
    if(this.identity.age) {
      ++this.identity.age;
    }
  }

  getAge() {
    return this.identity.age;
  }
}
//
// Extending Interfaces

interface ResidenceOwner extends Person {
  address: string,
  ownerSince: number
}

const owner: ResidenceOwner = { 
  firstName: "First",
  lastName: "Last",
  address: "124 Ave Street Road",
  ownerSince: 1561490895019
}