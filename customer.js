
class Customer{
    constructor(){
    }
    
    companyName = "";
    nip = "";
    city = "";
    street = "";
    houseNumber = "";
    flatNumber = "";
    postNumber = "";
    comment = "";
    industry = "";
    online = "";

    getAddress(){
        return this.street+" "+this.houseNumber+" "+this.city+" "+this.postNumber;
    }

  }

class Supplier extends Customer{

    construktor(accountNumber){
        // super();
        this.accountNumber = "";
    }
    invoices = [];

}


// function Customer(){
//     this.companyName = "",
//     this.nip = "",
//     this.city = "",
//     this.street = "",
//     this.houseNumber = "",
//     this.flatNumber = "",
//     this.postNumber = "",
//     this.comment = "",
//     this.industry = "",
//     this.online = ""
// }

// function Supplier(accountNumber){

//     this.accountNumber = accountNumber;
//     invoices = [];

// }

// Supplier.prototype = new Customer();


