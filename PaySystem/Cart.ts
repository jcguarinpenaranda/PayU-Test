import {Product} from './Product';
import {ProductOrder} from './ProductOrder';

export class Cart {
    private productOrders: Array<ProductOrder>;
    private currency: string;

    constructor(){
        this.productOrders = [];
    }


    private isSetCurrency():boolean{
        return (this.currency)?true:false;
    }

    private setCurrency(currency:string){
        if(!this.currency){
            this.currency = currency;
        }
    }

    private validateIfNewProductMatchesWithCurrency(currency:string): boolean{
        if(this.isSetCurrency()){
            return this.currency === currency;
        }else{
            this.setCurrency(currency);
            return true;
        }
    }


    getCurrency():string{  
        return this.currency;
    }


    addProduct(p:Product, quantity:number):Cart{   

        if( !this.validateIfNewProductMatchesWithCurrency(p.getCurrency()) ) {
            throw new Error("New products must have same currency");
        }

        let prodOrder = new ProductOrder(p,quantity);
        this.productOrders.push(prodOrder);

        return this;
    }

    getProductOrders():Array<ProductOrder>{
        return this.productOrders;
    }

    calculateTotal():Number{
        let total = 0;

        this.productOrders.forEach(p => {
            total += p.getPrice();
        });

        return total;
    }
}