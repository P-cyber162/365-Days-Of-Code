interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

const user: Employee = {
    name: 'Prince',
    age: 20,
    employeeId: 3344,
}

console.log(user.name);
console.log(user.age);
console.log(user.employeeId);