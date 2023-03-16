//assign variables to each input box to grab the value of it later and store 
const createCustomerName = document.getElementById("name");
const createCustomerNumber = document.getElementById("number");
const createCustomerTarget = document.getElementById("improvementArea");
const createButton = document.getElementById("createButton");
//assign variables to each update customer input box to get the value later to update 
const customerNameToUpdate = document.getElementById("customerNameToUpdate");
const updateCustomerNumber = document.getElementById("updateNumber");
const updateCustomerTarget = document.getElementById("updateImprovementArea");
const updateButton = document.getElementById("updateCustomerButton");
//assign variable to control the delte input box and grab value to delete customer
const deleteCustomerName = document.getElementById("deleteName");
const deleteCustomerButton = document.getElementById("deleteCustomerButton");
//assign variable to div box that holds the read button
//const readButton = document.getElimentById("prospectList");
//const popUpText = document.getElementById("myPopup");
//assign variable to each form create update delete
const createForm = document.getElementById("createForm");
const updateForm = document.getElementById("updateForm");
const deleteForm = document.getElementById("deleteForm");
//assign variables to view prospect list and popUp
const prospectList = document.getElementById("prospectList");
const popUpText = document.getElementById("myPopup");

//checking to make sure each variable is pulling the right information
console.log(createCustomerName, createCustomerNumber, createCustomerTarget, 
    createButton, customerNameToUpdate, updateCustomerNumber, updateCustomerTarget, updateButton,
    deleteCustomerName, deleteCustomerButton, updateForm, createForm, deleteForm, prospectList, popUpText)

//creating functions for each button that will be used with the onclick method

//addCustomer() function
//first create a class to be able to create a new customer
class Customer {
    constructor(name, number, target){
        this.name = name;
        this.number = number;
        this.target = target;
    }
}

//creating an array to push the new customers to 
let myProspectList = [];

//adding event listeners to the add customer button
createButton.addEventListener("click", () => addCustomer(createCustomerName.value, createCustomerNumber.value, createCustomerTarget.value));
//the actual function that will run when the submit button is hit under
//add customer
function addCustomer(){
    myProspectList.push(new Customer(createCustomerName.value, createCustomerNumber.value, createCustomerTarget.value));
    createForm.onsubmit();
    createForm.reset();
    return false;
}

console.log(myProspectList); //checking to see if array is really being made

deleteCustomerButton.addEventListener("click", () => deleteCustomer(deleteCustomerName))

//function for the delete customer button
function deleteCustomer(){
    let removeCustomer = deleteCustomerName.value;
    let index = myProspectList.findIndex(e => e.name === removeCustomer); //finding the array index of the customers name input into the delete input box
    console.log(index)// logging the index to the console to be sure the above is actually pulling the right index number for the name entered
    myProspectList.splice(index, 1)
    deleteForm.onsubmit();
    deleteForm.reset();
    return false;
}

console.log(myProspectList); //checking to make sure the name was removed

//adding event listener to the update button
updateButton.addEventListener("click", ()=> updateCustomer(updateCustomerNumber.value, updateCustomerTarget.value));

function updateCustomer(){
    let name = customerNameToUpdate.value;
    let newNumber = updateCustomerNumber.value;
    let newTarget = updateCustomerTarget.value;
    let index2 = myProspectList.findIndex(e => e.name === name);
    console.log(index2);
    if(index2 !== -1) {
        myProspectList.push(new Customer(name, newNumber, newTarget));
    } else if (index2 === -1){
        alert("Sorry! This does not match any customers!")
    }
    myProspectList.splice(index2, 1);
    updateForm.onsubmit();
    updateForm.reset();
    return false;
}

//add event listener to prospectList button
prospectList.addEventListener("click", ()=> viewProspectList());

//creating function for the view prospect list event listener
function viewProspectList(){
    popUpText.addEventListener("click", ()=> openPopup());
    popUpText.click();
    return false;
}

//create openPopup function
function openPopup(){
    popUpText.innerHTML = "";
    for (var i=0; i<myProspectList.length; i++) {
        console.log(myProspectList) // checking to make sure the prospect list is consistent
        var popupMessage = JSON.stringify(myProspectList, null, 4);
        var p = document.createElement("p");
        console.log(p); //checking to make sure the element was created
        p.textContent = `${popupMessage}`;
        popUpText.appendChild(p);
        console.log(popUpText);
        alert(popupMessage);
        return false;
    }
}
