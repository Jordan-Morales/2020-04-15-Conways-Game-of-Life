// console.log('hello world');

// Any alive cell that is touching less than two alive neighbours dies.
// Any alive cell touching four or more alive neighbours dies.
// Any alive cell touching two or three alive neighbours does nothing.
// Any dead cell touching exactly three alive neighbours becomes alive.

// object world
// row loop x100
//   column loop x100


let world = []
for (let rows = 0; rows < 10; rows++) {
  const row = [];
  for (let cols = 0; cols < 10; cols++) {
    row.push(0);
  }
  world.push(row);
}

let tick = (world) => {
  // turn it all on
  const rules = [
    (row, col) => {
      const currState = world[row][col];
      const newState = 1;
      world[row][col] = newState;
    }
  ]
}


console.log(world)

tick(world)

console.log(world)
// world[0][5] = 1;
