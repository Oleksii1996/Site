<?php
	$name = $_POST['name']; 
	$adress = $_POST['adress'];
	$telephone = $_POST['telephone'];
	$order = $_POST['order'];

	$new_value = array( array ('name'=>$name,'adress'=>$adress,'telephone'=>$telephone,'order'=>$order) );

	$arr_data = file_get_contents('orders.json');

	$arr_data = json_decode($arr_data);

	for ($i = 0; $i < count($arr_data); ++$i) {
		array_push($new_value, $arr_data[$i]);
	}

	$new_value = json_encode($new_value);

	$fp = fopen('orders.json', 'r+');
	fwrite($fp, $new_value);
	fclose($fp);

	//echo "Ваши данные успешно были отправлены на сервер.";

	header("Location: ".$_SERVER['HTTP_REFERER']);
?>