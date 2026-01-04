type Person = {
    name: string,
    age: number,
}

type Employee = Person & {
    employeeId: number,
};

const user: Employee = {
    name: 'Prinz',
    age: 20,
    employeeId: 2334,
};

console.log(user.name);
console.log(user.age);
console.log(user.employeeId);