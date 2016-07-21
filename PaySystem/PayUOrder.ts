import {Cart} from './Cart';
import {User} from './User';

export class PayUOrder{
    private cart:Cart;
    private user:User;

    private host:string = "https://secure.payu.com/api/v2_1/orders";
    private testHost:string = "https://secure.snd.payu.com/api/v2_1/orders";
    private testMode:boolean = false;

    private merchantId:string;
    private notifyUrl:string;

    constructor(merchantId:string){
        this.merchantId = merchantId;
        this.cart = new Cart();
        this.user = new User();
    }

    test():PayUOrder{
        this.testMode = true;
        return this;
    }

    order(){
        let host = "";
        if(this.isTestMode()){
            host = this.testHost;
        }else{
            host = this.host;
        }

        let json = {
            merchantPosId: this.getMerchantId(),
            host: host,
            notifyUrl: this.getNotifyUrl(),
            currencyCode: this.getCart().getCurrency(),
            totalAmount: this.getCart().calculateTotal(),
            buyer: {
                email: this.getUser().getEmail(),
                firstName: this.getUser().getFirstName(),
                lastName: this.getUser().getLastName(),
                language: this.getUser().language,
                phone: this.getUser().getPhone()
            }
        }


    }

    setNotifyUrl(url:string){
        this.notifyUrl = url;
        return this;
    }

    getNotifyUrl():string{
        return this.notifyUrl;
    }

    getCart():Cart{
        return this.cart;
    }

    getUser():User{
        return this.user;
    }
    
    isTestMode():boolean{
        return this.testMode;
    }

    getMerchantId(){
        return this.merchantId;
    }

}