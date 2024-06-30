

// Crack 25 JavaScript Questions: Boost Your Skills and Conquer Coding Challenges!
// these javascript problems (questions) may look like very crutial but they have really simple solutions





// // problem 1 : reverse each word in a string;

// let str = 'pakistan is my country';

// // sheryians solution
// let mp = str.split(' ').map((word)=>{
//     return word.split('').reverse().join('');
// })
// console.log(mp.join(' '))

// // my solution

// let arr = str.split('').reverse().join('').split(' ').reverse().join(' ');


































// // comment reply

// // someone commented on this video with a code to 'find the most frequent number, used in an array'. he was using double loop (loop inside loop) but their is simpler way to do so

// let arr = [2, 3, 4, 2, 3, 2, 5, 5, 6, 6, 7, 8, 8,8,8,5,8,8, 7,8,5,];
// let fincMostFrequent = (arr)=>{
//     let frequency = {};
//     let mostFrequent = 0;

//     for(let num of arr){
//         frequency[num] = (frequency[num] || 0) +1;

//         if(frequency[num]>mostFrequent){
//             mostFrequent = num;
//         }
//     }
//     return mostFrequent;
// }

// console.log(fincMostFrequent(arr))

// Your approach is almost correct, but there's a small issue in how the maximum frequency value is being tracked.
// In your code, the variable mostFrequent is being assigned the element itself instead of the frequency count.
// To correctly identify the element with the maximum frequency, 
// you'll need to keep track of both the highest frequency and the element associated with that frequency.

function func(arr) {
    let frequency = {};
    let maxCount = 0;
    let maxElement = null;

    for (let i of arr) {
        frequency[i] = (frequency[i] || 0) + 1;

        if (frequency[i] > maxCount) {
            maxCount = frequency[i];
            maxElement = i;
        }
    }
    return maxElement;
}

// Example usage:
const myArray = [3, 7, 2, 9, 5, 3, 7, 3, 3];
console.log(func(myArray)); // Output: 3

















// problem 2 : check if type is object but is it an array or not

// // my solution
// // sheryians solution
// let arr = [1,2,3];
// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }

// console.log(typeof arr);
// console.log(typeof obj);
// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))


























// // problem 3 : how to empty an array, do not reassign or apply loop on array;


// let arra = [1,2,3,4,5,6,7,8,9];

// arra.length = 0;  // you can set a value for the property 'length'; if you set length more than the original length of the array, it will create a hole in the array, and if you set length 5 for the array of (original) length of 9, it will include only the first 5 elements and removes all the other elements.


// console.log(arra);



// // but if you use loop : 

// // does not give you the required response, because every time the length of the array is changing and the condition for the loop is also changing
// // if you use a number rather than the array.length, in this case it will give you the required response.

// for(let i = 0;i<arra.length;i++){
//     arra.pop();    
// }

// console.log(arra);








































// // problem 4: check if a number is integer or not;

// let num = 45.45;
// let a = Number.isInteger(num);
// console.log(a);

// without using Number.isInteger(num);



// when you divide 45 with 1 its 45 and remainder is 0 and if you divide 45.3 with 1, its 45 and remainder is 0.3;


// console.log(45%1)
// console.log(45.5%1)

// // so use this technique


// let n = 0;

// if(n%1==0){
//     console.log('integer')
// }else{
//     console.log('non integer')
// }












































// problem 5: how to duplicate an array like [1,2,3,4] to [1,2,3,4,1,2,3,4];

let duplicate = arr => arr.concat(arr);






































// function problems 

//___________________________________________________________________________________________________


// problem 6: write a function that reverse a number;


let reverseNumb = (n) => {
    let str = n.toString().split('').reverse().join('')
    return Number(str);
}

// this was a single line solution

// but if you want to solve with loops and conditionals : 



