/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  var gunsUp = $('#gunsUp'); 
  var strat = $('#strat');
  var disney = $('#disney');
  
  function loadGuns() {
    gunsUp.html('<div class="embed-responsive embed-responsive-16by9">' +
      '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HSV283fQxyo" frameborder="0" allowfullscreen></iframe></div>');
  }; 

  window.onload = function () {
    setTimeout(loadGuns, 2000);
  };
    
  function loadStrat() {
    strat.html('<div class="embed-responsive embed-responsive-16by9">' + 
      '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fLywItYlWc0" frameborder="0" allowfullscreen></iframe></div>');
  };
  
  window.onload = function() {
    setTimeout(loadStrat, 2000);
  };
   console.log('working');
  
  function loadDisney() {
    disney.html('<div class="embed-responsive embed-responsive-16by9">' + 
      '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8BPPBSDwRXk" frameborder="0" allowfullscreen></iframe></div>');
  };
  
  window.onload = function() {
    setTimeout(loadDisney, 2000);
  };
  
});
