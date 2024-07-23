const removeFromArray = function(A, ...args) {
    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < A.length; j++){
            while(A[j] === args[i]) {
                A.splice(j, 1);
            }
        }
    }
    return A;
};

// Do not edit below this line
module.exports = removeFromArray;
