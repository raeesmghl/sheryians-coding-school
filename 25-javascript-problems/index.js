

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
























