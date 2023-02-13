import { createPlateau, checkValidPos, Rover, examMovement, OrientalType, moveRover } from "./marsRover";

// base on the "zero" line to set up Plateau, eg. 5 5
// and setup a plateau = createPlateau (5, 5);

const fs = require("fs");
const array: string[] = fs.readFileSync('input.txt', 'utf8').toString().split('\n');
const coord : string[] = array[0].split(" ");
const plateau = createPlateau(Number.parseInt(coord[0]), Number.parseInt(coord[1]));

for (let i=1; i<array.length; i=i+2) {

    // base on the "first" line to set up the coord and orientation of rover, eg. 1 2 N, 3 3 E
    // checkif the position of the plateau is available for the rover, else prompt error

    const rover1 : string[] = array[i].split(" ");
    if (checkValidPos(plateau, Number.parseInt(rover1[0]), Number.parseInt(rover1[1]))) {

        // setup a Rover e.g. with setupRover (plateau, 1, 2, N)

        const someOriental: OrientalType = rover1[2] as OrientalType;
        let rover : Rover = {x: Number.parseInt(rover1[0]), y: Number.parseInt(rover1[1]), oriental: someOriental};
    
        // base on "second" line the movement to move the rover, eg. LMLMLMLMM, MMRMMRMRRM
        // anticipate if the movement is valid. If so, move it, else, skip it.
        // output the final position, eg. 1 3 N, 5 1 E

        const instruction = array[i+1];
        if (examMovement(instruction)) {
            rover = moveRover(plateau, rover, instruction);
            console.log(`${rover.x} ${rover.y} ${rover.oriental}`);
        } else {
            console.log("invalid instruction!!!");
        }
    } else {
        console.log("invalid position");
    }    
}
