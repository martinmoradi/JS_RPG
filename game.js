class Game {
  constructor() {
    this.welcome()
    this.remainingTurns = 10;
    this.characters = new Array();
    this.initializeCharacters();
    this.watchStats();
  }

  showChar() {
    this.characters.forEach((char) => console.log(char));
  }
  initializeCharacters() {
    this.characters.push(
      new Assassin("Carl"),
      new Berzerker("Draven"),
      new Figher("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Wizard("Khadgar"),
      new Necromancer("Kel'Thuzad")
    );
    console.log(`${this.characters.length} challengers entered the arena !`);
  }

  endGame() {
    console.log("Game is over !");
  }

  currentTurn() {
    return 10 - this.remainingTurns;
  }

  
  showTurn() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`This is the turn ${this.currentTurn()}. ( ఠൠఠ )ﾉ FIGHT !`);
  }
  
  watchStats() {
    console.log("Characters currently alive :");
    this.aliveChars().forEach((character) => {
      console.log(character.stats());
    });
  }
  
  aliveChars() {
    return this.characters.filter((char) => char.status === "playing");
  }
  
  isOngoing() {
    if (this.aliveChars().length > 1 && this.remainingTurns > 1) {
      return true;
    } else {
      return false;
    }
  }
  congratulateWinners() {
    this.aliveChars().forEach((winner) =>
      console.log(`${winner.name} won the game !`)
    );
    this.aliveChars().forEach((winner) => (winner.status = "winner"));
    console.log(`	
                        ____________
                      .~      ,   . ~.
                     /                \\
                    /      /~\\/~\\   ,  \\
                   |   .   \\    /   '   |
                   |         \\/         |
          XX       |   /~~\\       /~~\\  |       XX
        XX  X      | |  o  \\    /  o  | |      X  XX
      XX     X     |  \\____/    \\____/  |     X     XX
  XXXXX     XX      \\         /\\        ,/      XX     XXXXX
  X        XX%;;@    \\       /  \\     ,/      @%%;XX        X
  X       X  @%%;;@    |           ' |      @%%;;@  X       X
  X      X     @%%;;@  |.  ; ; ; ;  ,|    @%%;;@     X      X
  X    X        @%%;;@                  @%%;;@        X    X
  X   X          @%%;;@              @%%;;@          X   X
  X  X            @%%;;@          @%%;;@            X  X
  XX X             @%%;;@      @%%;;@             X XX
  XXX              @%%;;@   @%%;;@               XXX
                       

                  Made with ❤ by Martin Moradi`);
  }

  welcome() {
    console.log(`
           .------.
           /  ~ ~  \\,------.      ________
         ,'  ~ ~ ~  /  (°)  \\   ,'        \\
       ,'          /.    ~ ~\\ /            \\
     ,'           | ,'\\  ~ ~ ~ X      \\  \\  |
   ,'  ,'          -  -<       (       \\  \\  |
 ,'  ,'               (vv      \/\\  \\  \\  |  |
(__,'  ,'   /         (vv   ""    \\  \\  | |  |
  (__,'    /   /       vv   """    \\ |  / / /
      \\__,'   /  |     vv          / / / / /
          \\__/   / |  | \         / /,',','
             \\__/\_^  |  \       /,'',','|
                    -^.__>.____/  ' ,'   |
                            // //---'      |
          ===============(((((((=================
                                     | \ \  |
                                     / |  |  |
                                    / /  / \  |
                                    .     |   |
                                      --------'
    `);
  }
}
