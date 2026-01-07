type Admin = {
    role: "admin",
    permissions: string[]
};

type User = {
    role: "user",
    email: string
};


const describeAccount = (account: Admin | User) => {
    if("permissions" in account){
        console.log('Admin Account')
    }
    else {
        console.log('Guest Account')
    }
};

describeAccount({
    role: "admin",
    permissions: ['read', 'write', 'erase']
});

describeAccount({
    role: "user",
    email: "example@gamil.com"
});