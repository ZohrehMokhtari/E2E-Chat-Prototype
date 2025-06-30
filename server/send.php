<?php
include 'db.php';
$msg = $_POST['msg'] ?? '';
if ($msg != '') {
    $stmt = $conn->prepare("INSERT INTO messages (message) VALUES (?)");
    $stmt->bind_param("s", $msg);
    $stmt->execute();
}
?>
