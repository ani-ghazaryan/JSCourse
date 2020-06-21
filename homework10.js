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
        
        this.name = name;
        this.email = email;
        this.gender = gender;
    
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
            this._name = "Unknown";
            console.log("Author's name is set to 'Unknown'. Please, set a valid name, which contains only letters, \n dots and is more than 7 letters.");
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
            this._email = "invalid@inva.lid";
            console.log("Author's email is set to 'invalid@inva.lid'. Please, set a valid email with xxx@xxx.xxx format.");
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
            this._gender = "unknown";
            console.log("Author's gender is set to 'unknown'. Please, set a valid gender with 'F' for female Authors, 'M' for male Authors.")
        }
    }

    toString(){
        //debugger;
        if(this instanceof Author) {
            let result = "Name: " + this._name + ", email: '" + this._email + "', gender: " + this._gender + ".";
            return result;
        } else {
            return "Invalid object! Not printable!";
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

        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;

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
            this._title = "Untitled";
            console.log("Book's title is set to 'Untitled'. Please, insert a valid title.");
        }
    }

    get author() {
        return this._author;
    }

    /**
     * 
     * @param {Author} Author New Author for the book, which cannot be an empty object
     */
    set author(author) {
        if(author instanceof Author) {
            this._author = author;
        } else {
            this._author = {};
            console.log("No Author is set to this book. Please, set a valid Author.");
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
            this._price = 0;
            console.log("Book's price is set to 0. Please, insert a valid price, which is a positive number.");
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
            this._quantity = 0;
            console.log("Book's quantity is set to 0. Please, insert a valid quantity, which is a positive number.");
        }
    }

    getProfit () {
        return (this._price * this._quantity).toFixed(2);
    }

    toString() {
        //debugger;
        if(this instanceof Book) {
            return "Title: '" + this._title + "', Author: " + this.author.toString() + ". Price: " + this._price + " AMD, quantity: " + this._quantity + " .";
        } else {
            return "Invalid object! Not printable!";
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

    static _id = 0;

    /**
     * 
     * @param {string} name Account holder name
     * @param {number} balance A balance on an account 
     */
    constructor(name, balance) {

        this._id = Account.id++;
        this.name = name;
        this.balance = balance;
    
    }

    /**
     * 
     * @param {string} newName New name for Account holder, which should be at least more than 7 letters
     */
    set name(newName){
        if(newName.length > 7 && /^[a-z A-Z]+|(\.+)$/.test(newName)) {
            this._name = newName;
        } else {
            this._name = "Unknown"
            console.log("Account holder's name is set to 'Unknown'. Please, create an Account holder, whose name contains only letters, \n dots and is more than 7 letters.");
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
            this._balance = 0;
            console.log("Account balance is set to 0. Please, insert a valid balance, which is greater than 0");
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
            return "Your new balance is " + this._balance + " AMD";
        } else {
            return "The requested money is greater than your balance. It has not been changed.";
        }
        
    }

    debit(amount) {
        if(amount > 0) {
            if(amount < this._balance) {
                this._balance -= amount;
                return "Your new balance is " + this._balance + " AMD";
            } else {
                return "Amount exceeded balance.";
            }
        } else {
            return "The inserted money is a negative. Your balance has not been changed.";
        }
        
    }

    transferTo(anotherAccount, amount) {
        
        if(anotherAccount instanceof Account && amount > 0) {
            if(amount < anotherAccount.balance) {
                this._balance -= amount;
                anotherAccount.balance += amount;
                return "Your new balance is " + this._balance + " AMD";
            } else {
                return "The requested money is greater than your balance. No money was transferred.";
            }
        } else {
            return "No money has been transferred. Your balance has not been changed.";
        }

    }

    static identifyAccounts(accountFirst, accountSecond) {
        //debugger;
        if( accountFirst instanceof Account && accountSecond instanceof Account) {
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
        if (accountFirst instanceof Account && accountFirst === accountSecond) {
            return "These accounts are the same";
        } else {
            return "These are two different accounts";
        }
    }

    toString() {

        if(this instanceof Account) {
            let result = "Account: " + this._name + ", balance: " + this._balance + " AMD . ";
            result += "Important! Account's id can't be displayed!";
            return result;
        } else {
            return "Invalid object! Not printable!";
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
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;

    }

    get firstName(){
        return this._firstName;
    }

    /**
     * 
     * @param {string} newFirstName New firstname for Person, which should be at least 2 letters and can contain '.' from the symbols
     */
    set firstName(newFirstName){
        if (newFirstName.length > 1 && /^[a-z A-Z]+|(\.+)$/.test(newFirstName)) {
            this._firstName = newFirstName;
        } else {
            this._firstName = "Unknown";
            console.log("Person's firstname is set to 'Unknown'. Please, insert a valid name, which should be more than a letter");
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
            this._lastName = "Unknown";
            console.log("Person's lastname is set to 'Unknown'. Please, insert a valid name, which should be more than three letters.");
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
            this._gender = 'unknown';
            console.log("Person's gender is set to 'unknown'. Please, insert 'F' for female People, 'M' for male People.")
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
            this._age = 0;
            console.log("Person's age is set to 0. Please, insert a valid age, which is greater than 0.");
        }
    }

    toString(){

        //debugger;
        if(this instanceof Person) {
            let result = "Full name: " + this.firstName + "  " + this.lastName + ", ";
            result += "gender: " + this._gender + ", age: " + this.age + " .";
            return result;
        } else {
            return "Invalid object! Not printable!";
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
     * @param {Array[string]} programs Programs list of Student
     * @param {number} year ClassYear of Student
     * @param {number} fee Fee per year
     */
    constructor(firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        this.programs = programs;
        //this._journal = this[createJournal(this._programs)];
        this.year = year;
        this.fee = fee;
    }

    get programs(){
        return this._programs;
    }

    /**
     * @param {Array[string]} newProgram New program for Student, which have at least one class
     */
    set programs(newPrograms) {
        //debugger;
        if(newPrograms.length > 0) {
            this._programs = newPrograms;
            this._journal = this._createJournal(newPrograms);
        } else {
            this._programs = [];
            this._journal = this._createJournal([]);
            console.log("Student's program list is empty. Please, insert a valid program list.");
        }
        
    }

    _createJournal(programs) {
        //debugger;
        let obj = new Object();
        for(let i in programs) {
            obj[programs[i]] = null;
        }
        
        return obj;
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
            this._year = new Date().getFullYear();
            console.log("Student's class year is set to the current one. Please, insert another year.")
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
            this._fee = 0;
            console.log("Student's fee is set to 0. Please, insert a valid fee per year.");
        }
        
    }

    passExam(program, grade) {
        //debugger;
        if ( this._programs.includes(program) ) {
            if (grade >= 0 && grade <=100) {
                this._journal[program] = grade;
                let arr = Object.values(this._journal);
        
                let sum = arr.reduce((a,b) => a + b, 0);
                if( sum > 50 * arr.length ) {
                    this._year++;
                    return "Next year.";
                } else {
                    return "Same Year.";
                }
            } else {
                return "Grade is invalid. Pass it again.";
            }
            
        } else {
            return "At first, add this program to your programs list.";
        }
        
    }

    toString() {
          
        if (this instanceof Student) {
            let result = super.toString();
            result += " Programs: " + this._programs + " , fee per year: " + this._fee + " AMD .";
            return result;
        } else {
            return "Invalid object! Not printable!";
        }

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
        this.program = program;
        this.salary = salary;
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
            this._program = "";
            console.log("Teacher's program is not defined. Please, insert a valid progran name.")
        }
    }

    get salary(){
        return this._salary;
    }

    /**
     * @param {number} newSalary New salary for Teacher
     */
    set salary(newSalary){
        if(newSalary > 0) {
            this._salary = newSalary;
        } else {
            this._salary = 0;
            console.log("Teacher's salary is set to 0. Please, insert a valid salary.")
        }
        
    }

    toString() {
          
        if (this instanceof Student) {
            let result = super.toString();
            result += " Program: " + this._program + " , salary: " + this._salary + " AMD .";
            return result;
        } else {
            return "Invalid object! Not printable!";
        }

    }

}

let s1 = new Student("Fred", "Weasley", "M", 21, ["Dark Arts", "Transfiguration"], 2020, 350000);
let s2 = new Student("George", "Weasley", "M", 21, ["Dark Arts", "Transfiguration"], 2020, 350000);
s2.passExam("Dark Arts", 75);
let t1 = new Teacher("Severus", "Snape", "M", 45, "Dark Arts", 600000)
let t2 = new Teacher("Minerva", "McGonagall", "F", 40, "Transfiguration ", 1600000)