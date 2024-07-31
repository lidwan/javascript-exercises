function getAge(death, birth) {
    if(!death)
        death = new Date().getFullYear();
    return death - birth;
}

const findTheOldest = function(arrOfObjs) {
return arrOfObjs.reduce((oldest, obj) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const objAge = getAge(obj.yearOfDeath, obj.yearOfBirth)
    return objAge > oldestAge ? obj : oldest;
})
};

// Do not edit below this line
module.exports = findTheOldest;