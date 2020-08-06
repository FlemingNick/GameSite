<?php

if(isset($_POST['Submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $newsletter = $_POST['newsletter'];
    $newsletterSubscription = "";

    if($newsletter){
        $newsletterSubscription = "Wants to receive the Newsletter!";
    }

    $mailTo = "fleming.nickelsen@hotmail.de";
    $headers = "From: " . $mailFrom;
    $txt = "You have received an e-mail from ". $name . ".\n\n" . $message . "\n\n" . $newsletterSubscription;

    mail($mailTo, $txt, $headers);
    header("Location: http://localhost:3000/contact?mailsend");
}