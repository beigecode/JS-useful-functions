    function checkUsersValid(goodUsers) {

      return function(submittedUsers) {
        return submittedUsers.every(function(sUser) { 
          return goodUsers.some(function(gUser) {
            return sUser.id === gUser.id;
          }) 
        })
      }

    }
    
    module.exports = checkUsersValid
