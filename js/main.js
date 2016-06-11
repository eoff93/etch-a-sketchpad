
let gridSize = 64;
let boxSize = 640 / gridSize;

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

// set the dimensions of box and rows
function setBoxSize(size) {
  $('.box').height(size);
  $('.box').width(size);
  $('.row').height(size);
}

// append generated grid to container
function appendGrid(grid) {
  $('.container').append(grid);
}

// returns a random color in hex format
function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// outputs the starting grid
appendGrid(generateGrid(gridSize));
setBoxSize(boxSize);


// sets the background of a box to a random color on hover
$('.box').hover(function setRandomBackground() {
  $(this).css('background', getRandomColor());
});
