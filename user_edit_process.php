<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// フォームから送信されたデータを取得
$username = $_POST['username'];
$email = $_POST['email'];
$bio = $_POST['bio'];
$interests = $_POST['interests'];

// DB接続情報
$host = 'localhost';
$dbname = 'your_database_name';
$user = 'your_database_user';
$password = 'your_database_password';

try {
    // データベースに接続
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // ユーザー情報を更新
    $stmt = $pdo->prepare("UPDATE users SET username = :username, email = :email, bio = :bio, interests = :interests WHERE id = :id");
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':bio', $bio);
    $stmt->bindParam(':interests', $interests);
    $stmt->bindParam(':id', $_SESSION['user_id']);
    $stmt->execute();

    echo "ユーザー情報が更新されました！";
    // 必要に応じて、プロフィール画面やホーム画面へリダイレクトを追加
} catch (PDOException $e) {
    echo "エラー: " . $e->getMessage();
}
?>
