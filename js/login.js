// Script 15.10 - login.js
// This script is included by login.php.
// This script handles and validates the form submission.
// This script then makes an Ajax request of login_ajax.php

// Do something when the document is ready:

$(function() {
  // Hide all error messages:
  $(".errorMessage").hid();

  // Assign anevent handler to the form:
  $("#login").submit(function() {
    // Initialize some variables: var email, password;
    var email, password;

    // Validate the email address
    if ($("#email").val().length >= 6) {
      // Get the email address:
      email = $("#email").val();

      // Clear an error,if one existed
      $("$emailP").removeClass("error");

      // Hide error messsage, if it was visible
      $("#email").hide();
    } else {
      //Invalide email

      // Add an error class
      $("#emailP").addClass("error");

      // Show the error message:
      $("#emailError").show();
    }
    // If appropriate, perform the Ajax request:
    if (email && password) {
      // Create an object for the form data:
      var data = new Object();
      data.email = email;
      data.password = password;

      // Create an object of Ajax options:
      var options = new Object();

      // Establish each setting:
      options.data = data;
      options.dataType = "text";
      options.type = "get";
      options.success = function(response) {
        // Worked:
        if (response == "CORRECT") {
          // Hide the form:
          $("#login").hide();

          // Show a message:
          $("#results").removeClass("error");
          $("#results").text("You are now logged in!");
        } else if (response == "INCORRECT") {
          $("#results").text(
            "The submitted credentials do not match those on file!"
          );
          $("#results").addClass("error");
        } else if (response == "INCOMPLETE") {
          $("#results").text("Please provide an email address and a password!");
          $("#results").addClass("error");
        } else if (response == "INVALID_EMAIL") {
          $("#results").text("Please provide your email address!");
          $("#results").addClass("error");
        }
      }; // End of success.
      options.url = "login_ajax.php";

      // Perform the request:
      $.ajax(options);
    } // End of email && password IF.

    // Return false to prevent an actual form submission:
    return false;
  }); // End of form submission.
}); // End of document ready.
