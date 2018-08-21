# This is the backend part of the Pokerkit application
There's a road map I'll upload soon to the app.

## Where's the frontend part of Pokerkit?
The frontend part is at it's very early stages, I'll upload it once it will be able to connect to the backend.

## What is Pockerkit?
Pokerkit is a simple way to replace your poker deck with a virtual one, what if you realize you're missing one card in the deck and you want to play with your friends some Texas hold'em, this is where Pokerkit comes into play, you'll be able to use the virtual cards just like you'd used in real life.

## How will it work? (it's under development)
- First thing you should know is, this project is under development and is not working yet, I'll try my best to have an Alpha version up and running soon, if you are a javascript developer, feel free to contribute.
- Essetially it uses socket.io under the hood, once you go into the main page, a room will be created for you and you'll be getting a QR code for your friends to join.
- Once all your friends joins in, a dealer must be set, everyone will have a "Be a dealer", whoever pushes this button becomes the dealer.
	- the dealer can shuffle the deck as many times he wishes.
	- the dealer can deal Texas holdem hands to his friends with a single push of a button
	- the dealer can deal a Flop (it will automatically burn a card) with a button
	- the dealer can than deal the Turn (burns a card)
	- Finally the dealer can deal the River (burns a card)
	- at any point the dealer can recall all cards back to the deck.
- Once a first round is complete, the application will recogize the order of the players and will know who's the next dealer and who are the Big / Small blinds.
 
 ## Technology stack
  - Typescript
  - Socket.io
  - Node.js