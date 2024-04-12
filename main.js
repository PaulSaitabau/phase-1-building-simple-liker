// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Function Definitions
function mimicServerCall(url) {
  // Placeholder for server call simulation
  return new Promise((resolve, reject) => {
     setTimeout(() => resolve(), 1000); // Simulate a successful server call
  });
 }
 
 function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
     .then(function(){
       if (heart.innerText === EMPTY_HEART) {
         heart.innerText = FULL_HEART;
         heart.className = "activated-heart";
       } else {
         heart.innerText = EMPTY_HEART;
         heart.className = "";
       }
     })
     .catch(function(error) {
       const modal = document.getElementById("modal");
       modal.className = ""; // Ensure the modal is not hidden by default classes
       modal.innerText = error;
       modal.classList.remove("hidden"); // Show the modal
       setTimeout(() => {
         modal.classList.add("hidden"); // Hide the modal after 3 seconds
       }, 3000);
     });
 }
 
 // Main Execution
 const articleHearts = document.querySelectorAll(".like-glyph");
 
 for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
 }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
