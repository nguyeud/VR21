const difference = (num1, num2) => num2 - num1;
console.log(difference(2, 2));      // 0
console.log(difference(0, 2));      // -2

const product = (num1, num2) => num1 * num2;
console.log(product(2, 2));     // 4
console.log(product(0, 2));     // 0

const printDay = (num) => {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return undefined;
    }
}
console.log(printDay(4));       // "Wednesday"
console.log(printDay(41));      // undefined

const lastElement = (lst) => {lst[lst.length - 1]};
console.log(lastElement([1,2,3,4]));     // 4
console.log(lastElement([]));            // undefined

const numberCompare = (num1, num2) => {
    if (num1 === num2) {
        return "Numbers are equal";
    } else if (num1 > num2) {
        return "First is greater";
    } else {
        return "Second is greater"
    }
}
console.log(numberCompare(1,1));        // "Numbers are equal"
console.log(numberCompare(2,1));        // "First is greater"
console.log(numberCompare(1,2));        // "Second is greater"

const singleLetterCount = (str1, str2) => {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i].toLowerCase() === str2.toLowerCase()) {
            count++
        }
    }

    return count;
}
console.log(singleLetterCount("amazing", "A"));             // 2
console.log(singleLetterCount("Rithm School", "o"));        // 2

const multipleLetterCount = (str) => {
    let map = new Map();
    
    for(const s of str.toLowerCase()) {
        if (!map.has(s)) {
            map.set(s, 1);
        } else {
            map.set(s, map.get(s) + 1);
        }
    }

    return map;
}
console.log(multipleLetterCount("hello"));      // {h => 1, e => 1, l => 2, o => 1}
console.log(multipleLetterCount("person"));     // {p => 1, e => 1, r => 1, s => 1, o => 1, …}

const arrayManipulation = (arr, comm, loc, value) => {
    if (comm == "remove") {
        if (loc == "beginning") {
            return arr.shift();
        } else {
            return arr.pop();
        }
    } else {
        if (loc == "beginning") {
            arr.unshift(value);
            return arr;
        } else {
            arr.push(value);
            return arr;
        }
    }
}
console.log(arrayManipulation([1,2,3], "remove", "end"));               // 3
console.log(arrayManipulation([1,2,3], "remove", "beginning"));         // 1
console.log(arrayManipulation([1,2,3], "add", "beginning", 20));        // [20, 1, 2, 3]
console.log(arrayManipulation([1,2,3], "add", "end", 20));              // [1, 2, 3, 20]

const isPalindrome = (str) => {
    if (str.length % 2 === 0) {     // even
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - (i + 1)]) {
                return false;
            }
        }
    } else {                        // odd
        for (let i = 0; i < (str.length / 2) - 1; i++) {
            if (str[i] !== str[str.length - (i + 1)]) {
                return false;
            }
        }
    }

    return true;
}
console.log(isPalindrome("testing"));       // false
console.log(isPalindrome("tacocat"));       // true
console.log(isPalindrome("hannah"));        // true
console.log(isPalindrome("robert"));        // false