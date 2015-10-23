var CONSTANT = require('../constant');

module.exports = {
  setNavbar: function (options) {
    this.dispatch(CONSTANT.APPLICATION_NAVBAR_SET, options);
  },
  setTip: function (msg) {
    this.dispatch(CONSTANT.APPLICATION_TIP_SET, msg);
  },
  toggleMenu: function () {
    this.dispatch(CONSTANT.APPLICATION_TOGGLE_MENU);
  },
  setTopView: function (view) {
    this.dispatch(CONSTANT.APPLICATION_TOPVIEW_SET,view);
  },
  setHomeTab: function (tabName) {
    this.dispatch(CONSTANT.APPLICATION_HOMETAB_SET,tabName);
  }
};
