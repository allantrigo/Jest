export function add(a: number, b: number): number {
  return a + b;
}

export function sub(a: number, b: number): number {
  return a - b;
}

export function mult(a: number, b: number): number {
  return a * b;
}

export function div(a: number, b: number): number {
  if (b == 0) throw new Error("Impossible to divide by 0")
  return a / b;
}

export function promiseAfter(x: number, timeout: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, timeout * 1000);
  });
}