export class Product{
    name: string;
    price: number;
    currency: string;

    constructor(name:string, price:number, currency:string){
        this.name = name;
        this.price = price || 0;
        this.currency = currency;
    }

    public setName(_name:string){
        this.name = _name;
    }

    public setPrice(_price:number):Product{
        this.price = _price;
        return this;
    }

    public setCurrency(_c:string):Product{
        this.currency = _c;
        return this;
    }

    public getPrice():number{
        return this.price;
    }

    public getCurrency():string{
        return this.currency;
    }

}