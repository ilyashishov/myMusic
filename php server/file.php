<html>
<head>
  <title>myMusic</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
</head>
<body>
  <?php
  if($_FILES["filename"]["size"] > 1024*20*1024)
  {
   echo ("Размер файла превышает три мегабайта");
   exit;
 }
   // Проверяем загружен ли файл
 if(is_uploaded_file($_FILES["filename"]["tmp_name"]))
 {
     // Если файл загружен успешно, перемещаем его
     // из временной директории в конечную
   $name = explode('.', $_FILES["filename"]["name"]);
   move_uploaded_file($_FILES["filename"]["tmp_name"], "C:\project\myMusic\codegenerator_js\\file\\".'tets.'.$name[count($name)-1]);
   if( $curl = curl_init() ) {
    curl_setopt($curl, CURLOPT_URL, 'http://localhost:3000/query');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, "name=test.".$name[count($name)-1]);
    $out = curl_exec($curl);
    echo $out;
    curl_close($curl);
  }
} 
else {
  echo("Ошибка загрузки файла");
}

?>
</body>
</html>