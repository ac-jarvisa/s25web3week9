//add an event listener to the full name input
document.querySelector("#fname").addEventListener("blur", function(){
    //create a new pattern to use to validate the user input
    //patterns can be something specific, like abc (looking for only those charaters)
    //or you can provide groups, or ranges, of characters, like a-z
    //the [] create a group to search for
    //the ^ in a group reverses it (so it looks for anything that doesn't match)
    //there are also special characters, like \s to look for any space
    //when you want to find a character that has a specific function in a pattern,
    //like a -, you have to escape it (use the backslash before it)
    const fnamePattern = /[^a-zA-Z.,\s\-]/;

    //using the pattern, check (test) if there is a match in what the user has typed
    //give the user a message depending on the result of the check
    if(fnamePattern.test(this.value)){
        //if the pattern is true, then it found something that isn't:
        //a lower case letter, an upper case letter, or a space (ie. a number)
        this.parentNode.querySelector(".validation").textContent = "That's not a name!";
        //toggle the error class
        this.classList.add("error");
    }else{
        //if we didn't find anything that shouldn't be there, remove the message
        this.parentNode.querySelector(".validation").textContent = "";
        //toggle the error class
        this.classList.remove("error");
    }
});


//event listener for the postal code field
//this type of anonymous function is written with the arrow method
document.querySelector("#pcode").addEventListener("change", () => {
    //when you use the arrow method, "this" doesn't refer to the target element,
    //it refers to the event...
    

    //write the pattern for a canadian postal code
    // A1A 1A1 or A1A1A1 or a1a1a1 or a1a 1a1
    //there are also only specific letters: ABCEGHJKLMNPRSTVXYZ
    // \d means any number
    // a ? after a group makes whatever is contained in that group optional
    //we can then add flags after the pattern, like i for case insensitive
    const postalPattern = /[ABCEGHJKLMNPRSTVXYZ]\d[ABCEGHJKLMNPRSTVXYZ][ ]?\d[ABCEGHJKLMNPRSTVXYZ]\d/i;
});