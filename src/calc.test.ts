import { sum } from "./calc";
describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
      expect(sum(10, 5)).toBe(15);
    });
});