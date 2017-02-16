'use strict';

// secure keys on https://github.com/eggjs/egg/wiki#secure-env-for-travis-ci
exports.passport = {
  weibo: {
    clientID: 'a',
    clientSecret: 'b',
  },
  github: {
    clientID: 'c',
    clientSecret: 'd',
  },
  bitbucket: {
    clientID: 'e',
    clientSecret: 'f',
  },
  twitter: {
    consumerKey: 'g',
    consumerSecret: 'h',
  },
};
