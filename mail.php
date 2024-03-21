<?php 

session_start(); 

$name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
$from = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_SANITIZE_EMAIL) : "";
if (!$from) {
    exit("Nieprawidłowy adres e-mail");
}
$number = isset($_POST["tel"]) ? htmlspecialchars($_POST["tel"]) : "";
$message = isset($_POST["msg"]) ? htmlspecialchars($_POST["msg"]) : "";

$expected_host = "http://testnat.hmcloud.pl/";
$parsed_url = parse_url($_SERVER['HTTP_REFERER']);
if ($parsed_url['host'] != $expected_host) {
    exit("Nieprawidłowe pochodzenie formularza");
}

$csrf_token = bin2hex(random_bytes(32));
$_SESSION['csrf_token'] = $csrf_token;

$subject = "Wiadomość z formularza na stronie Bogumił Olczak - Radca Prawny";
$to = "naticz2002@gmail.com";
$txt = "imię i nazwisko/Nazwa Firmy: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Numer kontaktowy: " . $number . "\r\n" . "\r\n" . "Treść: " . $message;
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);
if ($mail_status) {

    header("Location: /index.html?mail_status=sent");
} else {
    header("Location: /index.html?mail_status=error");
}

?> 