let arr = [];

arr.push(()=>{
    console.log('Hello1');
});

arr.push(()=>{
    console.log('Hello2');
});

arr.push(()=>{
    console.log('Hello3');
})

arr.forEach(element=>{
     element();
})