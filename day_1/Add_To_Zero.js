
let condition = false

let array = [4, 55, 6, 12, 44, -44]

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j && (array[i] + array[j]) === 0) {
            condition = true
        }
    }
}

if (condition) {
    console.log("True")
} else {
    console.log("False")
}

