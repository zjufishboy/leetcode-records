const simpleCompare = <T = number>(a: T, b: T) => {
  return a === b;
};
export const listCompare = <T = number>(
  res: T[],
  result: T[],
  compare: (a: T, b: T) => boolean = simpleCompare
): boolean => {
  if (res.length !== result.length) {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    if (!compare(res[i], result[i])) {
      return false;
    }
  }
  return true;
};

export const listCompareBy =
  <T = number>(compare: (a: T, b: T) => boolean = simpleCompare) =>
  (res: T[], result: T[]) => {
    return listCompare<T>(res, result, compare);
  };
