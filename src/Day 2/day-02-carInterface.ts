interface Car {
    make: string;
    year: number;
}

interface ElectricCar extends Car {
    batteryCapacity: number,
}

const vehicle: ElectricCar = {
    make: 'speedversion',
    year: 20256,
    batteryCapacity: 344,
}

console.log(vehicle.make);
console.log(vehicle.year);
console.log(vehicle.batteryCapacity);