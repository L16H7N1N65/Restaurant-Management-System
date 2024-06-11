//index.js


require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;

const employeesRoutes = require('./employeesRoutes');
const restaurantRoutes = require('./restaurantRoutes');

module.exports = {
  employeesRoutes,
  restaurantRoutes
};
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="/path/to/your/css/styles.css" rel="stylesheet">
</head>
<body class="bg-gray-200 text-gray-800">
    <header class="bg-blue-500 text-white p-4">
        <h1>Header</h1>
    </header>

    <main class="p-4">
        
    </main>

    <footer class="bg-blue-500 text-white p-4">
        <p>Footer</p>
    </footer>
</body>
</html>