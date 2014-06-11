"use strict";

var url = casper.cli.options.url || "http://rva-test.appspot.com";

casper.test.begin('Connect to Rise Vision', 1, function suite(test) {
  casper.start(url, function(resp) {
    this.echo('Response is ' + resp.status + " " + resp.statusText + " from " + resp.url);
  }); 

  casper.then(function() {
    var loginFormId;

    if (this.getTitle().toUpperCase().indexOf('SIGN IN') > -1) {
      //this.echo(this.getHTML()); dump page contents if google changes element IDs
      loginFormId = casper.evaluate(function() {
        return document.querySelector('#Email').parentNode.id;
      }); 

      this.fill('form#' + loginFormId, {
        "Email": "jenkins@risevision.com"
        ,"Passwd": casper.cli.options.password
      }, true);
    }   
  }); 

  casper.then(function() {
    test.assertTitle('Rise Vision', 'Signed in - The page title is Rise Vision');
  }); 

  casper.run(function() {
    test.done();
  }); 
});
