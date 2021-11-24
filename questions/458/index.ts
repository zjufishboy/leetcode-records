/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
export const poorPigs = (buckets: number, minutesToDie: number, minutesToTest: number): number => {
  const n = Math.floor(minutesToTest / minutesToDie);
  const k = Math.ceil(Math.log(buckets) / Math.log(n + 1));
  return k;
};
