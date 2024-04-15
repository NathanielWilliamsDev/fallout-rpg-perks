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


