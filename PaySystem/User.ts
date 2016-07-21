export class User{
    firstName:string;
    lastName: string;
    phone:string;
    email:string;
    ip:string;
    language:string;

    constructor(){

    }

    getLanguage():string{
        return this.language;
    }

    getFirstName():string{
        return this.firstName;
    }

    getLastName():string{
        return this.lastName;
    }


    setLanguage(l:string):User{
        this.language = l;
        return this
    }

    setFirstName(fn:string):User{
        this.firstName = fn
        return this;
    }

    setLastName(ln:string):User{
        this.lastName = ln;
        return this;
    }

    setName(firstName:string, lastName:string):User{
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
    }

    getName():string{
        return this.firstName+" "+this.lastName;
    }

    setPhone(phone:string):User{
        this.phone = phone;
        return this;
    }

    getPhone():string{
        return this.phone;
    }

    setEmail(email:string):User{
        this.email = email;
        return this;
    }

    getEmail():string{
        return this.email;
    }

    setIp(ip:string):User{
        this.ip = ip;
        return this;
    }

    getIp():string{
        return this.ip;
    }

}