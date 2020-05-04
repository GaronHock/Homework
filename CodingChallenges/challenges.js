// Garon Hock and Michael Giering

//    /// given a string, str will only have ()[]{} 
// /// return a boolean, tell me if its valid
// // if all brackets have a corresponding closing bracket
// // open brackets must be closed in the correct order
// // example input: ( [ )] - false


// Possible inputs - ()[]{} - true
// )[]- false
// []{}[][][] - true
// {[()]}- true
// Input: "{[]}"
// Output: true

// ///split it so its an array
// //define possible lefts = “{[(
// Define possible rights = “}])

// //iterate through and ill find the outer most left before finding a right and once i find a right i need to make sure that the closest iteration to the left is a corresponding left, then i will continue until the string is empty if it is always true return true otherwise return false


// function validOpenClose(str) {
// 	Let strArr = str.split(“”)

	
// 	Let possible_matches = {
// 		“[“ : “]”,
// 		“{“ : “}”,
// 		“(“ : “)”
// }

// 	Let result = [];
// 	For (let i = 0; i < strArr.length; i++) {
// 		if (Object.values(possible_matches).includes(strArr[i])) {
// 			if(strArr[i - 1])  !== 
// }
// }

// //"{[]}"
// Resutlt [{[]]
// }


// function validOpenClose(str) {
// Let opening = {
// 		“[“ : “]”,
// 		“{“ : “}”,
// 		“(“ : “)”
// };
// 	Let closing = {
// 		“]“ : “[”,
// 		“}“ : “{”,
// 		“)“ : “(”
// };
// Let patternArr = [];
// 	Let stringArr = str.split(‘’);

// 	stringArr.forEach(bracket => {
// 		If (bracket in opening) {
// 			patternArr.push(bracket)
// } else if
//  (bracket in closing && patternArr[patternArr.length -1] === closing[bracket]) {
// 	patternArr.pop();
// } else {
// Return false
// }
// })
// If (patternArr.length) {
// Return false
// }
// Return true
// }



// ////







// ///given a sorted array of numbers
// /// remove the duplicates in place, such that each element appears only once and return the new length

// ///do not allocate extra space for a new array


// .splice(1, 1)

// [1,2,3,4,5]
// [1,3,4,5]


// [1,1,1,1,1,2,2,2,2,2,3,4,5]
// [1,1,1,2,2,2,2,2,3,4,5]

// var removeDuplicates = function(arr) {

// 	For (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] === arr[i + 1] {
// 			arr.splice(arr[i + 1]), 1)
// }
// }

// Return arr.length;
// }

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 
// Example 1:
// Input: "III"
// Output: 3

// Example 2:
// Input: "IV"
// Output: 4

// Example 3:
// Input: "IX"
// Output: 9

// Example 4:
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.









// Function getRomanNumeralInteger(str) {
// 	Let romanNumerals = {
// ‘I’: 1,
// ‘V’: 5,
// ‘X’: 10,
// ‘L’: 50,
// ‘C’: 100,
// ‘D’: 500,
// ‘M’: 1000
// }

// Let sum = 0 
// for(let i = 0; i < str.length; i++){
// 	 if (romanNumerals[str[i]] < romanNumerals[str[i+1]]) {
// Sum -= romanNumeral[str[i]]
// Sum += romanNumeral[str[i+1]]
// } else {
// 	Sum += romanNumeral[str[i]]
// }
// }

// Return sum
// }

// ///split it iterate through array one by one
// /// if iteration === I check the one next to it
// /// if the one next to it is a v or an x through that into newArray
// //if the one next to it is a I keep checking until it is no longer an I
// ///throw that chunk into new array

// /// if iteration  === X check if next number is L OR C if true throw that 
// Chunk into new array 



// ///if any numeral is equal to the one next to it keep grabbing it until it isnt anymore


// ///













// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.
// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// Base cases: 
// 0: []
// 1: [1]
// 2: [[1], [1,1]]


// 3













// var generate = function(numRows) {
// If (numRows === 0) {
// Return [];
// }    
// If (numRows === 1) {
// Return [[1]];
// }    
// If (numRows === 2) {
// Return [[1], [1,1]];
// }  
// Let answerArr = [];
// Let generations = generate(numRows - 1)
// Let previousArr = generations[-1];

