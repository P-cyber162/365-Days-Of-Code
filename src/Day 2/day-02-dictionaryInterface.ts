interface Dictionary {
    [key: string]: number;
}

const scores: Dictionary = {
    math: 25,
    english: 50,
    biology: 25,
}

function sumValues (input: Dictionary) {
    let sum: number = 0;
    for (const key in input) {
        if(input[key] !== undefined) {
            sum += input[key];
        }
    }
    return sum;
}

console.log(sumValues(scores));