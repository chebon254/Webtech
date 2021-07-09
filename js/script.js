
function changeLocation() {
    document.location='contact.html'
}


var mySidebar = document.getElementById("mySidebar");

function open_menu() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function close_menu() {
    mySidebar.style.display = "none";
}





// ----------  Modal More about developer



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var a = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
window.onload = function () {
    // your code 
    btn.onclick = function () {
        modal.style.display = "block";
    }
};
// When the user clicks on <span> (x), close the modal
a.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// ----------  || End Modal More about developer
