export const sanitizeInput = (input) => {
  return input.replace(/(<([^>]+)>)/g, "");
};
