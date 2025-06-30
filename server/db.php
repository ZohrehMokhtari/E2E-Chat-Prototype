<?php
$conn = new mysqli("localhost", "root", "", "chatapp");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
