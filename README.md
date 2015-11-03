# Project 'myMusic'

Сборка 0.15. Для запуска приложения необходим [Windows Server](http://www.microsoft.com/ru-ru/server-cloud/products/windows-server-2012-r2/ "Windows Server")

## Установка.

### Для работы необходимы:

* Node.js
* MySQL
* Apache или Nginx
* PHP

#### node-echoprint-server

В папке [ode-echoprint-server](https://github.com/ilyashishov/myMusic-server/tree/master/node-echoprint-server "ode-echoprint-server") установить все npm зависимости.

	npm install

Создать новую базу данных в MySQL и восстановить дамп(mysql.sql).

В файле config.js настроить подключение к бд.