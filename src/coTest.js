class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }
    
    updatePrice() {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
                if (this.products[i].price > 0) {
                    //Solo productos normales!! decaen en 1 unidad de precio!
                    if (this.products[i].name != 'Mega Coverage'){
                        
                        //Normales y super sale bajan en 1
                        this.products[i].price = this.products[i].price - 1;
                        
                        //Super sale baja 1 mas (doble que los normales)
                        if (this.products[i].name == 'Super Sale'){
                            this.products[i].price = this.products[i].price - 1 
                        }
                    }


                }
            } 
            //Para 'Full Coverage' y 'Special Full Coverage'
            else {
                if (this.products[i].price < 50) {
                    this.products[i].price = this.products[i].price + 1;
                    if (this.products[i].name == 'Special Full Coverage') {
                        if (this.products[i].sellIn < 11) {
                            if (this.products[i].price < 50) {
                                this.products[i].price = this.products[i].price + 1;
                            }
                        }
                        if (this.products[i].sellIn < 6) {
                            if (this.products[i].price < 50) {
                                this.products[i].price = this.products[i].price + 1;
                            }
                        }
                    }
                }
            }

            //Todos los que no son mega coverage decrecen 1 en caducidad
            if (this.products[i].name != 'Mega Coverage') {
                this.products[i].sellIn = this.products[i].sellIn - 1;
            }
            
            //Reglas de productos que ya vencieron!! 
            if (this.products[i].sellIn < 0) {
                if (this.products[i].name != 'Full Coverage') {
                    if (this.products[i].name != 'Special Full Coverage') {
                        if (this.products[i].price > 0) {
                            if (this.products[i].name != 'Mega Coverage') {
                                //Decrecen 1 vez mas porque ya vencieron!!
                                this.products[i].price = this.products[i].price - 1;
                                //Super sale baja 1 mas (doble que los normales)
                                if (this.products[i].name == 'Super Sale'){
                                    this.products[i].price = this.products[i].price - 1 
                                }                                
                            }
                        }
                    } 
                    else {
                        this.products[i].price = this.products[i].price - this.products[i].price;
                    }
                }
                //Coverage solo aumenta en precio siempre que este sea menor a 50! 
                else {
                    if (this.products[i].price < 50) {
                        this.products[i].price = this.products[i].price + 1;
                    }
                }
            }
        }

        return this.products;
    }
}

module.exports = {
  Product,
  CarInsurance
}
