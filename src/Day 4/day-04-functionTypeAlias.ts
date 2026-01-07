type Calculate = (num1: number, num2: number) => number;

const solve: Calculate = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(solve(2,3))