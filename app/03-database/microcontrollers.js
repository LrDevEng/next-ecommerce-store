export const mcs = [
  { id: 1, name: 'Arduino Nano', price: 500 },
  { id: 2, name: 'Arduino Uno', price: 1000 },
  { id: 3, name: 'Arduino Due', price: 1200 },
  { id: 4, name: 'Arduino Mega', price: 400 },
];

export function getMcs() {
  return mcs;
}

export function getMc(id) {
  return mcs.find((mc) => mc.id === id);
}
