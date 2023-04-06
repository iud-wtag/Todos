export const debounce = (func, delay = 500) => {
  let timeoutId;
  return function (...args) {
    timeoutId && clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
