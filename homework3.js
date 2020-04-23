// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function areDigitsOdd(number) {
	
	if (number % 2 == 0) {
		return false;
	} 

	if (number < 10) {
		return true;
	}

	return areDigitsOdd(Math.floor(number/10));
}

// 2. Write a recursive function to find its minimal positive element. 
// (if such element does not exist, return -1)․
// TODO
function minPositiveElement(arr) {
	
	if (arr.length == 0) {
		return -1;
	}

	let min = Math.min(...arr);
	if (min >= 0) {
		return min;
	}

	let indexOfMin = arr.indexOf(min);
	arr.splice(indexOfMin,1);

	return minPositiveElement(arr);
}

// 3. Write a recursive function which receives a number as arguments and 
// returns the fibonacci sequence as array.
function fibonacci(n) {
	
	if (n < 1) {
		return [];
	}

	if (n==1) 
  	{
    	return [1];
  	} 

  	if (n == 2) {
  		return [1,1];
  	}else {
    	newArr = fibonacci(n - 1);
    	newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
    	return newArr;
  	}

}

// 4. Given an array of nested arrays. Write a recursive function that flattens it. 
// (Hint create function that concats arrays).
// [[1], [[2, 3], [4, 5]], [6, 7], 8, 9]
// [1, [3, 4], [1, 2], 10]
function getNestedArray(nestedArr, tempArr = []) {

	//debugger;
	if (nestedArr.length == 0) {
		return tempArr;
	}

	let item = nestedArr.shift();
	if (Array.isArray(item)) {
		getNestedArray(item, tempArr);
	} 
	
	tempArr.push(item);
	return getNestedArray(nestedArr, tempArr);
	
}


// 5. Write a function that calculates its sum of the digits and if that sum
// has more than 1 digit find the sum of digits of that number.
function sumOfDigits(number) {
	
	if (number < 10) {
		return number;
	}

	let lastDigit = number%10;
	number = Math.floor(number/10) + lastDigit;

	return sumOfDigits(number);
}