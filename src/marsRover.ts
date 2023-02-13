//setup Coord for the elements of Plateau
type Coord = {
	x: number;
	y: number;
};

//setup Plateau
type Plateau = {
	array: Array<Coord>;
};

//setup Rover and the necessary elements
const ORIENTAL = ['N', 'E', 'S', 'W'] as const;
export type OrientalType = typeof ORIENTAL[number];

export type Rover = {
    x: number;
    y: number;
    oriental: OrientalType;
}

//setup the instruction elements
const MOVEMENT = ['L', 'R', 'M'] as const;
type MovementType = typeof MOVEMENT[number];

//setup the function to create Plateau
export function createPlateau(number1 : number, number2 : number) : Plateau {
    const plateau: Plateau = { array: [] };
    for (let i=0; i<=number1; i++){
        for (let j=0; j<=number2; j++){
            plateau.array.push({
                x: i,
                y: j,
            });
        }
    }
    return plateau;
}

//setup the function to check if a valid position in the Plateau
export function checkValidPos (plateau : Plateau, number1 : number, number2 : number) {
    if (plateau.array.filter(e => e.x === number1 && e.y === number2).length > 0)
        return true;
    else
        return false;
}

//setup the function to check if the string of movement instructions is valid
export function examMovement (instruction : string) {
    let valid = true;
    for (let i=0; i<instruction.length; i++){
        if (! MOVEMENT.some(item => item === instruction[i])) {
            valid = false;
            break;
        }
    }
    return valid;
}

//setup the function to rotate the orientation to left for the Rover
export function rotateL (rover : Rover) {
    //N -> W -> S -> E -> N
    if (rover.oriental === 'N') {
        rover.oriental = 'W';
    } else if (rover.oriental === 'W') {
        rover.oriental = 'S';
    } else if (rover.oriental === 'S') {
        rover.oriental = 'E';
    } else if (rover.oriental === 'E') {
        rover.oriental = 'N';
    } 
    return rover;
}

//setup the function to rotate the orientation to right for the Rover
export function rotateR (rover : Rover) {
    //N -> E -> S -> W -> N
    if (rover.oriental === 'N') {
        rover.oriental = 'E';
    } else if (rover.oriental === 'E') {
        rover.oriental = 'S';
    } else if (rover.oriental === 'S') {
        rover.oriental = 'W';
    } else if (rover.oriental === 'W') {
        rover.oriental = 'N';
    } 
    return rover;
}

//setup the function to move forward for the Rover
export function moveForward (plateau : Plateau, rover : Rover) {
    if (rover.oriental === 'N' && checkValidPos(plateau, rover.x, rover.y + 1)) {
        rover.y += 1;
    } else if (rover.oriental === 'E' && checkValidPos(plateau, rover.x + 1, rover.y)) {
        rover.x += 1;
    } else if (rover.oriental === 'S' && checkValidPos(plateau, rover.x, rover.y - 1)) {
        rover.y += -1;
    } else if (rover.oriental === 'W' && checkValidPos(plateau, rover.x - 1, rover.y)) {
        rover.x += -1;
    } 
    return rover;
}

//setup the function to move the Rover with the movement instructions
export function moveRover (plateau : Plateau, rover : Rover, instruction : string) {
    for (let i=0; i<instruction.length; i++){
        if (instruction[i] === 'L') {
            rover = rotateL(rover);
        } else if (instruction[i] === 'R') {
            rover = rotateR(rover);
        } else if (instruction[i] === 'M') {
            rover = moveForward(plateau, rover);
        }
    }
    return rover;
}