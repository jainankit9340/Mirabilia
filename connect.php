 <div class="contact_form_shortcode">
    <form id="contact-form" method="post" action="contact.php" role="form">
        <div class="messages"></div>
        <div class="controls">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Your Name *" required="required" data-error="Enter Your Name">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <input type="text" name="subject" required="required" placeholder=" Subject  (Optional)">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <textarea name="message" placeholder="Additional Information... (Optional) " rows="3" required="required" data-error="Please, leave us a message."></textarea>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group mg_top apbtn">
                        <button class="theme_btn" type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>



<script>

$(function() {


$('#contact-form').validator();


// when the form is submitted
$('#contact-form').on('submit', function(e) {

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
        var url = "contact.php";

        // POST values in the background the the script URL
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: $(this).serialize(),
            success: function(data) {
                // data = JSON object that contact.php returns

                // we recieve the type of the message: success x danger and apply it to the 
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                // let's compose Bootstrap alert box HTML
                var alertBox = '<div class="alert ' + messageAlert + '  alert-dismissible fade show">  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' + messageText + '</div>';

                // If we have messageAlert and messageText
                if (messageAlert && messageText) {
                    // inject the alert to .messages div in our form
                    $('#contact-form').find('.messages').html(alertBox);
                    // empty the form
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
})
});
</script>




<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will be in the From field of the email.
$from = 'ANKIT <jainankit9340@gmail.com>';

// an email address that will receive the email with the output of the form
$sendTo =  "jainankit9340nd@gmail.com";

// subject of the email
$subject = 'Contact details received on AMPCPA.CA';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Name' , 'email' =>'Email'  , 'subject' => 'Subject', 'message' => 'Message'); 

// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);


    if(count($_POST) == 0) throw new \Exception('Form is empty');
            
    $emailText = "You have a new message from your contact form\n=============================\n";

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    // Send email
   
    
     if ( mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
      $responseArray = array('type' => 'success', 'message' => $okMessage);
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
   } else {
      echo("Email sending failed...");
   }
?>
 
  


 