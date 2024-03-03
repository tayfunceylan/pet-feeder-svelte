
export const counter = createCounter();
export const counter2 = createCounter();

function createCounter() {
  let count = $state(0);
  console.log(count);
  return {
    get count() {
      return count;
    },
    increment: () => count++
  };
}
