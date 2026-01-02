interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

const worker: Employee = {
    name: 'Prince',
    age: 19,
    employeeId: 211,
}

console.log(worker.name);
console.log(worker.age);
console.log(worker.employeeId);