

var i = 0;      // Start Point
var images = [];  // Images Array
var time = 2000;  // Time Between Switch
   
// Image List
images[0] = "images/ss.jpg";
images[1] = "images/ss9.jpg";
images[2] = "images/ss13.jpg";
images[3] = "images/ss14.jpg";
images[4] = "images/ss17.jpg";
images[5] = "images/ss10.jpg";
images[6] = "images/ss11.jpg";
images[7] = "images/ss12.jpg";

// Change Image
function changeImg(){
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if(i < images.length - 1){
    // Add 1 to Index
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg







var i = 0;      // Start Point
var images = [];  // Images Array
var time = 2000;  // Time Between Switch
   
// Image List
images[0] = "images/ss.jpg";
images[1] = "images/ss9.jpg";
images[2] = "images/ss13.jpg";
images[3] = "images/ss14.jpg";
images[4] = "images/ss17.jpg";
images[5] = "images/ss10.jpg";
images[6] = "images/ss11.jpg";
images[7] = "images/ss12.jpg";

// Change Image
function changeImg(){
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if(i < images.length - 1){
    // Add 1 to Index
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg











