// iterator to pass as argument to Chat.fetch
var _each = function(array) {
for (var i = 0; i < array.length; i++) {
  console.log(array[array.length-1]);
  return array[array.length-1];}
};

// Perform an asynchronous http request using jQuery
var getValue = $.ajax(Chat.fetch(_each));

// Method to display chat to Client


// Method to fetch chat from the server