function reverseTheNumber(num) {

    let lastletter = 'last letter ' + num % 10;

    let remaining = 'remaining ' + Math.floor(num / 10);


    // let result = [];

    // while(num>0){

    //     let rem = num%10;
    //     result.push(rem);
    //     num = Math.floor(num/10);
    // }
    // return result.join('');


    // // without using array, we can use arithmetic operators to do the same;


    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem // try to understand the difference between both while loops, this is the only difference between both of these

        num = Math.floor(num / 10);


    }

    return rev;

}

























// problem 7: is string a palindrome



// // my solution

// let isPalindrome = (str) =>{
//     str = str.toLowerCase().replace(/[^a-z0-9]/g,'');

//     for(let i = 0;i<str.length;i++){
//         if(str[i] !== str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }

// // sheryians solution

let checkPalindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}































// // problem 8: write a javascript function that returns a passed string with letters in alphabetic order



function alphabeticOrder() {
    return a.split('').sort().join('');
}




































// // problem 9: write a javascript function to capitalize the first letter in the string



let str = 'zindabad mubashar puttar maza e aa gya';

// let capitalizeFirstLetter = (str) =>{
//     let arr = str.split(' ');
//     let newArr = arr.map((v)=>{
//         return v[0].toUpperCase() + v.slice(1).toLowerCase();
//     })
//     return newArr.join(' ')

// }



// in the array repo (my javascript notes) their is are several methods to do so. but this is different because it used map()

// to understand this, i used too much variables but you can do this in a shorter way

let capitalizeFirstLetter = (str) => {
    return str.split(' ').map((v) => {
        return v[0].toUpperCase() + v.slice(1).toLowerCase();
    }).join(' ')
}


























// // problem 10 : write a javascript function that returns the type of the argument;


let typeIs = param => typeof param;



























//  // problem 11 : javascript function that returns number of occurance of each letter in a string;


// // my solution
let howManyTimes = (str, letter) => {

    let frequency = {};
    for (let i of str) {
        frequency[i] = (frequency[i] || 0) + 1;
    }
    return (letter.length > 1) ? 'only single letter alllowed' : frequency[letter];
}

// console.log(howManyTimes('this si a ','ab'));


// // sheryians solution 

function occ(str) {
    var occurance = {};

    str.split('').forEach(element => {
        if (occurance.hasOwnProperty(element)) {
            occurance[element]++;
        } else {
            occurance[element] = 1;
        }
    });
    return occurance;
}

// console.log(occ('this'))










































// // problem 12 : loop an array and add all the members


let arrayOfNumbers = [1, 2, 3, 4, 5];

// // my solution
// let sum = arrayOfNumbers.reduce((a,b)=>a+b,0);


//  // sheryians solution


// let sumOfArrayNumbers = 0;

// arrayOfNumbers.forEach((el)=>{
//     sumOfArrayNumbers+=el;
// })
























// // problem 13: loop an array of different datatypes and only add numbers


let array = [314, true, 'string', undefined, 45, 'another str', 12, 90, 0, false];


// mysolution

let onlyNumSum = (arr) => {
    let filtered = arr.filter((el) => typeof el == 'number')

    return filtered.reduce((a, b) => a + b);

}


// sheryians solution

let summ = 0;

array.forEach((el) => {
    if (typeof el == 'number') {
        summ += el;
    }
})
































// // problem 14 : loop an array of objects and remove all the objects which don't have gender value 'male';

let arrOfObjs = [
    { name: 'person1', gender: 'male' },
    { name: 'person2', gender: 'female' },
    { name: 'person3', gender: 'male' },
    { name: 'person4', gender: 'female' },
    { name: 'person5', gender: 'male' },
    { name: 'person6', gender: 'female' },
    { name: 'person7', gender: 'gmail' },
    { name: 'person8', gender: 'female' },
    { name: 'person9', gender: 'male' },
    { name: 'person10', gender: 'shemale' },
    { name: 'person11', gender: 'male' },
    { name: 'person12', gender: 'male' },
    { name: 'person13', gender: 'male' },
    { name: 'person14', gender: 'hotmale' },
    { name: 'person15', gender: 'shemale' },
    { name: 'person16', gender: 'male' },
    { name: 'person17', gender: 'costom' }, 
    { name: 'person18', gender: 'female' },
];


