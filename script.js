


var val = document.getElementById("hi");

function hello(){
    for (var i = 0; i < val.length; i++){
        val[i].style.display = "none";
    }
    
}

function incorrect(){
    for (var i = 0; i < val.length; i++){
        val[i].style.display = "block";
    }
    
}

var body = document.body;

var titleDiv = document.createElement("div");

var title = document.createElement("h2");
title.innerText = ("FORMA");

var form = document.createElement("form");
form.setAttribute('name', "login");
//form.setAttribute('action', "google.com");
form.setAttribute('method', "post");
form.setAttribute('onsubmit', "return validForm()");


var userAge = document.createElement("input");
userAge.setAttribute('type', "text");
userAge.setAttribute('name', "age");
userAge.setAttribute('placeholder', "How old are you?");

var userName = document.createElement("input");
userName.setAttribute('type', "text");
userName.setAttribute('name', "username");
userName.setAttribute('placeholder', "Create your super nickname: user_");

var date = document.createElement("input");
date.setAttribute('type', "text");
date.setAttribute('name', "date");
date.setAttribute('placeholder', "Current date: dd/mm/yyyy");

var submitBut = document.createElement("input");
submitBut.setAttribute('type', "submit");
submitBut.setAttribute('value', "Validate");

titleDiv.appendChild(title);
form.appendChild(titleDiv);
form.appendChild(userAge);
form.appendChild(userName);
form.appendChild(date);
form.appendChild(submitBut);
body.appendChild(form);

//regular expression for form inputs:
function validUserAge(userAge) {
    var regAge = /^\d+$/;
    return regAge.test(userAge);
}

function validUserName(userName) {
    var regName = /^user_[a-z0-9@]/;
    return userName.match(regName);
}

function validDate(date) {
    var regDate = newCurrentDate ();
    return date.match(regDate);
}

//form validation:
function validForm() {
    // Validate Age
    if (!validUserAge(userAge.value) || userAge.value === "" || userAge.value == 0 || userAge.value > 105) {
        incorrect();
        alert("Incorrect age value");
        userAge.value = "";
        return false;
    }
    // Validate Username
    else if (!validUserName(userName.value) || userName.value === "") {
        incorrect();
        alert("Incorrect username value");
        userName.value = "";
        return false;
    }
    // Validate Date
    else if (!validDate(date.value) || date.value === "") {
        incorrect();
        date.value = "";
        alert("Incorrect date format");
        return false;
    }
    else {
        hello();
        alert("Welcome " + userName.value + "!!!");
        return true;
    }
}


//Current Date
function newCurrentDate () {
    var currentDate = new Date();
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth()+1;
    var yyyy = currentDate.getFullYear();
   
   currentDate = dd +"/"+ mm + "/"   + yyyy;
   
   return currentDate;
}
 
