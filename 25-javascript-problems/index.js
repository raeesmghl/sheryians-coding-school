

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






