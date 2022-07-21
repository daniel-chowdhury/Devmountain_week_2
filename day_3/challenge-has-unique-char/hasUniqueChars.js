// Write your code below

function hasUniqueChars(input_string) {
    let condition = true
    input_string = String(input_string)
for (let i = 0; i < input_string.length; i++) {
for (let j = i+1; j < input_string.length; j++) {
if (input_string.charAt(i) === input_string.charAt(j)) {
    condition = false
    break
}
}
if (condition === false) {
    break
}
}
return condition
}


console.log(hasUniqueChars("juiUu"))