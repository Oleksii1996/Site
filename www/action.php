<?php
	$name=$_POST['name']; 
	$age = $_POST['age'];

	echo "Hello, $name. You are $age years old.\n";

	$str = "$name"."+$age";

	echo $str;
?>