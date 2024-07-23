const removeFromArray = function(A) {
    for(let i = 0; i < arguments.length; i++){
        for(let j = 0; j < A.length; j++){
            while(A[j] === arguments[i]) {
                A.splice(j, 1);
            }
        }
    }
    return A;
};

// Do not edit below this line
module.exports = removeFromArray;
