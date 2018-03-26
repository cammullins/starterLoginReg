$(document).ready(function () {

    // Getting a reference to the input field where user creates a new account
  var newNameInput = $("#inputName");
  var newEmailInput = $("#inputEmail");
  var newPasswordInput = $("#inputPassword");



  // Adding event listeners for creating new users
    $(document).on("click", "#creatAccountForm", insertUser);

  // This function inserts a new todo into our database and then updates the view
  function insertUser(event) {
      event.preventDefault();
      var user = {
          name: newNameInput.val().trim(),
          email: newEmailInput.val().trim(),
          password: newPasswordInput.val().trim(),
      };

      console.log(user);

      $.post("/api/user", user)
      .then( function (data) {
      $("#createAccountModal").modal("toggle");
      }).catch( function (err) {

        var code = err.status;
        var errorMessage;

        switch (code) {
          case 400: 
              errorMessage = "You filled out the user registration form incorrectly.";
              break;
          default:
              errorMessage = "Uknown error.";
        }
        
        alert(errorMessage);

      });

      newNameInput.val("");
      newEmailInput.val("");
      newPasswordInput.val("");

  };
});