game = new Game("0200020000000000");
game.initCells();
view = new GameView(game);

$(document).ready(function() {
  view.render();
  view.setKeyBindings();
});
