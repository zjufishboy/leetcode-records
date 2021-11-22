/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
export const wateringPlants = (plants: number[], capacity: number): number => {
  let currentWater = capacity;
  let count = 0;
  for (let i = 0; i < plants.length; i++) {
    count += 1;
    currentWater -= plants[i];
    if (i < plants.length - 1 && currentWater < plants[i + 1]) {
      // 水壶不够用了
      count += (i + 1) * 2;
      currentWater = capacity;
    }
    // console.log({ count });
  }
  return count;
};
