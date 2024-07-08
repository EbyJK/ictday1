function add(a,b){
    let c=a+b;
    console.log(c);

}
add(3,2);
add(2,6);
//es6 arrow operator
//arrow function
const sum = (a,b) =>{
    let c=a+b;
    console.log(c);

}
sum(2,2);

const fullname = (firstname,lastname)=>{
    let  full= `${firstname} ${lastname}`
    console.log(full);
    
    
}
fullname("eby","kavungal");