const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Precios Test Mega", function() {
//name, sellIn, price 
  it("Mega Coverage price ", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(20);
  });

  it("Mega Coverage sellIn ", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(10);
  });

});
describe("Precios Test FUll", function() {
  it("Full Coverage price ", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(2);
  });

  it("Full Coverage sellIn ", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 1) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(1);
  });  
});

describe("Precios Test Special Full Coverage", function() {
  it("Special Full Coverage price ", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(21);
  });

  it("Special Full Coverage sellIn ", function() {
    const coTest = new CarInsurance([ new Product("Special Coverage", 15, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(14);
  });  
});


describe("Precios Test Special Super Sale", function() {
  it("Super Sale price ", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(4);
  });

  it("Super Sale sellIn ", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(2);
  });  
});

