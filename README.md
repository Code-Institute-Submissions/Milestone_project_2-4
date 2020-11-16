[<img alt='Memo-flag logo' src="assets/images/logo.png" style="margin: 0;position:relative;left:-1%;width:150px;">](#)

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

## Demo
You can play this game by click
[here](https://longvn99.github.io/Milestone_project_2/)

![Design](https://github.com/LongVN99/Milestone_project_2/blob/5db7ba711bccb45e634c892d1cb12841b3fd987e/assets/mockups/Desktop.png)

## UX
To make the game simple for the user to understand. To give a full information necessaire to know how to play Memo-flag.

- ### User stories

* As a user, I want to know how to play this game. (instruction)
* As a user, I want to know how to play this game. (instruction)
* As a user, I want to view movies. (movies page)
* As a user, I want to know how I can contact. (contact page and footer)
* As a user, I want to report bugs. (contact page)
* As a user, I'm mostly busy and I want to find quick and preferable on my phone. ( responsive)

- ### Design


## Features

* Allow user to play the game on multiple device
* Start/Restart allow player to start the game (time starts coundown) or to retry when the game is in process
* Allow user to understand how to play (Instruction button) and how to obtain the higher score
* Time - A timer displaying the number of seconds that have elapsed. Run out of time mean player lose the game
* Score - score add according to time, the faster the player finds matched cards the more score player obtains
* User can report a problem to the game developper (report icon)

<a name="browsersuport"></a>
## Browser support

### The browser version that fully supports.

* Chrome *(36.0)*
* Edge *(10.0)*
* Firefox *(16.0)*
* Opera *(23.0)*
* Safari *(9.0)*

##Code

## Testing
All buttons function correctly. Start button to begin the game, if player didn't click this button an alert message will show up. Music and sound button able to switch ON/OFF, by default the music and sound is OFF. User is able to hear sound and music when it switches to ON. As a new user, I want to understand what does the button do and how to play the game. So, I create an Instruction button which allow user to understand how to play the game and the game features. A modal in which all necessaire content about the game will pop up when user clicks on this button. Here user is able to choose the content which he/she wants to learn more. These buttons have its own style to increase the look and feel of users.

As a user, I want the game look good when playing. So I add 3D effect to make the game better. However this property is only support by later browser version as shown in the [Browser support](#browsersuport).
As a user, I want game functions correctly without bug. To fix the bug when user click on the same card multiple time, I create a condition which return when it's the same card (define as firstPick).
In matched case, a bug will occur if user click on the flipped cards. Here, I disable the click method on these cards to prevent bug by using Jquery .off method (ex: $(firstPick).off("click")).


## Strategy

The goal in the design was to make it as easy as possible for non experience user to be able to play the game.

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
### Content

All instruction about the game were written by me.

### Media

All images were taken from google.

### Acknowledgements
* Game sound inspired from a YouTube video (https://www.youtube.com/watch?v=3uuQ3g92oPQ)
* Flip 3D effect inspired from a YouTube video (https://www.youtube.com/watch?v=ZniVgo8U7ek)
