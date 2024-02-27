// a function that translates radius and theta to Cartesian coordinates
// and returns x and y in an object

function transformPolarToCartesian(radius, theta) {
    // calculate x and y using the sine and cosine formula
    const x = radius * cos(theta);
    const y = - radius * sin(theta);

    // store x and y inside cartesianCoordinates object
    // from now on cartesianCoordinates.x is the same as x
    // from now on cartesianCoordinates.y is the same as y
    const cartesianCoordinates = {
        x: x,
        y: y
    }

    // return the stored data so that it can be used outside of the function
    return cartesianCoordinates;
}

// draw a circle in the middle of the canvas

function drawCircle() {
    // radius of the circle which is constant
    const radius = offset

    // loop through a whole circle - 0 to 360 degrees
    for (let theta = 0; theta < 360; theta = theta + 1) {
        // get the cartesian points at each step of the theta loop
        const cartesianCoordinates = transformPolarToCartesian(radius, theta)

        // draw a point in those coordinates
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 8)

    }
}

// offset of the spiral starts ay 0 and is updated as drawSpiral happens
let offset = 0

// change the colour of the shape

function changeColour() {
    // generate random RGB
    const r = random(255)
    const g = random(255)
    const b = random(255)

    //apply fill with that colour
    fill(r, g, b)
}

// draw a spiral in the middle of the canvas
// formula of the spiral is r = k * theta

function drawSpiral() {

    background(0)

    // radius starts at 0 amd will increase 
    let r = 0;

    // constant of proportion between r and theta
    const k = 0.2;

    // constants for drawing a snail spiral instead
    const a = 5
    const b = 0.001

    for (let theta = 0; theta < 15 * 360; theta = theta + 1) {
        // update r according to theta
        // r = k * theta

        // update r to create snail spiral
        r = a * Math.exp(b * theta)

        // get the cartesian coordinates 
        const cartesianCoordinates = transformPolarToCartesian(r, theta + offset)

        // draw a point in those coordinates 
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 16)

    }

    // offset = offset - 1

}

// calcuate radius needed at each angle theta of the heart
// Math.sqrt() = square root of what's inside the parenthesis
// Math.abs() = absolute value of what's inside the parenthesis
// absolute value means that if it's negative make that positive, if it's positive then leave it as is
// for example - Math.abs(-1) = 1 and Maths.abs(1) = 1

function radiusForHeart(theta) {
    const radius = 2 - 2 * sin(theta) +
        (sin(theta) * Math.sqrt(Math.abs(cos(theta)))) / (sin(theta) + 1.4)
    return radius
}

// draw a heart

function drawHeart() {

    background(0, 2)

    // "height" or "width" alonge only works in p5.js
    translate(0, - 0.15 * height)

    for (let theta = 0; theta < 360; theta = theta + 1) {
        const radius = offset * radiusForHeart(theta)
        console.log(radius)

        // get cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(radius, theta)

        // draw a circle in x, y point
        circle(cartesianCoordinates.x, cartesianCoordinates.y, 16)

    }
}

function drawNorton() {
    const a = 9
    const b = 16
    const c = 4
    beginShape()
    noFill()
    strokeWeight(2)
    stroke(255, 0, 0)
    for (let t = 0; t <= TWO_PI + 0.001  ; t+=0.001) {
        const radius = 120 * (2 + 0.5 * sin(a * t))
        const theta = t + sin(b * t) / c

        // get cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(radius, theta)

        vertex(cartesianCoordinates.x, cartesianCoordinates.y)

    }
    endShape()
}