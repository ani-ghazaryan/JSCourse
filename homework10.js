// 1. Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.
class Author {

    /**
     * 
     * @param {name}- contains only letters and '.'s  and lenght is more than 7 chars
     * @param {email} - 'xxx@xxx.xxx' format is accepted
     * @param {gender} - is 'F' for female Authors, "M" for male Authors
     */
    constructor(name, email, gender) {
        // this._name = name;
        // this._email = email;
        // this._gender = gender;
        
        debugger;
        if(name.length > 7 && /^[a-z A-Z]+|(\.+)$/.test(name)) {
            this._name = name;
        } else {
            console.log("Author's name is invalid. Please, create an Author, whose name contains only letters, \n dots and is more than 10 letters. Use .name setter");
        }

        if(email.length > 5 && /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
            this._email = email;
        } else {
            console.log("Author's email is invalid. Please, insert an email with xxx@xxx.xxx format");
        }

        if (gender == 'F' || gender == 'M') {
            this._gender = gender;
        } else {
            console.log("Author's gender is invalid. Please, insert 'F' for female Authors, 'M' for male Authors. Use .gender setter")
        }

    }
    
    get name(){
        return this._name;
    }

    /**
     * @param {newName} - contains only letters and '.'s  and lenght is more than 7 chars
     */
    set name(newName){
        if(newName.length > 7 && /^[a-z A-Z]+|(\.+)$/.test(newName)) {
            this._name = newName;
        } else {
            console.log("Author's name is invalid. Please, create an Author, whose name contains only letters, \n dots and is more than 10 letters. Use .name setter");
        }  
    }

    get email(){
        return this._email;
    }

    /**
     * @param {newEmail} - 'xxx@xxx.xxx' format is accepted
     */
    set email(newEmail){
        if(newEmail.length > 5 && /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(newEmail)) {
            this._email = newEmail;
        } else {
            console.log("Author's email is invalid. Please, insert an email with xxx@xxx.xxx format");
        }
    }

    get gender(){
        return this._gender;
    }

    /**
     * @param {changedGender} - is 'F' for female Authors, "M" for male Authors
     */
    set gender(changedGender){
        if (changedGender == 'F' || changedGender == 'M') {
            this._gender = changedGender;
        } else {
            console.log("Author's gender is invalid. Please, insert 'F' for female Authors, 'M' for male Authors. Use .gender setter")
        }
    }

    toString(){

        if(Object.getOwnPropertyNames(this) == 3) {
            let result = "Let me introduce you " + this.name + ". ";
            if (this.gender == "F") {
                result += "Her email address is: ";
             } else {
                result += "His email address is: ";
            }

            result += this.email + " .";
            return result;
        } else {
            return "This Author is missing some info. Review it and add neccessary info. Good luck!";
        }
        
    }

}

class Book {

    /**
     * 
     * @param {title} - title of the book, which cannot be empty
     * @param {author} - Author of the book, which cannot be an empty object
     * @param {price} - price of the book, which cannot be a negative number
     * @param {quantity} - quantity of the published books, which cannot be a negative number
     */
    constructor(title, author, price, quantity) {

        // this._title = title;
        // this._author = author;
        // this._price = price;
        // this._quantity = quantity;

        if(title.length != 0) {
            this._title = title;
        } else {
            console.log("Book's title cannot be empty. Please, insert a valid title with .title setter");
        }

        if(Object.getOwnPropertyNames(author) == 3) {
            let [name, email, gender] = Object.values(author);
            this._author = new Author(name, email, gender);
        } else {
            console.log("Author has missing some info, however it was set to the Book");
        }

        if(Number(price) > 0) {
            this._price = price;
        } else {
            console.log("Please, insert a valid price, it should be a positive number");
        }

        if(Number(quantity) > 0) {
            this._quantity = quantity;
        } else {
            console.log("Please, insert a valid quantity, it should be a positive number");
        }

    }

    get title(){
        return this._title;
    }

    /**
     * @param {newTitle} - title cannot be empty
     */
    set title(newTitle){
        if(newTitle.length != 0) {
            this._title = newTitle;
        } else {
            console.log("Book's title cannot be empty. Please, insert a valid title with .title setter");
        }
    }

    get author() {
        return this._author.toString();
    }

    /**
     * @param {author} - Author cannot be an empty object
     */
    set author(author) {
        if(Object.getOwnPropertyNames(author) == 3) {
            let [name, email, gender] = Object.values(author);
            this._author = new Author(name, email, gender);
        } else {
            console.log("Author has missing some info, however it was set to the Book");
        }
    }

    get price(){
        return this._price;
    }

    /**
     * @param {newPrice} - price cannot be a negative number
     */
    set price(newPrice){
        if(Number(newPrice) > 0) {
            this._price = newPrice;
        } else {
            console.log("Please, insert a valid price, it should be a positive number");
        }
    }

    get quantity(){
        return this._quantity;
    }

