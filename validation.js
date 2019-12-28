function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "cosmos" && password == "cosmos123"){
window.location = "index.html";
return false;
}
else if(username=="" && password == "")
{
	alert("Please Enter your login details")
}
else
{
	alert("Credentials Not matched")
}
}