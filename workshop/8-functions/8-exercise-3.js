// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

//loop way--------------------------------------------------------------------------------

function calculateAverage(a, b, c, d, e) {
    let length = arguments.length;
    let sum = 0;
   for (let i = 0; i < length; i++) {
       sum = sum + arguments[i]
   }
   return sum/length
}

// make certain to console the returned value
console.log(calculateAverage(76, 60, 83, 100, 78));// 79.4

// array method way----------------------------------------------------------------------------

function calculateAverage(a, b, c, d, e) {
    let length = arguments.length;
    
    
    let array = Array.prototype.slice.call(arguments);
    console.log(array) // [76, 60, 83, 100, 78]
    
    let sum = array.reduce((arr, val)=> arr + val,0)
    console.log(sum) //397
    let answer = sum / length
    return Math.floor(answer)
    
    }
    
    
    // make certain to console the returned value
    console.log(calculateAverage(76, 60, 83, 100, 78));// 79

    // PREFERRED WAY I THINK? ----------------------------------------------------------------------------


    function calculateAverage(a, b, c, d, e) {
        let length = arguments.length;
        
        let newArray = [...arguments]
        console.log(newArray) // [76, 60, 83, 100, 78]
        let sum = newArray.reduce((arr, val) => arr + val,0)
        console.log(sum)// 397
        let answer = sum / length
        return Math.floor(answer)
        }
        
        
        
        // make certain to console the returned value
        console.log(calculateAverage(76, 60, 83, 100, 78)); // 79
        
        



