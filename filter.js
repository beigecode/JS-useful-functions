    function getShortMessages(messages) {
    
      return messages.filter(function(msg) { return msg.message.length < 50 })
              .map(function(item) { return item.message });
    }
    
    module.exports = getShortMessages
