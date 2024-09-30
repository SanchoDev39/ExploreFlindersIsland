<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'vendor/autoload.php'; // Include the Composer autoload file

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Include the configuration file
$config = include('config.php');

// Use configuration variables
$servername = $config['db_host'];
$username = $config['db_user'];
$password = $config['db_pass'];
$dbname = $config['db_name'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Validate inputs
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

if (empty($name) || empty($message)) {
    die("Name and message cannot be empty");
}


// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";

    // Send auto-response email using PHPMailer
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.allgoodmate.com'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'george@allgoodmate.com'; // SMTP username
        $mail->Password = $mailpass; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        //Recipients
        $mail->setFrom('no-reply@yourwebsite.com', 'Your Flinders Island Team');
        $mail->addAddress($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Thank you for your comment!';
        $mail->Body = "Hi $name,<br><br>Thank you for your comment!<br><br>Best regards,<br>Your Website Team";

        $mail->send();
        echo "<br>Auto-response email sent successfully.";
    } catch (Exception $e) {
        echo "<br>Failed to send auto-response email. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

    // After processing, redirect to the same page
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

?>
