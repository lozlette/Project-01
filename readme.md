# General Assembly Project 1 : Simple front-end game

### Timeframe
9 days

## Technologies used

* JavaScript (ES6)
* HTML5 + HTML5 Audio
* CSS + CSS Animation
* GitHub

## Installation

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## My Game - Snakes and Ladders

![screenshot 2019-01-11 at 09 29 56](https://user-images.githubusercontent.com/7090684/51025343-a7b3fa80-1583-11e9-9aab-36675b676f2e.png)

You can find a hosted version here ----> [lozlette.github.io/Project-01](https://lozlette.github.io/Project-01)

### Game overview

Snakes and Ladders is based on the ancient Indian board game of the same name. The snakes and ladders of the board are connected to two squares. The aim of the game is to move your players piece from the bottom of the board to the top. If you land on a snake your piece will move to the bottom square of the snake, hindering you, but if you land on a ladder you can move your piece to the top square of the ladder, helping you. The first player to reach square 64 wins.

### Controls
- Start game: "Start" button
- Toggle mute: Speaker Icon

### Game Instructions

1. The game starts by clicking on the 'Play' button on the start screen.

![screenshot 2019-01-11 at 09 39 04](https://user-images.githubusercontent.com/7090684/51025781-d2528300-1584-11e9-87ca-9cf498e626cf.png)

2.  Once the game begins you will see the snakes and ladders board with the snakes and ladders placed on the board.

![screenshot 2019-01-11 at 09 43 07](https://user-images.githubusercontent.com/7090684/51025983-63295e80-1585-11e9-811a-c2c611a760b8.png)


3. To play, roll the dice by pressing the "Roll the Dice" button. This will move your players piece and the computer's piece to their next squares.

4. As you roll the dice, yours and the computers dice roll will be displayed at the top of the screen. The players pieces will appear on the board. Player 1 is white, and Player 2 (the computer) is green.

![screenshot 2019-01-11 at 09 47 00](https://user-images.githubusercontent.com/7090684/51026295-13976280-1586-11e9-86ee-7d615ff3d8f8.png)

5. If you land on a ladder, an announcement will flash up and the players piece is moved to the top square of the ladder after a short delay.

![screenshot 2019-01-11 at 09 51 31](https://user-images.githubusercontent.com/7090684/51026489-843e7f00-1586-11e9-9fab-0628d7aa5d5c.png)

6. If you land on a snake, an announcement will flash up and the players piece is moved to the bottom square of the snake after a short delay.

![screenshot 2019-01-11 at 09 54 32](https://user-images.githubusercontent.com/7090684/51026661-f0b97e00-1586-11e9-9a61-8a97520e988e.png)

7. Continue until the first player reaches 64 and wins the game.

![screenshot 2019-01-11 at 09 56 16](https://user-images.githubusercontent.com/7090684/51026749-2c544800-1587-11e9-9849-e8ee97ef5f03.png)

8. For a new game and game board, with new snake and ladder layout, press the 'New Game' button.

![screenshot 2019-01-11 at 09 59 20](https://user-images.githubusercontent.com/7090684/51026944-9a007400-1587-11e9-9ada-2ee823af0e04.png)

## Process

I started by creating the grid in JS, but then changed this to an HTML grid using flex-box, in order to add data-attributes (of numbers from 1-64) to each square of the grid div. I also added classes of snake or ladder to relevant squares to create the snakes and ladders on the board.

I then made a function to roll the dice, which randomly chooses a number between 1 and 6, and updated the player's position by adding on the dice roll. The players pieces were moved to the relevant new square by adding the classes of the players pieces to the squares with the relevant data-id.
![rolldicefunction](https://user-images.githubusercontent.com/7090684/55726267-46c38380-5a07-11e9-8026-575837379dc2.png)

Next I made the snake or ladder function to move the players piece to the top of a ladder or bottom of a snake. This function checked if the data-id matched the data-id of the top of the snake or bottom of a ladder. Once it found a match it would update the player position, and add this square's data-id number on to the next dice roll.

I then decided to wrap the snake or ladder function in a set timer, so that there would be a short delay before the player's piece moves from the top to the bottom of a snake, and the bottom to top of a ladder.
![settimeout](https://user-images.githubusercontent.com/7090684/55726141-0532d880-5a07-11e9-9cc7-053649389426.png)

Next I added in the logic to add in Player 2 (the computer) and added the snake or ladder, and winner alerts.

I refactored my game at this point and created an array of objects to contain the top and bottom values of each snake or ladder.
![Screenshot 2019-04-08 at 14 00 51](https://user-images.githubusercontent.com/7090684/55726011-c1d86a00-5a06-11e9-964b-1690fd3c2f5c.png)

As the game continued to develop I decided to add an extra feature of an option to choose a new game, with a new game board, with different layout of snakes and ladders. In order to do this I changed my grid setup back to JS. I added the data-id's to each square with a for loop, and then looped through each array of snakes and ladders to add the classes of snake or ladder to the grid squares.
![Screenshot 2019-04-08 at 13 57 55](https://user-images.githubusercontent.com/7090684/55725874-7e7dfb80-5a06-11e9-887b-cf302367e56c.png)

I then created a function to create the new game boards by randomly choosing one of 6 layouts (arrays) in the snake and ladder array of arrays. I refactored my functions to allow for the new game board layouts.

Lastly I made the game mobile responsive, and added styling and HTML5 Audio.

## Challenges

One challenge was changing the players position to reflect that they had just moved up a ladder or down a snake, and making the next roll of the dice take this new position into account.

Another challenge was refactoring to allow for the new game boards and making all existing logic work for the new game boards as well as the first one.

## Wins

Changing my grid to JS and creating the array of objects to hold the snake and ladder square data-id's really helped to refactor my code.

Writing the logic to generate new gameboards really opened up the game to new possibilities.
![function chooseboard](https://user-images.githubusercontent.com/7090684/55726429-af126500-5a07-11e9-9a1f-dfa7ebdce619.png)

## Future features

Changing the size of the boards, and adding more snakes into each new board would add levels to the game. This would also need a scoring function.

Animated game pieces.

I would also refactor my functions.
