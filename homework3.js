// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function areDigitsOdd(number) {
	
	if (number % 2 == 0) {
		return false;
	} 

	if (Math.abs(number) < 10) {
		return true;
	}

	number = (number - number %10) / 10;
	return areDigitsOdd(number);
}

// 2. Write a recursive function to find its minimal positive element. 
// (if such element does not exist, return -1)․
function minPositiveElement(arr, min = +Infinity) {
	
	if (arr.length == 0) {
		return (min == +Infinity) ? -1 : min;
	}

	let temp = arr.shift();
	if(min >= temp && temp >=0) {
		min = temp;
	}

	return minPositiveElement(arr, min);
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
	} else {
		tempArr.push(item);		
	}
	
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