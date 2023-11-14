"use strict";
class Customer {
    constructor() {
        this.companyName = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.flatNumber = "";
        this.postNumber = "";
        this.comment = "";
        this.industry = "";
        this.online = false;
    }
    getAddress() {
        return this.street + " " + this.houseNumber + " " + this.city + " " + this.postNumber;
    }
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.accountNumber = '';
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}
