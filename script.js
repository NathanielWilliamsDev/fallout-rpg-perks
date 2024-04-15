
// Event Listener for button press
document.addEventListener("DOMContentLoaded", function(){
    let previousButton = null;
    let buttons = document.querySelectorAll(".button"); // all buttons (cardItems, selected) on screen

    // Loop through each button, and add a click event listener
    buttons.forEach(function(button){
        button.addEventListener("click", function(event){ // When a button is clicked

            event.stopPropagation(); // Stop's the click event from bubbling up to the body
            if(previousButton !== null){ // If there is a previous item
                previousButton.className = "cardItem button"; // reset previous item to "cardItem" 
            }

            this.className = "selected button"; // Change newly clicked item to "selected"

            previousButton = this; // Set previous button to this button
            
        });
    });
});

document.body.addEventListener("click", function(event){ // When the body is clicked
    let buttons = document.querySelectorAll(".button"); // List of all buttons on the page
    // Loop through each button, check if it is selected
    //  - If "selected", change to "cardItem"
    for(i = 0; i < buttons.length; i++){
        if(buttons[i].className == "selected button"){
            buttons[i].className = "cardItem button";
        }
    }
});
