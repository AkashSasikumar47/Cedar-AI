<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "akashsasikumar47@gmail.com"; // Replace with your email address
    $subject = "👨🏻‍💻 New Contact Form Submission from $name";
    $headers = "From: $email";

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Message sent successfully. Thank you!";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
} else {
    echo "Invalid request.";
}
