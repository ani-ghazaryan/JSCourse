// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
function isPrimeNumber(number) {
	let isPrime = 0;

	for (var i = 2; i <= number/2; i++) {
		if (number%i == 0) {
			return String(number + " is not prime");
			break;
		}
	}

	if (isPrime == 0) {
		return String(number + " is prime");
	}
}


// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.
function fibonacciNthNumber(n) {
	let f1 = 0;
	let f2 = 1;
	let f3;

	if (n==0) {
		return String(`Fibonacci's 0th number is ` + f1);
	}

	if (n==1) {
		return String(`Fibonacci's 1st number is ` + f2);
	}

	let count = 1;
	while (count < n) {
		f3 = f2 + f1;
		f1 = f2;
		f2 = f3;
		count++;
	}

	return String(`Fibonacci's ${n}th number is ` + f3);
}


// 3. Given a number n( n> 0 ). Print Fibonacci series up to n.
function fibonacciSeriesTillGivenNumber(n) {
	let f1 = 0;
	let f2 = 1;

 	let fibonacciArr = [f1, f2];

	while (f1 + f2 <= n) {
		let f3 = f2 + f1;
		f1 = f2;
		f2 = f3;
		fibonacciArr.push(f3);
	}

	return fibonacciArr;
}


// 4. If product of number is divisible by the sum of number digits, print the quotient, 
//otherwise print the remainder.
function divideProductToSum(number) {
	let sum = 0;
	let prod = 1;
	let len = String(number).length;
	number = parseInt(number);

	if (number == 0) {
		return "Cannot calculate.";
	}

	for (var i = 0; i < len; i++) {
		let temp = number %10;
		sum += temp;
		prod *= temp;
		number = (number - temp)/10;
	}

	if (sum != 0 && prod%sum ==0) {
		return String("Quotient is " + prod/sum);
	} else {
		return String("Remainder is " + prod%sum);
	}

}


// 5. Create an array of evenly spaced numbers by the given num length 
// over the specified interval (from a to b).
function createAnArray(a,b,num) {
	let arr = [a];

	if (a > b || num < 2) {
		return arr;
	}

	let step = (b-a) / (num - 1);

	for (var i = 1; i < num - 1; i++) {
		arr[i] = arr[i-1] + step;	
	}

	arr.push(b);

	return arr;
}


// 6. Given an array of numbers. Find the index of the second maximum element.
function findSecondMax(arr) {
	
	let max = -Infinity;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	let indexOfMax = arr.indexOf(max);
	arr[indexOfMax] = -Infinity;

	max = -Infinity;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return arr.indexOf(max);
}


// 7. Pad the array in the following way: the padding amount specifies how many elements should be taken 
// from the array edges, the repeat amount specifies how many times the pad should be repeated.
function newArrayWithRepeatation(arr, pad, rep) {
	let len = arr.length; // [1, 2, 3, 4]
	
	if (pad > len) {
		return "Invalid padding amount";
	}

	let startOfArr = [];
	let endOfArr = [];

	// storing elements from the beginning and the end of array
	for (var i = 0; i < pad; i++) {
		startOfArr.push(arr[i]);
		endOfArr.push(arr[len-1-i]);
	}

	endOfArr.reverse();

	// creating new array and concating the parts
	let newArr = [];
	for (var i = 0; i < rep; i++) {
		newArr = newArr.concat(startOfArr);
	}

	newArr = newArr.concat(arr);

	for (var i = 0; i < rep; i++) {
		newArr = newArr.concat(endOfArr);
	}

	return newArr;
}






