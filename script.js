var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



// to check viewport 

// Function to check if an element is in the viewport
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function addAnimation() {
    var element1 = document.getElementById("left");
    var element2 = document.getElementById("right");
    var element3 = document.getElementById("center");
    var element4 = document.getElementById("text");
    var drop1 = document.getElementById("drop1");
    var left1 = document.getElementById("left1");
    var bottom = document.getElementById("bottom-up");
    if (isInViewport(element1)) {
        element1.classList.add("drop-in");
    }
    if (isInViewport(element2)) {
        element2.classList.add("drop-right");
    }
    if (isInViewport(element3)) {
        element3.classList.add("drop-down");
    }
    if (isInViewport(element4)) {
        element4.classList.add("drop-down");
    }
    if (isInViewport(drop1)) {
        element4.classList.add("drop-down");
    }
    if (isInViewport(left1)) {
        element4.classList.add("drop-in");
    }
    if (isInViewport(bottom)) {
        element4.classList.add("bottom-up");
    }

}

window.addEventListener('scroll', addAnimation);


function changeImage(imageName) {

    document.getElementById('mainImage').src = imageName;
  }