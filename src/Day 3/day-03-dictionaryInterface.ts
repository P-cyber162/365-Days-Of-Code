interface Ditionary {
    [key: string]: number
};

const scores: Ditionary = {
    "math": 25,
    "science": 50,
    "emglish": 25,
};

const sumValues = (dict: Ditionary) => {
    let sum: number = 0;
    for( const key in dict ) {
        if( dict[key] !== undefined){
            sum += dict[key];
        }
    }
    return sum;
}

console.log(sumValues(scores))