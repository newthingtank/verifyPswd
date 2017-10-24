// and inserted into the web page when page is loaded

var imageShowFlag = true;   // global variable

// **************************************
// onload event handler called at startup
function init() {
    document.getElementById("registerform").style.visibility = "hidden";
    document.getElementById("after").style.visibility = "hidden";
}

// ***************************************
// event handler attached to btnRun button
function procSave() {
    if (document.getElementById("Password1").value == document.getElementById("Password2").value) {
        alert("The two passwords match");
    }
    else{
        alert("The two passwords don't match");
    }
    //var textBox = document.getElementById("txtData").value + " " + document.getElementById("txtData2").value;
   // document.getElementById("lblOutput").style.visibility = "visible";
    //document.getElementById("lblOutput").innerHTML = textBox;
}

// ********************
// mouseover set colour
function setBGColour(ref) {
    ref.style.backgroundColor = "Red";
}

// ************************
// mouseout return to white
function unsetBGColour(ref) {
    ref.style.backgroundColor = "White";
}

// *****************************************
// mouseover image button... load new image
function mouseOver(myPic1) {
    document.getElementById("myPic1").src = "images/FacebookSelected.ico";
//    document.getElementById("myPic2").src = "images/GoogleGray.ico";
//    document.getElementById("myPic3").src = "images/WinLiveGray.ico";
//    document.getElementById("myPic4").src = "images/YahooGray.ico";
}

// ************************************************
// mouseout of image button ... load original image
function mouseOut(myPic1) {
    document.getElementById("myPic1").src = "images/FacebookDepressed.ico";
//    document.getElementById("myPic2").src = "images/GoogleGray.ico";
//    document.getElementById("myPic3").src = "images/WinLiveGray.ico";
//    document.getElementById("myPic4").src = "images/YahooGray.ico";
}

function mouseOver(myPic2) {
  
        document.getElementById("myPic2").src = "images/GoogleSelected.ico";
  
}

// ************************************************
// mouseout of image button ... load original image
function mouseOut(myPic2) {
   
       document.getElementById("myPic2").src = "images/GoogleDepressed.ico";
   
}

function mouseOver(myPic3) {
  
       document.getElementById("myPic3").src = "images/WinLiveSelected.ico";
}

// ************************************************
// mouseout of image button ... load original image
function mouseOut(myPic3) {
        document.getElementById("myPic3").src = "images/WinLiveDepressed.ico";

}

function mouseOver(myPic4) {
       document.getElementById("myPic4").src = "images/YahooSelected.ico";
}

// ************************************************
// mouseout of image button ... load original image
function mouseOut(myPic4) {
        document.getElementById("myPic4").src = "images/YahooDepressed.ico";
}
// *********************************************************
// use imageShowFlag to determine if image button is visible


// ***************************************************
// onclick event handler called when button is clicked
function youClickedMe() {
    alert("a link event handler");
}

function showform()
{
    document.getElementById("registerform").style.visibility = "visible";
    document.getElementById("MyLink").style.visibility = "hidden";
    document.getElementById("before").style.visibility = "hidden";
    document.getElementById("after").style.visibility = "visible";

    document.getElementById("myPic1").src = "images/FacebookGray.ico";
    document.getElementById("myPic2").src = "images/GoogleGray.ico";
    document.getElementById("myPic3").src = "images/WinLiveGray.ico";
    document.getElementById("myPic4").src = "images/YahooGray.ico";

    document.getElementById("MyLink1").style.color = "grey";
}

function CancelShow()
{
    document.getElementById("Password1").value = "";
    document.getElementById("Password2").value = "";
    document.getElementById("txtData").value = "";
}