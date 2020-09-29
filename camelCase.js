//capture string into array
module.exports = function toCamelCase(string) {
    var result = "";
    var emptyArr = [];
    var splitStr = string.split(" ");
    // console.log(splitStr);

    for (let i = 0; i < splitStr.length; i++) {
        var currentWord = splitStr[i].toLowerCase();
        if(i===0) {
            emptyArr.push(currentWord);
        } else {
            currentWord = currentWord.substr(0,1).toUpperCase() + currentWord.substr(1);
            emptyArr.push(currentWord);
        }
        
    }
    console.log(emptyArr);

    result = emptyArr.join('');

    return result;
}

// console.log(toCamelCase("this is a test string"));


//make sure the first word is all lowercase



//convert all other words to lowercase eith uppercase first letter
//rejoin the array into a string