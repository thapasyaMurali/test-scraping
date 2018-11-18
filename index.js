var page = require('webpage').create();
var url = "https://www.amazon.com/Nintendo-Switch-Pro-Controller/dp/B01NAWKYZ0/ref=br_asw_pdt-2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=CEVEZSBJG0XAYVMVAGA4&pf_rd_t=36701&pf_rd_p=f8585743-c043-4665-80a7-0cc5fe97d596&pf_rd_i=desktop&th=1";

page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};

page.open(url, function (status) {
    page.onConsoleMessage = function(msg, lineNum, sourceId) {
        console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
    };
    page.evaluate(function() {
        // document.getElementById("email").value = "email";
        // document.getElementById("pass").value = "password";
        // document.getElementById("u_0_1").click();
        document.querySelector('input#add-to-cart-button').click();    
        // page is redirecting.
    });

    setTimeout(function () {
        page.evaluate(function () {
            console.log('haha');
        });
        //page.render("example.png");


        var url = this.getCurrentUrl();
        this.click("input[name='submit.addToCart']");
        page.open(url, function (status) {
            setTimeout(function () {
                page.evaluate(function () {
                    console.log('haha2---', this.getCurrentUrl());
                });
                // page.render("google.png");
                phantom.exit();
            }, 3000);
        });
    }, 3000);
});