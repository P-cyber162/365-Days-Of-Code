const printUser = (value: string | number ): void => {
    if(typeof value === "string") {
        console.log(`String value: ${value}`);
    }
    else{
        console.log(`Number value: ${value}`);
    }
}

printUser(25);
printUser('Hello')