type Coord = {
	x: number;
	y: number;
};

type Plateau = {
	array: Array<Coord>;
};

const ORIENTAL = ['N', 'E', 'S', 'W'] as const;
type OrientalType = typeof ORIENTAL[number];

export function createPlateau(number1 : number, number2 : number) : Plateau {
    const plateau: Plateau = { array: [] };
    for (let i=0; i<number1; i++){
        for (let j=0; j<number2; j++){
            plateau.array.push({
                x: i,
                y: j,
            });
        }
    }
    console.log(plateau);
    return plateau;
}

export function setupRover (plateau : Plateau, number1 : number, number2 : number, oriental : OrientalType) {
    
}