"use strict";
var url = casper.cli.options.url || "http://rva-test.appspot.com";

casper.test.begin('Connecting', function suite(test) {
  casper.start(url, function(resp) {
    this.echo('Response ' + resp.status + " " + resp.statusText + 
              ' from ' + resp.url);
  }); 

  casper.then(function() {
    casper.waitForText('jenkins@risevision.com', null, function() {
      casper.test.fail('Not logged in');
    }); 
  }); 

  casper.then(function() {
    if (casper.cli.options.subtasks) {
      casper.cli.options.subtasks.split(',').forEach(function(val) {
        require(val)();
      });
    }
  });

  casper.run(function() {
    test.done();
  }); 
});
