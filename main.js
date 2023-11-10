const myButton = document.querySelector(".myButton")

function clickedAlert(){
    alert("clicked!");
}

myButton.addEventListener("click",clickedAlert);