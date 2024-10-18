'use client';

import { useCallback, useEffect, useState } from 'react';
import { useKeyPress } from '../../hooks/useKeyPress';
import styles from './Snake.module.css';

enum Direction {
  up,
  down,
  left,
  right,
}

enum GameState {
  idle,
  gameOver,
  gameOverWithHighscore,
  running,
}

type Coordinate = {
  x: number;
  y: number;
};

const tileState = {
  blank: 'blank',
  food: 'food',
  snake: 'snake',
};

const snakeStartingPosition = [{ x: 10, y: 10 }];
const initialInterval = 250;

export default function Snake() {
  const gridSize = 20;
  const [snake, setSnake] = useState<Coordinate[]>(snakeStartingPosition);
  const [direction, setDirection] = useState<Direction>(Direction.right);
  const [food, setFood] = useState<Coordinate>({ x: 5, y: 5 });
  const [player, setPlayer] = useState('');
  const [gameInterval, setGameInterval] = useState(initialInterval);
  const [gameState, setGameState] = useState<GameState>(GameState.idle);

  // const playground = Array(gridSize)
  //   .fill('')
  //   .map(() => Array(gridSize).fill('') as string[]);

  const playground = [];
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(`idx-${i}-${j}`);
    }
    playground.push(row);
  }

  // Custom hooks to manage key events
  useKeyPress(() => {
    setDirection(Direction.up);
  }, ['KeyW', 'ArrowUp']);
  useKeyPress(() => {
    setDirection(Direction.down);
  }, ['KeyS', 'ArrowDown']);
  useKeyPress(() => {
    setDirection(Direction.left);
  }, ['KeyA', 'ArrowLeft']);
  useKeyPress(() => {
    setDirection(Direction.right);
  }, ['KeyD', 'ArrowRight']);
  useKeyPress(() => {
    startGame();
  }, ['Enter']);

  // Start game
  function startGame() {
    if (player.length > 0) {
      if (gameState != GameState.running) {
        setGameState(GameState.running);
      }
    } else {
      alert('Please enter your name to start playing.');
    }
  }

  // Generate random food coordinate
  const randomFood = useCallback(() => {
    const x = Math.floor(Math.random() * (gridSize - 1));
    const y = Math.floor(Math.random() * (gridSize - 1));

    const isOnSnake = snake.some((value) => value.x === x && value.y === y);

    if (isOnSnake) {
      return randomFood();
    } else {
      return { x: x, y: y };
    }
  }, [snake]);

  // Reduce game interval every time snake eats food
  const updateGameInterval = useCallback(() => {
    if (gameInterval > 200) {
      setGameInterval(gameInterval - 10);
    } else if (gameInterval > 150) {
      setGameInterval(gameInterval - 5);
    } else if (gameInterval > 100) {
      setGameInterval(gameInterval - 2);
    } else if (gameInterval > 50) {
      setGameInterval(gameInterval - 1);
    }
  }, [gameInterval]);

  // Reset game
  const resetGame = useCallback(async () => {
    setGameState(GameState.gameOver);
    const response = await fetch('/api/snake-highscore', {
      method: 'PUT',
      body: JSON.stringify({
        name: player,
        score: snake.length,
      }),
      headers: {
        'Content-Type': 'applicaton/json',
      },
    });

    if (response.ok) {
      const responseBody = await response.json();
      if (responseBody.success) {
        setGameState(GameState.gameOverWithHighscore);
      }
    }

    setSnake(snakeStartingPosition);
    setDirection(Direction.right);
    setFood(randomFood());
    setGameInterval(initialInterval);
  }, [randomFood]);

  // Check for collision
  const checkCollision = useCallback(() => {
    const head = snake[0]!;

    // Check if snake hit playground boundaries
    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
      resetGame();
    }

    // Check if snake hit itself
    const snakeCopy = [...snake];
    snakeCopy.shift();
    if (snakeCopy.some((value) => value.x === head.x && value.y === head.y)) {
      resetGame();
    }
  }, [snake, resetGame]);

  // Move snake into current direction by one step
  const move = useCallback(() => {
    const snakeCopy = [...snake];
    const head = { ...snakeCopy[0]! };
    switch (direction) {
      case Direction.up: {
        head.y--;
        break;
      }
      case Direction.down: {
        head.y++;
        break;
      }
      case Direction.left: {
        head.x--;
        break;
      }
      default: {
        head.x++;
        break;
      }
    }

    snakeCopy.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(randomFood());
      updateGameInterval();
    } else {
      snakeCopy.pop();
    }
    setSnake(snakeCopy);
  }, [direction, snake, food, randomFood, updateGameInterval]);

  // Game loop
  useEffect(() => {
    if (gameState === GameState.running) {
      const interval = setInterval(() => {
        move();
        checkCollision();
      }, gameInterval);
      return () => clearInterval(interval);
    }
  }, [gameState, snake, move, checkCollision, gameInterval]);

  function deriveTileState(coordinate: Coordinate) {
    // Check if tile is part of snake
    const isSnake = snake.some(
      (value) => value.x === coordinate.x && value.y === coordinate.y,
    );
    if (isSnake) {
      return tileState.snake;
    }

    // Check if tile is food
    if (food.x === coordinate.x && food.y === coordinate.y) {
      return tileState.food;
    }

    // Tile is blank when it is neither snake nor food
    return tileState.blank;
  }

  return (
    <div>
      <p className={styles.instructions}>
        Play the all-time mobile classic and break the Custom ARCADE high score.
      </p>
      <p className={styles.instructions}>
        Enter your name and hit the 'ENTER' key to start the game.
      </p>
      <p className={styles.instructions}>
        Use the 'W', 'A', 'S', 'D' or the arrow keys to control the snake.
      </p>
      <div className={styles.gameInfo}>
        <label htmlFor="name">GAMER Name:</label>
        <input
          id="name"
          disabled={gameState === GameState.running}
          value={player}
          max={100}
          onChange={(event) => setPlayer(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.currentTarget.blur();
            }
          }}
        />

        <span className={styles.currentScore}>
          Current score: {snake.length}
        </span>
      </div>

      <div className={styles.playground}>
        {gameState === GameState.running &&
          playground.map((row, rowIdx) => {
            return (
              <div className={styles.row} key={`row-${row[0]}`}>
                {row.map((col, colIdx) => {
                  const state = deriveTileState({ x: colIdx, y: rowIdx });
                  return (
                    <div
                      className={`${styles.tile} ${state === tileState.snake && styles.snake} ${state === tileState.food && styles.food}`}
                      key={`tile-${col}`}
                    />
                  );
                })}
              </div>
            );
          })}
        {gameState === GameState.idle && (
          <div className={styles.idle}>
            <div>Enter Your Gamer Name</div>
            <div>&</div>
            <div>Hit 'Enter' To Start The Game</div>
          </div>
        )}
        {gameState === GameState.gameOver && (
          <div className={styles.gameOver}>
            <div>Game Over</div>
            <div>-</div>
            <div>Hit 'Enter' To Start The Game</div>
          </div>
        )}
        {gameState === GameState.gameOverWithHighscore && (
          <div className={styles.gameOverWithHighscore}>
            <div>Game Over</div>
            <div>-</div>
            <div>Congratulations! You Entered The Leaderboard.</div>
            <div>-</div>
            <div>Hit 'Enter' To Start The Game</div>
          </div>
        )}
      </div>
    </div>
  );
}
