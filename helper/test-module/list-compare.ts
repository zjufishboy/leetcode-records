export const listCompare = <T = number>(res: T[], result: T[]): boolean => {
  if (res.length !== result.length) {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== res[i]) {
      return false;
    }
  }
  return true;
};
