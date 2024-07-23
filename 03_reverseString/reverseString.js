const reverseString = function(string) {
    if(!string)
        return "";

    const tokenized = string.split("");
    
    for (let i = 0, j = tokenized.length - 1; i < tokenized.length / 2; i++, j--) {
        let tmp = tokenized[i];
        tokenized[i] = tokenized[j];
        tokenized[j] = tmp;
    }
    return tokenized.join("");

};

// Do not edit below this line
module.exports = reverseString;
