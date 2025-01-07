export class Customer {
    _id?: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    accountType: 'Personal' | 'Corporate';

    constructor(name: string, email: string, phone: string, address: string, accountType: 'Personal' | 'Corporate') {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.accountType = accountType;
    }
}

