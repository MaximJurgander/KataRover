// Rover object goes here:
let rover = {
  direction: 'N',
  position: {
    x: 0,
    y: 0,
  },
  travelLog: [],
};

//Rover turning left
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log('Rover is now facing West!');
      break;
    case 'W':
      rover.direction = 'S';
      console.log('Rover is now facing South!');
      break;
    case 'S':
      rover.direction = 'E';
      console.log('Rover is now facing East!');
      break;
    case 'E':
      rover.direction = 'N';
      console.log('Rover is now facing North!');
      break;
  }
}

// Rover turning right
function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log('Rover is now facing East!');
      break;
    case 'W':
      rover.direction = 'N';
      console.log('Rover is now facing North!');
      break;
    case 'S':
      rover.direction = 'W';
      console.log('Rover is now facing West!');
      break;
    case 'E':
      rover.direction = 'S';
      console.log('Rover is now facing South!');
      break;
  }
}

// Rover moving forward
function moveForward(rover) {
  console.log('Rover moving forward!');
  switch (rover.direction) {
    case 'N':
      rover.position.y++;
      break;
    case 'E':
      rover.position.x++;
      break;
    case 'S':
      rover.position.y--;
      break;
    case 'W':
      rover.position.x--;
      break;
  }
  let forwardLog = {
    x: rover.position.x,
    y: rover.position.y,
  };
  rover.travelLog.push(forwardLog);
}

//Rover moving backwards
function moveBackward(rover) {
  console.log('Rover moving backward!');
  switch (rover.direction) {
    case 'N':
      rover.position.y--;
      break;
    case 'E':
      rover.position.x--;
      break;
    case 'S':
      rover.position.y++;
      break;
    case 'W':
      rover.position.x--;
      break;
  }
  let logBackward = {
    x: rover.position.x,
    y: rover.position.y,
  };
  rover.travelLog.push(logBackward);
}

//Input Validation
let navigations = ['f', 'b', 'r', 'l'];

function validateInput(input) {
  let filtered = [...input].filter((x) => navigations.includes(x)).join('');
  return filtered;
}

// Commands and directions
function commands(input) {
  for (let i = 0; i < input.length; i++) {
    let order = input[i];
    switch (order) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default:
        validateInput(input);
        console.log('Detected invalid inputs');
    }
  }
}

commands('rfaa');
console.log(rover.position);
