<?php
$password = $_GET['password'];
$email = $_GET['email'];
$name = $_GET['name'];
$subject = 'zedric chat group';
$message = '
<html>
    <meta charset="UTF-8">
<head>
<body style="background-color: rgb(249, 252, 212);">
    <center>
    <br>
    <br>
    <br>
    <H1 style="color: #600794; font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;">Добрый день, '. $name .' вы проходите регистрацию в социальной сети zedric chat<br>Спасибо что выбрали нас!</H1>
    <br>
    <br>
    <br>
    <h1 style="color: #071094; font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; font-size: 50px;">ваш код:'. $password .'</h1>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1 style="color: #000000; font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; font-size: 12px;">с уважением zedric chat group</h1>
    <br>
    <br>
    <br>
    </center>
</body>
</html>
';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <zedricchat@gmail.com>' . "\r\n";


mail($email,$subject,$message,$headers);
?>