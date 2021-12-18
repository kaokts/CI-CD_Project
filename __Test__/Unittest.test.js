const Cart = require("../models/cart");

describe("Test cart.js", () => {
  test("Check stock is not empty ", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57d3': { item: {
          _id: '613c83965af56b30307f57d3',
          imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61kMbAz6gqL._SL1000_.jpg',
          title: 'Surf-excel',
          description: '2kg Surf-excel',
          price: 72,
          __v: 0
        }, qty: 1, price: 72 }  
      },
      totalQty: 1,
      totalPrice: 72
    }
    let cart = new Cart(givenCart);
    expect(cart.items).not.toBeEmpty;
});

test("Check total quantity in cart only 1 item ", () => {
  let givenCart = {
    items: {
      '613c83965af56b30307f57d8': { item: {
        _id: '613c83965af56b30307f57d8',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71qyzy9QnML._SL1500_.jpg',
        title: 'Oats',
        description: '1kg Oats',
        price: 45,
        __v: 0
      }, qty: 1, price: 45 }  
    },
    totalQty: 3,
    totalPrice: 135
  }
  let cart = new Cart(givenCart);
  expect(cart.totalQty).toBe(3);
});

test("Check total price in cart only 1 item ", () => {
  let givenCart = {
    items: {
      '613c83965af56b30307f57d8': { item: {
        _id: '613c83965af56b30307f57d8',
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71qyzy9QnML._SL1500_.jpg',
        title: 'Oats',
        description: '1kg Oats',
        price: 45,
        __v: 0
      }, qty: 1, price: 45 }  
    },
    totalQty: 3,
    totalPrice: 135
  }
  let cart = new Cart(givenCart);
  expect(cart.totalPrice).toBe(135);
});

test("Check cart is not empty after add 2 item", () => {
  let givenCart = {
    items: {
        '613c83965af56b30307f57ce': { item: {
          _id: '613c83965af56b30307f57ce',
          imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
          title: 'Fresh Chakki aata',
          description: '1kg aata',
          price: 32,
          __v: 0
        }, qty: 1, price: 32 }  
      },
      totalQty: 1,
      totalPrice: 32
    }

    let givenItem = {
      id: '613c83965af56b30307f57ce',
      imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
      title: 'Fresh Chakki aata',
      description: '1kg aata',
      price: 32,
      __v: 0
    }

    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    expect(cart.totalQty).not.toBeNull;
  });
  
  test("Check total quantity in cart (add)", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57ce': { item: {
          _id: '613c83965af56b30307f57ce',
          imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
          title: 'Fresh Chakki aata',
          description: '1kg aata',
          price: 32,
          __v: 0
        }, qty: 1, price: 32 }  
      },
      totalQty: 1,
      totalPrice: 32
    }
    let givenItem = {
      id: '613c83965af56b30307f57ce',
      imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
      title: 'Fresh Chakki aata',
      description: '1kg aata',
      price: 32,
      __v: 0
    }
    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    expect(cart.totalQty).toBe(2);
  }); 

  test("Check total price in cart(add)", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57ce': { item: {
          _id: '613c83965af56b30307f57ce',
          imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
          title: 'Fresh Chakki aata',
          description: '1kg aata',
          price: 32,
          __v: 0
        }, qty: 1, price: 32 }  
      },
      totalQty: 1,
      totalPrice: 32
    }
    let givenItem = {
      id: '613c83965af56b30307f57ce',
      imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
      title: 'Fresh Chakki aata',
      description: '1kg aata',
      price: 32,
      __v: 0
    }
    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    expect(cart.totalPrice).toBe(64);
  });
    
  test("Check total quantity after reduceByOne in cart", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57ce': { item: {
          _id: '613c83965af56b30307f57ce',
          imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
          title: 'Fresh Chakki aata',
          description: '1kg aata',
          price: 32,
          __v: 0
        }, qty: 1, price: 32 }  
      },
      totalQty: 1,
      totalPrice: 32
    }
    let givenItem = {
      id: '613c83965af56b30307f57ce',
      imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
      title: 'Fresh Chakki aata',
      description: '1kg aata',
      price: 32,
      __v: 0
    }
    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    cart.reduceByOne(givenItem.id)
    expect(cart.totalQty).toBe(1);
  });

  test("Check toal price after reduceByOne in cart", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57d5': { item: {
          _id: '613c83965af56b30307f57d5',
          imagePath: 'https://i5.walmartimages.com/asr/f0d3e9bf-ac3f-47c2-a058-4562c8380bfb_1.5b84b462ac7fd1c3e744dc51ecf6b236.jpeg',
          title: 'Corn flakes',
          description: '1kg corn flakes',
          price: 40,
          __v: 0
        }, qty: 1, price: 40 }  
      },
      totalQty: 3,
      totalPrice: 120
    }
    let givenItem = {
      id: '613c83965af56b30307f57d5',
      imagePath: 'https://i5.walmartimages.com/asr/f0d3e9bf-ac3f-47c2-a058-4562c8380bfb_1.5b84b462ac7fd1c3e744dc51ecf6b236.jpeg',
      title: 'Corn flakes',
      description: '1kg corn flakes',
      price: 40,
      __v: 0
    }
    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    cart.reduceByOne(givenItem.id)
    expect(cart.totalPrice).toBe(120);
  });      
    
  test("Check total quantity after remove Item in cart", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57ce': { item: {
          _id: '613c83965af56b30307f57ce',
          imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
          title: 'Fresh Chakki aata',
          description: '1kg aata',
          price: 32,
          __v: 0
        }, qty: 1, price: 32 }  
      },
      totalQty: 1,
      totalPrice: 32
    }
    let givenItem = {
      id: '613c83965af56b30307f57ce',
      imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
      title: 'Fresh Chakki aata',
      description: '1kg aata',
      price: 32,
      __v: 0
    }
    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    cart.removeItem(givenItem.id)
    expect(cart.totalQty).toBeEmpty;
  });

  test("Check total price after remove Item in cart", () => {
    let givenCart = {
      items: {
        '613c83965af56b30307f57cf': { item: {
          _id: '613c83965af56b30307f57cf',
          imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61ZhyN3P4tL._SX425_.jpg',
          title: 'Maida',
          description: '1kg maida',
          price: 30,
          __v: 0
        }, qty: 1, price: 30 }  
      },
      totalQty: 3,
      totalPrice: 90
    }
    let givenItem = {
      id: '613c83965af56b30307f57cf',
      imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61ZhyN3P4tL._SX425_.jpg',
      title: 'Maida',
      description: '1kg maida',
      price: 30,
      __v: 0
    }
    let cart = new Cart(givenCart);
    cart.add(givenItem, givenItem.id);
    cart.removeItem(givenItem.id)
    expect(cart.totalPrice).toBeNull;
  });
 
});

