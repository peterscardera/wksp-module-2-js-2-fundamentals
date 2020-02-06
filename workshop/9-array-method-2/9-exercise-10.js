// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here


function calculateTheAvg(grades)  {

    let amountoOfGrades = grades.length;
    
    let sum = grades.reduce((arr, val)=>{
        return arr + val
    },0)
    let answer = sum / amountoOfGrades
    return answer
    }
    
    function letter(answer) {
       let finalGrade = ""
        if ( answer < 60) {
         finalGrade = "F"
        }
        else if (answer < 70) {
           finalGrade = "D";
        } else if(answer < 80) {
           finalGrade = "C";
        } else if(answer < 90 ) {
           finalGrade = "B";
        } else if(answer < 100 ) {
            finalGrade = "A";
        }
        return finalGrade
    
        }   
    
    
    console.log(letter(calculateTheAvg([48, 95, 65, 48, 59, 78, 72, 65]))); // returns D
    
    // console.log(letter(calculateTheAvg([99, 95, 65, 98, 59, 78, 99, 65]))); // returns b
 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


