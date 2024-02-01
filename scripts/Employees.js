import { getEmployees,getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                     data-employeeid="${employee.id}"
                     data-employeename="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click",(clickedOnEmployee)=>{
    const employeeElement=clickedOnEmployee.target;
    const employeeId=employeeElement.dataset.employeeid;
    let productsSold=0;
    if(employeeElement.dataset.type=="employee")
    {
        const ordersList=getOrders();
        for(const order of ordersList){
            if(parseInt(employeeId)===order.employeeId){
                productsSold++;
            }
        }
        window.alert(`${employeeElement.dataset.employeename} sold ${productsSold} products`)
    }


})

