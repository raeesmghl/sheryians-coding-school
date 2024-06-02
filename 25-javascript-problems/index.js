

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
































