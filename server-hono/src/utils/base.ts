export function getRandomNum(max = 1, min = 0, digits = 4) {
  return Number((min + Math.random() * (max - min)).toFixed(digits));
}

export function getRandomStr(length: number, dictionary = '0123456789abcdefghijklmnopqrstuvwxyz') {
  let randomStr = '';
  for (let index = 0; index < length; index++) {
    randomStr += dictionary[getRandomNum(dictionary.length - 1, 0, 0)];
  }
  return randomStr;
}

export async function toHash(data: string) {
  const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}
