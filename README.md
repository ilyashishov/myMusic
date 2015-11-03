# Project 'myMusic'

Сборка 0.15. Для запуска приложения необходим [Windows Server](http://www.microsoft.com/ru-ru/server-cloud/products/windows-server-2012-r2/ "Windows Server")

## Установка.

### Для работы необходимы:

* Node.js
* MySQL
* Apache или Nginx
* PHP
* ffmpeg

#### node-echoprint-server

В папке [node-echoprint-server](https://github.com/ilyashishov/myMusic-server/tree/master/node-echoprint-server "node-echoprint-server") установить все npm зависимости.

	npm install

Создать новую базу данных в MySQL и восстановить дамп(mysql.sql).

В файле config.js настроить подключение к бд.

#### codegenerator_js

В папке [codegenerator_js](https://github.com/ilyashishov/myMusic-server/tree/master/codegenerator_js "codegenerator_js") установить все npm зависимости.

Добавить в PATH("Переменные среды") путь к ffmpeg и к папке echoprint-codegen-windows


#### php server

Содержимое папки [php server](https://github.com/ilyashishov/myMusic-server/tree/master/php%20server "php server") скопировать в Apache.

## Запуск

Запускаем Apache и MySQL.

Запускаем node-echoprint-server.

	node index

Запускаем codegenerator_js.

	node server

возможно потребуется настройка в файле server.js в папке codegenerator_js