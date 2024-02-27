// get colour button
const colourButton = document.getElementById("colour-button")

// upon click of the colour button, generate new random colour and use it to fill
colourButton.onclick = () => {
    changeColour()
}

// function triggers every time the user scrolls

function mouseWheel(event) {
    // delta means increment
    // if the user is scrolling quickly, it will be higher, and vice versa
    const deltaWheel = event.delta * 0.1
    //update offset
    offset = offset + deltaWheel
}