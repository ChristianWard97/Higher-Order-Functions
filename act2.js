/* Activity 2…
The array method .map is an example of a higher-order 
function.
Declare a variable with five numbers, then use .map to iterate 
through the array and multiply each array item by 3. */

const num = [1, 2, 3, 4, 5];

const multiply = () => {
    const byThree = num.map(x => x * 3);
    console.log(byThree);
}

multiply();