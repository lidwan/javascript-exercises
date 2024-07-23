const sumAll = function(firstNumber, secondNumber) {
    if(firstNumber > secondNumber){
        let tmp = secondNumber;
        secondNumber = firstNumber;
        firstNumber = tmp;
    }

    if(firstNumber < 0 || secondNumber < 0 
        || !firstNumber || !secondNumber 
        || typeof(firstNumber) !== "number"|| typeof(secondNumber) !== "number" 
        || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)
    ){
        return "ERROR";
    }
    else{
        let sum = 0;
        for (; firstNumber <= secondNumber; firstNumber++) {
            sum += firstNumber;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
