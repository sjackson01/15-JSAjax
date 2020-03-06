<?php # Script 15.9 - login_ajax.php 
// This script is called via Ajax from the login.php 
// The script expects to receive two value in the URL: an email address and a password.
// The script returns a string indicating the results.

// Need two pieces of information
if (isset($_GET['email'], $_GET['password'])){

    // Need a valid email address
    if (isset($_GET['email'], FILTER_VALIDATE_EMAIL)){

        // Must match specific values:
        if (($_GET['email'] == 'email@example.com') && ($_GET['password']) == 'testpass')){
            // Set a cookie, if you want or start a session
    
            // Indicate success 
            echo 'Correct';
        }else{ // Mismatch
            echo 'INCORRECT';
        }    
    } else { // Invalid Email address 
        echo 'Invalid Email'; 
    }
}else{ // Missing one of the two variriables!
    echo 'INCOMPLETE';
}
}