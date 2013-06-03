// string iterator to pass as argument to Chat.fetch
var _each = function(array) {
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
	return array[i];}
};

// to return Chat.fetch messages
var getValue = function getValue() {
  var message = Chat.fetch(_each);
  return message;
};

// Method to display chat to Client


// Method to fetch chat from the server


