const scores: number[] = [10, 20, 30, 40];
let sum: number = 0;

const calculateTotal = (arr: number[]) => {
    for(let val of arr){
        sum += val;
    }
    return sum;
}

console.log(calculateTotal(scores));