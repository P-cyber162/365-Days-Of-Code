type Person = {
    name: string,
    age: number,
}

type Employee = Person & {
    employeeId: number,
};

const employee: Employee = {
    name: 'Prinz',
    age: 20,
    employeeId: 2334,
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.employeeId);