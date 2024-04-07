<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Multiplication Table</title>
<style>
    table {
        border-collapse: collapse;
    }
    table, th, td {
        border: 1px solid black;
        padding: 8px;
    }
</style>
</head>
<body>

<?php
function printMultiplicationTable($number) {
    echo '<table>';
    echo '<tr><th></th>';
    for ($col = 0; $col <= $number; $col++) {
        echo '<th>' . $col . '</th>';
    }
    echo '</tr>';

    for ($row = 0; $row <= $number; $row++) {
        echo '<tr>';
        echo '<th>' . $row . '</th>'; // Row index
        for ($col = 0; $col <= $number; $col++) {
            echo '<td>' . ($row * $col) . '</td>';
        }
        echo '</tr>';
    }
    echo '</table>';
}

$fixedNumber = isset($_GET['number']) ? intval($_GET['number']) : 9;


if (!is_numeric($fixedNumber) || $fixedNumber < 0 || $fixedNumber != round($fixedNumber)) {
    echo "<p>Please enter a non-negative integer.</p>\n";
} else {
    printMultiplicationTable($fixedNumber);
}
?>

</body>
</html>