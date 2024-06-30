


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












// solution 10 : 

function noOfVovels (str) {
    let no = 0;

    str.split('').forEach(el => {
        if(el=='a' || el == 'e' || el=='i' || el == 'o' || el == 'u'){
            no++;
        }
    });
    return no;
}


// or (chatGPT) : 

function noOfVovel (str) {

    let vovels = 'aeiouAEIOU';
    let count = 0;
    for(let i of str){
        if(vovels.includes(i)){
            count++;
        }
    }
    return count;
}







// solution 11 : 


function func(arr) {
    let max = 0;
    for(let i of arr){
        if(i>max){
            max = i;
        }
    }
    return max;
}

let ab = [1,2,8,2,5,7,1,3,1,3,5,7,0];



// simple

console.log(Math.max.apply(null,ab));

// if you want to find the most frequent el in array, check 'comment reply example' in '25 javascript problems' by sheryians coding school











// solution 12 : 

function isPalindrome(str) {

    let newStr = str.toLowerCase().replace(/[^a-z]/g,'');
    let reversed = newStr.split('').reverse().join('');
    return reversed == newStr
}
console.log(isPalindrome('car ock kcor 3ac'));
