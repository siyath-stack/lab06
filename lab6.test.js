import { describe, it, expect } from "vitest";

import { problem1, problem2, problem3, problem4, problem5, problem6 } from "lab6.js";


describe('test of problem1 function in lab6', () => {
    it('when input is 1634, should return: true', () => {
        expect(problem1(1634)).toBe(true);
    })
})


describe('test of problem1 function in lab6', () => {
    it('when input is 154, should return: false', () => {
        expect(problem1(154)).toBe(false);
    })
})

describe('test of problem2 function in lab6', () => {
    it('when input is 28, should return: true', () => {
        expect(problem2(28)).toBe(true);
    })
})

describe('test of problem2 function in lab6', () => {
    it('when input is 8128, should return: true', () => {
        expect(problem2(8128)).toBe(true);
    })
})

describe('test of problem2 function in lab06', () => {
    it('when input is 8129, should return: false', () => {
        expect(problem2(8129)).toBe(false);
    })
})

describe('test of problem3 function in lab6', () => {
    it('when input is 1, should return: 5', () => {
        expect(problem3(1)).toBe(5);
    })
})

describe('test of problem3 function in lab6', () => {
    it('when input is 3, should return: 615', () => {
        expect(problem3(3)).toBe(615);
    })
})

describe('test of problem4 function in lab6', () => {
    it('when input is 2, should return: true', () => {
        expect(problem4(2)).toBe(true);
    })
})

describe('test of problem4 function in lab6', () => {
    it('when input is 1, should return: false', () => {
        expect(problem4(1)).toBe(false);
    })
})


describe('test of problem4 function in lab6', () => {
    it('when input is 3, should return: true', () => {
        expect(problem4(3)).toBe(true);
    })
})

describe('test of problem4 function in lab6', () => {
    it('when input is 325, should return: false', () => {
        expect(problem4(325)).toBe(false);
    })
})


describe('test of problem5 function in lab6', () => {
    it('when input is 500, should return: 86.25', () => {
        expect(problem5(500)).toBe(86.25);
    })
})

describe('test of problem5 function in lab6', () => {
    it('when input is 400, should return: 68.75', () => {
        expect(problem5(400)).toBe(68.75);
    })
})

describe('test of problem6 function in lab6', () => {
    it('when input is 3, should return: 2', () => {
        expect(problem6(3)).toBe(2);
    })
})

describe('test of problem6 function in lab6', () => {
    it('when input is 5, should return: 5', () => {
        expect(problem6(5)).toBe(5);
    })
})
