function fillArray(numTimes:number ,numRange:number):number[] {
    let array: number[] = []
    for (let i = 0; i <= numTimes; i++){
        array.push(Math.floor((Math.random() * numRange)))
    }
    return array
}

let array:number[] = fillArray(20, 100);
let result:number[] = array.map((num) => num * 2)
console.log(array);
console.log(result);