var Fluxxor = require('fluxxor');
var _ = require('lodash');

var CONSTANT = require('../constant');

var ApplicationStore = Fluxxor.createStore({
  initialize: function () {
    this._setNavbar();
    this._setTip();
    this._setMenu();
    this.bindActions(
      CONSTANT.APPLICATION_NAVBAR_SET, 'onNavbarSet',
      CONSTANT.APPLICATION_TIP_SET, 'onTipSet',
      CONSTANT.APPLICATION_TOGGLE_MENU, 'onToggleMenu',
      CONSTANT.APPLICATION_TOPVIEW_SET,'onTopViewSet',
      CONSTANT.APPLICATION_HOMETAB_SET,'onHomeTabSet'
    );
  },
  _setNavbar: function (options) {
    options = _.assign({
      type: CONSTANT.APPLICATION_NAVBAR_TYPE_IS_MENU,
      title: '连客经纪人'
    }, options);
    this._navbar = options;
  },
  _setTip: function (options) {
    this._tip = _.assign({
      visible: false,
      text: ''
    },options);
  },
  _setMenu: function () {
    this._isMenuOpen = this._isMenuOpen === undefined ? false : !this._isMenuOpen;
    this.emit('change');
  },
  onToggleMenu: function () {
    this._setMenu();
  },
  onNavbarSet: function (options) {
    this._setNavbar(options);
    this.emit('change');
  },
  onTipSet: function (msg) {
    this._setTip({
      visible: !!msg,
      text: msg
    });
    if (msg) {
      setTimeout(()=>this.onTipSet(),1000);
    }
    this.emit('change');
  },
  onTopViewSet: function (view) {
    this.topView = view;
    this.emit('change');
  },
  onHomeTabSet: function (tabName) {
    this.homeTabName = tabName;
    this.emit('change');
  },
  getNavbar: function () {
    return this._navbar;
  },
  getTip: function () {
    return this._tip;
  },
  getMenu: function () {
    return this._isMenuOpen;
  },
  getTopView: function () {
    return this.topView|| 'login';
  },
  getHomeTabName: function () {
    return this.homeTabName || 'order';
  }
});

module.exports = ApplicationStore;
