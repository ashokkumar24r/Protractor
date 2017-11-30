// Running protractor with multi scenarios

describe("Running the Demo app", function(){

    var firstNumber=element(by.model("first"));
    var secondNumber=element(by.model("second"));
    var goButton=element(by.id("gobutton"));
    var latestResult = element(by.binding('latest'));

    beforeEach(function(){
      browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it("Test case #1 : Must have Title", function(){
      expect(browser.getTitle()).toEqual('Super Calculator');

    });

    it("Test case #2: Should add one and two", function(){
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);

      goButton.click();

      expect(latestResult.getText()).toEqual('3');
    });
    it("Test case #3: Should add four and six", function(){
      firstNumber.sendKeys(4);
      secondNumber.sendKeys(6);

      goButton.click();

      expect(latestResult.getText()).toEqual('10');
    });
    browser.sleep(10000);
});
