var ApplicationStore = require('./application');
var CityStore = require('./city');
var OrderStore = require('./order');
var MeStore = require('./me');


module.exports = {
  ApplicationStore: new ApplicationStore(),
  CityStore: new CityStore(),
  OrderStore: new OrderStore(),
  MeStore: new MeStore()
  
};
