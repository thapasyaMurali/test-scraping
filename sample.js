var casper = require('casper').create({
    verbose: false,
    logLevel: "debug"
});
var lop = '';
// Opens casperjs homepage
casper.start('https://www.amazon.com/Nintendo-Switch-Pro-Controller/dp/B01NAWKYZ0/ref=br_asw_pdt-2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=CEVEZSBJG0XAYVMVAGA4&pf_rd_t=36701&pf_rd_p=f8585743-c043-4665-80a7-0cc5fe97d596&pf_rd_i=desktop&th=1',
function() {
    console.log(">>>>>>" + this.getCurrentUrl());
    this.wait(1000, function() {
        console.log('-----------1');
        casper.capture('screenshots/navigation1.png');
        var ex = document.querySelector('input#add-to-cart-button[type="submit"]').value;
        console.log('-----------1.1', ex);
        this.click('input#add-to-cart-button[type="submit"]');
    });
}
);

casper.then(function() {
    console.log('-----------2');
    console.log(">>>>>>" + this.getCurrentUrl());
    lop = this.getCurrentUrl();
});

casper.thenOpen(lop, function() {

    this.wait(2000, function() {
        console.log('-----------3');
        casper.capture('screenshots/navigation2.png');
    
        // this.click("input[name='submit.addToCart']"); 
    });
});
// casper.then(function() {
//     this.click('input#add-to-cart-button'); 
//     this.wait(2000, function() {
//         this.click("input[name='submit.addToCart']"); 
//         this.wait(2000, function() {
//             console.log(">>>>>>" + this.getCurrentUrl());
//         });
        
//     });   
// });



// casper.waitForSelector("input#add-to-cart-button", function() {
//     this.echo("I'm sure input#add-to-cart-button is available in the DOM");
//     document.querySelector('input#add-to-cart-button').click();
// });


// casper.waitForSelector("input[name='submit.addToCart']", function() {
//     console.log('clicked ok, 1 location is ' + this.getCurrentUrl());
//     document.querySelector("input[name='submit.addToCart']").click();
    
// });


// casper.then(function() {
//     console.log('clicked ok, 1 location is ' + this.getCurrentUrl()); 
// });
casper.run();