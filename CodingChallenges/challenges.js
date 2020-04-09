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
