


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


