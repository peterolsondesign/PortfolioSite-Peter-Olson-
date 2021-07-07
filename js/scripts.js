console.log("Welcome to my Portfolio! I hope you enjoy your visit! :)")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle'){
   x.className += ' responsive';
 }
 else {
   x.className = 'navtoggle';
 }
}
