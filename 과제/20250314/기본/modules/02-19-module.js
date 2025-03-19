// let base = 100;
// export const add = (x) => base + x;
// export const multiply = (x) => base * x;

let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
const getBase = () => base;

export { add, multiply };
export default { getBase };
