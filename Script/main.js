// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//IMAGE CHANGE WHEN MOUSE HOVERS OVER
function cngImg()
{
  let imgChange = document.getElementById("eb");
  imgChange.src = "Images/eb.jpg"
}

function rtrnImg()
{
  let imgChange = document.getElementById("eb");
  imgChange.src = "Images/ebbl.jpg"
}

function newImg()
{
  let imgChange = document.getElementById("ym");
  imgChange.src = "Images/trbx174.jpg"
}

function ogImg()
{
  let imgChange = document.getElementById("ym");
  imgChange.src = "Images/acctrbx.jpg"
}

function changeImageSq()
{
  let imgChange = document.getElementById("sqjag");
  imgChange.src = "Images/jag.jpg"
}

function returnImageSq()
{
  let imgChange = document.getElementById("sqjag");
  imgChange.src = "Images/squierjag.jpg"
}


function changeImage()
{
  let imgChange = document.getElementById("piano1");
  imgChange.src = "Images/yamp2.jpg"
}

function returnImage()
{
  let imgChange = document.getElementById("piano1");
  imgChange.src = "Images/yamp45.jpg"
}

function changeImagedp()
{
  let imgChange = document.getElementById("thdp");
  imgChange.src = "Images/thdp26.jpg"
}

function returnImagedp()
{
  let imgChange = document.getElementById("thdp");
  imgChange.src = "Images/dp26.jpg"
}

function changeImagerol()
{
  let imgChange = document.getElementById("rolpiano");
  imgChange.src = "Images/rol.jpg"
}

function returnImagerol()
{
  let imgChange = document.getElementById("rolpiano");
  imgChange.src = "Images/rolp.jpg"
}

//FORM VALIDATION
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["group"].value;
  if (x == "") {
    alert("Please select at least one option");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["language"].value;
  if (x == "") {
    alert("Please select one option");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["region"].value;
  if (x == "") {
    alert("Please select a region");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["question"].value;
  if (x == "") {
    alert("Please enter question or suggestion");
    return false;
  }
}

function funFact() {
  document.getElementById("demo").innerHTML = "Yamaha produces musical instruments and nice vehicles! They are a super diverse and incredible company!";
}
