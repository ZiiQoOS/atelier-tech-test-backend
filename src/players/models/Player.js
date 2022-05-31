const Country = require("./Country");

class Player {
  constructor(player) {
    this.id = player.id;
    this.firstName = player.firstname;
    this.lastName = player.lastname;
    this.fullName = player.firstname + ' ' + player.lastname;
    this.birthDate = this.getBirthDate(player.data.age);
    this.picture = player.picture;
    this.rank = player.data.rank;
    this.points = player.data.points;
    this.country = new Country(player.country);
    this.age = player.data.age;
    this.height = player.data.height;
    this.weight = player.data.weight / 1000;
  }

  getBirthDate(age) {
    return new Date().getFullYear() - age;
  }
}

module.exports = Player;