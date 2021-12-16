const cart = require("../models/cart");

describe("Test cart.js", () => {
    test("Check stock is not empty", () => {
            var oldcart = {
                items: { 
                  '613c83965af56b30307f57ce': { item: [Object], qty: 1, price: 32 } 
                },
              }
            var test = cart(oldcart);
            expect(test).not.toBeNull();
    });
    test("Check total quantity in stock", () => {
      var oldcart = {
          items: { 
            '613c83965af56b30307f57ce': { item: [Object], qty: 1, price: 32 },
            '613c83965af56b30307f57d3': { item: [Object], qty: 1, price: 72 } 
          },
          totalQty: 2
        }
      expect(oldcart.totalQty).toBe(3);
    });

});

