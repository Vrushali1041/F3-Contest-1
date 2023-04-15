var nameInput = document.getElementById("name");
var profession = document.getElementById("profession");
var age = document.getElementById("age");
var addUserBtn = document.getElementById("add-user");
var statusMsg = document.getElementById("error-msg");

var employees = [];

addUserBtn.addEventListener("click", () => {
    if (nameInput.value == "" || profession.value == "" || age.value == "") {
        statusMsg.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !"
        statusMsg.style.color = "#ff0000";
        statusMsg.style.display = "block";
    }
    else {
        statusMsg.innerHTML = "Success : Employee Added!"
        statusMsg.style.color = "#008000";
        statusMsg.style.display = "block";

    var employee = {
        id: employees.length + 1,
        nameInput: nameInput.value,
        profession: profession.value,
        age: age.value
    }
    // employees.push({ id, nameInput, profession, age });

    employees.push(employee);
    nameInput.value ="";
    profession.value = "";
    age.value = "";
    console.log(employees);

printEmp();
}
});

function printEmp(){
    let str="";
    for(let employee of employees){
      str+=`
      <div class="emp-card">
      <div class="details">
          <span>${user.id}.</span>
          <span>Name: ${user.name}</span>
          <span>Profession: ${user.profession}</span>
          <span>Age: ${user.age}</span> 
      </div>
      <button id="del-btn" onclick="deleteUser(${user.id})">Delete User</button>
      </div>
      `
    };

    document.querySelector(".employeesList").innerHTML = str;
}

function deleteEmp(del_id){
    for(let i = 0; i < employees.length; i++){
        if(employees[i].id == del_id){
            employees.splice(i, 1);
        }
    }
    let newid=1;
    for(let employee of employees){
        employee.id = newid;
        newid++;
    }
    console.log(employees);
    printEmp();
    alert("User deleted sucessfully");
    checkEmptyUsers();
}

function checkEmptyUsers(){
    let emplicont = document.querySelector(".employeesList");

    if(emplicont.innerHTML.trim()==""){

        emplicont.innerHTML =  "<p>You have 0 Employees.</p>"
    }
    
};

checkEmptyUsers();
  
