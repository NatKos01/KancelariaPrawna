<?php

$name = $_POST["name"];
$from = $_POST["email"];
$number = $_POST["tel"];
$subject = "Wiadomość z formularza na stronie Bogumił Olczak - Radca Prawny";
$to = "naticz2002@wp.pl";
$message = $_POST["msg"];


$txt = "imię " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Numer kontaktowy: " . $number . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Replay-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("Location: /index.html?mail_status=sent");
}

else {
    header("Location: /index.html?mail_status=error");
}

