function sendInvite(){
	var xmlrqst = new XMLHttpRequest();
	xmlrqst.open("POST", "https://api.linkedin.com/v2/invitations", true);
	xmlrqst.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlrqst.send("invite.json");
	document.getElementById("apiButt").innerHTML="Request Sent!";
}