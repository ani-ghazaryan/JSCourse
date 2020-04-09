// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
function evenOrOdd(number) {
    if (number % 2 == 0) {
            console.log("even")
    } else {
            console.log("odd")
    }
    
}

// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
function numbersAreDividable(num1, num2) {
    if (num1 > num2) {
        num1 % num2 === 0 ? console.log("1") : console.log("0");
    } else {
        num2 % num1 === 0 ? console.log("1") : console.log("0");
    }
}

 // 3. Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
function findTheThirdAngle(angle1, angle2) {
    let sum = angle1 + angle2;
    if (sum < 180) {
        console.log("The third angle of triangle is: ");
        console.log(180 - (angle1 + angle2));
    } else {
        console.log("Impossible to have a triangle with these two angles");
    }
}

// 4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
function sumOfMulti(num) {
    let sum = 0;
    let tempNum = num;
    for (let i = 0; i < 3; i++) {    
        //console.log("num " + num);
        sum += Number(tempNum);
        tempNum += '' + num;
        //console.log("sum " + sum);
    }
    console.log(sum);
}

// 5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. 
// If the last digit of the inserted number is 0, number remains the same.
function lastDigitToBeginning(num) {
    let remain = num % 10;
    let quotient = parseInt(num / 10);
    let newNum = num;
    if (remain != 0 && quotient != 0) {
        newNum = remain * Math.pow(10,String(quotient).length) + quotient;  
    }
    console.log(newNum);    
}

// 6. Given five numbers as input. Calculate and print the average of the numbers (without using arrays).
function averageOfFiveNumbers() {
    let count = 1;
    let num = 0;
    let sum = 0;
    while ( count != 6 ) {
        num = prompt("Please, insert a number");
        sum += parseInt(num);
        count++;
    }
    console.log(sum / (count-1));    
}

// 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
// Works as expected, but looks awful! :/
function numberIsMultipleToThreeFiveSeven(num) {
    if(num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        switch (true) {
            case num % 3 == 0 && num % 7 == 0 && num % 5 == 0:
                console.log(`${num} is a multiple of 3, 5 and 7.`);
                break;
            case num % 7 == 0 && num % 5 == 0:
                console.log(`${num} is a multiple of 5 and 7.`);
                break;
            case num % 3 == 0 && num % 5 == 0:
                console.log(`${num} is a multiple of 3 and 5.`);
                break;
            case num % 3 == 0 && num % 7 == 0:
                console.log(`${num} is a multiple of 3 and 7.`);
                break;       
            case num % 3 == 0:
                console.log(`${num} is a multiple of 3.`);
                break;
            case num % 5 == 0:
                console.log(`${num} is a multiple of 5.`);
                break;
            case num % 7 == 0:
                console.log(`${num} is a multiple of 7.`);
                break;
        }
    } else {
        console.log(`${num} is not a multiple of 3, 5 or 7.`);
    }
}

// 8. Given an age, figure out whether someone is a baby, toddler, child, teenager or adult.
// TODO
function findOutAge(num, type) {
    if (type = "months" && num < 12) {
        console.log("baby");
    } else {
        num = num / 12;
        if ( 1 <= num && num <= 2 ) {
            console.log("toddler");
        }
             
        
        if (3 <= num && num <= 12) {
            console.log("child");
        }
               

        if ( 13 <= num && num <= 17) {
            console.log("teenager");
        }
             

        if ( 18 <= num) {
            console.log("adult");
        }
            
    }

}

// 9. Given three numbers. Sort them by the ascending order.
function threeNumbersInAscending(a,b,c) {
    max = Math.max(a,b,c);
    min = Math.min(a,b,c);
    mid = (a+b+c) - min - max;
    console.log(min, mid, max);
}

// 10. An indication of Pass or Fail is given out after the three marks are entered.
function examsArePassedOrFailed(a, b, c) {
    let avr = ( a + b + c ) / 3;
    if ( (a >= 40 && b >= 40 && c >= 40) || avr >= 50) {
        console.log("Passed");
    } else {
        console.log("Not passed");
    }
}

// 11. Find the sign of product of three numbers without multiplication operator. Display the specified sign.
function findSignOfNumbers(a,b,c,) {
    let count = 0;

    if(a == 0 || b == 0 || c == 0) {
        console.log("unsigned");
    } else {

        if(Math.sign(a) < 0) {
            count++;
        }

        if(Math.sign(b) < 0) {
            count++;
        }

        if(Math.sign(c) < 0) {
            count++;
        }

        if (count % 2 == 0) {
            console.log("+")
        } else {
            console.log("-")
        }
    }
    
}

// 12. Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations.
function findQuadraticEquations(a, b, c) {
    let x1, x2;
    if(a != 0 ) {
        let sqrt = Math.pow(b,2) - 4 * a * c;
        if (sqrt >= 0 ) {
            x1 = (-b + Math.sqrt(sqrt)) / (2 * a);
            x2 = (-b - Math.sqrt(sqrt)) / (2 * a);
            console.log(`Solution is ${x1} and ${x2}`);
        } else {
            console.log("Solution does not exists");
        }
    } else {
        console.log("Enter valid constants");
    }
}

// 13. Two IFs with && operators
function simplifiedCheck() {
    var n = +prompt();
    var i = 0;
    var j = 0;

    if(n%2 === 0 && !Math.floor(n/10)) {
        // numbers multiplied to 2 and -10 < n < 10
        i+=1;
    }

    if(n%3 === 0 && n%10 ===1) {
        // numbers multiplied to 3 and n ends with 1
        j+=1;
    }    
}




// 14. Insert a digit and a number. Check whether the digits contains in the number or not.
function digitIsInNumber(a, b) {
    if(String(b).includes(String(a))) { 
        console.log('Yes');
    } else {
        console.log('No');
    }
}

// 15. Enter a number. Reverse its first and last digits. Print the new number.
function reverseFirstAndLastDigits(num) {
    let len = String(num).length;
    let lastDigit = num % 10;
    let firstDigit = parseInt(num / Math.pow(10, len - 1));
    let betweenLastAndFirstDigits = num % Math.pow(10,len - 1) - lastDigit;
    let newNum = lastDigit * Math.pow(10,len - 1) + betweenLastAndFirstDigits + firstDigit;
    console.log(newNum);
}

// 16. aaa :)

// 17. Write a program which will compute the area of a rectangular or a triangle.
function areaOfRectangleOrTriangle(type, a, b) {
    let area;
    if (a > 0 && b > 0 ) {
        if (type == "rectangle") {
            area = a * b;
        }

        if (type == "triangle") {
            area = a * b / 2;
        }
        
        console.log(area);
    } else {
        console.log("Please enter only positives");
    }
}

// 18. Enter a number. Find the difference between its biggest and smallest digits.
function differenceBetweenBiggestAndSmallestDigits(num) {
    let min = num% 10;
    let max = min;
    num = (num - min)/10;
    let len = String(num).length;
    for(let i = 0; i < len; i++) {
        let lastDigit = num % 10;
        if (lastDigit > max) {
            max = lastDigit;
        } else if (lastDigit < min) {
            min = lastDigit;
        }
        num = (num - lastDigit)/10;
    }
    console.log(max - min);
}