---
title : Chase The Circle Game Tutorial p5js
slug : chase-the-circle-game-p5js
date : 2019-06-01
author : Luke O'Malley
description : This tutorial will walk you through building out a version of the classic game Pong using the p5js Javascript Library. This tutorial is intended for anyone, no prior javascript knowlege is required
---

# Chase the Circle Game
The goal of this game is to simply click on the circle as it moves around the screen randomly. Your score will increase every time you successfully click inside of a circle and if you miss the circle your score gets reset to 0. Every 10 levels the circle gets smaller and the game gets harder. See what level you can reach!

## Drawing the Ball
In order to draw the ball we first need to create three variables that represent the ball's x-position, y-position and the radius of the ball on the canvas. At the top of your file declare three variables.
```javascript
    let x;
    let y;
    let size = 300;
```

Now in the setup function we need to create a canvas and give those two variables initial values
```javascript
    function setup() {
        createCanvas(windowWidth, windowHeight);
        x = random(windowWidth);
        y = random(windowHeight);
    }
```

Here we have made a canvas that is as large as the screen and we have assigned a random value from the windowHeight and windowWidth for the x and y values of the circle. We are now ready to draw our circle. In the draw function add a circle
```javascript
    function draw() {
        background(0);
        circle(x, y, size);
    }
```

## Making the Circle Move
To make the circle move we need to generate new random values for the x and y position of the ball. Lets create a new function called **newCircle()** that will be responsible for doing that.
```javascript
    function newCircle() {
        x = random(windowWidth);
        y = random(windowHeight);
    }
```

Now anytime we call our **newCircle()** function the circle will move to a new random location on the canvas. To make this happen every few seconds or so we will add the following conditional statement to the draw function:
```javascript
    function draw() {
        background(0);
        circle(x, y, size);

        if (frameCount % 100 === 0) {
            newCircle();
        }
    }
```

This conditional will make a new circle every 100 frames which would move the circle about every 2 seconds.

