
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

// returns a random color in hex format
function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

appendGrid(generateGrid(16));

$('.box').hover(function setRandomBackground() {
  $(this).css('background', getRandomColor());
});
