'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  const weiboAuth = app.passport.authenticate('weibo', {
    // failureRedirect: '/',
    successRedirect: '/',
  });
  app.get('/passport/weibo', weiboAuth);
  app.get('/passport/weibo/callback', weiboAuth);

  const githubAuth = app.passport.authenticate('github', {
    // failureRedirect: '/',
    successRedirect: '/',
  });
  app.get('/passport/github', githubAuth);
  app.get('/passport/github/callback', githubAuth);

  const bitbucketAuth = app.passport.authenticate('bitbucket', {
    // failureRedirect: '/',
    successRedirect: '/',
  });
  app.get('/passport/bitbucket', bitbucketAuth);
  app.get('/passport/bitbucket/callback', bitbucketAuth);

  const twitterAuth = app.passport.authenticate('twitter', {
    // failureRedirect: '/',
    successRedirect: '/',
  });
  app.get('/passport/twitter', twitterAuth);
  app.get('/passport/twitter/callback', twitterAuth);

  app.get('/logout', 'user.logout');
};
