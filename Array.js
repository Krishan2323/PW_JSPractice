// Q1
const reverseANumber = (number) => {
    number = number + ""
    return number.split("").reverse("").join("")
}
console.log(reverseANumber(322))

let num1 = "144"
num1 = num1.split("").reverse("").join("")
console.log(num1)

// Q2
const checkPaliddromeString = (str) => {
    str = str.toLowerCase()

    let cloneStr = str.split("").reverse("").join("")
    if (str === cloneStr) {
        console.log("String is palidrome")
        return cloneStr
    }
    else {
        console.log("String is not Palidrome")
        return cloneStr
    }
}
console.log(checkPaliddromeString("Krishan"))
console.log(checkPaliddromeString("Madam"))

// Q3
console.log("----------------------------")

const oredrAString = (str) => {
    str = str.toLowerCase()
    return str.split('').sort().join('')
}

console.log(oredrAString("Krishan"))

// Q4

const converFirstLetterUpperCase = (str) => {
    let arr = str.split(' ')
    let newArray = []
    console.log(arr)
    for (let x = 0; x < arr.length; x++) {
        newArray.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1))
    }
    return newArray.join(' ')
}
console.log(converFirstLetterUpperCase("My name is Krishan Kataria"))

console.log("------------------------------------")
// Q5

const findLongestWord = (str) => {
    let word = str.split(' ')
    let longestWord = ""
    let longestLength = 0
    for (let i = 0; i < word.length; i++) {
        let words = word[i]
        words = words.replace(/[^a-zA-Z0-9]/g, "")
        if (words.length > longestLength) {
            longestWord = words;
            longestLength = words.length;
        }
    }
    return longestWord
}

console.log(findLongestWord("Krishan here and who are you"))

console.log("------------------------------------------")
// Q6 

const vowelCount = (str) => {
    // console.log(str)
    const vowelWord = 'aeiouAEIOU'
    let vCount = 0
    for (let i = 0; i < str.length; i++) {
        if (vowelWord.indexOf(str[i]) !== -1) {
            vCount += 1
        }
    }
    return vCount
}

console.log(vowelCount("Hello my name is Krishan Kataria and whats your name mate"))
console.log(vowelCount("The quick brown fox"))

// Q7

let arrayOne = [22, 33, 44, 11, 22, 44]
let arrayTwo = [564, 11, 0, 0000, 1625832, 3842873642, 322, 3243, 45645]

console.log(arrayOne)

const findMaximunNumber = (arr) => {
    let sortedArray = arr.sort((a, b) => a - b)
    console.log(sortedArray)
    return sortedArray[sortedArray.length - 1]

}
console.log(findMaximunNumber(arrayOne))
console.log(findMaximunNumber(arrayTwo))
console.log("-------------------------------------")

// Q8 

const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}

let withOutDuplicates = removeDuplicates([2, 3, 4, 5, 1, 34, 1, 13, 4, 1, 2])
console.log(withOutDuplicates)
console.log(findMaximunNumber(withOutDuplicates))

console.log("------------------------------------")

// Q9

const findSumOfAllArrayElement = (arr) => {
    return arr.reduce((pre, cur) => pre + cur)
}

console.log(findSumOfAllArrayElement(withOutDuplicates))

console.log("------------------------------------")
// Q10 


let myArray = [11, 22, 33, 44, 55, 66, 11, 22, 333, 0]

const findSecondSmallestElement = (arr) => {
    let secondArray = Array.from(new Set(arr)).sort((a, b) => a - b)
    console.log(secondArray)
    return secondArray[1]

}
console.log(findSecondSmallestElement(myArray))

console.log("-----------------------------------------")

// Q11


function areAnagrams(str1, str2) {
    // Remove whitespace and convert strings to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the strings have the same length
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Count the frequency of characters in both strings
    const charCount = {};

    for (let char of cleanStr1) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    for (let char of cleanStr2) {
        if (!charCount[char]) {
            return false; // Character not found in the first string
        }
        charCount[char] -= 1;
    }

    // Check if all character frequencies are zero
    for (let char in charCount) {
        if (charCount[char] !== 0) {
            return false; // Character frequencies are not equal
        }
    }

    return true; // Strings are anagrams
}

// Example usage
const string1 = 'listen';
const string2 = 'silent';
console.log(areAnagrams(string1, string2)); // true

const string3 = 'hello';
const string4 = 'world';
console.log(areAnagrams(string3, string4)); // false

console.log("--------------------------------")

// Q 12

const checkPrimeValue = (n) => {
    let cPrime
    if (n === 0) {
        cPrime = false
        console.log("Invalid Value", n)
        return cPrime
    }
    else if (n === 2) {
        cPrime = true
        console.log("Number is Prime", n)
        return cPrime
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                cPrime = false
                console.log("Number is not prime", n)
                return cPrime
            }

        }
        cPrime = true
        console.log("Number is Prime", n)
        return cPrime
    }
}

console.log(checkPrimeValue(29))
console.log(checkPrimeValue(0))
console.log(checkPrimeValue(2))


console.log("-----------------------------------")

// Q 13