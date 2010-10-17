// Authors:
//   Ian Gallagher <crash@neg9.org>
register({
  name: 'Evernote',
  url: 'https://www.evernote.com/Home.action',
  domains: [ 'evernote.com' ],
  sessionCookieNames: [ 'auth' ],

  identifyUser: function () {
    var resp = this.httpGet(this.siteUrl);
    this.userName = resp.body.querySelectorAll("#nav td")[2].textContent.match(/Sign out \((.*)\).*/)[1];
  }
});
