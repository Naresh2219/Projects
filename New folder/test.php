<?php
// MongoDB connection settings
$host = 'localhost'; // or the IP address of your MongoDB server
$port = '27017'; // the default port for MongoDB
$database = 'Heroa'; // the name of your MongoDB database

try {
    // Connect to MongoDB server
    $mongoClient = new MongoDB\Client("mongodb://$host:$port");

    // Select MongoDB database
    $mongoDB = $mongoClient->$database;

    echo 'Connected to MongoDB database successfully.';
} catch (Exception $e) {
    die('Connection failed: ' . $e->getMessage());
}
?>

