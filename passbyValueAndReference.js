//pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

//passbyReference
function changeObj(obj) {
    obj.prop1 = function () { };
    obj.prop2 = {};
}

var anObj = {};
anObj.prop1 = {};
changeObj(anObj);

console.log(anObj);