// previousArr.forEach((int, idx) => {
// 	If (idx === 0 || idx === previousArr.length - 1) {
// 		answerArr.push(int)
// }
// if (!(previousArr.length - 1)) {
// 	answerArr.push(Int + previousArr[idx + 1])
// }
// })
// Return generations.push(answerArr)
// };


// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]







// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.
 
// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Not 7-1 = 6, as the selling price needs to be larger than the buying price.

// Example 2:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// ////iterate through array 
// ///find a number that has the biggest difference between a number after it 
// /// return that difference
// ///makes array that pushes on first val. If any number in the remaining iterations are greater subtract the last number of the array with the first number and set that number to a variable 

// 5- 1 
// Sum =  4 
// [3,6]
// 6 - 3 = 3 
// secondSum = 3 
// Compare the two, keep the larger by making sum = the larger one
// Then setting second sum = 0;

// Function maxProfit(prices){
// 	Let array = [];
// 	Let sum = 0 





// 	For (let i = 0; i < prices.length; i++) {
// array.push(prices[i])
// if(array[array.length - 1] < array[i]
//  && sum < array[i] - [array[array.length - 1]){
// 	Let sum = array[i] - array[array.length -1]

// } 

// }









// Return sum;
// }

// [7,1,5,3,6,4]
// Sum = 4;
// [7,1,5,3,6,4]

// Array[7, 1]
// 5 - 1 - 4 
// 4 
// [7 ,1, 5=



// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
// Example 1:
// ///map string one into an object
// ///map string two into an object
 
