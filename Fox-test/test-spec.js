describe("Testing on Fox using protractor", function(){
    it("Executing condition to be passed", function(){
        //browser.get("https://www.angularjs.org/")
        browser.get('https://angularjs.org/');
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
        element(by.model("yourName")).sendKeys("akumar");
        element(by.binding("yourName"))
            //.getText().then(function(text) {
            //console.log(text);
      //  });
    });

});
