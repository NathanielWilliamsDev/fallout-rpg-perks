// function test(div){ // click
//     console.log(div);
//     let originalDiv = div;
//     let cloneDiv = originalDiv.cloneNode(true); // Creating a clone of the clicked on div
//     let wrapper = document.querySelector(".cardContainer");
//     // If there is an instance of a cloned div (div with .delete class), remove it
//     if(document.querySelector(".delete") !== null){ 
//         let duplicate = document.querySelector(".delete")
//         duplicate.remove();
//     }
//     // if cloned div doesn't have .selected
//     if(!cloneDiv.classList.contains("selected")){
//         cloneDiv.classList.add("selected"); // add it
//         cloneDiv.classList.remove("cardItem"); // remove the default .cardItem
//         cloneDiv.classList.add("delete"); // give it a class to look out for later (for removal)
//         wrapper.appendChild(cloneDiv); // append it to the wrapper
//     }
// }



// function test(div){
//     div.classList.add("selected");
//     div.classList.remove("cardItem");
//     let selected = document.querySelector(".selected");
//     let img = document.querySelector(".selected img");
//     let closeContainer = document.createElement("div");
//     let close = document.createElement("p");
//     closeContainer.appendChild(close);
//     close.textContent = "x";
//     closeContainer.classList.add("closeDiv");
//     close.classList.add("close")
//     selected.insertBefore(closeContainer, img);
    
//     closeContainer.addEventListener("click", () =>{
//         div.classList.add("cardItem");
//         div.classList.remove("selected");
//     });
// }



const buttons = document.querySelectorAll(".button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (e)=>{
        console.log(buttons[i]);
        buttons[i].classList.add("selected");
        buttons[i].classList.remove("cardItem");

        const close = buttons[i].querySelector(".close");
        close.style.display = "flex";

        close.addEventListener("click", () =>{
            setTimeout(()=>{
                buttons[i].classList.remove("selected");
                buttons[i].classList.add("cardItem");
                close.style.display = "none";
            }, 10);
        }, {once: true});
    });
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
