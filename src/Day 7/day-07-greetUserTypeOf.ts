const greetUser = (name: string | undefined): void => {
    if(name){
        console.log(`Hello, ${name}`);
    }
    else{
        console.log(`Hello, Guest`);
    }
}

greetUser('Jacob')
greetUser(undefined);