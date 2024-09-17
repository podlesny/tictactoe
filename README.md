# Tic-tac-toe

This is a fullstack Tic-Tac-Toe game where a user can play against the computer.

The front end is built with React and TypeScript, styled using Chakra UI, while the back end is built with Node.js and Express.

The computer makes random moves, and the game detects the winner (or a draw).

The game board is responsive and supports highlighting the winning combination.

## Tech Stack

* Frontend: React, TypeScript, Chakra UI
* Backend: Node.js, Express, TypeScript
* API Client: Axios

## Installation and Setup
### Install dependencies
```bash
cd frontend
npm install
```
```bash
cd backend
npm install
```
### Set up environment variables
You can copy the ones from .env.example to .env

### Run the Application
In the backend directory, start the backend server
```bash
npm run dev
```
The backend will run on port you provided in .env or 8000 if empty

In the frontend directory, start the frontend React app
```bash
npm run start
```
The frontend will run on 3000 port

### Play the game

* Open http://localhost:3000 in your browser
* Play Tic-Tac-Toe against the computer.
* The game will highlight the winning combination when someone wins!
