# Tic-Tac-Toe Game

A modern, interactive Tic-Tac-Toe game built with React. Play against a friend in this classic strategy game with a clean, user-friendly interface.

## Live Site
https://riiach.github.io/Tic-Tac-Toe-Game/

## Features

- **Two-Player Gameplay**: Play with a friend taking turns as X and O
- **Winner Detection**: Automatically detects winning combinations (rows, columns, diagonals)
- **Draw Detection**: Recognizes when the game ends in a draw
- **Game Status Display**: Real-time display of the current player and game result
- **Reset Button**: Easily restart the game at any time
- **Responsive Design**: Clean, responsive UI that works on different screen sizes

## How to Play

1. Open `index.html` in your web browser
2. Player X goes first by clicking any empty square
3. Players alternate turns clicking on empty squares
4. First player to get three in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled without a winner, the game is a draw
6. Click the **Reset** button to start a new game

## Project Structure

```
├── index.html      # Main HTML file with React setup
├── index.jsx       # React Board component with game logic
├── styles.css      # Game styling and grid layout
└── README.md       # This file
```

## Technologies Used

- **React 18**: UI library for building interactive components
- **JavaScript (JSX)**: Game logic and state management
- **CSS Grid**: Responsive board layout
- **Babel**: JSX transformation and module support

## Installation & Running

### Option 1: Direct Browser
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
For better development experience, serve files using a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server

# Using Node.js with live-server
npx live-server
```

Then open `http://localhost:8000` (or the port shown) in your browser.

## Game Logic

### Winner Calculation
The game checks all 8 possible winning combinations:
- 3 horizontal lines: [0,1,2], [3,4,5], [6,7,8]
- 3 vertical lines: [0,3,6], [1,4,7], [2,5,8]
- 2 diagonal lines: [0,4,8], [2,4,6]

### Game State Management
- `squares`: Array of 9 values representing the board state
- `player`: Current player ("X" or "O")
- `winner`: Detected winner or null
- `isDraw`: Boolean indicating if game is a draw

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- React 18+
- CSS Grid
- HTML5

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## License

This project is open source and available under the MIT License.
