export const debounce = (func, delay = 1000) => {
  let timeoutId;
  return function (...args) {
    timeoutId && clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
