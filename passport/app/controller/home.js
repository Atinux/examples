'use strict';

exports.index = function* () {
  console.log(this.method, this.url, this.user);
  if (this.isAuthenticated()) {
    this.body = `<div>Logined user: <img src="${this.user.photo}"> ${this.user.displayName} / ${this.user.id} | <a href="/logout">Logout</a>
      <pre><code>${JSON.stringify(this.user, null, 2)}</code></pre>
    </div>`;
  } else {
    this.body = `
      <div>Login with
        <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> | <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a>
      </div>
    `;
  }
};
