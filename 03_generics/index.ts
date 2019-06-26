function identity<T>(arg: T): T {
  return arg;
}

const copy: string = identity<string>('test');

class IdentityClass<T> {
  identity: T;
  setIdentity(arg: T): void {
    this.identity = arg;
  }
} 

const container = new IdentityClass<number>();
container.setIdentity(12);

// Generic Constriants
interface Admin extends Person {}
interface User extends Person {}

function getName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}

const admin: Admin = { firstName: "Admin", lastName: "admin" };
const name = getName(admin);



