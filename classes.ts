class User {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();

    constructor(name: string, email: string, age: number)
    {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: '+this.name);
    }
    register(){
        console.log(this.name+' is now registered');
    }
    payInvoice(){
        console.log(this.name+' pay invoice');
    }
}
class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }
    payInvoice(){
        super.payInvoice()
    }

}

// let john = new User('John Doe', 'Jdoe@gmail.com', 34);
// console.log(john.age);

let mike: User = new Member(1, 'Make Smith', 'mike@gmail.com', 39);
mike.payInvoice();