Garon Hock and Michael Giering

   /// given a string, str will only have ()[]{} 
/// return a boolean, tell me if its valid
// if all brackets have a corresponding closing bracket
// open brackets must be closed in the correct order
// example input: ( [ )] - false


Possible inputs - ()[]{} - true
)[]- false
[]{}[][][] - true
{[()]}- true
Input: "{[]}"
Output: true

///split it so its an array
//define possible lefts = “{[(
Define possible rights = “}])

//iterate through and ill find the outer most left before finding a right and once i find a right i need to make sure that the closest iteration to the left is a corresponding left, then i will continue until the string is empty if it is always true return true otherwise return false


function validOpenClose(str) {
	Let strArr = str.split(“”)

	
	Let possible_matches = {
		“[“ : “]”,
		“{“ : “}”,
		“(“ : “)”
}

	Let result = [];
	For (let i = 0; i < strArr.length; i++) {
		if (Object.values(possible_matches).includes(strArr[i])) {
			if(strArr[i - 1])  !== 
}
}

//"{[]}"
Resutlt [{[]]
}


function validOpenClose(str) {
Let opening = {
		“[“ : “]”,
		“{“ : “}”,
		“(“ : “)”
};
	Let closing = {
		“]“ : “[”,
		“}“ : “{”,
		“)“ : “(”
};
Let patternArr = [];
	Let stringArr = str.split(‘’);

	stringArr.forEach(bracket => {
		If (bracket in opening) {
			patternArr.push(bracket)
} else if
 (bracket in closing && patternArr[patternArr.length -1] === closing[bracket]) {
	patternArr.pop();
} else {
Return false
}
})
If (patternArr.length) {
Return false
}
Return true
}



////







///given a sorted array of numbers
/// remove the duplicates in place, such that each element appears only once and return the new length

///do not allocate extra space for a new array


.splice(1, 1)

[1,2,3,4,5]
[1,3,4,5]


[1,1,1,1,1,2,2,2,2,2,3,4,5]
[1,1,1,2,2,2,2,2,3,4,5]

var removeDuplicates = function(arr) {

	For (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1] {
			arr.splice(arr[i + 1]), 1)
}
}

Return arr.length;
}

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 
Example 1:
Input: "III"
Output: 3

Example 2:
Input: "IV"
Output: 4

Example 3:
Input: "IX"
Output: 9

Example 4:
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.









Function getRomanNumeralInteger(str) {
	Let romanNumerals = {
‘I’: 1,
‘V’: 5,
‘X’: 10,
‘L’: 50,
‘C’: 100,
‘D’: 500,
‘M’: 1000
}

Let sum = 0 
for(let i = 0; i < str.length; i++){
	 if (romanNumerals[str[i]] < romanNumerals[str[i+1]]) {
Sum -= romanNumeral[str[i]]
Sum += romanNumeral[str[i+1]]
} else {
	Sum += romanNumeral[str[i]]
}
}

Return sum
}

///split it iterate through array one by one
/// if iteration === I check the one next to it
/// if the one next to it is a v or an x through that into newArray
//if the one next to it is a I keep checking until it is no longer an I
///throw that chunk into new array

/// if iteration  === X check if next number is L OR C if true throw that 
Chunk into new array 



///if any numeral is equal to the one next to it keep grabbing it until it isnt anymore


///













Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.
Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

Base cases: 
0: []
1: [1]
2: [[1], [1,1]]


3













var generate = function(numRows) {
If (numRows === 0) {
Return [];
}    
If (numRows === 1) {
Return [[1]];
}    
If (numRows === 2) {
Return [[1], [1,1]];
}  
Let answerArr = [];
Let generations = generate(numRows - 1)
Let previousArr = generations[-1];

previousArr.forEach((int, idx) => {
	If (idx === 0 || idx === previousArr.length - 1) {
		answerArr.push(int)
}
if (!(previousArr.length - 1)) {
	answerArr.push(Int + previousArr[idx + 1])
}
})
Return generations.push(answerArr)
};


Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]







Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.
 
Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as the selling price needs to be larger than the buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

////iterate through array 
///find a number that has the biggest difference between a number after it 
/// return that difference
///makes array that pushes on first val. If any number in the remaining iterations are greater subtract the last number of the array with the first number and set that number to a variable 

5- 1 
Sum =  4 
[3,6]
6 - 3 = 3 
secondSum = 3 
Compare the two, keep the larger by making sum = the larger one
Then setting second sum = 0;

Function maxProfit(prices){
	Let array = [];
	Let sum = 0 





	For (let i = 0; i < prices.length; i++) {
array.push(prices[i])
if(array[array.length - 1] < array[i]
 && sum < array[i] - [array[array.length - 1]){
	Let sum = array[i] - array[array.length -1]

} 

}









Return sum;
}

[7,1,5,3,6,4]
Sum = 4;
[7,1,5,3,6,4]

Array[7, 1]
5 - 1 - 4 
4 
[7 ,1, 5=

