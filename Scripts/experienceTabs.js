function openTab(evt, jobName) {
  // Declare all variables
  var i, tabcontent, button;

  // Get all elements with class="exp" and hide them
  //these should all be display:none already in the css though
  tabcontent = document.getElementsByClassName("exp");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //hide the summary blurb and add the "inactive" class to the heading for styling later
  document.getElementById("sumBlurb").style.display = "none";
  document.getElementById("carSum").className = "inactive";

  // Get all elements with tag="button" and remove the class "active"
  button = document.getElementsByTagName("BUTTON");
  for (i = 0; i <button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }

  //Show the current tab
  document.getElementById(jobName).style.display = "block";
  evt.currentTarget.className += " active";
  //change the cursor because this was not working in css for some reason
  document.getElementById("carSum").style.cursor = "pointer";
}

//another function to show the summary blurb
function openSum(evt) {
//declaring variables
  var i, tabcontent, button, sum;
//hide job summaries
  tabcontent = document.getElementsByClassName("exp");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
//set the buttons back to default styling
  button = document.getElementsByTagName("BUTTON");
  for (i = 0; i <button.length; i++) {
    button[i].className = button[i].className.replace(" active", "");
  }

//show the summary blurb and remove the "inactive" id tag for styling
  document.getElementById("sumBlurb").style.display = "block";
  document.getElementById("carSum").classList.remove("inactive");
  //change the cursor because this was not working in css for some reason
  document.getElementById("carSum").style.cursor = "default";

}

