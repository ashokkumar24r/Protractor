describe("Test Automation of a banking app", function(){
   it("Validate the user login", function(){
       browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
       element(by.buttonText("Customer Login")).click();

       browser.sleep(3000)
        element.all(by.css("#userSelect option")).then(function(items){

            console.log("Total Values in dropdown:"+ items.length );
            for(i=0;i<items.length ;i++){
                items[i].getText().then(function(text){
                        console.log(text);
                    });
            }
            console.log("-----Printing value attribute from dropdown list ------")
            for(i=0;i<items.length;i++){
                items[i].getAttribute("value").then(function(text){
                    console.log(text);
                });
            }
        element(by.model("custId")).element(by.css("[value='5']")).click();
            browser.sleep(3000)
        });
   });

});