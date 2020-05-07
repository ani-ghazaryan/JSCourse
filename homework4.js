// 1. Given an array. Write a recursive function that removes the first element and 
// returns the given array.
function shiftArrayToLeft(arr, i = 0) {
	//debugger;
	if (i != arr.length -1) {
		arr[i++] = arr[i];
		shiftArrayToLeft(arr,i);
	} else {
		arr.pop();	
	}

	return arr;
}

// 2. Given an object. Invert it (keys become values and values become keys). 
// If there is more than key for that given value create an array.
function invertAnObject(object) {
	//debugger;
	invertedObject = {};

	for (let property in object) {
		let value = object[property];
		if (value in invertedObject) {
			if (Array.isArray(invertedObject[value])) {
				invertedObject[value].push(property);
			} else {
				let arr = [invertedObject[value]];
				arr.push(property);
				invertedObject[value] = arr;
			}	
		} else {
			invertedObject[value] = property;
		}
	}

	return invertedObject;
}

// 3. Sort the books by the percent in descending order which readStatus is true.
function sortBooksByPercentComplete(arr) {
	
	let newArr = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].readStatus) {
			newArr.push(arr[i]);
		}
	}

	for (var i = 0; i < newArr.length-1; i++) {
		for (var j = i; j < newArr.length; j++) {
			if (newArr[i].percent < newArr[j].percent) {
				let temp = newArr[i];
				newArr[i] = newArr[j];
				newArr[j] = temp;
			}
		}
	}

	return newArr.book;

}

// 4. Given an array and a number N.  Write a recursive function that 
// rotates an array N places to the left.
function rotateArray(arr, n, count = 0) {

	if(count != n) {
		if (n > 0) {
			let firstItem = arr.shift();
			arr.push(firstItem);
			count++;
		} else {
			let lastItem = arr.pop();
			arr.unshift(lastItem);
			count--;
		}
		rotateArray(arr, n, count);
	}

	return arr;
}

// TODO 5. Create a function that builds a tree like object given an array with object
// which contains parent and id properties.


// TODO 6. Write a JavaScript function to get all possible subsets of given length 
// of the given array.
function subSetOfArrays(set, k) {

	if (k > set.length) {
		return "Subsets? Never heard of!";
	}

	debugger;
	let result = [];

	let tempArr = [];
	let size = 0;
	let i = 0;
	while(i < set.length - k) {
		tempArr.push(set[i]);
		for(var j = i+1; j < set.length; j++) {
			tempArr.push(set[j]);
			while (tempArr.length != k) {
				tempArr.push(set[j]);
			}
			result.push(tempArr);
			tempArr.pop();
		}
	}

	return result;
}

function subSetOfArrays2(set, k) {

	if (k > set.length) {
		return "Subsets? Never heard of!";
	}

	debugger;
	let result = [];
	let tempArr = [];

	for(var i = 0; i <= set.length - k; i++) {
		tempArr.push(set[i]);
		for(var j = i; j < set.length; j++ ) {
			tempArr.push(set[j++]);
			while(tempArr != k) {
				tempArr.push(set[j++]);
			}

			result.push(tempArr);
			tempArr.pop();
		}
	}	

	return result;
}

// TODO 7. Create constructor function which instances would be objects with already
// implemented method map (like Array.map) .

