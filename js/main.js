
// generate a grid of boxes based on size entered
function generateGrid(size) {
  let grid = '';
  for (let i = 0; i < size; i++) {
    grid += '<section class="row">';

    for (let j = 0; j < size; j++) {
      grid += '<div class="box"></div>';
    }
    grid += '</section>';
  }
  return grid;
}

// append generated grid to container
function appendGrid(grid) {
  $('.container').append(grid);
}

appendGrid(generateGrid(16));
