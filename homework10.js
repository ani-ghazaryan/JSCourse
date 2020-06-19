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
     * @param {string} name The name of Author
     * @param {string} email The email of Author
     * @param {string} gender The gender of Author
     */
    constructor(name, email, gender) {
        // this._name = name;
        // this._email = email;
        // this._gender = gender;
        
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
     * 
     * @param {string} newName New name for Author, which contains only letters and '.'s  and lenght is more than 7 chars
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
     * 
     * @param {string} newEmail New email for Author, which should be in 'xxx@xxx.xxx' format
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
     * 
     * @param {string} changedGender New gender for Author, which should be 'F' for female Authors, "M" for male Authors
     */
    set gender(changedGender){
        if (changedGender == 'F' || changedGender == 'M') {
            this._gender = changedGender;
        } else {
            console.log("Author's gender is invalid. Please, insert 'F' for female Authors, 'M' for male Authors. Use .gender setter")
        }
    }

    toString(){

        if(Object.getOwnPropertyNames(this).length == 3) {
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
     * @param {string} title The title of the book
     * @param {Author} Author The Author of the book
     * @param {number} price The price of the book
     * @param {number} quantity The quantity of the published items
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

        if(Object.getOwnPropertyNames(author).length == 3) {
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
     * 
     * @param {string} title New title of the Book, which cannot be empty
     */
    set title(newTitle){
        if(newTitle.length != 0) {
            this._title = newTitle;
        } else {
            console.log("Book's title cannot be empty. Please, insert a valid title with .title setter");
        }
    }

    get author() {
        return this._author.name();
    }

    /**
     * 
     * @param {Author} Author New Author for the book, which cannot be an empty object
     */
    set author(author) {
        if(Object.getOwnPropertyNames(author).length == 3) {
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
     * 
     * @param {number} newPrice New price for a book, which cannot be a negative number
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
     * 
     * @param {number} newQuantity New quantity for the published items, which cannot be a negative number
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

        //debugger;
        if(Object.getOwnPropertyNames(this).length == 4) {
            let result = this._author.toString() + "\n";       

            result += "Who is author of '" + this._title + "' book. It was published in " + this._quantity + "examples and costs " + this._price + " AMD.";
            return result;
        } else {
            return "This Book is missing some info. Review it and add neccessary info. Good luck!";
        }
    }

}

let a1 = new Author("Stephen King", "stephenking@gmail.com", 'M');
let a2 = new Author("J.K. Rowling", "jkrowling@gmail.com", 'F');
a1.toString();
let b1 = new Book("It", a1, 6500, 20000);
let b2 = new Book("Harry Potter and the Order of the Phoenix", a2, 7500, 40000);
b1.getProfit();
b2.toString();


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
     * @param {string} name Account holder name
     * @param {number} balance A balance on an account 
     */
    constructor(name, balance) {
        this._id = Account.id++;

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
     * @param {string} newName New name for Account holder, which should be at least more than 7 letters
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
     * @param {number} newBalance New balance on an account, which should not be less than 0
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
            return "Your new balance is " + this._balance;
        } else {
            return "Your balance has not been changed.";
        }
        
    }

    debit(amount) {
        if(amount > 0) {
            if(amount < this._balance) {
                this._balance -= amount;
                return "Your new balance is " + this._balance;
            } else {
                return "Amount exceeded balance.";
            }
        } else {
            return "Your balance has not been changed.";
        }
        
    }

    transferTo(anotherAccount, amount) {
        
        if(Object.getOwnPropertyNames(anotherAccount).length == 3 && amount > 0) {
            if(amount < anotherAccount.balance) {
                this._balance -= amount;
                anotherAccount.balance += amount;
                return "Your new balance is " + this._balance;
            } else {
                return "Amount exceeded balance.";
            }
        } else {
            return "No money has been transferred. Your balance has not been changed.";
        }

    }

    static identifyAccounts(accountFirst, accountSecond) {
        //debugger;
        if( Object.getOwnPropertyNames(accountFirst).length == 3 && Object.getOwnPropertyNames(accountSecond).length == 3) {
            let valuesOfFirstAccount = Object.values(accountFirst);
            let valuesOfSecondAccount = Object.values(accountSecond);

            for (let i = 1; i < 4; i++) {
                if(valuesOfFirstAccount[i] == valuesOfSecondAccount[i]) {
                    continue;
                } else {
                    return "These are two different accounts"
                }
            }

            return "These accounts have the same data";

        } else {
            return "These are invalid accounts and cannot be compared";
        }
        
    }

    // As ID is 'generated' for each instance of a class, I compare accounts with IDs. 
    static identifyAccountsByIDs(accountFirst, accountSecond) {
        if (accountFirst.id == accountSecond.id) {
            return "These accounts are the same";
        } else {
            return "These are two different accounts";
        }
    }

    toString() {

        if(Object.getOwnPropertyNames(this).length == 3) {
            let result = "This is an account of " + this._name + " with " + this._balance + " AMD . \n";
            result += "Important! Account id can't be displayed!";
            return result;
        } else {
            return "This Account is missing some info. Review it and add neccessary info. Good luck!";
        }    
    }

}

let acc1 = new Account("Lady Bug", 12500);
let acc2 = new Account("Snake Plant", 170500);
acc1.credit(4500);
acc1.transferTo(acc2, 3500);
acc2.debit(13500);
Account.identifyAccounts(acc1, acc2);

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

    /**
     * 
     * @param {string} firstName Person firstname
     * @param {string} lastName Person lastname
     * @param {string} gender Person gender
     * @param {number} age Person age
     */
    constructor(firstName, lastName, gender, age) {
        // this._firstName = firstName;
        // this._lastName = lastName;
        // this._gender = gender;
        // this._age = age;

        if (firstName.length > 3 && /^[a-z A-Z]+|(\.+)$/.test(firstName)) {
            this._firstName = firstName;
        } else {
            console.log("Person firstname is invalid. Please, insert a name with more than three letters");
        }

        if (lastName.length > 3 && /^[a-z A-Z]+|(\.+)$/.test(lastName)) {
            this._lastName = lastName;
        } else {
            console.log("Person lastname is invalid. Please, insert a name with more than three letters.");
        }

        if (gender == 'F' || gender == 'M') {
            this._gender = gender;
        } else {
            console.log("Person's gender is invalid. Please, insert 'F' for female People, 'M' for male People.")
        }

        if(Number(age) > 0) {
            this._age = age;
        } else {
            console.log("Please, insert a valid age, it should be number.");
        }

    }

    get firstName(){
        return this._firstName;
    }

    /**
     * 
     * @param {string} newFirstName New firstname for Person, which should be at least 4 letters and can contain '.' from the symbols
     */
    set firstName(newFirstName){
        if (newFirstName.length > 3 && /^[a-z A-Z]+|(\.+)$/.test(newFirstName)) {
            this._firstName = newFirstName;
        } else {
            console.log("Person firstname is invalid. Please, insert a name with more than three letters");
        }
        
    }

    get lastName(){
        return this._lastName;
    }

    /**
     * 
     * @param {string} newLastName New lastname for Person, which should be at least 4 letters and can contain '.' from the symbols
     */
    set lastName(newLastName){
        if (newLastName.length > 3 && /^[a-z A-Z]+|(\.+)$/.test(newLastName)) {
            this._lastName = newLastName;
        } else {
            console.log("Person lastname is invalid. Please, insert a name with more than three letters.");
        }
    }

    get gender(){
        return this._gender;
    }

    /**
     * 
     * @param {string} newGender New gender for Person, which should be 'F' for female People, "M" for male People
     */
    set gender(newGender){
        if (newGender == 'F' || newGender == 'M') {
            this._gender = newGender;
        } else {
            console.log("Person's gender is invalid. Please, insert 'F' for female People, 'M' for male People.")
        }
    }

    get age(){
        return this._age;
    }

    /**
     * 
     * @param {number} newAge New age for Person, which should be a positive number.
     */
    set age(newAge){
        if(Number(newAge) > 0) {
            this._age = newAge;
        } else {
            console.log("Please, insert a valid age, it should be number.");
        }
    }

    toString(){

        debugger;
        if(Object.getOwnPropertyNames(this).length == 5) {
            let result = "Let me introduce you " + this.firstName + "  " + this.lastName + ".";
            if (this.gender == "F") {
                result += "She is ";
            } else {
                result += "He is ";
            }

            result += this.age + " years old.";
            return result;
        } else {
            console.log("Person has missing data and cannot be printed!");
        }
        
    }

}

class Student extends Person{

    // TODO: Validations should be added for constructor

    /**
     * 
     * @param {string} firstName Firstname of Student
     * @param {string} lastName Lastname of Student
     * @param {string} gender Gender of Student
     * @param {number} age Age of Student
     * @param {Array[string]} program Program list of Studet
     * @param {number} year ClassYear of Student
     * @param {number} fee Fee per year
     */
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        this._programs = programs;
        this._year = year;
        this._fee = fee;
    }

    get programs(){
        return this._programs;
    }

    /**
     * @param {Array[string]} newProgram New program for Student, which have at least one class
     */
    set programs(newPrograms) {
        if(newPrograms.length > 0) {
            this._programs = newPrograms;
        } else {
            console.log("Your program list is empty. Pick a new one!");
        }
        
    }

    get year(){
        return this._program;
    }

    /**
     * @param {number} newYear New class year for Student
     */
    set year(newYear) {
        if(newYear >= new Date().getFullYear()) {
            this._year = newYear;
        } else {
            console.log("Please, insert year which is greater or equal to the current year.")
        }
       
    }

    get fee(){
        return this._fee;
    }

    /**
     * @param {number} newFee New fee per year, which cannot be negative number.
     */
    set fee(newFee) {
        if(Number(newFee) > 0) {
            this._fee = newFee;
        } else {
            console.log("Please, insert a valid fee per year.");
        }
        
    }

    // ???????????? Not quite sure I got this correct
    passExam(program, grade) {
        if(grade > 50) {
            this._year++;
        }
    }

    toString() {
        super.toString();
        let result = "";
        if (this.gender == "F") {
            result += "She is a student of ";
        } else {
            result += "He is a student of ";
        }
        result += this._year + " class year. The program list contans these classes : " + this._programs + ". The fee per year is " + this._fee + "AMD";
        return result;

    }

}

