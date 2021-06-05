let testVariable = 12;

let arr = [1,1,2,3,2];
let tempArr = [];
let newArray = [];

for(let i=0;i<arr.length;i++){
    if(tempArr.includes(arr[i])){
        newArray.push(arr[i]);
    } else{
        tempArr.push(arr[i]);
    }
}

console.log(newArray);

