function calculatePoints(win, draw, loss) {
    
    var points = (win * 3) + (draw * 1);
    console.log("The team has earned " + points + " points.");
  }
  calculatePoints(10, 6, 3);