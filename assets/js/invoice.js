"use strict";
class Invoice {
    constructor() {
        this.name = "";
        this.quantity = 0;
        this.netto = 0;
    }
}
var Unit;
(function (Unit) {
    Unit[Unit["litr"] = 1000] = "litr";
    Unit[Unit["ml"] = 1] = "ml";
})(Unit || (Unit = {}));
var Tax;
(function (Tax) {
    Tax[Tax["tax23"] = 0.23] = "tax23";
    Tax[Tax["tax8"] = 0.08] = "tax8";
})(Tax || (Tax = {}));
