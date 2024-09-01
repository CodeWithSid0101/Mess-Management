<?php
session_start();

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Dummy credentials
$valid_username = 'user';
$valid_password = 'password';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['loggedin'] = true;
        header('Location: message-management.html');
        exit;
    } else {
        echo '<p style="color:red; text-align:center;">Invalid credentials, please try again.</p>';
    }
}
?>
