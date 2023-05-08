# Jeopardy Game

This is a simple Jeopardy game built using jQuery and AJAX, which retrieves categories and clues from the jService API.

## Getting Started

1. Clone the project on your local machine.
2. Open `index.html` in your browser to play the game.

## Game Rules

1. The game board is 6 categories across, 5 questions down, displayed in a table.
2. Above the board is a header row with the name of each category.
3. At the start of the game, 6 categories are randomly picked from the jService API. For each category, 5 random questions are selected.
4. Initially, the board shows `?` on each spot.
5. When a user clicks on a clue `?`, it replaces that with the question text.
6. When a user clicks on a visible question on the board, it changes to the answer. If a user clicks on a visible answer, nothing happens.
7. When a user clicks the “Restart” button at the bottom of the page, it loads new categories and questions.

## Functionality

The game is built using the following functions:

1. `setup` function: This function initializes the game board by fetching categories and clues using AJAX.
2. `createGameBoard` function: This function creates the game board and populates it with categories and clues.
3. `getRandomCategories` function: This function randomly selects 6 categories from the jService API.
4. `getRandomClues` function: This function selects 5 random clues for each category.
5. `showQuestion` function: This function reveals the question text when the user clicks on a clue `?`.
6. `showAnswer` function: This function reveals the answer text when the user clicks on a question.
7. `restartGame` function: This function restarts the game by fetching new categories and clues.

## Built With

* [jQuery](https://jquery.com/) - The JavaScript library used.
* [jService API](http://jservice.io/) - The API used to retrieve categories and clues.


