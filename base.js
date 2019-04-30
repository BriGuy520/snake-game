const dropFirst = xs => xs.slice(1);
const dropLast = xs => xs.slice(0, xs.length - 1);
const id = x => x;
const k = x => y => x;
const map = f => xs => xs.map(f);