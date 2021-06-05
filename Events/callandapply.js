const obj = {
    name: 'Ashok kumar',
    getName: function(){
        console.log(`Hello ${this.name}`)
    }
}

obj.getName();
obj.getName.call({name:'mohan kumar'});
