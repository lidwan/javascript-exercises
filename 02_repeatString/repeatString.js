const repeatString = function(string, num) {
    if(num < 0) {
        return "ERROR";
    }
    if(!string)
        return "";
    const tmp = string;
    string = "";
    while(num > 0){
        string += tmp;
        num--;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
