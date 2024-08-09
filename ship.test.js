import { Ship } from "./ship";

describe('Ship', () => {
    test('Ship is created with correct length and no hits', () => {
      const ship = new Ship(3);
      expect(ship.length).toBe(3);
      expect(ship.hits).toBe(0);
    });
  
    test('hit() increases the number of hits', () => {
      const ship = new Ship(3);
      ship.hit();
      expect(ship.hits).toBe(1);
    });
  
    test('isSunk() returns false when ship is not sunk', () => {
      const ship = new Ship(3);
      ship.hit();
      expect(ship.isSunk()).toBe(false);
    });
  
    test('isSunk() returns true when ship is sunk', () => {
      const ship = new Ship(3);
      ship.hit();
      ship.hit();
      ship.hit();
      expect(ship.isSunk()).toBe(true);
    });
  });