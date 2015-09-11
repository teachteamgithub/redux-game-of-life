import range from 'prelude-es6/lib/List/range';
import curry from 'prelude-es6/lib/Func/curry';

export const makeGrid = curry((cell, size) => {
  const r = range(size);
  return r.map((y) => r.map((x) => cell(y, x)));
});

export const makeBlankGrid = makeGrid(() => 0);