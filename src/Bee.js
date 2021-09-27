var Bee = function() {
  //call the Grub superclass
  Grub.call(this);

  //what's the difference between these three? All three make the tests pass.
  /// "this." ex: age
  /// "Bee.prototype." (inside the Bee function) ex: color
  /// "Bee.prototype" (outside the Bee function) ex: job
  this.age = 5;
  Bee.prototype.color = 'yellow';
};


//set the prototype
Bee.prototype = Object.create(Grub.prototype);
//set the constructor (I don't get this)
Bee.prototype.constructor = Bee;

//food inherited from grub
// Bee.prototype.food = 'hi';
//eat inherited from grub
Bee.prototype.job = 'keep on growing';