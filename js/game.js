var Cell = function(x,y,val){
  this.merged = false;
  this.xPos = x;
  this.yPos = y;
  this.value = val;
};

var Game = function(string) {
  this.string = string || "";
  this.row_one = this.string.substring(0,4).split('');
  this.row_two = this.string.substring(4,8).split('');
  this.row_three = this.string.substring(8,12).split('');
  this.row_four = this.string.substring(12,16).split('');
  this.board = [this.row_one,this.row_two,this.row_three,this.row_four];
  this.initCells = function(){
    var rowCount = 0;
    var colCount = 0;
    this.cells = this.board.map(function(array){
      var row = array.map(function(element){
        var cell = new Cell(rowCount,colCount,element);
        if (colCount == 3) {
          colCount = 0;
        }
        else {
          colCount += 1;
        }
        return cell;
      });
      rowCount += 1;
      return row;
    });
    return this.cells;
  };
  this.empty = function(){
    if (this.value === "0") {
      return true;
    }
    else {
      return false;
    }
  };
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var GameView = function(game){
  this.game = game;
};

GameView.prototype = {
  render: function(){
    for (var x = 1; x < 5; x++) {
      for (var y = 1; y < 5; y++){
        $('#row' + x + ' > div:nth-child(' + y + ')').html(this.game.cells[x-1][y-1].value);
        if (this.game.cells[x-1][y-1].value == "2"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#EEE4DA");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#BBADA0");
        }
        else if (this.game.cells[x-1][y-1].value == "4"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#EDE0C8");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
        }
        else if (this.game.cells[x-1][y-1].value == "8"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#F2B179");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
        }
        else if (this.game.cells[x-1][y-1].value == "16"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#F59563");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
        }
        else if (this.game.cells[x-1][y-1].value == "32"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#F67C5F");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
        }
        else if (this.game.cells[x-1][y-1].value == "64"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#f65e3b");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
        }
        else if (this.game.cells[x-1][y-1].value == "128"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#edcc61");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("box-shadow", "0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286)");
        }
        else if (this.game.cells[x-1][y-1].value == "256"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#edcc61");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("box-shadow", "0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286)");
        }
        else if (this.game.cells[x-1][y-1].value == "512"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#edc850");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("box-shadow", "0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286)");
        }
        else if (this.game.cells[x-1][y-1].value == "1024"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#edc53f");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("box-shadow", "0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286)");
        }
        else if (this.game.cells[x-1][y-1].value == "2048"){
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#edc22e");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#f9f6f2");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("box-shadow", "0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286)");
        }
        else {
          $('#row' + x + ' > div:nth-child(' + y + ')').css("background-color", "#CDC1B4");
          $('#row' + x + ' > div:nth-child(' + y + ')').css("color", "#CDC1B4");
          $('#row' + x + ' > div:nth-child(' + y + ')').html("-");
        }
      }
    }
  },

  setKeyBindings: function(){
    Mousetrap.bind('up', function(){
      var preString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          preString += cell.value.toString();
        });
      });
      this.onUp();
      var postString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          postString += cell.value.toString();
        });
      });
      if (preString != postString){
        this.spawnBlock();
      }
      this.render();
    }.bind(this));
    Mousetrap.bind('down', function(){
      var preString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          preString += cell.value.toString();
        });
      });
      this.onDown();
      var postString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          postString += cell.value.toString();
        });
      });
      if (preString != postString){
        this.spawnBlock();
      }
      this.render();
    }.bind(this));
    Mousetrap.bind('right', function(){
      var preString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          preString += cell.value.toString();
        });
      });
      this.onRight();
      var postString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          postString += cell.value.toString();
        });
      });
      if (preString != postString){
        this.spawnBlock();
      }
      this.render();
    }.bind(this));
    Mousetrap.bind('left', function(){
      var preString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          preString += cell.value.toString();
        });
      });
      this.onLeft();
      var postString = "";
      this.game.cells.forEach(function(row){
        row_values = row.forEach(function(cell){
          postString += cell.value.toString();
        });
      });
      if (preString != postString){
        this.spawnBlock();
      }
      this.render();
    }.bind(this));
  },

  onUp: function(){
    this.upFirstLoop();
  },

  upFirstLoop: function(upSecondLoop,resetMerged) {
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        var cell = this.game.cells[x][y];
        var firstCount = this.checkUpCount(cell);
        this.moveUp(cell,firstCount);
        this.checkAbove(cell);
      }
    }
    this.upSecondLoop(resetMerged);
  },

  upSecondLoop: function(resetMerged){
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        var secondCell = this.game.cells[x][y];
        var secondCount = this.checkUpCount(secondCell);
        this.moveUp(secondCell,secondCount);
        this.checkAbove(secondCell);
      }
    }
    this.resetMerged();
  },


  checkUpCount: function(cell){
    var count = 0;
    var row = cell.xPos;
    var col = cell.yPos;
    for (var i = row - 1; i >= 0; i--){
      if (this.game.cells[i][col].value == "0") {
        count += 1;
      }
      else {
        return count;
      }
    }
    return count;
  },

  moveUp: function(cell,count){
    var val = cell.value;
    var row = cell.xPos;
    if (row - count < 0){
      return null;
    }
    var col = cell.yPos;
    cell.value = "0";
    this.game.cells[row - count][col].value = val;
  },

  checkAbove: function(cell){
    var row = cell.xPos;
    var col = cell.yPos;
    if (this.game.cells[row - 1] === undefined){
      return null;
    }
    var aboveCell = this.game.cells[row - 1][col];
    if (aboveCell.value != cell.value || aboveCell.merged === true){
      return null;
    }
    else {
      cell.value = "0";
      aboveCell.merged = true;
      aboveCell.value *= 2;
    }
  },

  onDown: function(){
    this.downFirstLoop();
  },

  downFirstLoop: function(downSecondLoop,resetMerged) {
    for (var x = 3; x >= 0; x--) {
      for (var y = 0; y < 4; y++) {
        var cell = this.game.cells[x][y];
        var firstCount = this.checkDownCount(cell);
        this.moveDown(cell,firstCount);
        this.checkBelow(cell);
      }
    }
    this.downSecondLoop(resetMerged);
  },

  downSecondLoop: function(resetMerged){
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        var secondCell = this.game.cells[x][y];
        var secondCount = this.checkDownCount(secondCell);
        this.moveDown(secondCell,secondCount);
        this.checkBelow(secondCell);
      }
    }
    this.resetMerged();
  },


  checkDownCount: function(cell){
    var count = 0;
    var row = cell.xPos;
    var col = cell.yPos;
    for (var i = row + 1; i < 4; i++){
      if (this.game.cells[i][col].value == "0") {
        count += 1;
      }
      else {
        return count;
      }
    }
    return count;
  },

  moveDown: function(cell,count){
    var val = cell.value;
    var row = cell.xPos;
    if (row + count > 3){
      return null;
    }
    var col = cell.yPos;
    cell.value = "0";
    this.game.cells[row + count][col].value = val;
  },

  checkBelow: function(cell){
    var row = cell.xPos;
    var col = cell.yPos;
    if (this.game.cells[row + 1] === undefined){
      return null;
    }
    var belowCell = this.game.cells[row + 1][col];
    if (belowCell.value != cell.value || belowCell.merged === true){
      return null;
    }
    else {
      cell.value = "0";
      belowCell.merged = true;
      belowCell.value *= 2;
    }
  },

  onRight: function(){
    this.rightFirstLoop();
  },

  rightFirstLoop: function(rightSecondLoop,resetMerged) {
    for (var x = 0; x <= 3; x++) {
      for (var y = 3; y >= 0; y--) {
        var cell = this.game.cells[x][y];
        var firstCount = this.checkRightCount(cell);
        this.moveRight(cell,firstCount);
        this.checkRight(cell);
      }
    }
    this.rightSecondLoop(resetMerged);
  },

  rightSecondLoop: function(resetMerged){
    for (var x = 0; x <= 3; x++) {
      for (var y = 3; y >= 0; y--) {
        var secondCell = this.game.cells[x][y];
        var secondCount = this.checkRightCount(secondCell);
        this.moveRight(secondCell,secondCount);
        this.checkRight(secondCell);
      }
    }
    this.resetMerged();
  },


  checkRightCount: function(cell){
    var count = 0;
    var row = cell.xPos;
    var col = cell.yPos;
    for (var i = col + 1; i < 4; i++){
      if (this.game.cells[row][i].value == "0") {
        count += 1;
      }
      else {
        return count;
      }
    }
    return count;
  },

  moveRight: function(cell,count){
    var val = cell.value;
    var row = cell.xPos;
    if (col + count > 3){
      return null;
    }
    var col = cell.yPos;
    cell.value = "0";
    this.game.cells[row][col + count].value = val;
  },

  checkRight: function(cell){
    var row = cell.xPos;
    var col = cell.yPos;
    if (this.game.cells[col + 1] === undefined){
      return null;
    }
    var rightCell = this.game.cells[row][col + 1];
    if (rightCell.value != cell.value || rightCell.merged === true){
      return null;
    }
    else {
      cell.value = "0";
      rightCell.merged = true;
      rightCell.value *= 2;
    }
  },

  onLeft: function(){
    this.leftFirstLoop();
  },

  leftFirstLoop: function(leftSecondLoop,resetMerged) {
    for (var x = 0; x <= 3; x++) {
      for (var y = 3; y >= 0; y--) {
        var cell = this.game.cells[x][y];
        var firstCount = this.checkLeftCount(cell);
        this.moveLeft(cell,firstCount);
        this.checkLeft(cell);
      }
    }
    this.leftSecondLoop(resetMerged);
  },

  leftSecondLoop: function(resetMerged){
    for (var x = 0; x <= 3; x++) {
      for (var y = 0; y <= 3; y++) {
        var secondCell = this.game.cells[x][y];
        var secondCount = this.checkLeftCount(secondCell);
        this.moveLeft(secondCell,secondCount);
        this.checkLeft(secondCell);
      }
    }
    this.resetMerged();
  },


  checkLeftCount: function(cell){
    var count = 0;
    var row = cell.xPos;
    var col = cell.yPos;
    for (var i = col - 1; i >= 0; i--){
      if (this.game.cells[row][i].value == "0") {
        count += 1;
      }
      else {
        return count;
      }
    }
    return count;
  },

  moveLeft: function(cell,count){
    var val = cell.value;
    var row = cell.xPos;
    console.log(cell.value + " -- " + cell.xPos + "," + cell.yPos +" -- " + count);
    if (col - count < 0){
      return null;
    }
    var col = cell.yPos;
    cell.value = "0";
    this.game.cells[row][col - count].value = val;
  },

  checkLeft: function(cell){
    var row = cell.xPos;
    var col = cell.yPos;
    if (this.game.cells[col - 1] === undefined){
      return null;
    }
    var leftCell = this.game.cells[row][col - 1];
    if (leftCell.value != cell.value || leftCell.merged === true){
      return null;
    }
    else {
      cell.value = "0";
      leftCell.merged = true;
      leftCell.value *= 2;
    }
  },

  resetMerged: function(){
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        var cell = this.game.cells[x][y];
        var firstCount = this.checkUpCount(cell);
        cell.merged = false;
      }
    }
  },

  spawnBlock: function(){
    var openCells = [];
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        if (this.game.cells[x][y].value == "0"){
          openCells.push(this.game.cells[x][y]);
        }
      }
    }
    var randNumLimit = openCells.length - 1;
    var rand = getRandomInt(0,randNumLimit);
    if (getRandomInt(0,6) <= 5){
      openCells[rand].value = 2;
    }
    else {
      openCells[rand].value = 4;
    }
  },


};