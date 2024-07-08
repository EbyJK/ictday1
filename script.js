
//var hs global scope. can be reinitialized
var a=10;
console.log(a);
{
    var a=20;
    console.log(a)
}
console.log(a)
let b=10;
console.log(b);
{
    let b=20;
    console.log(b);
}
//let has local scope. It cannot be reinitialized.


