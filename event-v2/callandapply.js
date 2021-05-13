const person = {
    firstName: 'Ashok kumar',
    fullName: function(data) {
        console.log(`hello ${this.firstName} ${data}`);
    }
}

person.fullName();
person.fullName.call({firstName:'mohan kumar'},'firstname');
person.fullName.apply({firstName:'mohan kumar'},['firstname']);
