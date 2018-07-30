<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Post task</title>
</head>

<body>
	<form action="addTask.php" method="POST">
		<input type="text" name="title">
		<input type="text" name="details">
		<input type="text" name="priority">
		<button type="submit" name="submit">Submit</button>
	</form>
</body>

</html>