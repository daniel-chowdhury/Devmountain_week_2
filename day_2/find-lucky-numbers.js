

 function find_lucky (input) {

    let input_array = []
let j = -1;

for (let i = 0; i < input; i++) {
    input_array[i] = Math.floor(Math.random()*10)
    j = -1;
    while (j <= (i-2)) {
        j++;
        if (input_array[i] === input_array[j] || input_array[i] === 0) {
            input_array[i] = Math.floor(Math.random()*10);
            j = -1
        }

    }
}
return input_array
}

let output = find_lucky(9)

console.log(output)
