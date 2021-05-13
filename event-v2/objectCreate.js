const person = {
    firstName: '',
    lastName: '',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const ashok = Object.create(person);
ashok.firstName = 'ashok';
ashok.lastName = 'kumar';

const mohan = Object.create(person);
mohan.firstName = 'mohan';
mohan.lastName = 'kumar';

console.log(ashok.fullName());
console.log(mohan.fullName());