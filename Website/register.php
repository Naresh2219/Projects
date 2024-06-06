<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Register</h2>
    <form action="register.php" method="post">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" name="register">Register</button>
    </form>
</body>
</html>

<?php
if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Connect to MongoDB
    $mongoClient = new MongoDB\Client("mongodb://localhost:27017");
    $collection = $mongoClient->your_database->users;

    // Check if username or email already exists
    $existingUser = $collection->findOne(['$or' => [['username' => $username], ['email' => $email]]]);
    if ($existingUser) {
        echo "Username or email already exists";
    } else {
        // Insert user data into MongoDB collection
        $result = $collection->insertOne([
            'username' => $username,
            'email' => $email,
            'password' => $password,
        ]);

        if ($result->getInsertedCount() > 0) {
            echo "Registration successful";
        } else {
            echo "Error occurred during registration";
        }
    }
}
?>
