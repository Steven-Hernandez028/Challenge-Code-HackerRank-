import {  test } from "vitest";
import { plusMinus } from "./plusMinus";

test('1', () => { 
   expect(plusMinus([-4, 3, -9, 0, 4, 1])).toStrictEqual([3,2,1]);

 })
