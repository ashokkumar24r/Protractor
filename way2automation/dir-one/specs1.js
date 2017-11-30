// writing protractor


describe("Test entering value into an inbox", function(){
    it("Test putting value into  model", function(){
           browser.get("https://www.angularjs.org/");
           element(by.model("todoList.todoText")).sendKeys("Ashok Kumar");
           browser.sleep(500);
                 });





});
