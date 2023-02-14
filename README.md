# ts_mars_rover
The project is made of typescript with JavaScript. Enclosed herewith 1 UML diagram to declare the type of Plateau and Rover and the program flow.

Before starting the application, we have to prepare the input file input.txt beforehand.

Input file sample:
|------|
|*5 5*|
|*1 2 N*|
|*LMLMLMLMM*|
|*3 3 E*|
|*MMRMMRMRRM*|
|------|

The above first line is the upper right coordinate of Plateau.
The above second line is the initial position and orientation of the Rover.
The above third line is the movement instructions. L means rotate 90 degrees to left, R means rotate 90 degrees to right (it only shows at fifthl ine), and M means Rover move forward one step.

N.B. We assume if the Rover can't move forward with some step instructions, it will skip to next one.


Running the application by typing in

**npm start**



Performing the test case by typing in

**npm test**

## programs briefing
There are 2 programs ts file and 1 testing ts file.

main.ts is the main flow program and marsRover.ts is used to provide the Rover and the Plateau related data types and functions.

In main.ts, there is a function createPlateau() to create the Plateau composing of array of coordinates. Currently it creates a rectangle or square with the input parameters. In future, it can be modified if requirement needs to create any shapes. And the subsequent logic are not affected.

In marsRover.ts, there is Rover data type definition and the related functions. There also prepared "AnotherVehicle" data type for future use if any. The existing functions for Rover is ready to fit in new logic for "AnotherVehicle" if any.

