/* 
Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

Arguments:

messages: an Array of 10 to 100 random objects that look something like this:
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}

*/



    function getShortMessages(messages) {
    
      return messages.filter(function(msg) { return msg.message.length < 50 })
              .map(function(item) { return item.message });
    }
    
    module.exports = getShortMessages
