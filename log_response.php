<?php
try {
  $db = new SQLite3('./test.db');
} catch(PDOException $e) {
  echo $e->getMessage();
}
if ($db) {
    $canvas = $_REQUEST['canvas'];
    $answer = $_REQUEST['answer'];
    $address = $_REQUEST['address'];
    $receptive = $_REQUEST['receptive'];
    $comment = $_REQUEST['comment'];

    // log user information
    $stmt = $db->prepare("INSERT OR IGNORE INTO canvas(canvas, address, answer, receptive, comment, Timestamp)
            VALUES ('$canvas', '$address', '$answer', '$receptive', '$comment', datetime('now', 'localtime'))");
    $stmt->execute();
}
else {
    echo "db not set up!!";
}

?>