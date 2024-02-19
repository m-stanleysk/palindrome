const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = input => {
    //save original input to use in output
    const originalInput = input;

    //alert for blank input
    if (input === "") {
        alert("Please input a value");
        return; //stop proceeding through the function
    };

    //replace everything but A-Z, a-z, and 0-9 with empty string, make it lower case
    const processedInput = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

    //compare input to reversed version, construct output
    outputTxt = `<strong>${originalInput}</strong> ${processedInput === [...processedInput].reverse().join("") ? "is" : "is not"} a palindrome`;

    //remove previous output
    resultDiv.replaceChildren();
    //add p element to result div and add outputTxt inside it
    const paragraph = document.createElement("p");
    paragraph.innerHTML = outputTxt;
    resultDiv.appendChild(paragraph);
};

//Set up Event listeners (button and enter key)
checkBtn.addEventListener("click", () => {
    checkPalindrome(userInput.value);
    userInput.value = "";
});

input.addEventListener("keypress", keyboard => {
    if (keyboard.key === "Enter") {
        checkPalindrome(userInput.value);
        userInput.value = "";
    }
});