


// solution 1: 

function func (n) {
    let arr = [];
    for(let i = 1;i<=n;i++){
        if(i%2==0){
            arr.push(i);
        }
    }
    return arr.join(' ')
}











// solution 2 :

function tableOf(n,till) {
    for(let i = 1; i<=till;i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }
}
tableOf(4,20);






// solution 3 : 

let kmToMiles = n => (n*0.621371).toFixed(5);

let meterToFeet = n => n*3.28084;

// create any conversion formula, pick the formula from google and use in javascript syntax








// solution 4 : 

let sumOfAr = (ar) =>{
    return ar.reduce((a,b)=>a+b);
}


// bonus intermediate challenge : we are gonna sum the last (final/answer) column in multiplication table (solution 2 concept is used);

function func(n) {
    let sum = 0;
    for(let i = 1;i<=10;i++){
        sum+=(n*i)
    }
    return sum;
}

// or you can directly use solution 2 with some additions : 

function tableOf(n,till) {
    let sum = 0
    for(let i = 1; i<=till;i++){
        console.log(`${n} * ${i} = ${n*i}`)
        sum+=(n*i);
    }
    console.log(`sum of all results is ${sum}`)
}












// solution 5 : 
let arr = [1,2,3,4,5];
let rev = arr.reverse();
console.log(arr)

// we have solved this problem in multiple ways in the notes








// solution 6 :

arr.sort((a,b)=>a-b);  // numerically sorted







// solution 7 : 


function filterNegatives(arr) {
    return arr.filter(el=>el>0)
}









// solution 8 : 


let withoutSpaces  = str=> str.split(' ').join('')







// solution 9 : 

let isDivisible=(n,divisible) => n%divisible==0?true:false;

//or (chatGPT)

function isDivisible(n, divisible) {
    if (n % divisible === 0) {
        return true;
    } else {
        return false;
    }
}

