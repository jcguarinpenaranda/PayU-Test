let request = require("request");
let id = "300046";
let second_key = "0c017495773278c50c7b35434017b2ca";
let oauth_client_secret = "c8d4b7ac61758704f38ed5564d8c0ae0";
let host_address = "https://secure.snd.payu.com/";
let bearer_code = "02e26faf-b148-4f98-98bc-ecd36305d865";

let options = {
 headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 02e26faf-b148-4f98-98bc-ecd36305d865'
 }
};

let data = {
"notifyUrl": "https://your.eshop.com/notify",
     "customerIp": "127.0.0.1",
     "merchantPosId": "300046",
     "description": "RTV market",
     "currencyCode": "PLN",
     "totalAmount": "21000",
     "buyer": {
             "email": "john.doe@example.com",
             "phone": "654111654",
             "firstName": "John",
             "lastName": "Doe",
             "language": "en"
              },
     "products": [
         {
             "name": "Wireless Mouse for Laptop",
             "unitPrice": "15000",
             "quantity": "1"
         },
         {
             "name": "HDMI cable",
             "unitPrice": "6000",
             "quantity": "1"
          }
        ]
};


function callback(err, resp, body){
 console.log("error: ", err);
 console.log("response: ", body);
 console.log("full http response", resp);
}


request({
 method: "POST",
 url: host_address,
 json: true,
 body: data,
 headers: options.headers
}, callback);
