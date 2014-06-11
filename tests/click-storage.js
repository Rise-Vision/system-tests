"use strict";

module.exports = function() {
  casper.then(function() {
    casper.test.comment("Attempting to click storage link");
    casper.clickLabel("Storage", "a");
    casper.waitForResource('modal.html');
  });

  casper.then(function() { 
    var frameCount = casper.evaluate(function() {
      return document.getElementsByTagName('iframe').length - 1;
    });

    casper.test.comment("Waiting for upload button");

    //This would be nicer if frames had id attributes in RVA.
    //That way we wouldn't have to step down into the correct frame this way
    //and we wouldn't need frameCount
    casper.withFrame(frameCount, function() {
      casper.withFrame(0, function() {
        casper.waitForSelector('button[title="Upload"]:enabled', function() {
          casper.test.pass("Upload button is available");
        }, function() {
          casper.capture("./screenshot-no-upload-button.jpg");
          casper.test.fail("Upload button is not available");
        }, 10000);
      });
    });
  });
}
