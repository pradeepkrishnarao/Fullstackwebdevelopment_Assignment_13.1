var promise=new Promise(function(resolve,reject){ // promise object is of Promise result of asynchronous operation function passed with arguments resolve and reject.
        var array1=[]; // Empty array
        for(var i=0;i<5;i++){
            array1.push(prompt('Enter input '+(i+1)));// array1 variable accepts input within the prompted window dialog the number of times i variable is iterated in the for loop and stores in array1.push
        } 
        var arrayUpcase=array1.map(array1 => array1.toUpperCase()) // arrayUpcase object stores array1 string elements being converted to uppercase string elements with the help of built-in method toUpperCase.
        var n=array1.length; // n is the length of the array1 
        
        setTimeout(() => resolve(arrayUpcase,n,{message: "Promise successful"})); //resolve is the callback function to be executed on success, having the parameters arrayUpcase, n milli seconds and promise status message while setoutTime method being invoked.
   });
   promise.then(function(data){ // promise object is the outcome of the Promise result of asynchronous operation.
       console.log(data);
       return "Success"; // 
   }).catch(function(err){ // catch function(err) displays system generated error message of the promise asynchronous operation. 
       console.log(err);
       return "Failed";
   });
