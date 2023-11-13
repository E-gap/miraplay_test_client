export const sortOrder = (characteristics, sort) => {
  if (typeof characteristics[0] === 'number' && sort === 'down') {
    return (a, b) => b - a;
  } else if (typeof characteristics[0] === 'number' && sort === 'up') {
    return (a, b) => a - b;
  } else if (typeof characteristics[0] === 'string' && sort === 'up') {
    return (a, b) => a.localeCompare(b);
  } else if (typeof characteristics[0] === 'string' && sort === 'down') {
    return (a, b) => b.localeCompare(a);
  }
};
