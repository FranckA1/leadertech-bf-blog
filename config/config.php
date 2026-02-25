<?php
// config/config.php - Configuration de la base de données

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'leadertech_blog');

// Créer la connexion MySQL
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Définir le charset à utf8
$conn->set_charset("utf8");

?>