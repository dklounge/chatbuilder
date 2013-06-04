// iterator to pass as argument to Chat.fetch
var _each = function(array) {
//for (var i = 0; i < array.length; i++) {
  // removed for loop because you only need to display one line
  Chat.display(array[array.length-1]);
};

// Implementation of setInterval - use quotes - setInterval("function()", 3000);

// jQuery to grab button element and event listener

$(document).ready(function() {
  $('.send').click(function() {
    // Chat.send($('.draft').val());
  });
});