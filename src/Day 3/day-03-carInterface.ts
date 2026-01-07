interface Car {
    make: string;
    year: number;
}

interface ElectricCar extends Car {
    batteryCapacity: number;
}

const user: ElectricCar = {
    make: 'Prinston',
    year: 2020,
    batteryCapacity: 34,
}

console.log(user.make);
console.log(user.year);
console.log(user.batteryCapacity);