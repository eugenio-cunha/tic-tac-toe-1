# tic-tac-toe

## Development Depedencies

- Node.js 12.18.4 +
  - cors

## Production Dependencies

- Node.js 12.18.4 +
  - express
  - uuid

## Get Started

```
Clone the repository: https://github.com/disilveira/tic-tac-toe
npm install
npm start
```

## Methods

### POST - /game

This call returns generated game id and choose randomly the first player.
Players: 'X' or 'O'

```json
{
  "id": "fbf7d720-df90-48c4-91f7-9462deafefb8",
  "firstPlayer": "X"
}
```

### POST - /game/{id}/movement

This call will make the player move

```json
{
  "id": "fbf7d720-df90-48c4-91f7-9462deafefb8",
  "player": "X",
  "position": {
    "x": 0,
    "y": 1
  }
}
```

## Cordinates

(x=0 y=2) | (x=1 y=2) | (x=2 y=2)
----------|-----------|----------
(x=0 y=1) | (x=1 y=1) | (x=2 y=1)
----------|-----------|----------
(x=0 y=0) | (x=1 y=0) | (x=2 y=0)