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
document.querySelector("#pcode").addEventListener("change", (event) => {
    //when you use the arrow method, "this" doesn't refer to the target element,
    //it refers to the event...
    //we need a variable to hold the event, and we can refer to the event's target
    //console.log(event.target.value);

    //write the pattern for a canadian postal code
    // A1A 1A1 or A1A1A1 or a1a1a1 or a1a 1a1
    //there are also only specific letters: ABCEGHJKLMNPRSTVXYZ
    // \d means any number
    // a ? after a group makes whatever is contained in that group optional
    //we can then add flags after the pattern, like i for case insensitive
    //a ^ outside of [] means this must be the start of the content
    //a $ outside of [] means this must be the end of the content
    const postalPattern = /^[ABCEGHJKLMNPRSTVXYZ]\d[ABCEGHJKLMNPRSTVXYZ][ ]?\d[ABCEGHJKLMNPRSTVXYZ]\d$/i;

    if(postalPattern.test(event.target.value)){
        //if it's true, then it matches the postal code pattern...
        event.target.parentNode.querySelector("span").textContent = "";
    }else{
        //if the test fails, then it doesn't match the postal code pattern
        event.target.parentNode.querySelector("span").textContent = "Not a valid postal code";
    }
});

//add event listener for email
document.querySelector("#email").addEventListener("change", function(){
    //add a pattern for emails...
    const emailPattern = /[^a-zA-Z0-9.,?:\-@%\/\s_]/;

    const emailPattern2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log("Email pattern 1:" + emailPattern.test(this.value));
    console.log("Email pattern 2:" + emailPattern2.test(this.value));
});


//validate the form on submit
//get the form and put it in a variable
const ourForm = document.querySelector("form");

//add an event listener to the form (event: submit)
ourForm.addEventListener("submit", function(event){
    //stop the form from submitting
    event.preventDefault();

    //create a variable to keep track of whether there is an error
    let formError = false;

    //we can use the form in our variable as a javascript object
    //and refer to each of the form fields by their name attribute (in HTML)
    
    //test the feilds to see if they are blank, or if they contain the right information
    if(ourForm.elements.fname.value == ""){
        console.log("Full name is required");
        //switch the error flag
        formError = true;
    }
    
    if(ourForm.elements.pcode.value == ""){
        console.log("Postal code is required");
        formError = true;
    }

    //if form error is true, something is wrong, so we don't submit the form
    //but if it's still false, then all the checks went through, and we can submit the form
    if(formError === false){
        console.log("submit form");
    }
});
