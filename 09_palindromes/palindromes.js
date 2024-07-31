const palindromes = function (str) {

    //make all chars lowercase and make str an array of said chars
    str = Array.from(str.toLowerCase());

    //remove all punction and spaces from array (as per README file specifications)
    const strWithoutPunAndSpaces = str.filter((char) => (char === "." || char === "," 
        || char === "?" || char === "!" || char === " ") ? false : true);
    
    const len = strWithoutPunAndSpaces.length;

    //make a new array and copy 
    const backwardArray = [];
    for(let i = 0; i < len; i++)
        backwardArray[i] = strWithoutPunAndSpaces[i];

    //reverse new array
    for(let i = 0,j = len - 1; i < len / 2; i++, j--){
        let tmp = backwardArray[i];
        backwardArray[i] = backwardArray[j];
        backwardArray[j] = tmp;
    }

    //turn arrays back into strings.
    const backward = backwardArray.join("");
    const forward = strWithoutPunAndSpaces.join("");

    //check for palindrome
    if(backward === forward)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
