// 1. Given an array. Determine whether it consists only from unique elements or not.
function isArrayContainUniqueElements(array) {

    for(var i = 0; i < array.length-1; i++) {
        for(var j = i+1; j < array.length; j++) {
            if(array[i] == array[j]) {
                return false;
            }
        }
    }

    return true;
}

// 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.
function sumOfSpecialElements(array) {

    let sum = 0;
    for(var i = 0; i < array.length; i++) {
        if (Math. sqrt(array[i]) % 2 == 0 ) {
            console.log(array[i]);
            sum += array[i];
        }
    }

    return sum;
}

// 3. Check whether string is palindrome, or not.
function isPalindrome(str) {

    let length = str.length;
    for(var i = 0; i< length/2; i++) {
        if (str[i] != str[length-1-i]) {
            return false;
        }
    }

    return true;

}

// 4. Given a word and a list of possible anagrams, select the correct sublist.
function sortString(str) {

    let newStr = '';
    for (var i = 0; i < str.length-1; i++) {
        for (var j = i + 1; j < str.length; j++) {
            if (str[i] > str[j]) {
                // replacig i and j chars
                newStr = str.substring(0,i) + str[j] + str.substring(i+1,j) + str[i] + str.substring(j+1, str.length);
                str = newStr;
            }
        }
    }

    return str;
}

function anagramsSublist(el, array) {

    let sublist = [];
    sortedEl = sortString(el);
    for (var i = 0; i < array.length; i++) {
        var sortedArrEl = sortString(array[i]);
        if (sortedEl == sortedArrEl) {
            sublist.push(array[i]);
        }
    }

    return sublist;
}