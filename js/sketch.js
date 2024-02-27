// select element for user to change between shapes
const selectElement = document.getElementById("shape-displayed")

// store currently displayed shape - initial shape is a circle
let shapeDisplayed = "circle"

// store if shape has recently changed
let shapeChanged = false

// when user changes the dropdown option, store new option in shapeDisplayed
selectElement.onchange = () => {
    shapeDisplayed = event.target.value
    // store that shape has changed
    shapeChanged = true
}

function setup() {

    // angleMode(DEGREES)

    createCanvas(windowWidth, windowHeight);

    background(0);

    // noStroke()

    changeColour()

}
  
function draw() {
    
    translate(width / 2, height / 2)

    // if shape has changed, reset background
    if(shapeChanged){
        background(0)

        // save that shapes changes have been applied
        shapeChanged = false
    }

    drawNorton()

//     // switch between possible shapes to display
//     switch(shapeDisplayed) {
//         // display circle
//         case "circle": {
//             drawCircle()
//             break;
//         }
//         // display spiral
//         case "spiral": {
//             drawSpiral()
//             break;
//         }
//         case "heart": {
//             drawHeart()
//             break;
//         }
//     }
}