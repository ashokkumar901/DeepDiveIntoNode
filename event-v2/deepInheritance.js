const util = require('util');

function Person() {
    this.firstName = 'Ashok';
    this.lastName = 'kumar';
}

Person.prototype.fullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

function Officer() {
    Person.call(this);
    this.badgeNo = '1234';
}

util.inherits(Officer, Person);
const officer = new Officer();

officer.fullName();


