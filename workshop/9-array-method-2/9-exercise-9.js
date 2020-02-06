// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {

    let length = grades.length
    let sum = grades.reduce(function(arr,val){
        return arr + val
    },0)
   let answer = sum / length
    return Math.floor(answer)
    }
    
    console.log(calculateAverage([76, 60, 83, 100, 78]));


    /// could have said sum = grades.reduce((arr,val) => arr + val,0) i think