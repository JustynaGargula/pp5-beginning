"use strict";
const customers = [];
function save() {
    let newCustomer = new Customer();
    newCustomer.companyName = getElementById("companyName").value;
    newCustomer.nip = getElementById("NIP").value;
    newCustomer.city = getElementById("city").value;
    newCustomer.street = getElementById("street").value;
    newCustomer.houseNumber = getElementById("houseNumber").value;
    newCustomer.flatNumber = getElementById("flatNumber").value;
    newCustomer.postNumber = getElementById("postNumber").value;
    newCustomer.comment = getElementById("comments").value;
    newCustomer.industry = getElementById("industry").value;
    newCustomer.online = getElementById("online").checked;
    console.log(newCustomer.getAddress());
    console.log("industry: ", newCustomer.industry);
    let customerAlreadySaved = false;
    for (let i = 0; i < customers.length; i++) {
        console.log("list:", customers[i].nip, "new:", newCustomer.nip);
        if (customers[i].nip === newCustomer.nip) {
            customerAlreadySaved = true;
            customers[i] = newCustomer;
            break;
        }
    }
    if (!customerAlreadySaved) {
        customers.push(newCustomer);
        console.log(newCustomer);
        console.log(customers);
    }
    //   getElementById("form1").reset() <- do poprawki
}
function insert() {
    getElementById("companyName").value = "COmPaNy";
    getElementById("companyName").readOnly = true; //zamiast readOnly mozna dac disabled
    getElementById("NIP").value = "76524515";
    getElementById("NIP").readOnly = true;
    getElementById("city").value = "Krakow";
    getElementById("city").readOnly = true;
    getElementById("street").value = "Pawia";
    getElementById("street").readOnly = true;
    getElementById("houseNumber").value = "1";
    getElementById("houseNumber").readOnly = true;
    getElementById("flatNumber").value = "1";
    getElementById("flatNumber").readOnly = true;
    getElementById("postNumber").value = "11111";
    getElementById("postNumber").readOnly = true;
    getElementById("online").checked = true;
    getElementById("online").disabled = true;
    console.log("Inserted some data into form");
}
function showForm() {
    getElementById("form1").style.display = "block";
    getElementById("list1").style.display = "none";
    getElementById("NIP").readOnly = false;
}
function showList() {
    getElementById("list1").style.display = "block";
    getElementById("form1").style.display = "none";
    let ul = getElementById("list1");
    ul.innerHTML = "";
    for (let i = 0; i < customers.length; i++) {
        console.log("displaing list");
        ul.innerHTML += `<li class="list-group-item" onclick="editClient('${customers[i].nip}') ">
          Company name: ${customers[i].companyName} NIP: ${customers[i].nip} Address: ${customers[i].getAddress()}</li>`;
    }
}
function editClient(nip) {
    showForm();
    let customer = new Customer();
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].nip == nip) {
            customer = customers[i];
        }
    }
    console.log("inside of editClient()");
    getElementById("companyName").value = customer.companyName;
    getElementById("companyName").readOnly = false;
    getElementById("NIP").value = customer.nip;
    getElementById("NIP").readOnly = true;
    getElementById("city").value = customer.city;
    getElementById("city").readOnly = false;
    getElementById("street").value = customer.street;
    getElementById("street").readOnly = false;
    getElementById("houseNumber").value = customer.houseNumber;
    getElementById("houseNumber").readOnly = false;
    getElementById("flatNumber").value = customer.flatNumber;
    getElementById("flatNumber").readOnly = false;
    getElementById("postNumber").value = customer.postNumber;
    getElementById("postNumber").readOnly = false;
    getElementById("online").checked = customer.online;
    getElementById("online").readOnly = false;
    getElementById("comments").value = customer.comment;
    getElementById("industry").value = customer.industry;
}
function getElementById(elementName) {
    return document.getElementById(elementName);
}
