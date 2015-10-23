game = new Game("0202020202020202");
game.initCells();
view = new GameView(game);

$(document).ready(function() {
  view.render();
  view.setKeyBindings();
});
