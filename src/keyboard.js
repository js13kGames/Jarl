
Mousetrap.bind(["left", "h"], function() {
   Player.fliped = true;
   Player.moveRel(-32, 0);
}, 'keyup');

Mousetrap.bind(["right", "l"], function() {
   Player.fliped = false;
   Player.moveRel(32, 0);
}, 'keyup');

Mousetrap.bind(["up", "k"], function() {
   Player.moveRel(0, -32);
}, 'keyup');

Mousetrap.bind(["down", "j"], function() {
   Player.moveRel(0, 32);
}, 'keyup');

Mousetrap.bind(["y"], function() {
   Player.fliped = true;
   Player.moveRel(-32, -32);
}, 'keyup');

Mousetrap.bind(["u"], function() {
   Player.fliped = false;
   Player.moveRel(32, -32);
}, 'keyup');

Mousetrap.bind(["n"], function() {
   Player.fliped = true;
   Player.moveRel(-32, 32);
}, 'keyup');

Mousetrap.bind(["m"], function() {
   Player.fliped = false;
   Player.moveRel(32, 32);
}, 'keyup');

Mousetrap.bind(["?"], function() {

   help = [
      "---Controls---",
      "arrow keys - move",
      "~ or ~",
      "h - left",
      "j - down",
      "k - up",
      "l - right",
      "y - up-left",
      "u - up-right",
      "n - down-left",
      "m - down-right",
      "",
      "---GamePlay---",
      "move twards an enemy to attack"];

   TextBox.push(help.join("<br />"));
}, 'keyup');