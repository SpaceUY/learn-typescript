"use strict";
function identity(arg) {
    return arg;
}
const copy = identity('test');
class IdentityClass {
    setIdentity(arg) {
        this.identity = arg;
    }
}
const container = new IdentityClass();
container.setIdentity(12);
function getName(person) {
    return `${person.firstName} ${person.lastName}`;
}
const admin = { firstName: "Admin", lastName: "admin" };
const name = getName(admin);
