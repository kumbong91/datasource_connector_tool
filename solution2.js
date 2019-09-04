var prices = [];
   
    prices.push({"buy":903072,"sell":882068,"id":5572536,"pair":"BTCSGD","timestamp":"2018-08-08T13:45:47"});
    prices.push({"buy":6729,"sell":6455,"id":5572564,"pair":"LTCUSD","timestamp":"2018-08-08T13:47:06.806"});
    prices.push({"buy":51917,"sell":49938,"id":5572570,"pair":"ETHSGD","timestamp":"2018-08-08T13:47:08.429"});
    prices.push({"buy":86939,"sell":83519,"id":5572567,"pair":"BCHSGD","timestamp":"2018-08-08T13:47:07.356"});
    prices.push({"buy":9173,"sell":8815,"id":5572565,"pair":"LTCSGD","timestamp":"2018-08-08T13:47:06.811"});
    prices.push({"buy":666146,"sell":639774,"id":5572571,"pair":"BTCUSD","timestamp":"2018-08-08T13:47:08.994"});
    prices.push({"buy":63904,"sell":61212,"id":5572566,"pair":"BCHUSD","timestamp":"2018-08-08T13:47:07.352"});
    prices.push({"buy":38024,"sell":36687,"id":5572569,"pair":"ETHUSD","timestamp":"2018-08-08T13:47:08.424"});
    

for (var i in prices) {
    prices[i].getSum = function () {
        return this.buy + this.sell;
    };

    prices[i].getAverage = function () {
        return this.getSum()/2;
               
    };

    prices[i].subString = function () {
        return this.pair.substring(3);
    }
 }
 var output = '';
 for (var i in prices) {
     with (prices[i]) {
         output += 'Mid price for' + '\n' + pair + '\n' + 'is' + '\n' 
         + getAverage() + '\n' + subString() + '<br />';
    }
}
const title = document.getElementById("title")
title.innerHTML = output;