// // my solution (for sheryians, its simple)
let sigmaArray = arrOfObjs.filter((obj) => obj.gender == 'male')


// console.log(arrOfObjs);
// console.log(sigmaArray);


// // sheryians solution



// for(let i = 0;i<2;i++){

//     // this loop does not fullfil our requirements, as an element is removed from the array, this will change the length of the array (on which our loop's condition is based). so we wrapped this with another loop 
//     for(let j = 0;j<arrOfObjs.length;j++){
//         if(arrOfObjs[j].gender !== 'male'){
//             arrOfObjs.splice(j,1);
//         }
//     }

// }
// // console.log(arrOfObjs);



// // their is another way to do this  (someone commented 'solved a mystery for me' lol)

// for(let i = 0;i<arrOfObjs.length;i++){
//     if(arrOfObjs[i].gender !== 'male'){
//         arrOfObjs.splice(i,1);
//         i--;
//     }
// }

































// // problem 15 : use spread operator to copy array (not the refrence to the array);



// simply their are two datatypes (previtives and refrence);

// objects are refrence datatyes that means it gives you the refrence to the original object (not copy);

// by using spread operator, we can do this



let arr = [1, 2, 3, 4, 5];
// let newAr = [...arr];


// console.log(arr);
// console.log(newAr);

// arr.pop();  // only did changes on arr;

// console.log(arr);
// console.log(newAr);



// // we can also use .map() method


// newArr = arr.map(v=>v);
// console.log(newArr);
// arr.push(2222222222);
// console.log(arr);
// console.log(newArr);






































// // problem 16 : write a javascript function that returns the first n element of the array;
let func = (arr, n) => {

    let newAr = [];

    if (n <= arr.length){
        for (let i = 0; i < n; i++) {
            newAr.push(arr[i]);
        }
    }else{
        return n+ ' to elements bhi ni hn'
    }

    return newAr;

}


// console.log(func([1, 2, 3, 4, 5], 31));

// for getting last n elements 

let func2 = (arr,n)=>{
    let newAr = [];

    if(n<=arr.length){
        for(let i = 0 ; i < n ; i++){
            newAr.unshift(arr[arr.length-1-i]);
        }
    }else{
        return n+ ' to element bhi ni hn 2';
    }

    return newAr;
}

// console.log(func2([1,2,3,4,5],3))









































// // problem 17 : most frequent item in an array;

// // my solution (comment reply);

let mostFrequent = (arr) =>{

    let frequency = {};
    let max = 0;

    for(let el of arr){
        frequency[el] = (frequency[el] || 0) +1;

        if(frequency[el]>max){
            max = el;
        }
    }
    return max;
}


// // sheryians solution :

let freq = (arr)=>{
    let frequency = {};

    arr.forEach((elem)=>{
        if(frequency.hasOwnProperty(elem)) frequency[elem]++
        else frequency[elem] = 1;
    })

    let max = Object.keys(frequency).reduce((a,b)=>{
        return frequency[a]>frequency[b]?a:b
    })
    return max;
}
































// // problem 18 : shuffle an array




// my solution (fisher yates)

let shuffle = (arr) =>{

    for(let i = arr.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));

        let el = arr[i];
        arr[i] = arr[j];
        arr[j] = el;
    }

    return arr;

}

// sheryians solution (good one);
let shuffleKaro = (arr) =>{
    var totalShuffleArea = arr.length;
    while(totalShuffleArea>0){
        totalShuffleArea--;    
        let indexToBeExchanged = Math.floor(Math.random()*totalShuffleArea);
        let temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = temp;
    }
    return arr;
}































// // problem  19 : union arrays

let union = (arr1,arr2) =>{
    // i dont know wtf is Set
    let a = [...new Set(arr1.concat(arr2))]
    return a.sort((a,b)=>a-b);
}



