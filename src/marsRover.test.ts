import { createPlateau, rotateR, rotateL, moveForward, moveVehical } from "./marsRover";
describe("test createPlateau function", () => {
    it("should return an 4x4 array for createPlateau(3,3)", () => {
      expect(createPlateau(3, 3)).toStrictEqual({array : [
        {x: 0, y: 0} , {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3},
        {x: 1, y: 0} , {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3},
        {x: 2, y: 0} , {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3},
        {x: 3, y: 0} , {x: 3, y: 1}, {x: 3, y: 2}, {x: 3, y: 3},
      ]});
    });
});

describe("test rotate function", () => {
  it("rotate", () => {
    expect(rotateR({name: 'Rover', x: 3, y: 4, oriental: 'N'})).toStrictEqual({name: 'Rover', x: 3, y: 4, oriental: 'E'});
    expect(rotateL({name: 'Rover', x: 5, y: 2, oriental: 'S'})).toStrictEqual({name: 'Rover', x: 5, y: 2, oriental: 'E'});
  });
  it("move forward successfully", () => {
    expect(moveForward(createPlateau(6, 6),{name: 'Rover', x: 3, y: 4, oriental: 'N'})).toStrictEqual({name: 'Rover', x: 3, y: 5, oriental: 'N'});
  });
  it("move forward failed", () => {
    expect(moveForward(createPlateau(3, 3),{name: 'Rover', x: 3, y: 4, oriental: 'N'})).toStrictEqual({name: 'Rover', x: 3, y: 4, oriental: 'N'});
  });
});

describe("test full function", () => {
  it("move forward successfully", () => {
    expect(moveVehical(createPlateau(5, 5),{name: 'Rover', x: 1, y: 2, oriental: 'N'}, 'LMLMLMLMM')).toStrictEqual({name: 'Rover', x: 1, y: 3, oriental: 'N'});
    expect(moveVehical(createPlateau(5, 5),{name: 'Rover', x: 3, y: 3, oriental: 'E'}, 'MMRMMRMRRM')).toStrictEqual({name: 'Rover', x: 5, y: 1, oriental: 'E'});
  });
});