    /**
     * @param {newQuantity} - quantity cannot be a negative number
     */
    set quantity(newQuantity){
        if(Number(newQuantity) > 0) {
            this._quantity = newQuantity;
        } else {
            console.log("Please, insert a valid quantity, it should be a positive number");
        }
    }

    getProfit () {
        return (this._price * this._quantity).toFixed(2);
    }

    toString() {

        if(Object.getOwnPropertyNames(this) == 3) {
            let result = this._author.toString() + "\n";       

            result += "Who is author of '" + this._title + "' book. It was published in " + this._quantity + "examples and costs " + this._price + " AMD.";
            return result;
        } else {
            return "This Book is missing some info. Review it and add neccessary info. Good luck!";
        }
    }

}

// 2. Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account{

    static id = 0;

    /**
     * 
     * @param {name} - Account holder name, which should be at least more than 7 letters
     * @param {*} balance - Account balance, which should not be less than 0
     */
    constructor(name, balance) {
        this._id = ++Account.id;

        if(name.length > 7 && /^[a-z A-Z]+|(\.+)$/.test(name)) {
            this._name = name;
        } else {
            console.log("Account holder's name is invalid. Please, create an Account holder, whose name contains only letters, \n dots and is more than 10 letters. Use .name setter");
        }

        if(Number(balance) > 0) {
            this._balance = balance;
        } else {
            console.log("Please, insert a valid balance, it should be more than 0");
        }
    }

    /**
     * 
     * @param {name} - Account holder name, which should be at least more than 7 letters
     */
    set name(newName){
        if(newName.length > 7 && /^[a-z A-Z]+|(\.+)$/.test(newName)) {
            this._name = newName;
        } else {
            console.log("Account holder's name is invalid. Please, create an Account holder, whose name contains only letters, \n dots and is more than 10 letters. Use .name setter");
        }
    }

    get name(){
        return this._name;
    }

    /**
     * 
     * @param {newBalance} - Account balance should not be less than 0
     */
    set balance(newBalance){
        if(Number(newBalance) > 0) {
            this._balance = newBalance;
        } else {
            console.log("Please, insert a valid balance, it should be more than 0");
        }
    }

    get balance(){
        return this._balance;
    }

    get id(){
        return this._id;
    }

    credit(amount) {
        if(amount > 0) {
            this._balance += amount;
            return this._balance;
        } else {
            return "Your balance has not been changed.";
        }
        
    }

    // TODO: check - amount cannot be negative
    debit(amount) {
        if(amount > 0) {
            if(amount < this._balance) {
                this._balance -= amount;
                return this._balance;
            } else {
                return "Amount exceeded balance.";
            }
        } else {
            return "Your balance has not been changed.";
        }
        
    }

    transferTo(anotherAccount, amount) {
        
        if(Object.getOwnPropertyNames(anotherAccount) == 3 && amount > 0) {
            if(amount < anotherAccount.balance) {
                this._balance -= amount;
                anotherAccount.balance += amount;
                return this._balance;
            } else {
                return "Amount exceeded balance.";
            }
        } else {
            return "No money has been transferred. Your balance has not been changed.";
        }

    }

    // As ID is 'generated' for each instance of a class, I compare accounts with IDs. 
    static identifyAccounts(accountFirst, accountSecond) {
        debugger;
        if (accountFirst.id == accountSecond.id) {
            return "These accounts are the same";
        } else {
            return "These are two different accounts";
        }
    }

    toString() {

        if(Object.getOwnPropertyNames(anotherAccount) == 3) {
            let result = "This is an account of " + this._name + " with " + this._balance + " AMD . \n";
            result += "Important! Account id can't be displayed!";
            return result;
        } else {
            return "This Account is missing some info. Review it and add neccessary info. Good luck!";
        }
        
    }

}

// 3. Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().

// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.

// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.

class Person {

    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName(){
        return this._firstName;
    }

    // TODO: check - firstName contains only letters
    set firstName(newFirstName){
        this._firstName = newFirstName;
    }

    get lastName(){
        return this._lastName;
    }

    // TODO: check - lastName contains only letters
    set lastName(newLastName){
        this._lastName = newLastName;
    }

    get gender(){
        return this._gender;
    }

    // TODO: check - firstName contains only letters
    set gender(newGender){
        this._gender = newGender;
    }

    get age(){
        return this._age;
    }

    // TODO: check - lastName contains only letters
    set age(newAge){
        this._age = newAge;
    }

    toString(){

        //debugger;
        let result = "Let me introduce you " + this.firstName + "  " + this.lastName + "person.";
        if (this.gender == "F") {
            result += "She is ";
        } else {
            result += "He is ";
        }

        result += this.age + " years old.";
        return result;
    }

}

class Student extends Person{

    constructor(firstName, lastName, gender, age, program, year, fee) {
        this.person = super(firstName, lastName, gender);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }

    get program(){
        return this._program;
    }

    set program(newProgram) {
        this._program = newProgram;
    }

    get year(){
        return this._program;
    }

    set year(newYear) {
        this._year = newYear;
    }

    get fee(){
        return this._fee;
    }

    set fee(newFee) {
        this._fee = newFee;
    }

}