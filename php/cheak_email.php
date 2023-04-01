<?php
  include 'server.php';

  $connect = mysqli_connect($host_db, $name_db, $password_db, $db_name);

  if ($connect == false){
      echo "error 1";
  }

  $email= $_GET['email'];

  $result = mysqli_query($connect, "SELECT * FROM users WHERE login='$email'");

  if (mysqli_num_rows($result) == 0){
    echo 1;
  }
  else{
    echo 0;
  }
?>