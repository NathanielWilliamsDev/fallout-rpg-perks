function test(div){ // click
    let originalDiv = div;
    let cloneDiv = originalDiv.cloneNode(true); // Creating a clone of the clicked on div
    let wrapper = document.querySelector(".cardContainer");
    // If there is an instance of a cloned div (div with .delete class), remove it
    if(document.querySelector(".delete") !== null){ 
        let duplicate = document.querySelector(".delete")
        duplicate.remove();
    }
    // if cloned div doesn't have .selected
    if(!cloneDiv.classList.contains("selected")){
        cloneDiv.classList.add("selected"); // add it
        cloneDiv.classList.remove("cardItem"); // remove the default .cardItem
        cloneDiv.classList.add("delete"); // give it a class to look out for late (for removal)
        wrapper.appendChild(cloneDiv); // append it to the wrapper
    }
}

let darkModeTriggered = false;
function darkMode(){
    darkModeTriggered = !darkModeTriggered; // Flips darkModeTriggered to the opposite when clicked
    let root = document.querySelector(":root");
    if(darkModeTriggered){
        root.style.setProperty("--bg-color", "rgb(8, 41, 59)"); //Dark mode colour theme
        root.style.setProperty("--header-color", "rgba(255, 255, 0, 0.692)")
    }
    else{
        root.style.setProperty("--bg-color", "rgb(33, 117, 161)"); //Light mode (default) colour theme
        root.style.setProperty("--header-color", "rgb(255, 255, 0)")
    }
}
// let root = document.querySelector(":root");
// root.style.setProperty("--bg-color", "red");
