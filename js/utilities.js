
function addamount(elementId){
    const managerAmount= document.getElementById(elementId);
    const managerAmountString = managerAmount.value;
    const newmanagerAmount = parseInt(managerAmountString);
    return newmanagerAmount;
}