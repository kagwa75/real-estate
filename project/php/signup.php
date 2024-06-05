<?php
$servername = "localhost";
$username= "root";
$dbname = "kagwanja";
$conn =new mysqli($servername,$username,$dbname);
if($conn->connect_error) {
    die("connection failed:" .
        $conn->connect_error);
    
}

if(isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT username FROM users WHERE username= '$username'";
    $result = mysqli_query($conn, $sql);
    $count_username = mysqli_num_rows($result);

    $sql = "SELECT email FROM users WHERE email= '$email'";
    $result = mysqli_query($conn, $sql);
    $count_email = mysqli_num_rows($result);

    if ($count_username == 0 & $count_email == 0) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO students(username, email, password)VALUES(?,?,?)";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            header("Location:home.html");
        }

    } else {
        if ($count_username > 0) {
            echo("username exists");
            header("Location: signup.html");
        }
        if ($count_email > 0) {
            echo("email exists");
            header("Location: signup.html");
        }
    }
}

