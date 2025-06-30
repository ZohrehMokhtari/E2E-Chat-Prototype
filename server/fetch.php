<?php
include 'db.php';
$result = $conn->query("SELECT message, created_at as time FROM messages ORDER BY id DESC LIMIT 20");
$rows = [];
while($r = $result->fetch_assoc()) {
    $rows[] = $r;
}
echo json_encode(array_reverse($rows));
?>
