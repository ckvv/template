export function getRandom(min: number, max?: number) {
  return max !== undefined ? Math.random() * (max - min) + min : Math.random() * min;
}

export function getRandomInt(min: number, max?: number) {
  return Number.parseInt(`${getRandom(min, max)}`);
}
