// greet a person  by the given firstname and lastname

/*let firstname="Pranith";
let lastname="Tirumalasetti"

console.log("Hi "+firstname+" "+lastname+" "+"How are you?");*/


//greets a person based on their gender.


/*let gender="female";

if(gender=="male"){
    console.log("He is a good boy");
}else{
    console.log("she is a good girl");
}*/

// count from 0 to 1000 and prints

/*for(let c=0;c<=1000;c++){
    console.log(c+" ");
}*/


// prints all even numbers in a array

/*let arr=[12,3,4,5,67,88,34,80];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}
*/

// prints biggest number in a array

/*
let arr=[1,2,3,4,5,6,7,8,9,23,4,56,78,768];

let res=arr[0];

for(let i=0;i<arr.length;i++){
    res=Math.max(res,arr[i]);
}

console.log("Max element in the array is "+res);
*/

// prints all male people first name from a complex object

/*
let obj=[
    {
        firstname:"pranith",
        gender:"male",
        age:23
    },
    {
        firstname:"raju",
        gender:"male",
        age:45
    },
    {
        firstname:"ravi",
        gender:"male",
        age:25
    },
    {
        firstname:"priya",
        gender:"female",
        age:24
    }
];

for(let i=0;i<obj.length;i++){
    if(obj[i].gender=='male'){
        console.log(obj[i].firstname);
    }
}

*/

// reverse all elements in a array

/*
let arr=[1,2,3,4,5,6,7,8];
let i=0,n=arr.length;

// arr.reverse();

while(i<n/2){
    [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]];
    i++;
}

console.log("Final array after reversing "+arr);
*/

// finds the sum of two numbers

/*
function twosum(a,b){
    return a+b;
}

console.log(twosum(3,4));
*/

//

function greet(){
    console.log("Hello world");
}
setTimeout(greet,1*1000)
