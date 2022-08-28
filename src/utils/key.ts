export const generateKey = (prefix?: string) => {
  return `${prefix}_${new Date().getTime()}_${Math.random()}`;
};
