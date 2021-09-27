var ForagerBee = function () {
  //call the Bee superclass
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

//set the prototype
ForagerBee.prototype = Object.create(Bee.prototype);
//set the constructor
ForagerBee.prototype.constructor = ForagerBee;

//inherit color from Bee (yellow)
//inherit food from grub
//inherit eat from grub
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};
