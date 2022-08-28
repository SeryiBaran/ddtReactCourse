export const cs = (classNames: (boolean | string)[]) => {
  return classNames.filter(element => !!element).join(' ');
};
