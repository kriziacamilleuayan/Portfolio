export const getNumYears = () => {
  const currYear = new Date().getFullYear();
  const startYear = 2016;

  return currYear - startYear;
};
