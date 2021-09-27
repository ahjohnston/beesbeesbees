var Grub = function () {
  this.age = 0;
};

//why does the Mocha test require that I use "this"?
//Why can't I put all properties in the prototype instead of using 'this' in the contstructor?
// Grub.prototype.age = 0;
Grub.prototype.color = 'pink';
Grub.prototype.food = 'jelly';
Grub.prototype.eat = function () {

};

