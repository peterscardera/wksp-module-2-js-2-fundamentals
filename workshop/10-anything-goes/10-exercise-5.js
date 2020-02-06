// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.

for(var i = 100; i < 1000; i++){
    let x = i.toString();
    if (Math.pow(x[0],3) + Math.pow(x[1],3) + Math.pow(x[2],3) == i){
    console.log(i); // 153, 370,371, 407
    }
    }