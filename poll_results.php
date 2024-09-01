<?php
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

$day = $input['day'] ?? '';

// Here you would save $day to a database and retrieve poll results
// For now, just return a success message
echo json_encode(['status' => 'success']);
?>