class Teacher extends Person {

    // TODO Validations should be added for constructor
    /**
     * 
     * @param {string} firstName Firstname of Teacher
     * @param {string} lastName Lastname of Teacher
     * @param {string} gender Gender of Teacher
     * @param {number} age Age of Teacher
     * @param {string} program Program being tought by Teacher 
     * @param {*} salary Salary of Teacher
     */
    constructor(firstName, lastName, gender, age, program, salary) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._salary = salary;
    }

    get program(){
        return this._program
    }

    /**
     * @param {string} newProgram New program for Teacher, which cannot be empty
     */
    set program(newProgram) {
        if(newProgram.length > 0) {
            this._program = newProgram;
        } else {
            console.log("Please, insert a valid progran name.")
        }
    }

    get salary(){
        return this._salary;
    }

    /**
     * @param {number} newSalary New salary for Teacher
     */
    set salary(newSalary){
        if(newSalary > this._salary) {
            this._salary = newSalary;
        } else {
            console.log("Please, insert valid salary, which is higher than the previous one.")
        }
        
    }

    toString() {
        super.toString();
        let result = "";
        if (this.gender == "F") {
            result += "She teaches";
        } else {
            result += "He teaches";
        }

        result += this._program + " and gets " + this._salary + " AMD per month.";
        return result;

    }

}

let s1 = new Student("Fred", "Weasley", "M", 21, ["Math", "Chemistry"], 2020, 350000);
let s2 = new Student("George", "Weasley", "M", 21, ["Math", "Chemistry"], 2020, 350000);
let t1 = new Teacher("Severus", "Snape", "M", 45, "Dark Arts", 600000)
let t2 = new Teacher("Minerva", "McGonagall", "F", 40, "Transfiguration ", 1600000)