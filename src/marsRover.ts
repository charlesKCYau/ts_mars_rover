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
    name: string;
    x: number;
    y: number;
    oriental: OrientalType;
}

export type AnotherVehicle = {
    name: string;
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

function isRover(vehicle : Rover | AnotherVehicle): vehicle is Rover {
    return (vehicle as Rover).name === 'Rover';
}

//setup the function to rotate the orientation to left for the Rover
export function rotateL (vehicle : Rover | AnotherVehicle) {
    //N -> W -> S -> E -> N
    if (isRover(vehicle)) {
        if (vehicle.oriental === 'N') {
            vehicle.oriental = 'W';
        } else if (vehicle.oriental === 'W') {
            vehicle.oriental = 'S';
        } else if (vehicle.oriental === 'S') {
            vehicle.oriental = 'E';
        } else if (vehicle.oriental === 'E') {
            vehicle.oriental = 'N';
        } 
    }
    
    return vehicle;
}

//setup the function to rotate the orientation to right for the Rover
export function rotateR (vehicle : Rover | AnotherVehicle) {
    //N -> E -> S -> W -> N
    if (isRover(vehicle)) {
        if (vehicle.oriental === 'N') {
            vehicle.oriental = 'E';
        } else if (vehicle.oriental === 'E') {
            vehicle.oriental = 'S';
        } else if (vehicle.oriental === 'S') {
            vehicle.oriental = 'W';
        } else if (vehicle.oriental === 'W') {
            vehicle.oriental = 'N';
        }
    }

    return vehicle;
}

//setup the function to move forward for the Rover
export function moveForward (plateau : Plateau, vehicle : Rover | AnotherVehicle) {
    if (isRover(vehicle)) {
        if (vehicle.oriental === 'N' && checkValidPos(plateau, vehicle.x, vehicle.y + 1)) {
            vehicle.y += 1;
        } else if (vehicle.oriental === 'E' && checkValidPos(plateau, vehicle.x + 1, vehicle.y)) {
            vehicle.x += 1;
        } else if (vehicle.oriental === 'S' && checkValidPos(plateau, vehicle.x, vehicle.y - 1)) {
            vehicle.y += -1;
        } else if (vehicle.oriental === 'W' && checkValidPos(plateau, vehicle.x - 1, vehicle.y)) {
            vehicle.x += -1;
        } 
    }

    return vehicle;
}

//setup the function to move the Rover with the movement instructions
export function moveVehical (plateau : Plateau, vehicle : Rover | AnotherVehicle, instruction : string) {
    if (isRover(vehicle)) {
        for (let i=0; i<instruction.length; i++){
            if (instruction[i] === 'L') {
                vehicle = rotateL(vehicle);
            } else if (instruction[i] === 'R') {
                vehicle = rotateR(vehicle);
            } else if (instruction[i] === 'M') {
                vehicle = moveForward(plateau, vehicle);
            }
        }
    }
    
    return vehicle;
}