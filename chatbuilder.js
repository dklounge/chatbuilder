// iterator to pass as argument to Chat.fetch
var _each = function(array) {
//for (var i = 0; i < array.length; i++) {
  // removed for loop because you only need to display one line
  Chat.display(array[array.length-1]);
};

// Implementation of setInterval - use quotes - setInterval("function()", 3000);

// Perform an asynchronous http request using jQuery
// var getValue = $.ajax(Chat.fetch(_each));

// var getMessage = function() {
//   var message = Chat.fetch(_each);
//   return message;
// };

// Method to display chat to Client


// Method to fetch chat from the server


