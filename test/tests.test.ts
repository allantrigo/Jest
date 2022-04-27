import { add, sub, mult, div, promiseAfter } from "../src/calculator";

test("Primeiro Teste", () => {
  expect(add(1, 1)).toBe(2)
})

describe("Verdades", () => {
  it("Teste de Verdadeiro", () => {
    const truth = true;
    expect(truth).toBeDefined()
    expect(truth).toBeTruthy()
  })

  it("Teste de Falso", () => {
    const truth = false;
    expect(truth).not.toBeTruthy()
    expect(truth).toBeFalsy()
  })

  it("Teste de Undefined", () => {
    const truth = undefined
    expect(truth).toBeUndefined()
    expect(truth).not.toBeNull()
  })

  it("Teste de Verdade", () => {
    const truth = 1
    expect(truth).toBeTruthy()
    const falsity = 0
    expect(falsity).toBeFalsy()
    expect(undefined).toBeFalsy()
  })
});

describe("Números", () => {
  it("Teste Maior Que", () => {
    const result = add(1, 2)
    expect(result).toBeGreaterThan(1)
    expect(result).toBe(3)
  })

  it("Teste Menor Que", () => {
    const result = div(4, 2)
    expect(result).toBeLessThan(4)
    expect(result).toBe(2)
  })

  it("Teste Maior Igual Que", () => {
    const result = mult(2, 3)
    expect(result).toBeGreaterThanOrEqual(6)
    expect(result).toEqual(6)
  })

  it("Teste Menor Igual Que", () => {
    const result = sub(4, 2)
    expect(result).toBeLessThanOrEqual(2)
    expect(result).not.toEqual(4)
  })
});

describe("Strings", () => {
  it("Regex", () => {
    const string = "Regex"
    const string2 = "Match"
    expect(string).toMatch(new RegExp("ege"))
    expect(string2).not.toMatch(new RegExp("ege"))
  })

  it("Contains", () => {
    const string = "O gato roeu a roupa do rei de Roma"
    expect(string).toContain("roeu")
  })

  it("Size", () => {
    const string = "O gato roeu a roupa do rei de Roma"
    expect(string).toHaveLength(34)
    expect(string.length).toBe(34)
  })
});

describe("Arrays", () => {
  let array: number[] = []

  beforeEach(() => {
    array = [1, 2, 3, 4]
  })

  it("Contains", () => {
    expect(array).toContain(1)
    array.pop()
    expect(array).not.toContain(4)
  })

  it("Size", () => {
    expect(array).toHaveLength(4)
    expect(array.length).toBe(4)
  })
});

describe("Assíncronas", () => {
  it("Promise", () => {
    return promiseAfter(2, 1).then(number => {
      expect(number).toBe(2)
    })
  })

  it("Await/Async", async () => {
    const number = await promiseAfter(2, 1);
    expect(number).toBe(2);
  })
});