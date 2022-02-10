const loginDetails = [];

function getLoginInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username != "" && password != "") {
    for (i = 0; i < loginDetails.length; i++) {
      if (
        username == loginDetails[i].username &&
        password == loginDetails[i].password
      ) {
        console.log("Successful Login! Welcome: " + username);
        return;
      }
    }
    console.log("Incorrect Username or Password!");
  } else {
    console.log("Please do not leave fields blank!");
  }
}

function clearLoginInfo() {
  var username = "";
  document.getElementById("username").value = "";
  var password = "";
  document.getElementById("password").value = "";
}

function navRegistration() {
    window.location.href = "register.html";
}


function registerUser() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    
    if(name != "" && surname != "") {
        loginDetails.push({username:name, password:surname})
        console.log("Successfully registered: " + name)
        document.getElementById("name").value = ""
        document.getElementById("surname").value = ""
    }
    else{
        console.log("Please fill in all fields!")
    }
    //Learning to display all added items to table
    var html = "<ul>"
    for(i = 0;i < loginDetails.length; i++) {
        html += "<li>" + loginDetails[i].username + " " + loginDetails[i].password + "</li>";
    }
    html += "</ul>"
    console.log({html})
    document.getElementById("clientList").innerHTML = html
}

