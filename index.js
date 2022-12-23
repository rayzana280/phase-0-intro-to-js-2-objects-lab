// Write your solution in this file!
const employee = {
    name : 'ray',
    streetAddress : '101 street'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee1 = {...employee}
    employee1[key] = value 
    return employee1
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value 
    return employee
}

function deleteFromEmployeeByKey(employee, key){
//make a copy of object 
const employee2 = {...employee}
//delete key from new object 
delete employee2[key];
//return new object 
return employee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}