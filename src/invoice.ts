class Invoice{
    constructor(){

    }
    name:string = "";
    quantity:number = 0;
    unit?:Unit;
    netto?:number = 0;
    tax?:Tax;
    brutto?:number;

}

enum Unit{
    litr = 1000,
    ml = 1
}

enum Tax{
    tax23 = 0.23,
    tax8 = 0.08
}