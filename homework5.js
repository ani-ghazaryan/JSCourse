// 1. Given a sorted array and an element from that array. Find the index of 
// that element using binary search.
function findIndexOfElement(sortedArray, element, startIndex = 0, endIndex = sortedArray.length) {

	if (!sortedArray.includes(element)) {
		return false; //sortedArray.includes(element)
	}

	let midIndex = startIndex + Math.trunc((endIndex - startIndex) / 2);	
	if (element == sortedArray[midIndex]) {
		return midIndex;
	}

	if (element < sortedArray[midIndex]) {
		return findIndexOfElement(sortedArray, element, startIndex, midIndex - 1);
	} else {
		return findIndexOfElement(sortedArray, element, midIndex + 1, endIndex);
	}

}


// 2. Create a function that builds a tree.
function createTree(array, tree = {}) {

	debugger;
	if (array[0].id == 'root') {
		tree[array[0].id] = array[0].children;
		array.shift();
	}

	for(var i = 0; i < array.length; i++) {
		if (array[i].id != tree) {
			
			if (array[i].children.length == 0) {
				tree[array[i].id];
			} else if (array[i].children.length == 1){
				tree[array[i].id] = array[i].children[0];
			} else {
				return createTree(array[i].children, tree);
			}
		}
	}

	return tree;


}