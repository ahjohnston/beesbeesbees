var HoneyMakerBee = function () {
  //call the Bee superclass
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  //color is inherited from bee (yellow)
  //food inherited from grub
  this.honeyPot = 0;
};

//set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function () {
  if (this.honeyPot > 0) {
    this.honeyPot--;
  }
};