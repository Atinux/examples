'use strict';

exports.logout = function* () {
  this.logout();
  this.redirect('/');
};
