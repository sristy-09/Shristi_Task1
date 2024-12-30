class person{
    #name       // '#' sign is for private member 
    #age
    constructor(name,  age){
        this.#name = name;
        this.#age = age;
    }
    getDetails(){
        return (`The name of a person is ${this.#name} and the age is ${this.#age}.`)
    }
}

const Person1 = new person("Ram",25)
console.log(Person1.getDetails())