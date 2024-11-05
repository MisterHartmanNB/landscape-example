// Function to set up the canvas
function main() {
    // Ask the user if they want daytime or nighttime
    var timeOfDay = readLine("Do you want it to be daytime or nighttime? ").toLowerCase();

    // Draw the sky based on user input
    if (timeOfDay === "daytime") {
        drawDaytimeSky();
    } else if (timeOfDay === "nighttime") {
        drawNighttimeSky();
    } else {
        console.log("Invalid input. Please enter 'daytime' or 'nighttime'.");
    }

    //Draw the grass
var grass = new Rectangle(getWidth(), getHeight() / 4);
grass.setPosition(0, getHeight() * 3 / 4);
grass.setColor('green');
add(grass);
}

// Function to draw the daytime sky
function drawDaytimeSky() {
    var sky = new Rectangle(getWidth(), getHeight());
    sky.setPosition(0, 0);
    sky.setColor('skyBlue');
    add(sky);

    // Draw the sun
    var sun = new Circle(50);
    sun.setPosition(getWidth() - 100, 100);
    sun.setColor('yellow');
    add(sun);
}

// Function to draw the nighttime sky
function drawNighttimeSky() {
    var sky = new Rectangle(getWidth(), getHeight());
    sky.setPosition(0, 0);
    sky.setColor('black');
    add(sky);

    // Draw the moon
    var moon = new Circle(50);
    moon.setPosition(getWidth() - 100, 100);
    moon.setColor('gray');
    add(moon);

    // Draw stars using a loop
    for (var i = 0; i < 50; i++) {
        var star = new Circle(2);
        star.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
        star.setColor('white');
        add(star);
    }
}

main();