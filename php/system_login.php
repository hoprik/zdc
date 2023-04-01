<?php
    if (isset($_COOKIE["id"])){
        if (isset($_COOKIE["login"])){
            echo 1;
        }
        else{
            echo 0;
        }
    }
    else{
        echo 0;
    }
?>