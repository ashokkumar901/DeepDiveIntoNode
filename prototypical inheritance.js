function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

const person1 = new Person('Ashok', 'kumar');
console.log(person1.fullName());
