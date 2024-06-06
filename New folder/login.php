<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Login</h2>
    <form action="login.php" method="post">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" name="login">Login</button>
    </form>
</body>
</html>

<?php
session_start();

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to MongoDB
    $mongoClient = new MongoDB\Client("mongodb://localhost:27017");
    $collection = $mongoClient->your_database->users;

    // Query MongoDB collection
    $user = $collection->findOne(['username' => $username]);

    if ($user) {
        // Verify password
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['_id']; // Assuming the user ID is stored in the '_id' field
            $_SESSION['username'] = $username;
            echo "Login successful";
        } else {
            echo "Invalid username or password";
        }
    } else {
        echo "Invalid username or password";
    }
}
?>
