import {Product} from './Product';

export class ProductOrder{
    product:Product;
    quantity:number;

    constructor(p:Product, q:number){
        this.product = p;
        this.quantity = q;
    }

    addOneMore():ProductOrder{
        this.quantity ++;
        return this;
    }

    removeOne():ProductOrder{
        this.quantity > 0 ? this.quantity-- : 0;
        return this;
    }

    removeAll():ProductOrder{
        this.quantity = 0;
        return this;
    }

    getPrice():number{
        let price = 0;

        for(let i = 0; i < this.quantity; i++){
            price+=this.product.getPrice();
        }

        return price;
    }
}