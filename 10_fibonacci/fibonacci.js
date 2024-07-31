const fibonacci = function(num) {
num = parseInt(num);

if(num < 0)
    return "OOPS"
if(num === 0)
    return 0;
const arr = [1, 1];

for(let i = 2; i <= num - 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
}
return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