// Eogog
// Aoddo
 
 
 
 
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function (string1, string2) {
//   let object = {};
//   let newString = '';
//   for (let i = 0; i < t.length; i++) {
//     if (string1[i] != string2[i] && !(string1[i] in object) && !(Object.values(object).includes(string2[i]))) {
//       object[string1[i]] = string2[i]
//       newString += object[string1[i]]
//     } else if (string1[i] != string2[i] && string1[i] in object && !(Object.values(object).includes(string2[i]))) {
//       newString += object[string1[i]]
//     } else if (!(string1[i] in object)) {
//       object[string1[i]] = string2[i]
//       newString += object[string1[i]]
//     } else {
//       newString += object[string1[i]]
//     }
//   }
//   return newString === t
// };


// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3,  and/or 5.
// Example 1:
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Example 3:
// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.

// Note:
// 1 is typically treated as an ugly number.
// Input is within the 32-bit signed integer range: [−231,  231 − 1].
// /**
//  * @param {number} num
//  * @return {boolean}
//  */


// /// get all the factors check if the factors include 2,3,5
// /// if true 
// /// check if any of the remaining factors are prime 
// /// if true 
// /// else false 






// var isUgly = function(num) {
//     let factors = [];
// 	for (let i = 2; i <= num; i++){
// 		if ( num % i === 0) factors.push(num)
//     }
// 	for(let i = 0; i < factors.length; i++){
// 		if(factors[i] > 5 && isPrime(factors[i]) return false;
// }
//     return true;
// };

// var isPrime = function(num){ 
// 	if (num < 2) return false; 
// 	for (let i = 2; i < num; i++){
// 		if (num % i === 0) return false;
//     }
//     return true;
// }

// var isUgly = function(num) {
//     if (num < 1) return false;
//     if (num >= 1 && num < 6) return true;
//     let factors = [];
// 	for (let i = 2; i < num; i++){
// 		if ( num % i === 0) factors.push(i)
//     }
//     if (factors.includes(2) || factors.includes(3) || factors.includes(5)) { 
//         for(let i = 0; i < factors.length; i++){
//             if(factors[i] > 5 && isPrime(factors[i])) return false;
//         }
//         return true;
//     }
//     return false;
// };
// var isPrime = function(num){ 
// 	if (num < 2) return false; 
// 	for (let i = 2; i < num; i++){
// 		if (num % i === 0) return false;
//     }
//     return true;
// };

// var isUgly = function (num) {
//  if (num < 1) return false;
//  while (num > 1) {
//    if (num % 2 === 0) {
//      num = num / 2
//    } else if (num % 3 === 0) {
//      num = num / 3
//    } else if (num % 5 === 0) {
//      num = num / 5
//    } else {
//      return false
//    };
//  };
//  return true
// };




// mediumDiscussion Solutions 
// Word Split
// Have the function WordSplit(strArr) read the array of strings stored in strArr, which will contain 2 elements: the first element will be a sequence of characters, and the second element will be a long string of comma-separated words, in alphabetical order, that represents a dictionary of some arbitrary length. For example: strArr can be: ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]. Your goal is to determine if the first element in the input can be split into two words, where both words exist in the dictionary that is provided in the second input. In this example, the first element can be split into two words: hello and cat because both of those words are in the dictionary.
 
// Your program should return the two words that exist in the dictionary separated by a comma. So for the example above, your program should return hello,cat. There will only be one correct way to split the first element of characters into two words. If there is no way to split string into two words that exist in the dictionary, return the string not possible. The first element itself will never exist in the dictionary as a real word.


// function WordSplit(strArr) {
//  let firstWord = strArr[0].split("")
//  let secondHalf = strArr[1].split("");
//  for (let i = 0; i < firstWord.length; i++){
//      if (secondHalf.includes(firstWord.slice(0,i)) && secondHalf.includes(firstWord.slice(i))){
//        return firstWord.slice(0,i) + "," + firstWord.slice(i)
//      }
//  }
//  return "not possible"
// }



// function WordSplit(strArr) {
//  let firstWord = strArr[0]
//  let secondHalf = strArr[1].split(",");
//  for (let i = 1; i <firstWord.length ; i++){
//      let firstPart = firstWord.slice(0,i)
//      let secondPart = firstWord.slice(i)
//      if (secondHalf.includes(firstPart) && secondHalf.includes(secondPart)){
//        return firstPart + "," + secondPart
//      }
//  }
//  return "not possible"
// }
// WordSplit(["hellocat", "hell,apple,bat,cat,goodbye,hello,yellow,why"])


// var WordSplit = function(strArr) {
//  let string = strArr[0];
//  let dictionary = strArr[1].split(",")
//  let change = true
 
//  while (change) {
//    change = false
//    for (let i = 0; i < dictionary.length; i++) {
//      if (dictionary[i].slice(0, 1) === string.slice(0, 1)) {
//        if (string.includes(dictionary[i])) {
//          string = string.replace(dictionary[i], '')
//          change = true
//        }
//      }
//    }
//  }
//  return string.length === 0
// }
// WordSplit(["hellocat", "hell,apple,bat,cat,goodbye,hello,yellow,why"])
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };


//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

// };
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };


//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//     const twoSum = function(nums, target) {
//     const comp = {};
//     for (let i=0; i<nums.length; i++){
//         if (nums[i] in comp){          
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i      
//     }
// };



/* this is our initial value i.e. the starting point*/
const initialValue = 0;

/* numbers array */
const numbers = [5, 10, 15];

/* reducer method that takes in the accumulator and next item */
const reducer = (accumulator, item) => {
    console.log(accumulator);
    console.log(item);
  return accumulator + item;
};

/* we give the reduce method our reducer function
  and our initial value */
const total = numbers.reduce(reducer, initialValue)


var minimumTotal = function (triangle) {
  const dpFunction = (prev, curr) => {
    const level = [];
    for (let j = 0; j < curr.length; j++) {
      level[j] = Math.min(prev[j], prev[j + 1]) + curr[j];
    }
    return level;
  };

  return triangle.reverse().reduce(dpFunction).pop();
};


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(!this.minStack.length || x <= this.minStack[this.minStack.length - 1]){
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack[this.stack.length -1] === this.minStack[this.minStack.length -1]){
        this.minStack.pop();
    }
    this.stack.pop();
};
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length -1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


