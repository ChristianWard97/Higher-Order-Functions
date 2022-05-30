/*Activity 1…
Write a simple function that logs ‘Hello Codenation" to the 
console.
Then write a higher-order function which will run the simple 
function five times, even though you only call it once. */

const log = () => {
    console.log("Hello Codenation");
}

const repeat = (log, rpt) => {
    for(i = 0; i < rpt; i++){
        log();
    }
}
repeat(log,5);