<?php
$db = new mysqli('localhost', 'root', 'root', 'website'); 
// echo json_encode([
// 	'username' => $_GET['username'],
// 	'available' => true
// ]);

//header('Content-Type: text/plain'); 


?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Search PHP</title>
</head>
<body>
	<form action="username.php" method="get">
		<label>
			search
			<input type="text" name="keywords" autocomplete="off">
			<input type="submit" value="search">
		</label>
	</form>
	
</body>
</html>