var isAnagram = function(s, t) {
    let letters = {};
    
    s.split("").forEach(char =>{
        if (!letters[char]) letters[char] = 0;
        letters[char] += 1;
    })
    t.split("").forEach(char =>{
        if (!letters[char]) letters[char] = 0;
        letters[char] -= 1;
    })
    
    return Object.values(letters).every(letterCount =>{
        return letterCount === 0
    })
};


var containsNearbyDuplicate = function (nums, k) {
  let numbersObject = {};
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in numbersObject)) {
      numbersObject[nums[i]] = i;
    } else if (i - k <= numbersObject[nums[i]]) {
      return true;
    } else {
      numbersObject[nums[i]] = i;
    }
  }
  return false;
};


function Consecutive(arr) { 
   arr.sort(function(a, b){return a-b});
   let sum = 0;
   first = arr[0];
  while (first < arr[arr.length-1]){
    if (!(arr.includes(first))){
      sum += 1;
    }
    first++
  }
  return sum;
}

const Consecutive = (a) => Math.max(...a) - Math.min(...a) - (a.length - 1);
   
// keep this function call here 
console.log(Consecutive(readline()));

///sort the array
//loop through the array and unless the number is included in the
//array add it to
//the sum


function prodArray(arr) {
	let prodArr = [];
	for (let i = 0; i < arr.length; i++) {
		let prodIdx = 1;
		if (type of arr[i] === integer) {
		for (let j = 0; j < arr.length; j++) {
			if (j !== i) {
				prodIdx * arr[j];
				} else {
					prodIdx = undefined;
				}
}
		}
		prodArr.push(prodIdx);
}
return prodArr
}


function FindIntersection(strArr) { 


 let sorted = strArr.sort((a,b) => a - b)

 return sorted

}



function FindIntersection(strArr) { 

  const duplicates = [];

  let numbers = strArr
                .join(",")
                .split(",")
                .map(Number)
                .sort((a,b) => a-b)

  for (let i = 0; i < numbers.length -1; i++){
    if (numbers[i] == [numbers[i+1]]){
      duplicates.push(numbers[i])
    }
  }
  return duplicates.length ? duplicates.join(",") : false
}



function sF(strArr) {
  let dupeObj = {};
  let dupeStr = '';
  for (i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== ',' && strArr[0][i] !== ' ') {
      dupeObj[strArr[0][i]] = true
    }
  }
  for (i = 0; i < strArr[1].length; i++) {
    if (strArr[1][i] in dupeObj) {
      dupeStr += `${strArr[1][i]},`
    }
  }
  return dupeStr.length ? dupeStr.slice(0, -1) : false
}

function Palindrome(str) { 
  let charObj = {};
  let reversed = str.split("").reverse()//.join("")
  str.split("").forEach(char =>{
    if (!(char in charObj)){
      charObj[char] = 0;
    }
    charObj[char] += 1;
  })


  reversed.forEach(char =>{
    if (!(char in charObj)){
      charObj[char] = 0;
    }
    charObj[char] -= 1;
  })

  return Object.values(charObj).every(letter => letter === 0)

}


function Palindrome(str) { 
 return str.split(" ").join("") === str.split("").reverse().join("").split(" ").join("") 
}





function ExOh(str) { 
  let xCount = 0;
  let yCount = 0;
  for(let i = 0; i < str.length; i++){
    str[i] === 'x' ? xCount += 1: yCount += 1;
  }
  return xCount === yCount;
}


function DivisionStringified(num1,num2) { 
  let answer = Math.round(num1 / num2).toString().split("");
  let answer_array = []
  let count = 0; 
  for (let i = answer.length - 1; i >= 0; i--){
    answer_array.unshift(answer[i])
    count++;
    //console.log(count)
    if (count === 3 && i >= 1){
      answer_array.unshift(",")
      count = 0;
    }
  }

  return answer_array.join("");
}
   

function MeanMode(arr) { 
  let modeObj = {};
  let mean = 0;

  arr.forEach(num =>{
    mean += num;
    if (!(num in modeObj)){
      modeObj[num] = 0;
    }
    modeObj[num] += 1;
  })
  let sortable = [];
  for (let orgArrValue in modeObj){
    sortable.push([orgArrValue, modeObj[orgArrValue]])
  }
  const sorted = sortable.sort((a,b) => a[1] - b[1]);
  let mode = sorted[sorted.length - 1][0]

   mean = Math.round(mean / arr.length);

   return mean == mode ? 1 : 0
}


