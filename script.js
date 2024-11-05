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

// Draw the house only if it's daytime
if (timeOfDay === "daytime") {
    var house = new Rectangle(100, 100);
    house.setPosition(getWidth() - 150, getHeight() * 3 / 4 - 100);
    house.setColor('red');
    add(house);

    var roof = new Polygon();
    roof.addPoint(getWidth() - 150, getHeight() * 3 / 4 - 100);
    roof.addPoint(getWidth() - 50, getHeight() * 3 / 4 - 100);
    roof.addPoint(getWidth() - 100, getHeight() * 3 / 4 - 160);
    roof.setColor('brown');
    add(roof);
}

// Draw the tree
var trunk = new Rectangle(20, 100);
trunk.setPosition(getWidth() / 4, getHeight() * 3 / 4 - 100);
trunk.setColor('brown');
add(trunk);

var leaves = new Circle(50);
leaves.setPosition(getWidth() / 4 + 10, getHeight() * 3 / 4 - 150);
leaves.setColor('green');
add(leaves);
}

// Function to draw the daytime sky
function drawDaytimeSky() {
    var sky = new Rectangle(getWidth(), getHeight());
    sky.setPosition(0, 0);
    sky.setColor('skyBlue');
    add(sky);

    //Draw random clouds using a loop
    for (var i = 0; i < 5; i++) {
        var cloud = new Circle(30);
        cloud.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight() / 2));
        cloud.setColor('white');
        add(cloud);
    }

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

    // Draw stars using a loop
    for (var i = 0; i < 50; i++) {
        var star = new Circle(2);
        star.setPosition(Randomizer.nextInt(0, getWidth()), Randomizer.nextInt(0, getHeight()));
        star.setColor('white');
        add(star);
    }

        // Draw the moon
        var moon = new Circle(50);
        moon.setPosition(getWidth() - 100, 100);
        moon.setColor('gray');
        add(moon);
}

main();