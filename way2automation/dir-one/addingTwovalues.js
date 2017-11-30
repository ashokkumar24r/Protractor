// Adding two values to check for the understanding..

describe("This is to check two values", function(){
  it("Providing wrong values", function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
/*
by.model('first') to find the element with ng-model="first".
If you inspect the Calculator page source, 
you will see this is <input type="text" ng-model="first">
*/
    element(by.model('first')).sendKeys(2);
    element(by.model('second')).sendKeys(1);

//by.id('gobutton') to find the element with the given id.
//This finds <button id="gobutton">.

    element(by.id('gobutton')).click();
/*by.binding('latest') to find the element bound to the variable latest.
This finds the span containing {{latest}}*/
    expect(element(by.binding('latest')).getText()).toEqual('3');
    browser.sleep(5000);

  });

});
