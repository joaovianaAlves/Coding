let numQuantity: number = 10;

function fillArrayWithEvens(num:number){
    let numArray: number[] = [];
    for (let i = 0; i <= num; i++){
        let numRamdom = Math.floor(Math.random() * 1000);
        if(numRamdom % 2 === 0)
            numArray.push(numRamdom);
    }
    return numArray
}

// function filterArray(array: number[]) {
//     return array.filter(number => number % 2 === 0);
// }

let filledArray = fillArrayWithEvens(numQuantity);
console.log(filledArray)
// let sortedArray: number[] = filterArray(filledArray);