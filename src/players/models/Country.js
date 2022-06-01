const CounrtyName = require('../enums/CountryNameEnum');
class Country {
  constructor(country) {
    this.code = country.code;
    this.name = this.getCountryName(country.code);
    this.flag = country.picture;
  }

  getCountryName(code) {
    return CounrtyName[code];
  }
}
module.exports = Country;