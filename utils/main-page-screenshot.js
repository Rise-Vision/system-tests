"use strict";
var url = casper.cli.options.url || "http://rva-test.appspot.com";

casper.test.begin('Connect to Rise Vision and take screenshot', 1, function suite(test) {
  casper.start(url, function(resp) {
    this.echo('Response is ' + resp.status + " " + resp.statusText + " from " + resp.url);
  }); 

  casper.then(function() {
    test.assertTitle('Rise Vision', 'The page title is Rise Vision');
  }); 

  casper.then(function() {
    casper.waitForText('jenkins@risevision.com'); //signed in
  }); 

  casper.then(function() {
    this.wait(4000, function() {
      this.capture('./screenshot.png');
    });
  });

  casper.run(function() {
    test.done();
  }); 
});
