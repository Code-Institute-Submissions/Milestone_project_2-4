# Memo-flag

Enjoy memory game, so this game is the one you are looking for.

## What is Memo-flag?
Memo-flag is a memory card game with flags in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.

## How It Works
If you're unfamiliar with the game, the rules are very simple; flip over two hidden cards at a time to locate the ones that match!

The game board consists of 12 cards arranged randomly in a grid. The deck is made up of 6 different pairs of cards, each with different symbols on one side. Each turn:

* A player flips one card over to reveal its underlying flag
* The player then turns over a second card, trying to find the corresponding card with the same flag
* If the cards match, both cards stay flipped over with green border
* If the cards do not match, both cards are returned to their initial hidden state

The game ends once all cards have been correctly matched.

<a name="demo"></a>

## Demo

You can play this game right away by clicking
[here](https://longvn99.github.io/Milestone_project_2/)
![Design](https://github.com/LongVN99/Milestone_project_2/blob/c345ec40ec3578e829385678c8e1beb7010c48da/assets/mockups/Mockup.png)

## User Experience (UX)
To make the game simple for the user to understand and to give a full information necessaire to know how to play Memo-flag.

- ### User stories
    -   #### New Player Goals
        1. As a new player, I want to know how to play this game. (instruction)
        2. As a new player, I want to understand how does the score is calculated. (instruction)
        3. As a new player, I want to listen to music or turn the music off while playing. (music ON/OFF)
        4. As a new player, I want to here sound when I click on something such as cards and buttons.(sound ON/OFF)
        5. As a new player, I want to know when I win or lose the game. (alert message)
        6. As a new player, I want to here sound when I win or when I lose the game.(sound ON/OFF)

    -   #### Returning Player Goals.
        1. As a returning player, I want to report bug from the game to developer.
        2. As a returning player, I want to change different difficult level of the game.

    -   #### Frequent Player Goals
        1. As a frequent player, I want to play the game again when it's over. (button Re-Start)
        2. As a frequent player, I want play the game on multiple devices. (responsive)

-   ### Design
    -   #### Colour Scheme
        *   Main color used are shade of green, yellow and blue
    -   #### Typography
        *   I use Comic Sans MS with Sans Serif for all contents in this game.

## Features

* Allow user to play the game on multiple device
* Re-Start allow player to start the game (time starts coundown) or to retry when the game is over
* Allow user to understand how to play the game(Instruction button) and how does the score is calculated
* Time - A timer displaying the number of seconds that have elapsed. Run out of time mean player lose the game
* Score - score add according to time, the faster the player finds matched cards the more score player obtains

### Future features
1. Report button - Allow player to report bug from the game to developper
2. Game mode - Allow player to choose different difficult level of the game (add more cards)

<a name="browsersuport"></a>
## Browser support

-   ### The browser version that fully supports.
    * Chrome *(36.0)*
    * Edge *(10.0)*
    * Firefox *(16.0)*
    * Opera *(23.0)*
    * Safari *(9.0)*

##  Code
My modal is taken from this website. [W3school modal](https://www.w3schools.com/howto/howto_css_modals.asp)
I also inspired certain way to code in some YouTube videos as written in the [Acknowledgements](#Ack)

## Testing
-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/LongVN99/Milestone_project_2/blob/ca2cc0259581b4ebfdb98522c0dcd548c228f63b/assets/testing/W3C%20CSS%20Validation%20Memo-flag.png)

### Testing User Stories from User Experience (UX) Section
-   #### New Player Goals
    1. As a new player, I want to know how to play this game.
        * The Instruction button which allow user to understand how to play the game and the game features. A modal in which all necessaire content about how to play the game will pop up when user clicks on this button.

    2. As a new player, I want to understand how does the score is calculated. (instruction)


    3. As a new player, I want to listen to music or turn the music off while playing. (music ON/OFF)
        * A Music button is added to switch music ON/OFF

    4. As a new player, I want to here sound when I click on something such as cards and buttons.(sound ON/OFF)
        * A Sound button is added to switch music ON/OFF

    5. As a new player, I want to know when I win or lose the game. (alert message)
        * An alert message will pop up when the game over
        * If  the player win, the alert message will display that player win the game and the score.
        * If the player lose, the alert message will display that the game is over and ask player to click Re-Start button to play again.

    6. As a new player, I want to here sound when I win or when I lose the game.(sound ON/OFF)
        * Add sound when player win and a different sound when he/she lose the game.

-   #### Returning Player Goals.
    1. As a returning player, I want to report bug from the game to developer
        * A report button will be added to send a message to the game developer.
        * A modal will pop up when user click on this button, which demand user to fill necessary information such as email address.

    2. As a returning player, I want to change different difficult level of the game.
        * A Game Mode button will be added to change the game difficult, the harder the level the more cards will be added. (The time may be increased)

-   #### Frequent Player Goals
    1. As a frequent player, I want to play the game again when it's over. (button Re-Start)
        * Player can click on the Re-Start button to play the game again.

    2. As a frequent player, I want play the game on multiple devices. (responsive)
        * Each device have its own style which make the game responsive. So player can whether play on a mobile phone or a computer.
        * Click [here](#demo) to see how does the responsive look like.

### Further Testing
* As a user, I want the game look good when playing. So I add 3D effect to make the game better. However this property is only support by later browser version as shown in the [Browser support](#browsersuport).
* Every button has its own style to increase the look and feel of user.
* Start button to begin the game, if player didn't click this button an alert message will show up. In case the player doesn't pay attention where the start button is, this '!!' in red will be added next to the start button.
* As a user, I want game functions correctly without bug. To fix the bug when user click on the same card multiple time, I create a condition which return when it's the same card (define as firstPick).
In matched case, a bug will occur if user click on the flipped cards. Here, I disable the click method on these cards to prevent bug by using Jquery .off method.
* The start button is disable once the game begin to prevent bug

## Strategy

The goal in the design was to make it as easy as possible for non experience user to be able to play the game and most importantly is to enjoy playing this game.

## Technologies

* HTML - To create a basic site
* CSS - To create a nice style and to stand-out
* Javascript - To make the game interactive
* Jquery - To simplify the script
* Figma - To create mockup
* Git - Using Gitpod to edit html and css
* GitHub - To store the projects code after being pushed from Git


## Structure

The game menu is structured to get the right information as quickly as possible. The game itself is structured in hope of user feels ease while playing (He/She can see all the cards orderly arranged).

## Known Issues
Minor different when click button on Chrome and Firefox. In Chrome there is a black border appears on click.

## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you  can clone this repository directly into the editor of your choice by pasting the link into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

### `How to open this project`
1. Copy this link " https://longvn99.github.io/Milestone_project_2/ "
1. Paste and open on a browser

### `How to open this project localy`

1. Open Milestone_Project_1 on Github
1. Download as a ZIP file
1. Extract the folder
1. Open Memo-flag folder
1. Run index.html file on a web browser such as Firefox or Chrome

### `How to make a Local Clone`

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
1. Under the repository name, click "Clone or download".
1. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
1. Open Git Bash
1. Change the current working directory to the location where you want the cloned directory to be made.
1. Type `git clone`, and then paste the URL you copied in Step 3.
1. Type this then Press Enter. Your local clone will be created.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits
- ### Content

    All instruction about the game were written by me.

-   ### Media
    All images were taken from google.

<a name="Ack"></a>
-   ### Acknowledgements
    * Game sound inspired from a YouTube video (https://www.youtube.com/watch?v=3uuQ3g92oPQ)
    * Flip 3D effect inspired from a YouTube video (https://www.youtube.com/watch?v=ZniVgo8U7ek)