import { createPlateau } from "./Plateau";
describe("test createPlateau function", () => {
    it("should return an 3x3 array for createPlateau(3,3)", () => {
      expect(createPlateau(3, 3)).toStrictEqual({array : [
        {x : 0, y: 0} , {x : 0, y: 1}, {x : 0, y: 2},
        {x : 1, y: 0} , {x : 1, y: 1}, {x : 1, y: 2},
        {x : 2, y: 0} , {x : 2, y: 1}, {x : 2, y: 2},
      ]});
    });
});