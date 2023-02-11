type Coord = {
	x: number;
	y: number;
};

type Plateau = {
	array: Array<Coord>;
};

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