function DistinctCharacters(str) { 
  const charObject = {};

  for (let i = 0; i < str.length; i++){
    if (!(str[i] in charObject)){
      charObject[str[i]] = 0;
    }

  }
  return Object.keys(charObject).length >= 10 ? true : false;
}


function SnakeCase(str){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let converted_str = ""
  for (let i = 0; i < str.length; i++){
    if (alpha.includes(str[i].toLowerCase())){
      converted_str += str[i].toLowerCase()
    }else if (!(alpha.includes(str[i]))){
      converted_str += "_"
    }
  }
  return converted_str
}


function SumMultiplier(arr) { 
  let doubleSum = 0;
  arr.forEach(num =>{
    doubleSum += num;
  })

  doubleSum = doubleSum * 2;

  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] * arr[j] >= doubleSum) return true;
    }
  }
  
  return false;
}


function FizzBuzz(num) { 
  let count = 1;
  let fizzBuzzString = "";
  while (count <= num){
    if (count % 3 === 0 && count % 5 !== 0){
      fizzBuzzString += "Fizz ";
    } else if (count % 5 === 0 && count % 3 !== 0){
      fizzBuzzString += "Buzz "
    } else if (count % 3 === 0 && count % 5 === 0){
      fizzBuzzString += "FizzBuzz "
    } else {
      fizzBuzzString += `${count} `
    }
    count ++;
  }
  return fizzBuzzString;
}

function RemoveBrackets(str) { 
  let countLefts = 0;
  let countRights = 0;

  for (let i = 0; i < str.length; i++){
    str[i] === "(" ? countLefts += 1 : countRights += 1;
  }
  return countLefts > countRights ? countLefts - countRights : countRights - countLefts;
}


function GCF(arr) { 
  // arr.forEach(num =>{
    
  // })

  let i = 1;
  let j = 0;


  let factors = {};
  //const factors = [];
  while (j < arr.length){
    while(i <= Math.max(...arr)){
      if (arr[j] % i === 0){
        if (!(i in factors)){
          factors[i] = 0;
        }
        factors[i] += 1;
      }
      i++;
    }
    j++;
  }
  return factors;
}


function GCF(arr) { 
  const factors = {};
  for (let j = 0; j < arr.length; j++){
    for (let i = 1; i < Math.max(...arr); i++){
      if (arr[j] % i === 0 && !(i in factors)){
        factors[i] = 0;
      }
      factors[i] += 1;
    }
  }
  return factors
}


function GCF(arr) { 
  const factors = {};
  for (let j = 0; j < arr.length; j++){
    for (let i = 1; i <= Math.max(...arr); i++){
      if (arr[j] % i === 0 && !(i in factors)){
        factors[i] = 1;
      }else if (arr[j] % i === 0 && (i in factors))
      factors[i] += 1;
    }
  }
  
  const sortable = [];
  for (let int in factors){
    sortable.push([int, factors[int]])
  }
  return parseInt(sortable.sort((a,b) => a[1] - b[1])[sortable.length - 1][0])

}
   

function Superincreasing(arr) { 
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] > sum) sum += arr[i]
    else{
      return false;
    }
  }

  return true;

}


function PalindromeSwapper(str) { 

  //return str.split("").reverse().join("")

  for (let i = 0; i < str.length - 1; i++){
    let tmp = str[i + 1] /// tmp = e
    str[i + 1] = str[i] /// e = h 
    console.log(str[i])
    console.log(str[i + 1])
    str[i] = tmp; /// 
       console.log(str[i])
    console.log(str)
    if ( str === str.split("").reverse().join("")){
      return str
    }
  }
  return -1;
  
}


function ArrayAdditionI(arr) {
  var max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  for (var i = 0; i < arr.length; i++) {
      var total = arr[i];
      for (var j = 0; j != i && j < arr.length; j++) {
          total += arr[j];
          if (total == max) {
              return "true";
          }
      }
  }
  return "false";
}







