class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`hi ${this.firstName} ${this.lastName}`);
    }
}

const person = new Person('Ashok', 'kumar');
person.greet();